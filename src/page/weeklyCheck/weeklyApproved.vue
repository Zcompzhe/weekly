<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="searchTable" label-position="left" ref="searchTable" :rules="searchTableRule" label-width="140px" class="demo-ruleForm">
        <el-row :gutter="20" style="margin-top:20px;margin-bottom:-10px">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="周报日期" prop="weeklyStartTime" placeholder="周报开始日期">
                <el-date-picker v-model="searchTable.weeklyStartTime" type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:0px" @change="weeklyStartTimeChanged"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="~" prop="weeklyEndTime" placeholder="周报开始日期" label-width="5px">
                <el-date-picker v-model="searchTable.weeklyEndTime" disabled type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:2px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
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
            <div class="bar">
              <el-form-item label="项目名称" prop="projectId" placeholder="项目名称">
                <el-select v-model="searchTable.projectId" clearable placeholder="请选择" style="min-width:445px;margin-left:0px">
                  <el-option v-for="item in searchTable.options.projectIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="2" style="margin-left:240px;margin-bottom:20px">
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
        <el-table-column width="300" prop="projectName" label="项目名称" align="center"></el-table-column>
        <el-table-column width="200" prop="weeklyTime" label="周报日期" align="center"></el-table-column>
        <el-table-column width="120" prop="adminDept" label="所属部门" align="center"></el-table-column>
        <el-table-column width="350" prop="constructContentNextWeek" label="下周主要施工作业内容" align="left"></el-table-column>
        <el-table-column width="350" prop="threePlusRiskWorkContent" label="下周的三级及以上风险作业安排、位置及内容" align="left"></el-table-column>
        <el-table-column width="100" prop="totalWorkDayCount" label="总作业数" align="center"></el-table-column>
        <el-table-column width="150" prop="hasCheckDayCount" label="已核对作业数" align="center"></el-table-column>
        <el-table-column width="200" prop="accuracyValue" label="周报准确度" fixed="right" align="center">
          <template slot-scope="scope">
            <el-progress :text-inside="true" :stroke-width="24" :percentage="scope.row.accuracyValue*100" :status="getColor(scope.row.accuracyValue*100)"></el-progress>
          </template>
        </el-table-column>
        <el-table-column width="100" label="操作" fixed="right" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="detailWeekly(scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pagination.currentPage" :page-sizes="pagination.pageSizes" :page-size="pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total"></el-pagination>
      </div>
      <el-dialog title="详细信息" :visible.sync="detailPanelFlag" width="1500px" :modal="false">
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目名称</div>
              <el-input disabled v-model="weeklyDetail.projectName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">所属建管单位</div>
              <el-input disabled v-model="weeklyDetail.adminName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">监理单位</div>
              <el-input disabled v-model="weeklyDetail.supervisionName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">施工单位</div>
              <el-input disabled v-model="weeklyDetail.constructDept" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">所在区域</div>
              <el-input disabled v-model="weeklyDetail.districtName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">详细地址</div>
              <el-input disabled v-model="weeklyDetail.detailedAddress" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">定位经度</div>
              <el-input disabled v-model="weeklyDetail.longitude" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">定位纬度</div>
              <el-input disabled v-model="weeklyDetail.latitude" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">实际开工时间</div>
              <el-input disabled v-model="weeklyDetail.actualStartTime" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">计划竣工时间</div>
              <el-input disabled v-model="weeklyDetail.planCompletionTime" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目规模</div>
              <el-input disabled v-model="weeklyDetail.projectScale" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">一线作业人员数</div>
              <el-input disabled v-model="weeklyDetail.currentWorkerNum" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">当前分包人员数</div>
              <el-input disabled v-model="weeklyDetail.currentSubcontractorNum" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">所属部门</div>
              <el-input disabled v-model="weeklyDetail.adminDept" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">实际状态</div>
              <el-input disabled v-model="weeklyDetail.actualState" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">管控内状态</div>
              <el-input disabled v-model="weeklyDetail.controlledState" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">固有风险</div>
              <el-input disabled v-model="weeklyDetail.inherentRisk" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">动态风险</div>
              <el-input disabled v-model="weeklyDetail.dynamicRisk" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">下周是否有作业</div>
              <el-input disabled v-model="weeklyDetail.hasWorkNextWeekStr" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">是否有三级及以上风险</div>
              <el-input disabled v-model="weeklyDetail.hasThreePlusRiskWorkStr" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <br>
        <hr><br>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="12">
            <div class="bar">
              <div class="title">当前总体施工进度</div>
              <el-input disabled type="textarea" :rows="4" placeholder="暂无信息" v-model="weeklyDetail.workCurrentProgress" style="margin-left: 26px;width:600px"></el-input>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="bar">
              <div class="title">下周主要施工作业内容</div>
              <el-input disabled type="textarea" :rows="4" placeholder="暂无信息" v-model="weeklyDetail.constructContentNextWeek" style="margin-left: 26px;width:600px"></el-input>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="23">
            <div class="bar">
              <div class="title">三级及以上风险作业安排、位置及内容</div>
              <el-input disabled type="textarea" :rows="4" placeholder="暂无信息" v-model="weeklyDetail.threePlusRiskWorkContent" style="margin-left: 26px;width:1000px"></el-input>
            </div>
          </el-col>
        </el-row>

        <br>
        <hr><br>
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div class="title" style="margin-left:50%;font-size:18px">所属建管单位责任人信息</div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 20px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目经理</div>
              <el-input disabled v-model="weeklyDetail.projectManagerName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">安全专责</div>
              <el-input disabled v-model="weeklyDetail.safetyStaffName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">质量专责</div>
              <el-input disabled v-model="weeklyDetail.qualityStaffName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input disabled v-model="weeklyDetail.projectManagerTEL" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input disabled v-model="weeklyDetail.safetyStaffTEL" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input disabled v-model="weeklyDetail.qualityStaffTEL" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div class="title" style="margin-left:52%;font-size:18px">监理单位责任人信息</div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 20px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">总监/总监代表</div>
              <el-input disabled v-model="weeklyDetail.chiefInspectorName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">安全监理</div>
              <el-input disabled v-model="weeklyDetail.safetySupervisorName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">专业监理</div>
              <el-input disabled v-model="weeklyDetail.professionalSupervisorName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input disabled v-model="weeklyDetail.chiefInspectorTEL" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input disabled v-model="weeklyDetail.safetySupervisorTEL" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input disabled v-model="weeklyDetail.professionalSupervisorTEL" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
      </el-dialog>
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
      //查看详情弹窗数据及控制
      detailPanelFlag: false,
      weeklyDetail: {
      },
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
          projectIdOptions: [],
          adminDeptOptions: [],
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
    let endDate = api.getThisWeekStart(startDate);
    this.searchTable.weeklyStartTime = new Date(api.changeDate(startDate));
    this.searchTable.weeklyEndTime = new Date(endDate);

    //获取项目列表
    getApi.getAllProjectName().then(response => {
      this.searchTable.options.projectIdOptions = response;
    });
    //空搜索
    let list = {
      numberOfPage: this.pagination.pageSize,
      pageNumber: 0,
      weeklyStartTime: api.changeDate(this.searchTable.weeklyStartTime)
    }
    searchApi.getWeeklyAccuracyShowRespByCondition(list).then(response => {
      this.tableData = response.returnList[0];
      this.pagination.total = response.totalNumber;
    })
    //获取所有所属部门
    getApi.getAllProjectAdminDeptEnum().then(response => {
      this.searchTable.options.adminDeptOptions = response;
    });
  },
  methods: {
    //获取不同颜色进度条
    getColor(value) {
      if (value === 100) return "success";
      else if (value >= 75) return "success";
      else if (value >= 50) return "warning";
      else return "exception";
    },
    //查看详情
    detailWeekly(row) {
      getApi.getProjectWeeklyDetailById(row.weeklyId).then(response => {
        this.weeklyDetail = response[0];
        if (this.weeklyDetail.hasWorkNextWeek) this.weeklyDetail.hasWorkNextWeekStr = "是";
        else if (!this.weeklyDetail.hasWorkNextWeek) this.weeklyDetail.hasWorkNextWeekStr = "否";
        if (this.weeklyDetail.hasThreePlusRiskWork) this.weeklyDetail.hasThreePlusRiskWorkStr = "是";
        else if (!this.weeklyDetail.hasThreePlusRiskWork) this.weeklyDetail.hasThreePlusRiskWorkStr = "否";
        this.detailPanelFlag = true;
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
        weeklyStartTime: this.searchTable.weeklyStartTime === "" ? undefined : api.changeDate(this.searchTable.weeklyStartTime)
      }
      searchApi.getWeeklyAccuracyShowRespByCondition(list).then(response => {
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
