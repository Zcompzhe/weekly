<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="searchTable" label-position="left" ref="searchTable" :rules="searchTableRule" label-width="140px" class="demo-ruleForm">
        <el-row :gutter="20" style="margin-top:20px;margin-bottom:-10px">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="作业日期" prop="weeklyStartTime" placeholder="周报开始日期">
                <!-- <el-date-picker v-model="searchTable.weeklyStartTime" type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:0px" @change="weeklyStartTimeChanged"></el-date-picker> -->
                <el-date-picker v-model="searchTable.weeklyStartTime" type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:0px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="~" prop="weeklyEndTime" placeholder="周报开始日期" label-width="5px">
                <el-date-picker v-model="searchTable.weeklyEndTime" type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:2px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8" >
            <div class="bar">
              <el-form-item label="所属部门" prop="adminDept" placeholder="项目名称">
                <el-select v-model="searchTable.adminDept" clearable placeholder="请选择" style="min-width:400px">
                  <el-option v-for="item in searchTable.options.adminDeptOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar" >
              <el-form-item label="项目名称" prop="projectId" placeholder="项目名称">
                <el-select v-model="searchTable.projectId" clearable placeholder="请选择" style="min-width:420px;margin-left:0px">
                  <el-option v-for="item in searchTable.options.projectIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="2" style="margin-left:220px;margin-bottom:20px">
            <div class="bar">
              <el-button type="primary" @click="searchWeekly(1)">搜索</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <el-card class="box-card">
      <el-table :data="tableData" max-height="400" border @selection-change="weeklyChange" :stripe="true" :highlight-current-row="true" style="width: 100%; margin-top: 20px" id="out-table">
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column prop="projectName" label="项目名称" align="center"></el-table-column>
        <el-table-column width="120" prop="adminDept" label="所属部门" align="center"></el-table-column>
        <el-table-column width="300" prop="workArrangement" label="作业安排" align="center"></el-table-column>
        <el-table-column width="250" prop="workTime" label="作业日期" align="center"></el-table-column>
        <el-table-column width="120" prop="riskLevel" label="风险等级" align="center"></el-table-column>
        <el-table-column width="120" prop="inherentRisk" label="固有风险" align="center"></el-table-column>
        <el-table-column width="100" label="操作" fixed="right" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="calculateDynamicRisk(scope.row)">计算动态风险</el-button>
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
import * as deleteApi from "@/api/deleteApi.js";
import * as searchApi from "@/api/searchApi.js";
export default {
  data() {
    return {
      //表格数据
      tableData: [],
      multiSelection: [],
      //搜索数据
      searchTable: {
        projectId: "",
        weeklyStartTime: "",
        weeklyEndTime: "",
        adminDept: "",
        options: {
          adminDeptOptions: [],
          projectIdOptions: [],
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
    let endDate = api.getThisWeekStartTwo(startDate);
    this.searchTable.weeklyStartTime = new Date(api.changeDate(startDate));
    this.searchTable.weeklyEndTime = new Date(endDate);
    this.searchWeekly(1);
    //获取项目列表
    getApi.getAllProjectName().then(response => {
      this.searchTable.options.projectIdOptions = response;
    });
    //获取所有所属部门
    getApi.getAllProjectAdminDeptEnum().then(response => {
      this.searchTable.options.adminDeptOptions = response;
    });
  },
  methods: {
    //计算动态风险跳转
    calculateDynamicRisk(row) {
      this.$router.push({
        name: "dynamicRisk",
        params: {
          backPath: "riskMana",
          row: row
        }
      })
    },
    //表格选中
    weeklyChange(val) {
      this.multiSelection = val;
    },
    //周报开始日期改变
    weeklyStartTimeChanged() {
      if (this.searchTable.weeklyStartTime == null) {
        this.searchTable.weeklyStartTime = "";
        this.searchTable.weeklyEndTime = "";
        return;
      }
      this.searchTable.weeklyEndTime = api.getThisWeekStart(
        this.searchTable.weeklyStartTime
      );
    },
    //搜索
    searchWeekly(pageNum) {
      let list = {
        numberOfPage: this.pagination.pageSize,
        pageNumber: pageNum - 1,
        projectId: this.searchTable.projectId === "" ? undefined : this.searchTable.projectId,
         adminDept: this.searchTable.adminDept === "" ? undefined : this.searchTable.adminDept,
        workStartTime: this.searchTable.weeklyStartTime === "" || this.searchTable.weeklyStartTime === null ? undefined : api.changeDate(this.searchTable.weeklyStartTime),
        workEndTime: this.searchTable.weeklyEndTime === "" || this.searchTable.weeklyEndTime === null ? undefined : api.changeDate(this.searchTable.weeklyEndTime)
      }
      searchApi.getWeeklyRiskContentDetailShowRespByCondition(list).then(response => {
        this.tableData = response.returnList[0];
        this.pagination.total = response.totalNumber;

      })
    },
    //页码操控部分
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.searchWeekly(1);
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val;
      this.searchWeekly(val);
    },
  }
};
</script>
<style lang="less">
.el-table .cell {
  white-space: pre-line;
}
</style>

<style lang="less" scoped>
.block {
  padding: 30px 0;
  text-align: center;
}
.box-card {
  width: 1400px;
  margin: 20px 50px;
  padding: 0 20px;
  .el-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
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
