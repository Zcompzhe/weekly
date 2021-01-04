<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="searchTable" label-position="left" ref="searchTable" :rules="searchTableRule" label-width="140px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="周报日期" prop="weeklyStartTime" placeholder="周报开始日期">
                <el-date-picker v-model="searchTable.weeklyStartTime" type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:0px" @change="weeklyStartTimeChanged"></el-date-picker>
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
      </el-form>
    </el-card>
    <el-card class="box-card">
      <div class="transferDiv" style="margin-left:433px">
        <el-transfer style="text-align: left; display: inline-block;" v-model="value" :data="data" target-order="push" :titles="['可选项', '导出项'] "></el-transfer>
      </div>

      <el-row :gutter="20" style="margin-bottom:10px">
        <el-col :span="3" style="margin-left:580px">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click="exportData()">确认导出</el-button>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click="goback()">取消</el-button>
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
      exportArray: [],
      exportString: "",
      //穿梭框数据
      data: [
        {
          key: 0,
          label: `项目名称`,
        },
        {
          key: 1,
          label: `周报日期`,
        },
        {
          key: 2,
          label: `建设管理单位`,
        },
        {
          key: 3,
          label: `监理单位`,
        },
        {
          key: 4,
          label: `施工单位`,
        },
        {
          key: 5,
          label: `所在区域`,
        },
        {
          key: 6,
          label: `详细地址`,
        },

        {
          key: 7,
          label: `定位经度`,
        },

        {
          key: 8,
          label: `定位纬度`,
        },
        {
          key: 9,
          label: `实际开工时间`,
        },
        {
          key: 10,
          label: `计划竣工时间`,
        },
        {
          key: 11,
          label: `项目规模`,
        },
        {
          key: 12,
          label: `一线作业人员数`,
        },
        {
          key: 13,
          label: `当前分包人员数`,
        },
        {
          key: 14,
          label: `项管部门`,
        },
        {
          key: 15,
          label: `实际状态`,
        },
        {
          key: 16,
          label: `管控内状态`,
        },
        {
          key: 17,
          label: `固有风险`,
        },
        {
          key: 18,
          label: `动态风险`,
        },
        {
          key: 19,
          label: `下周是否有作业`,
        },
        {
          key: 20,
          label: `是否有三级及以上风险`,
        },
        {
          key: 21,
          label: `当前总体施工进度`,
        },
        {
          key: 22,
          label: `下周主要施工作业内容`,
        },
        {
          key: 23,
          label: `三级及以上风险作业安排、位置及内容`,
        },
        {
          key: 24,
          label: `项目经理`,
        },
        {
          key: 25,
          label: `项目经理联系方式`,
        },
        {
          key: 26,
          label: `安全专职`,
        },
        {
          key: 27,
          label: `安全专职联系方式`,
        },
        {
          key: 28,
          label: `质量专职`,
        },
        {
          key: 29,
          label: `质量专职联系方式`,
        },
        {
          key: 30,
          label: `总监/总监代表`,
        },
        {
          key: 31,
          label: `总监/总监代表联系方式`,
        },
        {
          key: 32,
          label: `安全监理`,
        },
        {
          key: 33,
          label: `安全监理联系方式`,
        },
        {
          key: 34,
          label: `专业监理`,
        },
        {
          key: 35,
          label: `专业监理联系方式`,
        },
        {
          key: 36,
          label: `是否E安全上线`,
        },

      ],
      value: [0, 1, 2, 21, 22, 23, 14, 15, 16, 17, 18],
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
          { required: false, message: "请选择周报开始时间", trigger: "change" }
        ],
      },
      // export flag
      flag:"exportProjectWeekly",
    };

  },

  created: function () {
    let data = this.$route.params;
    this.flag = data.flag;
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

    //导出
    exportData() {
      this.exportArray = [];
      this.exportString = "";
      this.value.forEach(ele => {
        this.exportArray.push(this.data[ele].label);
      })
      this.exportString = this.exportArray.join(",");
      let list = {
        columnNameList: this.exportString,
        adminDept: this.searchTable.adminDept === "" ? undefined : this.searchTable.adminDept,
        adminId: this.searchTable.adminId === "" ? undefined : this.searchTable.adminId,
        hasThreePlusRiskWork: this.searchTable.hasThreePlusRiskWork === "" ? undefined : this.searchTable.hasThreePlusRiskWork,
        hasWorkNextWeek: this.searchTable.hasWorkNextWeek === "" ? undefined : this.searchTable.hasWorkNextWeek,
        projectId: this.searchTable.projectId === "" ? undefined : this.searchTable.projectId,
        weeklyStartTime: this.searchTable.weeklyStartTime === "" || this.searchTable.weeklyStartTime === null ? undefined : api.changeDate(this.searchTable.weeklyStartTime)
      };

      if(this.flag == "exportProjectWeekly")
      {
        searchApi.exportProjectWeeklyAsExcel(list)
                .then(response => {
                  let content = response;
                  let blob = new Blob([content]);
                  let da = api.changeDate(new Date());
                  let fileName = "weekly-" + da + ".xlsx";
                  console.log(response);
                  if ("download" in document.createElement("a")) {
                    // 非IE下载
                    const elink = document.createElement("a");
                    elink.download = fileName;
                    elink.style.display = "none";
                    elink.href = URL.createObjectURL(blob);
                    document.body.appendChild(elink);
                    elink.click();
                    URL.revokeObjectURL(elink.href); // 释放URL 对象
                    document.body.removeChild(elink);
                  } else {
                    // IE10+下载
                    navigator.msSaveBlob(blob, fileName);
                  }
                })
      }else{
        searchApi.exportInspectionProjectWeeklyAsExcel(list)
                .then(response => {
                  let content = response;
                  let blob = new Blob([content]);
                  let da = api.changeDate(new Date());
                  let fileName = "weekly-" + da + ".xlsx";
                  console.log(response);
                  if ("download" in document.createElement("a")) {
                    // 非IE下载
                    const elink = document.createElement("a");
                    elink.download = fileName;
                    elink.style.display = "none";
                    elink.href = URL.createObjectURL(blob);
                    document.body.appendChild(elink);
                    elink.click();
                    URL.revokeObjectURL(elink.href); // 释放URL 对象
                    document.body.removeChild(elink);
                  } else {
                    // IE10+下载
                    navigator.msSaveBlob(blob, fileName);
                  }
                })
      }
      
    },

    //周报开始日期改变，自动获取月份，周数，周次
    weeklyStartTimeChanged() {
      if (this.searchTable.weeklyStartTime == null || this.searchTable.weeklyStartTime == "") {
        this.searchTable.weeklyStartTime = "";
        this.searchTable.weeklyEndTime = "";
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
    goback() {
      this.$router.push({
        name: "weeklyData"
      })
    }
  }
};
</script>


<style>
.el-transfer-panel {
  width: 240px;
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
