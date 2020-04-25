<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="searchTable" label-position="left" ref="searchTable" :rules="searchTableRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20" style="margin-top:20px;margin-bottom:-10px">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="作业日期" prop="workDate" placeholder="周报开始日期">
                <el-date-picker v-model="searchTable.workDate" :clearable="false" type="date" placeholder="选择日期时间" style="min-width:300px;margin-left:0px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目名称" prop="projectId" placeholder="项目名称">
                <el-select v-model="searchTable.projectId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in searchTable.options.projectIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="是否核准" prop="hasCheck" placeholder="是否核准">
                <el-select v-model="searchTable.hasCheck" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in searchTable.options.hasCheckOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="2" style="margin-left:20px;margin-bottom:20px">
            <div class="bar">
              <el-button type="primary" @click="searchWeeklyDayWorkCheck(1)">搜索</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <el-card class="box-card">
      <el-row :gutter="20" style="margin-top:20px;margin-bottom:-10px">
        <el-col :span="8">
          <div class="bar">
            <el-button type="primary" @click="updateWeeklyDayWorkCheck()">上报核对结果</el-button>
          </div>
        </el-col>

        <el-col :span="10">
          <div class="bar">
            <div id="title">
              <p id="tableTitle" style="min-width:1000px;font-size:24px;margin-left:80px;margin-bottom:20px">{{ tableTitle }}</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-table :data="tableData" border @selection-change="selectChange" :stripe="true" :highlight-current-row="true" style="width: 100%; margin-top: 20px" id="out-table">
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="120" prop="workDate" label="作业日期" align="center"></el-table-column>
        <el-table-column width="350" prop="projectName" label="项目名称" align="center"></el-table-column>
        <el-table-column width="120" prop="riskLevel" label="作业风险等级" align="center"></el-table-column>
        <el-table-column prop="workContent" label="作业安排、位置及内容" align="center"></el-table-column>
        <el-table-column width="100" prop="hasCheckStr" label="是否核准" align="center"></el-table-column>
        <el-table-column width="180" prop="checkExist" label="实际作业是否存在" align="center">
          <template slot-scope="scope">
            <el-radio-group v-model="scope.row.checkExist">
              <el-radio :label="true" style="width:40px">是</el-radio>
              <el-radio :label="false" style="width:40px">否</el-radio>
            </el-radio-group>
          </template>
        </el-table-column>
        <el-table-column width="140" label="核查方式" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.checkType" clearable placeholder="请选择" style="width:120px">
                  <el-option v-for="item in checkTypeOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
          </template>
        </el-table-column>
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
import * as addApi from "@/api/addApi.js";
import * as updateApi from "@/api/updateApi.js";
import * as searchApi from "@/api/searchApi.js";
export default {
  data() {
    return {
      //表格数据
      tableTitle: "",
      copyTableData: [],
      tableData: [],
      multiSelection: [],
      //搜索数据
      searchTable: {
        projectId: "",
        workDate: "",
        hasCheck: "",
        options: {
          projectIdOptions: [],
          hasCheckOptions: [
            {
              value: true,
              name: "是"
            },
            {
              value: false,
              name: "否"
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
    this.searchTable.workDate = new Date(api.changeDate(startDate));

    //获取项目列表
    getApi.getAllProjectName().then(response => {
      this.searchTable.options.projectIdOptions = response;
    });
    //获取核准方式
    getApi.getCheckTypeEnum().then(response => {
      this.checkTypeOptions = response;
    });
    this.searchWeeklyDayWorkCheck(1);
  },
  methods: {
    //上报核准结果
    updateWeeklyDayWorkCheck() {
      let list = [];
      console.log(this.copyTableData)
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].checkExist != this.copyTableData[i].checkExist || this.tableData[i].deviationReason != this.copyTableData[i].deviationReason ||
         this.tableData[i].checkType != this.copyTableData[i].checkType) {
          list.push({
            id: this.tableData[i].id,
            checkExist: this.tableData[i].checkExist,
            deviationReason:this.tableData[i].deviationReason,
            checkType:this.tableData[i].checkType
          })
        }
      }
      updateApi.updateWeeklyDayWorkCheck(list).then(response => {
        this.searchWeeklyDayWorkCheck(this.pagination.currentPage)
      })

    },
    //表格选中
    selectChange(val) {
      this.multiSelection = val;
    },
    //搜索
    searchWeeklyDayWorkCheck(pageNum) {
      let list = {
        numberOfPage: this.pagination.pageSize,
        pageNumber: pageNum - 1,
        projectId: this.searchTable.projectId === "" ? undefined : this.searchTable.projectId,
        hasCheck:this.searchTable.hasCheck === "" ? undefined : this.searchTable.hasCheck,
        workDate: this.searchTable.workDate === "" ? undefined : api.changeDate(this.searchTable.workDate)
      }
      searchApi.getWeeklyDayWorkCheckShowByCondition(list).then(response => {
        this.tableData = response.returnList[0];
        this.pagination.total = response.totalNumber;
        this.copyTableData = [];
        this.tableTitle = api.changeDate(this.searchTable.workDate) + "风险作业安排";
        this.tableData.forEach(ele => {
          if (ele.hasCheck) ele.hasCheckStr = "是";
          else ele.hasCheckStr = "否";
          this.copyTableData.push({
            id: ele.id,
            checkExist: ele.checkExist,
            deviationReason:ele.deviationReason
          })
        })

      })
    },
    //页码操控部分
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.searchWeeklyDayWorkCheck(1);
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val;
      this.searchWeeklyDayWorkCheck(val);
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
