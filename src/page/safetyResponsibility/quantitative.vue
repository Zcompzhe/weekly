<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="searchTable" label-position="left" ref="searchTable" :rules="searchTableRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20" style="margin-top:20px;margin-bottom:-10px">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="年份" prop="year" placeholder="周报开始日期">
                <el-date-picker v-model="searchTable.year" :clearable="false" type="year" placeholder="选择年" style="min-width:300px">
                </el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="季度" prop="quarter" placeholder="项目名称">
                <el-select v-model="searchTable.quarter" :clearable="false"  placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in searchTable.options.quarterOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
           <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目部角色" prop="responsiblePerson" placeholder="是否核准">
                <el-select v-model="searchTable.responsiblePerson" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in searchTable.options.responsiblePersonOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="所属部门" prop="adminDept" placeholder="是否核准">
                <el-select v-model="searchTable.adminDept" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in searchTable.options.adminDeptOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="排列方式" prop="arrayOrder" placeholder="是否核准">
                <el-select v-model="searchTable.arrayOrder" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in searchTable.options.arrayOrderOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="2" style="margin-left:20px;margin-bottom:20px">
            <div class="bar">
              <el-button type="primary" @click="searchAssessScore(1)">搜索</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <el-card class="box-card">
      <el-table :data="tableData" max-height="800" border style="width: 100%; margin-top: 20px">
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="200" prop="staffName" label="姓名" align="center"></el-table-column>
        <el-table-column width="120" prop="adminDept" label="所属部门" align="center"></el-table-column>
        <el-table-column width="350" prop="year" label="年份" align="center"></el-table-column>
        <el-table-column width="120" prop="quarter" label="季度" align="center"></el-table-column>
        <el-table-column prop="score" label="得分" align="center"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pagination.currentPage" :page-sizes="pagination.pageSizes" :page-size="pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total"></el-pagination>
      </div>
    </el-card>

  </div>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
import * as api from "@/api/date.js";
import * as getApi from "@/api/getApi.js";
import * as searchApi from "@/api/searchApi.js";
export default {
  data() {
    return {
      //表格数据
      copyTableData: [],
      tableData: [],
      multiSelection: [],
      //搜索数据
      searchTable: {
        year: "",
        quarter: "",
        adminDept:"",
        arrayOrder: "",
        responsiblePerson:"",
        options: {
          responsiblePersonOptions:[],
          quarterOptions: [
            {
              name: "第一季度"
            },
            {
              name: "第二季度"
            },
            {
              name: "第三季度"
            },
            {
              name: "第四季度"
            },
          ],
          arrayOrderOptions: [
            {
              name: "得分升序"
            },
            {
              name: "得分降序"
            }
          ]
        }
      },
      searchTableRule: {},
      //页码部分
      pagination: {
        currentPage: 1,
        pageSizes: [10, 25, 50, 100],
        pageSize: 10,
        total: 0
      },
    };
  },
  created: function () {
    let startDate = new Date();
    this.searchTable.year = new Date(api.changeDate(startDate));
    if(this.searchTable.year.getMonth()>=0 && this.searchTable.year.getMonth() <3) this.searchTable.quarter="第一季度";
    else if(this.searchTable.year.getMonth()>=3 && this.searchTable.year.getMonth() <6) this.searchTable.quarter="第二季度";
    else if(this.searchTable.year.getMonth()>=6 && this.searchTable.year.getMonth() <9) this.searchTable.quarter="第三季度";
    else if(this.searchTable.year.getMonth()>=9 && this.searchTable.year.getMonth() <12) this.searchTable.quarter="第四季度";

    //空搜索
    this.searchAssessScore(1);
    //获取所有所属部门
    getApi.getAllProjectAdminDeptEnum().then(response => {
      this.searchTable.options.adminDeptOptions = response;
    });
    //获得项目部角色
    getApi.getAllResponsiblePersonEnum().then(response => {
      this.searchTable.options.responsiblePersonOptions = response;
    });
  },
  methods: {
    //搜索
    searchAssessScore(pageNum) {
      let list = {
        numberOfPage: this.pagination.pageSize,
        pageNumber: pageNum - 1,
        quarter: this.searchTable.quarter === "" ? undefined : this.searchTable.quarter,
        adminDept: this.searchTable.adminDept === "" ? undefined : this.searchTable.adminDept,
        arrayOrder: this.searchTable.arrayOrder === "" ? undefined : this.searchTable.arrayOrder,
        responsiblePerson:this.searchTable.responsiblePerson === "" ? undefined : this.searchTable.responsiblePerson,
        year: parseInt(api.changeDate(this.searchTable.year).slice(0, 4))
      }
      searchApi.getAssessScoreShowRespByCondition(list).then(response => {
        this.tableData = response.returnList[0];
        this.pagination.total = response.totalNumber;
        this.pagination.currentPage = pageNum;
      })
    },
    //页码操控部分
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.searchAssessScore(1);
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val;
      this.searchAssessScore(val);
    },
  }
};
</script>




<style lang="less" scoped>
.block {
  padding: 30px 0;
  text-align: center;
}
.title {
  min-width: 100px;
}
.Mbutton {
  margin-left: 45%;
}
.Mtitle {
  align-content: center;
  margin-left: 45%;
  font-size: 2ch;
}
.box-card {
  width: 1500px;
  margin: 20px 50px;
  padding: 0 20px;
  .el-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    margin-bottom: -5px;
    .bar {
      display: flex;
      flex-direction: row;
      align-items: center;
      .title {
        font-size: 14px;

        min-width: 100px;
        text-align: center;
      }
      .el-input {
        width: 70%;
        min-width: 80px;
        margin-left: 20px;
      }
      .el-select {
        width: 70%;
        min-width: 80px;
        margin-left: 20px;
      }
    }
  }
}
</style>
