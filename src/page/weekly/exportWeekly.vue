<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="searchTable" label-position="left" ref="searchTable" :rules="searchTableRule" label-width="140px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="周报日期" prop="weeklyStartTime" placeholder="周报开始日期">
                <el-date-picker v-model="searchTable.weeklyStartTime" :clearable="false" type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:0px" @change="weeklyStartTimeChanged"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6" style="margin-left:-12px">
            <div class="bar">
              <el-form-item label="~" prop="weeklyEndTime" placeholder="周报开始日期" label-width="5px">
                <el-date-picker disabled v-model="searchTable.weeklyEndTime" type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:2px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8" style="margin-left:-32px">
            <div class="bar">
              <el-form-item label="所属建管单位" prop="adminId" placeholder="项目名称">
                <el-select v-model="searchTable.adminId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in searchTable.options.adminIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="所属部门" prop="adminDept" placeholder="项目名称">
                <el-select v-model="searchTable.adminDept" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in searchTable.options.adminDeptOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="bar">
              <el-form-item label="项目名称" prop="projectId" placeholder="项目名称">
                <el-select v-model="searchTable.projectId" clearable placeholder="请选择" style="min-width:422px;margin-left:0px">
                  <el-option v-for="item in searchTable.options.projectIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="是否有作业" prop="hasWorkNextWeek" placeholder="项目名称">
                <el-select v-model="searchTable.hasWorkNextWeek" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in searchTable.options.hasWorkNextWeekOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="存在三级及以上风险" prop="hasThreePlusRiskWork" placeholder="项目名称">
                <el-select v-model="searchTable.hasThreePlusRiskWork" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in searchTable.options.hasThreePlusRiskWorkOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-bottom:10px">
          <el-col :span="8">
            <div class="bar">
              <el-button type="primary" style="margin-right: 20px" @click="searchWeekly(1)">搜索</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-row :gutter="20" style="margin-left:460px">
        <el-transfer v-model="value" :data="data" :render-content="renderFunc()" target-order="push"></el-transfer>
      </el-row>
      <el-row :gutter="20" style="margin-bottom:10px">
        <el-col :span="3" style="margin-left:580px">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px">确认导出</el-button>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px">取消</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { POINT_CONVERSION_COMPRESSED } from "constants";
import * as api from "@/api/date.js";
import * as getApi from "@/api/getApi.js";
import * as addApi from "@/api/addApi.js";
import * as deleteApi from "@/api/deleteApi.js";
import * as searchApi from "@/api/searchApi.js";
export default {
  data() {
    return {

      //穿梭框数据
      data: [
        {
          key: 0,
          label: `项目名称`,
        },
        {
          key: 1,
          label: `建设管理单位`,
        },
        {
          key: 2,
          label: `监理单位`,
        },
        {
          key: 3,
          label: `施工单位`,
        },
        {
          key: 4,
          label: `所在区域`,
        },
        {
          key: 5,
          label: `详细地址`,
        },

        {
          key: 6,
          label: `定位经度`,
        },

        {
          key: 7,
          label: `定位纬度`,
        },
        {
          key: 8,
          label: `实际开工时间`,
        },
        {
          key: 9,
          label: `计划竣工时间`,
        },
        {
          key: 10,
          label: `项目规模`,
        },
        {
          key: 11,
          label: `一线作业人员数`,
        },
        {
          key: 12,
          label: `当前分包人员数`,
        },
        {
          key: 13,
          label: `项管部门`,
        },
        {
          key: 14,
          label: `实际状态`,
        },
        {
          key: 15,
          label: `管控内状态`,
        },
        {
          key: 16,
          label: `固有风险`,
        },
        {
          key: 17,
          label: `动态风险`,
        },
        {
          key: 18,
          label: `下周是否有作业`,
        },
        {
          key: 19,
          label: `是否有三级及以上风险`,
        },
        {
          key: 20,
          label: `当前总体施工进度`,
        },
        {
          key: 21,
          label: `下周主要施工作业内容`,
        },
        {
          key: 22,
          label: `三级及以上风险作业安排、位置及内容`,
        },
        {
          key: 23,
          label: `项目经理`,
        },
        {
          key: 24,
          label: `项目经理联系方式`,
        },
        {
          key: 25,
          label: `安全专职`,
        },
        {
          key: 26,
          label: `安全专职联系方式`,
        },
        {
          key: 27,
          label: `质量专职`,
        },
        {
          key: 28,
          label: `质量专职联系方式`,
        },
        {
          key: 29,
          label: `总监/总监代表`,
        },
        {
          key: 30,
          label: `总监/总监代表联系方式`,
        },
        {
          key: 31,
          label: `安全监理`,
        },
        {
          key: 32,
          label: `安全监理联系方式`,
        },
        {
          key: 33,
          label: `专业监理`,
        },
        {
          key: 34,
          label: `专业监理联系方式`,
        },

      ],
      value: [0, 1, 20, 21, 22, 13, 14, 15, 16, 17],
      //搜索条件数据
      searchTable: {
        weeklyStartTime: "",
        weeklyEndTime: "",
        projectId: "",
        options: {
          projectIdOptions: {},
          adminIdOptions: {},
          adminDeptOptions: {},
          hasWorkNextWeekOptions: [{
            value: true,
            name: "是"
          }, {
            value: false,
            name: "否"
          }],
          hasThreePlusRiskWorkOptions: [{
            value: true,
            name: "是"
          }, {
            value: false,
            name: "否"
          }],
        }
      },
      searchTableRule: {
        weeklyStartTime: [
          { required: true, message: "请选择周报开始时间", trigger: "change" }
        ],
      },
    };
  },

  created: function () {
    //空搜索获取信息
    let startDate = new Date();
    let endDate = api.getThisWeekStart(startDate);
    this.searchTable.weeklyStartTime = new Date(api.changeDate(startDate));
    this.searchTable.weeklyEndTime = new Date(endDate);
    //获取所属部门
    getApi.getAllProjectAdminDeptEnum().then(response => {
      this.searchTable.options.adminDeptOptions = response;
    });
    //获取项目列表
    getApi.getAllProjectName().then(response => {
      this.searchTable.options.projectIdOptions = response;
    });
    //获取建设管理单位
    getApi.getAllAdministrativeDeptName().then(response => {
      this.searchTable.options.adminIdOptions = response;
    });

  },
  methods: {
    renderFunc(h, option) {
      return (
          <span title={option.name}>{option.name}</span>);
    },
    //搜索
    searchWeekly(pageNum) {
      this.$refs["searchTable"].validate(valid => {
        if (valid) {
          let list = {
            numberOfPage: this.pagination.pageSize,
            pageNumber: pageNum - 1,
            adminDept: this.searchTable.adminDept === "" ? undefined : this.searchTable.adminDept,
            adminId: this.searchTable.adminId === "" ? undefined : this.searchTable.adminId,
            hasThreePlusRiskWork: this.searchTable.hasThreePlusRiskWork === "" ? undefined : this.searchTable.hasThreePlusRiskWork,
            hasWorkNextWeek: this.searchTable.hasWorkNextWeek === "" ? undefined : this.searchTable.hasWorkNextWeek,
            projectId: this.searchTable.projectId === "" ? undefined : this.searchTable.projectId,
            weeklyStartTime: this.searchTable.weeklyStartTime === "" ? undefined : api.changeDate(this.searchTable.weeklyStartTime)
          }
          searchApi.getProjectWeeklyByCondition(list).then(response => {
            this.weeklyInfo.tableData = response.returnList[0];
            //转换下周是否有三级以上风险
            this.weeklyInfo.tableData.forEach(element => {
              if (element.hasThreePlusRiskWork) element.hasThreePlusRiskWorkStr = "是";
              else element.hasThreePlusRiskWorkStr = "否";
            })
            this.pagination.total = response.totalNumber;

            //换算标题
            let startDate = this.searchTable.weeklyStartTime;
            let endDate = api.getThisWeekStart(startDate);

            this.tableTitle =
              "国网上海建设咨询公司" +
              new Date().getFullYear() +
              "年在建工程周报(" +
              api.changeDate(startDate) +
              "~" +
              endDate +
              ")";
          })
        }
      });
    },
    //周报开始日期改变，自动获取月份，周数，周次
    weeklyStartTimeChanged() {
      if (this.searchTable.weeklyStartTime == null) {
        this.searchTable.weeklyStartTime = "";
        this.searchTable.weeklyEndTime = "";
        this.searchTable.monthShowTime = "";
        this.searchTable.monthStartTime = "";
        return;
      }
      this.searchTable.weeklyEndTime = api.getThisWeekStart(
        this.searchTable.weeklyStartTime
      );
      this.searchTable.monthShowTime = api
        .changeDate(this.searchTable.weeklyStartTime)
        .substring(0, 7);
      this.searchTable.monthStartTime =
        api.changeDate(this.searchTable.weeklyStartTime).substring(0, 7) + "-01";
    },
  }
};
</script>
<style>
.el-transfer-panel {
  width: 310px;
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
