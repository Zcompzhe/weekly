<template>
  <div class="body">
    <el-card class="box-card">
      <el-row :gutter="20">
          <el-col :span="2">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click="goback">返回</el-button>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="bar">
            <div id="title">
              <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:280px">{{ tableTitle }}</p>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-table :data="tableData"  border  :highlight-current-row="true" style="width: 100%; margin-top: 20px" id="out-table">
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="350" prop="name" label="项目名称" align="center"></el-table-column>
        <el-table-column width="210" prop="adminName" label="所属建管单位" align="center"></el-table-column>
        <el-table-column width="150" prop="constructDeptName" label="施工单位" align="center"></el-table-column>
        <el-table-column width="150" prop="adminDept" label="所属部门" align="center"></el-table-column>
        <el-table-column width="150" prop="districtName" label="所在区域" align="center"></el-table-column>
        <el-table-column width="320" prop="detailedAddress" label="详细地址" align="center"></el-table-column>
        <el-table-column width="80" prop="projectState" label="项目状态" align="center"></el-table-column>
        <el-table-column width="100" label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="detailWeekly(scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="详细信息" :visible.sync="detailPanelFlag" width="1400px" :modal="false">
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目名称</div>
              <el-input disabled v-model="projectDetail.name" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">所属建管单位</div>
              <el-input disabled v-model="projectDetail.adminName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">监理单位</div>
              <el-input disabled v-model="projectDetail.supervisionName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">施工单位</div>
              <el-input disabled v-model="projectDetail.constructDeptName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">所在区域</div>
              <el-input disabled v-model="projectDetail.districtName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">乡镇/街道</div>
              <el-input disabled v-model="projectDetail.street" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">详细地址</div>
              <el-input disabled v-model="projectDetail.detailedAddress" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
           <el-col :span="8">
           </el-col>


          </el-row>
          <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">定位经度</div>
              <el-input disabled v-model="projectDetail.longitude" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">定位纬度</div>
              <el-input disabled v-model="projectDetail.latitude" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">所属部门</div>
              <el-input disabled v-model="projectDetail.adminDept" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目状态</div>
              <el-input disabled v-model="projectDetail.projectState" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>

        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">电压等级</div>
              <el-input disabled v-model="projectDetail.voltageClass" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目性质</div>
              <el-input disabled v-model="projectDetail.projectProperty" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">工程类型</div>
              <el-input disabled v-model="projectDetail.engineeringType" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">作业类型</div>
              <el-input disabled v-model="projectDetail.assignmentType" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">施工单位类别</div>
              <el-input disabled v-model="projectDetail.constructionType" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目规模</div>
              <el-input disabled v-model="projectDetail.projectScale" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
      
          <el-col :span="8">
            <div class="bar">
              <div class="title">实际开工时间</div>
              <el-input disabled v-model="projectDetail.actualStartTime" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">计划竣工时间</div>
              <el-input disabled v-model="projectDetail.planCompletionTime" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">主业单位作业人数</div>
              <el-input disabled v-model="projectDetail.mainWorkerNum" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">外包单位作业人数</div>
              <el-input disabled v-model="projectDetail.outsourcingWorkerNum" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <div class="title">直属单位人数</div>
              <el-input disabled v-model="projectDetail.directWorkerNum" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">当前分包人员数</div>
              <el-input disabled v-model="projectDetail.currentSubcontractorNum" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          
          </el-row>
        <br>
        <hr><br>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目经理</div>
              <el-input disabled v-model="projectDetail.projectManagerName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">质量专责</div>
              <el-input disabled v-model="projectDetail.qualityStaffName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">安全专责</div>
              <el-input disabled v-model="projectDetail.safetyStaffName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">总监/总监代表</div>
              <el-input disabled v-model="projectDetail.chiefInspectorName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">专业监理</div>
              <el-input disabled v-model="projectDetail.professionalSupervisorName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">安全监理</div>
              <el-input disabled v-model="projectDetail.safetySupervisorName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
         <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">施工单位负责人</div>
              <el-input disabled v-model="projectDetail.constructionPrincipal" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">负责人联系方式</div>
              <el-input disabled v-model="projectDetail.constructionPrincipalNumber" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
         </el-row>
      </el-dialog>

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
      weeklyStartTime: "",
      weeklyEndTime: "",
      //查看详情弹窗数据及控制
      tableData: [],
      //查看详情弹窗控制
      detailPanelFlag: false,
      projectDetail: {
        // name: "",
        // adminName: "",
        // supervisionName: "",
        // constructDept: "",
        // districtName: "",
        // detailedAddress: "",
        // longitude: "",
        // latitude: "",
        // actualStartTime: "",
        // planCompletionTime: "",
        // projectScale: "",
        // currentWorkerNum: "",
        // currentSubcontractorNum: "",
        // adminDept: "",
        // projectManagerName: "",
        // safetyStaffName: "",
        // qualityStaffName: "",
        // chiefInspectorName: "",
        // safetySupervisorName: "",
        // professionalSupervisorName: "",
        // projectState: "",
      },
    };
  },

  created: function () {
    //空搜索获取信息
    let startDate = new Date();
    let endDate = api.getThisWeekStart(startDate);
    this.weeklyStartTime = new Date(api.changeDate(startDate));
    this.weeklyEndTime = new Date(endDate);

    this.tableTitle =

      api.changeDate(startDate) +
      "~" +
      endDate + "未上报周报的项目信息";

    searchApi.getCurrentWeekWithoutWeeklyProjectInfo().then(response => {
      this.tableData = response.returnList[0];
    })
  },
  methods: {
     //查看该条详情
    detailWeekly(row) {
      getApi.getProjectInfoDetailPageShowRespById(row.id).then(response => {
        this.detailPanelFlag = true;
        this.projectDetail = response[0];
      })
    },
    goback() {
      this.$router.push({
        name: "weeklyData"
      });
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
