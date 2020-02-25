<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="updateFormOne" label-position="left" ref="updateFormOne" :rules="updateFormOneRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="周报开始日期" prop="weeklyStartTime" placeholder="周报开始日期">
                <el-date-picker v-model="updateFormOne.weeklyStartTime" type="date" placeholder="选择日期时间" style="min-width:200px" @change="weeklyStartTimeChanged"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8" style="margin-left:-130px">
            <div class="bar">
              <el-form-item label="~" prop="weeklyEndTime" placeholder="周报开始日期" label-width="5px">
                <el-date-picker disabled v-model="updateFormOne.weeklyEndTime" type="date" placeholder="选择日期时间" style="min-width:200px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="当前月份" prop="monthShowTime" placeholder="当前月份">
                <el-input disabled v-model="updateFormOne.monthShowTime" clearable :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-form :model="updateFormTwo" ref="updateFormTwo" label-position="left" :rules="updateFormTwoRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目名称" prop="projectIdName" placeholder="项目名称">
                <el-select disabled v-model="updateFormTwo.projectIdName" clearable placeholder="请选择" style="min-width:200px" @change="projectChanged">
                  <el-option v-for="item in updateFormTwo.options.idOptions" :key="item.id" :label="item.name" :value="[item.id,item.name]"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="建设管理单位" prop="adminId" placeholder="当前月份">
                <el-select disabled v-model="updateFormTwo.adminId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormTwo.options.adminIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="监理单位" prop="supervisionId" placeholder="周报开始日期">
                <el-select disabled v-model="updateFormTwo.supervisionId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormTwo.options.supervisionIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="施工单位" prop="constructDeptId" placeholder="周报开始日期">
                <el-select disabled v-model="updateFormTwo.constructDeptId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormTwo.options.constructDeptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="所在区域" prop="districtId" placeholder="项目名称">
                <el-select disabled v-model="updateFormTwo.districtId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormTwo.options.districtIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="详细地址" prop="detailedAddress" placeholder="当前月份">
                <el-input v-model="updateFormTwo.detailedAddress" clearable :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="定位经度" prop="longitude" placeholder="周报开始日期">
                <el-input v-model="updateFormTwo.longitude" clearable :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="定位纬度" prop="latitude" placeholder="周报开始日期">
                <el-input v-model="updateFormTwo.latitude" clearable :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="实际开工时间" prop="actualStartTime" placeholder="项目名称">
                <el-date-picker v-model="updateFormTwo.actualStartTime" type="date" placeholder="选择日期时间" style="min-width:200px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="计划竣工时间" prop="planCompletionTime" placeholder="当前月份">
                <el-date-picker v-model="updateFormTwo.planCompletionTime" type="date" placeholder="选择日期时间" style="min-width:200px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目规模" prop="projectScale" placeholder="周报开始日期">
                <el-input v-model="updateFormTwo.projectScale" clearable :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="一线作业人数" prop="currentWorkerNum" placeholder="周报开始日期">
                <el-input v-model="updateFormTwo.currentWorkerNum" clearable :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="当前分包人数" prop="currentSubcontractorNum" placeholder="项目名称">
                <el-input v-model="updateFormTwo.currentSubcontractorNum" clearable :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项管部门" prop="adminDept" placeholder="当前月份">
                <el-select v-model="updateFormTwo.adminDept" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormTwo.options.adminDeptOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8"></el-col>
          <el-col :span="8"></el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-form :model="updateFormThree" ref="updateFormThree" label-position="left" :rules="updateFormThreeRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目经理" prop="projectManagerId" placeholder="项目名称">
                <el-select v-model="updateFormThree.projectManagerId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormThree.options.projectManagerIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="安全专责" prop="safetyStaffId" placeholder="当前月份">
                <el-select v-model="updateFormThree.safetyStaffId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormThree.options.safetyStaffIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="质量专责" prop="qualityStaffId" placeholder="周报开始日期">
                <el-select v-model="updateFormThree.qualityStaffId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormThree.options.qualityStaffIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="总监/总监代表" prop="chiefInspectorId" placeholder="项目名称">
                <el-select v-model="updateFormThree.chiefInspectorId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormThree.options.chiefInspectorIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="安全监理" prop="safetySupervisorId" placeholder="当前月份">
                <el-select v-model="updateFormThree.safetySupervisorId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormThree.options
                      .safetySupervisorIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="专业监理" prop="professionalSupervisorId" placeholder="周报开始日期">
                <el-select v-model="updateFormThree.professionalSupervisorId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormThree.options
                      .professionalSupervisorIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-button type="primary" style="margin-right: 20px" @click="addOneLineWeeklyWorkProgressAddReqs">添加条目</el-button>
      <el-button type="primary" style="margin-right: 20px" @click="deleteLinesWeeklyWorkProgressAddReqs">删除条目</el-button>
      <br />
      <br />
      <el-table :data="updateFormFour.weeklyWorkProgressAddReqs" @selection-change="selectWeeklyWorkProgressAddReqs" border>
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="400" prop="jobNumberShow" label="工程编号" align="center">
          <template slot-scope="scope">
            <el-cascader v-model="scope.row.jobNumberShow" :options="updateFormFour.options.jobNumberOptions" @change="jobNumberChanged(scope.index, scope.row)" :props="optionPropsA" style="min-width:300px"></el-cascader>
          </template>
        </el-table-column>
        <el-table-column label="当前总体施工进度" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.currentProgress" clearable :rows="1" placeholder="请选择"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="box-card">
      <el-checkbox v-model="updateFormFour.hasWorkNextWeek" style="margin-left:20px">下周是否有作业</el-checkbox>
      <el-button type="primary" style="margin-left:50px;margin-right: 20px" @click="addOneLineWeeklyConstructContentAddReqs" :disabled="!updateFormFour.hasWorkNextWeek">添加条目</el-button>
      <el-button type="primary" style="margin-right: 20px" @click="deleteLinesWeeklyConstructContentAddReqs">删除条目</el-button>
      <br />
      <br />
      <el-table :data="updateFormFour.weeklyConstructContentAddReqs" @selection-change="selectWeeklyConstructContentAddReqs" border>
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="400" prop="jobNumberShow" label="工程编号" align="center">
          <template slot-scope="scope">
            <el-cascader v-model="scope.row.jobNumberShow" :options="updateFormFour.options.jobNumberOptions" :props="optionPropsA" @change="jobNumberChanged(scope.index,scope.row)" style="min-width:300px"></el-cascader>
          </template>
        </el-table-column>
        <el-table-column label="下周主要施工内容" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.constructContent" clearable :rows="1" placeholder="请选择"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="box-card">
      <el-checkbox v-model="updateFormFour.hasThreePlusRiskWork" style="margin-left:20px">是否有三级以上风险</el-checkbox>
      <el-button type="primary" style="margin-left:50px;margin-right: 20px" @click="addOneLineWeeklyRiskContentAddReqs">添加条目</el-button>
      <el-button type="primary" style="margin-right: 20px" @click="deleteLinesWeeklyRiskContentAddReqs">删除条目</el-button>
      <br />
      <br />
      <el-table :data="updateFormFour.weeklyRiskContentAddReqs" @selection-change="selectWeeklyRiskContentAddReqs" border>
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="400" prop="workProcessShow" label="工序" align="center">
          <template slot-scope="scope">
            <el-cascader v-model="scope.row.workProcessShow" :props="optionPropsB" :options="updateFormFour.options.workProcessOptions" @change="workProcessChanged(scope.index, scope.row)" style="min-width:350px"></el-cascader>
          </template>
        </el-table-column>
        <el-table-column prop="riskLevel" label="风险等级" width="100px" align="center"></el-table-column>
        <el-table-column prop="workContent" label="下周作业安排、位置及内容" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.workContent" clearable :rows="1" placeholder="请选择"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="workStartTime" width="180px" label="作业开始时间" align="center">
          <template slot-scope="scope">
            <el-date-picker v-model="scope.row.workStartTime" type="date" placeholder="选择日期时间" @change="dateChangeToSecondA(scope.row)" style="width:150px"></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column prop="workEndTime" width="180px" label="作业结束时间" align="center">
          <template slot-scope="scope">
            <el-date-picker v-model="scope.row.workEndTime" type="date" placeholder="选择日期时间" @change="dateChangeToSecondB(scope.row)" style="width:150px"></el-date-picker>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="box-card">
      <el-form :model="updateFormFive" ref="updateFormFive" label-position="left" :rules="updateFormFiveRule" label-width="100px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="实际状态" prop="actualState" placeholder="当前月份">
                <el-select v-model="updateFormFive.actualState" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormFive.options.actualStateOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="管控内状态" prop="controlledState" placeholder="周报开始日期">
                <el-select v-model="updateFormFive.controlledState" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormFive.options.controlledStateOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>

      <div style="margin-left:30%;margin-top:30px;margin-bottom:10px">
        <el-button type="primary" style="margin-right: 80px" @click="saveAllInfo">信息保存</el-button>
        <el-button type="primary" style="margin-right: 80px" @click="submitProjectWeeklyInfo">信息上报</el-button>
        <el-button type="primary" style="margin-right: 80px" @click="cancelAllInfo">取消</el-button>
      </div>
    </el-card>
    <br />
  </div>
</template>

<script>
import { POINT_CONVERSION_COMPRESSED } from "constants";
import * as api from "@/api/date.js";
import * as getApi from "@/api/getApi.js";
import * as updateApi from "@/api/updateApi.js";
export default {
  data() {
    return {
      //跳转参数
      backPath: "",
      id: "",
      //三个对比的list
      weeklyWorkProgress: [],
      weeklyConstructContent: [],
      weeklyRiskContent: [],
      deleteweeklyWorkProgressAddReqs: [],
      deleteweeklyConstructContentAddReqs: [],
      deleteweeklyRiskContentAddReqs: [],
      //项目修改标志
      projectUpdateFlag: false,
      beforeProjectInfo: {},
      //节点映射
      optionPropsA: {
        value: "value",
        label: "value",
        children: "children"
      },
      optionPropsB: {
        value: "value",
        label: "label",
        children: "children"
      },
      //遍历FLAG
      findFlag: false,

      //添加周报
      updateFormOne: {
        weeklyStartTime: "",
        weeklyEndTime: "",
        monthShowTime: "",
        monthStartTime: ""
      },
      updateFormOneRule: {
        weeklyStartTime: [
          { required: true, message: "请选择周报开始时间", trigger: "change" }
        ],
        monthShowTime: [
          { required: true, message: "请选择周报开始时间", trigger: "change" }
        ],
      },
      //添加周报——项目信息
      updateFormTwo: {
        id: "",
        name: "",
        projectIdName: "",
        adminId: "",
        supervisionId: "",
        constructDeptId: "",
        districtId: "",
        detailedAddress: "",
        latitude: "",
        longitude: "",
        actualStartTime: "",
        planCompletionTime: "",
        projectScale: "",
        currentWorkerNum: "",
        currentSubcontractorNum: "",
        adminDept: "",

        options: {
          idOptions: {},
          adminIdOptions: {},
          supervisionIdOptions: {},
          constructDeptIdOptions: {},
          districtIdOptions: {},
          adminDeptOptions: {}
        }
      },
      updateFormTwoRule: {
        projectIdName: [
          { required: true, message: "请选择项目名称", trigger: "change" }
        ],
        adminDept: [
          { required: true, message: "请选择项管部门", trigger: "change" }
        ],
        adminId: [
          { required: true, message: "请选择建设管理单位", trigger: "change" }
        ],
        constructDeptId: [
          { required: true, message: "请输入施工单位", trigger: "change" }
        ],
        detailedAddress: [
          { required: true, message: "请输入详细地址", trigger: "change" }
        ],
        districtId: [
          { required: true, message: "请选择区域", trigger: "change" }
        ],
        latitude: [
          { required: true, message: "请输入纬度", trigger: "change" }
        ],
        longitude: [
          { required: true, message: "请输入经度", trigger: "change" }
        ],
        supervisionId: [
          { required: true, message: "请选择监理单位", trigger: "change" }
        ],
        actualStartTime: [
          { required: false, message: "请输入实际开工时间", trigger: "change" }
        ],
        currentSubcontractorNum: [
          { required: false, message: "请输入当前分包人数", trigger: "change" }
        ],
        currentWorkerNum: [
          { required: false, message: "请输入当前施工单位一线自有作业人员数", trigger: "change" }
        ],
        planCompletionTime: [
          { required: false, message: "请输入计划竣工时间", trigger: "change" }
        ],
        projectScale: [
          { required: false, message: "请输入项目规模", trigger: "change" }
        ],
      },
      //添加周报——项目人员信息
      updateFormThree: {
        projectManagerId: "",
        safetyStaffId: "",
        qualityStaffId: "",
        chiefInspectorId: "",
        safetySupervisorId: "",
        professionalSupervisorId: "",

        options: {
          projectManagerIdOptions: {},
          safetyStaffIdOptions: {},
          qualityStaffIdOptions: {},
          chiefInspectorIdOptions: {},
          safetySupervisorIdOptions: {},
          professionalSupervisorIdOptions: {}
        }
      },
      updateFormThreeRule: {
        professionalSupervisorId: [
          { required: true, message: "请选择专业监理", trigger: "change" }
        ],
        chiefInspectorId: [
          { required: true, message: "请选择总监/总监代表", trigger: "change" }
        ],
        projectManagerId: [
          { required: true, message: "请选择项目经理", trigger: "change" }
        ],
        qualityStaffId: [
          { required: true, message: "请选择质量专责", trigger: "change" }
        ],
        safetySupervisorId: [
          { required: true, message: "请选择安全监理", trigger: "change" }
        ],
        safetyStaffId: [
          { required: true, message: "请选择安全专责", trigger: "change" }
        ],
      },
      //添加周报——工程表格信息
      updateFormFour: {
        //当前施工进度
        multiSelectionA: [],
        weeklyWorkProgressAddReqs: [],
        //下周是否有作业
        hasWorkNextWeek: false,
        //下周主要施工内容
        multiSelectionB: [],
        weeklyConstructContentAddReqs: [],
        //是否有三级以上风险
        hasThreePlusRiskWork: false,
        //风险作业内容
        multiSelectionC: [],
        weeklyRiskContentAddReqs: [],
        options: {
          workProcessOptions: [],
          jobNumberOptions: []
        }
      },
      //状态值
      updateFormFive: {
        actualState: "",
        controlledState: "",
        options: {
          actualStateOptions: {},
          controlledStateOptions: {}
        }
      },
      updateFormFiveRule: {
        actualState: [
          { required: true, message: "请选择实际状态", trigger: "change" }
        ],
        controlledState: [
          { required: true, message: "请选择管控内状态", trigger: "change" }
        ],
      }
    };
  },

  created: function () {
    //其他页面跳转的数据
    let data = this.$route.params;
    this.backPath = data.backPath;
    this.id = data.id;
    //填写所有信息
    getApi.getProjectWeeklyInfoShowRespById(this.id).then(response => {
      let res = response[0];
      this.updateFormOne.weeklyStartTime = new Date(res.projectWeeklyShowResp.weeklyStartTime);
      this.weeklyStartTimeChanged();
      this.updateFormTwo.projectIdName = res.projectWeeklyShowResp.projectName;
      this.updateFormTwo.id = res.projectWeeklyShowResp.projectId;
      this.updateFormTwo.name = res.projectWeeklyShowResp.projectName;
      this.updateFormTwo.adminId = res.projectWeeklyShowResp.adminId;
      this.updateFormTwo.supervisionId = res.projectWeeklyShowResp.supervisionId;
      this.updateFormTwo.constructDeptId = res.projectWeeklyShowResp.constructDeptId;
      this.updateFormTwo.districtId = res.projectWeeklyShowResp.districtId;
      this.updateFormTwo.detailedAddress = res.projectWeeklyShowResp.detailedAddress;
      this.updateFormTwo.longitude = res.projectWeeklyShowResp.longitude;
      this.updateFormTwo.latitude = res.projectWeeklyShowResp.latitude;
      this.updateFormTwo.actualStartTime = new Date(res.projectWeeklyShowResp.actualStartTime);
      this.updateFormTwo.planCompletionTime = new Date(res.projectWeeklyShowResp.planCompletionTime);
      this.updateFormTwo.projectScale = res.projectWeeklyShowResp.projectScale;
      this.updateFormTwo.currentWorkerNum = res.projectWeeklyShowResp.currentWorkerNum;
      this.updateFormTwo.currentSubcontractorNum = res.projectWeeklyShowResp.currentSubcontractorNum;
      this.updateFormTwo.adminDept = res.projectWeeklyShowResp.adminDept;
      this.updateFormFive.actualState = res.projectWeeklyShowResp.actualState;
      this.updateFormFive.controlledState = res.projectWeeklyShowResp.controlledState;


      //人员
      this.updateFormThree.projectManagerId = res.projectWeeklyShowResp.projectManagerId;
      this.updateFormThree.safetyStaffId = res.projectWeeklyShowResp.safetyStaffId;
      this.updateFormThree.qualityStaffId = res.projectWeeklyShowResp.qualityStaffId;
      this.updateFormThree.chiefInspectorId = res.projectWeeklyShowResp.chiefInspectorId;
      this.updateFormThree.safetySupervisorId = res.projectWeeklyShowResp.safetySupervisorId;
      this.updateFormThree.professionalSupervisorId = res.projectWeeklyShowResp.professionalSupervisorId;

      this.updateFormFour.hasWorkNextWeek = res.projectWeeklyShowResp.hasWorkNextWeek;
      this.updateFormFour.hasThreePlusRiskWork = res.projectWeeklyShowResp.hasThreePlusRiskWork;

      //表格
      this.updateFormFour.weeklyWorkProgressAddReqs = res.weeklyWorkProgressShowResps;
      this.updateFormFour.weeklyConstructContentAddReqs = res.weeklyConstructContentShowResps;
      this.updateFormFour.weeklyRiskContentAddReqs = res.weeklyRiskContentShowResps;



      this.updateFormFour.weeklyWorkProgressAddReqs.forEach(ele => {
        // ele.jobNumberTotalList = ele.jobNumberTotalList.substr(0, ele.jobNumberTotalList.length - 1);
        // ele.jobNumberTotalList = ele.jobNumberTotalList.substr(1, ele.jobNumberTotalList.length - 1);
        ele.jobNumberShow = ele.jobNumberTotalList.split(",");
        ele.jobNumberTotalList = "[" + ele.jobNumberTotalList + "]";
        this.weeklyWorkProgress.push({
          currentProgress: ele.currentProgress,
          id: ele.id,
          jobNumberTotalList: ele.jobNumberTotalList
        })
      })
      this.updateFormFour.weeklyConstructContentAddReqs.forEach(ele => {
        // ele.jobNumberTotalList = ele.jobNumberTotalList.substr(0, ele.jobNumberTotalList.length - 1);
        // ele.jobNumberTotalList = ele.jobNumberTotalList.substr(1, ele.jobNumberTotalList.length - 1);
        ele.jobNumberShow = ele.jobNumberTotalList.split(",");
        ele.jobNumberTotalList = "[" + ele.jobNumberTotalList + "]";
        this.weeklyConstructContent.push({
          constructContent: ele.constructContent,
          id: ele.id,
          jobNumberTotalList: ele.jobNumberTotalList
        })
      })
      this.updateFormFour.weeklyRiskContentAddReqs.forEach(ele => {
        // ele.workProcessTotalList = ele.workProcessTotalList.substr(0, ele.workProcessTotalList.length - 1);
        // ele.workProcessTotalList = ele.workProcessTotalList.substr(1, ele.workProcessTotalList.length - 1);
        ele.workProcessShow = ele.workProcessTotalList.split(",");
        ele.workProcessTotalList = "[" + ele.workProcessTotalList + "]";
        this.weeklyRiskContent.push({
          workStartTime: ele.workStartTime,
          workEndTime: ele.workEndTime,
          workContent: ele.workContent,
          id: ele.id,
          workProcessTotalList: ele.workProcessTotalList
        })

      })
      console.log(this.updateFormFour)
    });
    //获取所有项目名称
    getApi.getAllProjectName().then(response => {
      this.updateFormTwo.options.idOptions = response;
    });
    //获取所有建设管理单位
    getApi.getAllAdministrativeDeptName().then(response => {
      this.updateFormTwo.options.adminIdOptions = response;
    });
    //获取所有监理单位
    getApi.getAllSupervisionDeptName().then(response => {
      this.updateFormTwo.options.supervisionIdOptions = response;
    });
    //获取区域
    getApi.getAllDistrictName().then(response => {
      this.updateFormTwo.options.districtIdOptions = response;
    });
    //获取所有项管部门
    getApi.getAllProjectAdminDeptEnum().then(response => {
      this.updateFormTwo.options.adminDeptOptions = response;
    });
    //获取管控内状态
    getApi.getAllProjectControlledStateEnum().then(response => {
      this.updateFormFive.options.controlledStateOptions = response;
    });
    //获取施工单位
    getApi.getAllConstructDeptName().then(response => {
      this.updateFormTwo.options.constructDeptIdOptions = response;
    });
    //获取所有实际状态
    getApi.getAllProjectActualStateEnum().then(response => {
      this.updateFormFive.options.actualStateOptions = response;
    });
    //获取所有人员信息
    getApi.getAllStaffName().then(response => {
      this.updateFormThree.options.projectManagerIdOptions = response;
      this.updateFormThree.options.safetyStaffIdOptions = response;
      this.updateFormThree.options.qualityStaffIdOptions = response;
      this.updateFormThree.options.chiefInspectorIdOptions = response;
      this.updateFormThree.options.safetySupervisorIdOptions = response;
      this.updateFormThree.options.professionalSupervisorIdOptions = response;
    });
    //获取工程编号
    this.updateFormFour.options.jobNumberOptions = getApi.getJobNumber();
    //获取工序
    this.updateFormFour.options.workProcessOptions = getApi.getWorkProcess();
  },
  methods: {
    //判断是否修改过项目信息
    projectInfoUpdate() {
      var data = this.beforeProjectInfo;
      this.projectUpdateFlag = false;
      if (this.updateFormTwo.adminId != data.adminId) this.projectUpdateFlag = true;
      if (this.updateFormTwo.supervisionId != data.supervisionId) this.projectUpdateFlag = true;
      if (this.updateFormTwo.constructDeptId != data.constructDeptId) this.projectUpdateFlag = true;
      if (this.updateFormTwo.districtId != data.districtId) this.projectUpdateFlag = true;
      if (this.updateFormTwo.detailedAddress != data.detailedAddress)
        this.projectUpdateFlag = true;
      if (this.updateFormTwo.latitude != data.latitude) this.projectUpdateFlag = true;
      if (this.updateFormTwo.longitude != data.longitude) this.projectUpdateFlag = true;
      if (this.updateFormTwo.projectScale != data.projectScale) this.projectUpdateFlag = true;
      if (this.updateFormTwo.currentWorkerNum != data.currentWorkerNum)
        this.projectUpdateFlag = true;
      if (
        this.updateFormTwo.currentSubcontractorNum !=
        data.currentSubcontractorNum
      )
        this.projectUpdateFlag = true;
      if (this.updateFormThree.projectManagerId != data.projectManagerId)
        this.projectUpdateFlag = true;
      if (this.updateFormThree.safetyStaffId != data.safetyStaffId)
        this.projectUpdateFlag = true;
      if (this.updateFormThree.qualityStaffId != data.qualityStaffId)
        this.projectUpdateFlag = true;
      if (this.updateFormThree.chiefInspectorId != data.chiefInspectorId)
        this.projectUpdateFlag = true;
      if (this.updateFormThree.safetySupervisorId != data.safetySupervisorId)
        this.projectUpdateFlag = true;
      if (
        this.updateFormThree.professionalSupervisorId !=
        data.professionalSupervisorId
      )
        this.projectUpdateFlag = true;
      if (this.updateFormTwo.adminDept != data.adminDept) this.projectUpdateFlag = true;
      if (
        api.changeDate(this.updateFormTwo.actualStartTime) !=
        api.changeDate(new Date(data.actualStartTime))
      )
        this.projectUpdateFlag = true;
      if (
        api.changeDate(this.updateFormTwo.planCompletionTime) !=
        api.changeDate(new Date(data.planCompletionTime))
      )
        this.projectUpdateFlag = true;
    },
    //项目名称改变或选择时，自动填写后续内容
    projectChanged() {
      if (this.updateFormTwo.projectIdName === "") {
        this.beforeProjectInfo = {};
        this.updateFormTwo.id = "";
        this.updateFormTwo.name = "";
      }
      else {
        this.updateFormTwo.id = this.updateFormTwo.projectIdName[0];
        this.updateFormTwo.name = this.updateFormTwo.projectIdName[1];
      }
      if (this.updateFormTwo.id === "") {
        this.updateFormTwo.adminId = "";
        this.updateFormTwo.supervisionId = "";
        this.updateFormTwo.constructDeptId = "";
        this.updateFormTwo.districtId = "";
        this.updateFormTwo.detailedAddress = "";
        this.updateFormTwo.latitude = "";
        this.updateFormTwo.longitude = "";
        this.updateFormTwo.projectScale = "";
        this.updateFormTwo.currentWorkerNum = "";
        this.updateFormTwo.currentSubcontractorNum = "";
        this.updateFormTwo.adminDept = "";
        this.updateFormTwo.actualStartTime = "";
        this.updateFormTwo.planCompletionTime = "";

        this.updateFormThree.projectManagerId = "";
        this.updateFormThree.safetyStaffId = "";
        this.updateFormThree.qualityStaffId = "";
        this.updateFormThree.chiefInspectorId = "";
        this.updateFormThree.safetySupervisorId = "";
        this.updateFormThree.professionalSupervisorId = "";

        return;
      } else {
        getApi
          .getProjectInfoDetailPageShowRespById(this.updateFormTwo.id)
          .then(response => {
            let data = response[0];
            this.beforeProjectInfo = data;
            this.updateFormTwo.adminId = data.adminId;
            this.updateFormTwo.supervisionId = data.supervisionId;
            this.updateFormTwo.constructDeptId = data.constructDeptId;
            this.updateFormTwo.districtId = data.districtId;
            this.updateFormTwo.detailedAddress = data.detailedAddress;
            this.updateFormTwo.latitude = data.latitude;
            this.updateFormTwo.longitude = data.longitude;
            this.updateFormTwo.projectScale = data.projectScale;
            this.updateFormTwo.currentWorkerNum = data.currentWorkerNum;
            this.updateFormTwo.currentSubcontractorNum =
              data.currentSubcontractorNum;
            this.updateFormTwo.adminDept = data.adminDept;
            this.updateFormTwo.actualStartTime = new Date(data.actualStartTime);
            this.updateFormTwo.planCompletionTime = new Date(
              data.planCompletionTime
            );

            this.updateFormThree.projectManagerId = data.projectManagerId;
            this.updateFormThree.safetyStaffId = data.safetyStaffId;
            this.updateFormThree.qualityStaffId = data.qualityStaffId;
            this.updateFormThree.chiefInspectorId = data.chiefInspectorId;
            this.updateFormThree.safetySupervisorId = data.safetySupervisorId;
            this.updateFormThree.professionalSupervisorId =
              data.professionalSupervisorId;
          });
      }
    },
    //周报开始日期改变，自动获取月份，周数，周次
    weeklyStartTimeChanged() {
      if (this.updateFormOne.weeklyStartTime == null) {
        this.updateFormOne.weeklyStartTime = "";
        this.updateFormOne.weeklyEndTime = "";
        this.updateFormOne.monthShowTime = "";
        this.updateFormOne.monthStartTime = "";
        return;
      }
      this.updateFormOne.weeklyEndTime = api.getThisWeekStart(
        this.updateFormOne.weeklyStartTime
      );
      this.updateFormOne.monthShowTime = api
        .changeDate(this.updateFormOne.weeklyStartTime)
        .substring(0, 7);
      this.updateFormOne.monthStartTime =
        api.changeDate(this.updateFormOne.weeklyStartTime).substring(0, 7) + "-01";
    },
    //表格选中
    selectWeeklyWorkProgressAddReqs(val) {
      this.updateFormFour.multiSelectionA = val;
    },
    selectWeeklyConstructContentAddReqs(val) {
      this.updateFormFour.multiSelectionB = val;
    },
    selectWeeklyRiskContentAddReqs(val) {
      this.updateFormFour.multiSelectionC = val;
    },

    //增加一行施工进度
    addOneLineWeeklyWorkProgressAddReqs() {
      this.updateFormFour.weeklyWorkProgressAddReqs.push({
        jobNumber: "",
        currentProgress: "",
        listUpdateOperation: "添加",
        weeklyId: this.id
      });
    },
    //删除选中多行施工进度
    deleteLinesWeeklyWorkProgressAddReqs() {
      this.$confirm("确认删除选中条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.updateFormFour.multiSelectionA.forEach(element => {
            let i = 0;
            this.updateFormFour.weeklyWorkProgressAddReqs.forEach(ele => {
              if (ele === element) {
                if (ele.id) {
                  this.deleteweeklyWorkProgressAddReqs.push({
                    listUpdateOperation: "删除",
                    id: ele.id
                  });
                }
                this.updateFormFour.weeklyWorkProgressAddReqs.splice(i, 1);
                i--;
              }
              i++;
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //增加一行施工内容
    addOneLineWeeklyConstructContentAddReqs() {
      this.updateFormFour.weeklyConstructContentAddReqs.push({
        constructContent: "",
        jobNumber: "",
        listUpdateOperation: "添加",
        weeklyId: this.id
      });
    },
    //删除选中多行施工内容
    deleteLinesWeeklyConstructContentAddReqs() {
      this.$confirm("确认删除选中条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.updateFormFour.multiSelectionB.forEach(element => {
            let i = 0;
            this.updateFormFour.weeklyConstructContentAddReqs.forEach(ele => {
              if (ele === element) {
                if (ele.id) {
                  this.deleteweeklyConstructContentAddReqs.push({
                    listUpdateOperation: "删除",
                    id: ele.id
                  });
                }
                this.updateFormFour.weeklyConstructContentAddReqs.splice(i, 1);
                i--;
              }
              i++;
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //增加一行风险
    addOneLineWeeklyRiskContentAddReqs() {
      this.updateFormFour.weeklyRiskContentAddReqs.push({
        riskLevel: "",
        workContent: "",
        workEndTime: "",
        workProcess: "",
        workStartTime: "",
        listUpdateOperation: "添加",
        weeklyId: this.id
      });
    },
    //删除选中多行风险
    deleteLinesWeeklyRiskContentAddReqs() {
      this.$confirm("确认删除选中条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.updateFormFour.multiSelectionC.forEach(element => {
            let i = 0;
            this.updateFormFour.weeklyRiskContentAddReqs.forEach(ele => {
              if (ele === element) {
                if (ele.id) {
                  ele.listUpdateOperation = "删除";
                  this.deleteweeklyRiskContentAddReqs.push({
                    listUpdateOperation: "删除",
                    id: ele.id
                  });
                }
                this.updateFormFour.weeklyRiskContentAddReqs.splice(i, 1);
                i--;
              }
              i++;
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //当某一行的工序值发生改变时，风险等级相应变化
    workProcessChanged(index, row) {
      row.workProcess = row.workProcessShow[row.workProcessShow.length - 1];
      row.workProcessTotalList = "[" + row.workProcessShow.toString() + "]";
      this.findFlag = false;
      this.Traversal(
        this.updateFormFour.options.workProcessOptions,
        row.workProcess,
        row
      );
      console.log(row);
    },
    //将工程编号设置为最后一列
    jobNumberChanged(index, row) {
      row.jobNumber = row.jobNumberShow[row.jobNumberShow.length - 1];
      row.jobNumberTotalList = "[" + row.jobNumberShow.toString() + "]";
      console.log(row);
    },
    //遍历找到该值
    Traversal(T, data, row) {
      if (!T) return;
      if (this.findFlag === true) {
        return;
      }
      for (let i = 0; i < T.length; i++) {
        if (T[i].value === data) {
          this.findFlag = true;
          row.riskLevel = T[i].riskLevel;
          return;
        }
        this.Traversal(T[i].children, data, row);
      }
    },
    //信息保存
    saveAllInfo() {

    },
    //修改日期格式 
    dateChangeToSecondA(row) {
      row.workStartTime = api.changeDateToSecond(row.workStartTime);
    },
    dateChangeToSecondB(row) {
      row.workEndTime = api.changeDateToSecond(row.workEndTime);
    },
    //信息上报
    submitProjectWeeklyInfo() {
      let validNum = 0;
      this.$refs["updateFormOne"].validate(valid => {
        if (valid) {
          validNum++;
        }
      });
      this.$refs["updateFormTwo"].validate(valid => {
        if (valid) {
          validNum++;
        }
      });
      this.$refs["updateFormThree"].validate(valid => {
        if (valid) {
          validNum++;
        }
      });
      this.$refs["updateFormFive"].validate(valid => {
        if (valid) {
          validNum++;
        }
      });
      if (validNum === 4) {
        let projectUpdateReq = {};
        let projectWeeklyAddReq;
        let weeklyConstructContentAddReqs = [];
        let weeklyRiskContentAddReqs = [];
        let weeklyWorkProgressAddReqs = [];
        //首先验证项目信息是否修改
        this.projectInfoUpdate();
        if (this.projectUpdateFlag) {
          projectUpdateReq = {
            id: this.updateFormTwo.id,
            name: this.updateFormTwo.name,
            adminId: this.updateFormTwo.adminId,
            supervisionId: this.updateFormTwo.supervisionId,
            constructDeptId: this.updateFormTwo.constructDeptId,
            districtId: this.updateFormTwo.districtId,
            detailedAddress: this.updateFormTwo.detailedAddress,
            latitude: this.updateFormTwo.latitude,
            longitude: this.updateFormTwo.longitude,
            projectScale: this.updateFormTwo.projectScale,
            currentWorkerNum: this.updateFormTwo.currentWorkerNum,
            currentSubcontractorNum: this.updateFormTwo.currentSubcontractorNum,
            adminDept: this.updateFormTwo.adminDept,
            actualStartTime: api.changeDate(this.updateFormTwo.actualStartTime),
            planCompletionTime: api.changeDate(this.updateFormTwo.planCompletionTime),
            chiefInspectorId: this.updateFormThree.chiefInspectorId,
            professionalSupervisorId: this.updateFormThree.professionalSupervisorId,
            projectManagerId: this.updateFormThree.projectManagerId,
            qualityStaffId: this.updateFormThree.qualityStaffId,
            safetyStaffId: this.updateFormThree.safetyStaffId,
            safetySupervisorId: this.updateFormThree.safetySupervisorId,
          };
        }
        //加入周报信息
        projectWeeklyAddReq = {
          id: this.id,
          actualState: this.updateFormFive.actualState,
          controlledState: this.updateFormFive.controlledState,
          adminDept: this.updateFormTwo.adminDept,
          adminId: this.updateFormTwo.adminId,
          chiefInspectorId: this.updateFormThree.chiefInspectorId,
          constructDeptId: this.updateFormTwo.constructDeptId,
          detailedAddress: this.updateFormTwo.detailedAddress,
          districtId: this.updateFormTwo.districtId,
          hasThreePlusRiskWork: this.updateFormFour.hasThreePlusRiskWork,
          hasWorkNextWeek: this.updateFormFour.hasWorkNextWeek,
          latitude: this.updateFormTwo.latitude,
          longitude: this.updateFormTwo.longitude,
          monthStartTime: this.updateFormOne.monthStartTime,
          professionalSupervisorId: this.updateFormThree.professionalSupervisorId,
          projectId: this.updateFormTwo.id,
          projectManagerId: this.updateFormThree.projectManagerId,
          qualityStaffId: this.updateFormThree.qualityStaffId,
          safetyStaffId: this.updateFormThree.safetyStaffId,
          safetySupervisorId: this.updateFormThree.safetySupervisorId,
          supervisionId: this.updateFormTwo.supervisionId,
          currentSubcontractorNum: this.updateFormTwo.currentSubcontractorNum,
          currentWorkerNum: this.updateFormTwo.currentWorkerNum,
          projectScale: this.updateFormTwo.projectScale,
          weeklyStartTime: api.changeDate(this.updateFormOne.weeklyStartTime),
          actualStartTime: api.changeDate(this.updateFormTwo.actualStartTime),
          planCompletionTime: api.changeDate(this.updateFormTwo.planCompletionTime),
        };

        //主要施工内容信息
        this.updateFormFour.weeklyConstructContentAddReqs.forEach(element => {
          if (element.id) {
            this.weeklyConstructContent.forEach(ele => {
              if (ele.id === element.id) {
                if (ele.constructContent != element.constructContent || ele.jobNumberTotalList != element.jobNumberTotalList) {
                  element.listUpdateOperation = "更新";
                  weeklyConstructContentAddReqs.push(element);
                }
              }
            })
          } else {
            weeklyConstructContentAddReqs.push(element);
          }
        })
        this.deleteweeklyConstructContentAddReqs.forEach(element => {
          weeklyConstructContentAddReqs.push(element);
        })

        //风险作业内容信息
        this.updateFormFour.weeklyRiskContentAddReqs.forEach(element => {
          if (element.id) {
            this.weeklyRiskContent.forEach(ele => {
              console.log("element:", element);
              console.log("ele:", ele);
              if (ele.id === element.id) {
                if (ele.workEndTime != element.workEndTime || ele.workStartTime != element.workStartTime || ele.workContent != element.workContent || ele.workProcessTotalList != element.workProcessTotalList) {
                  element.listUpdateOperation = "更新";
                  weeklyRiskContentAddReqs.push(element);
                }
              }
            })
          } else {
            weeklyRiskContentAddReqs.push(element);
          }
        })
        this.deleteweeklyRiskContentAddReqs.forEach(element => {
          weeklyRiskContentAddReqs.push(element);
        })

        //施工进度信息
        this.updateFormFour.weeklyWorkProgressAddReqs.forEach(element => {
          if (element.id) {
            this.weeklyWorkProgress.forEach(ele => {
              if (ele.id === element.id) {
                if (ele.currentProgress != element.currentProgress || ele.jobNumberTotalList != element.jobNumberTotalList) {
                  element.listUpdateOperation = "更新";
                  weeklyWorkProgressAddReqs.push(element);
                }
              }
            })
          } else {
            weeklyWorkProgressAddReqs.push(element);
          }
        })
        this.deleteweeklyWorkProgressAddReqs.forEach(element => {
          weeklyWorkProgressAddReqs.push(element);
        })

        //信息整合
        let list = {
          projectUpdateReq: projectUpdateReq,
          projectWeeklyUpdateReq: projectWeeklyAddReq,
          weeklyConstructContentUpdateReqs: weeklyConstructContentAddReqs,
          weeklyRiskContentUpdateReqs: weeklyRiskContentAddReqs,
          weeklyWorkProgressUpdateReqs: weeklyWorkProgressAddReqs
        };
        updateApi.updateProjectWeeklyInfo(list).then(response => {
          this.goback();
        });
      }
    },
    //取消
    cancelAllInfo() {
      this.$router.push({
        name: this.backPath
      })
    },
    goback() {
      this.$router.push({
        name: this.backPath
      })
    }
  }
};
</script>

<style lang="less" scoped>
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
