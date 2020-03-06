<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="addFormOne" label-position="left" ref="addFormOne" :rules="addFormOneRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div id="title">
                <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:620px;">周计划(周报)时间</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="周报开始日期" prop="weeklyStartTime" placeholder="周报开始日期">
                <el-date-picker v-model="addFormOne.weeklyStartTime" type="date" placeholder="选择日期时间" style="min-width:200px" @change="weeklyStartTimeChanged"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8" style="margin-left:-130px">
            <div class="bar">
              <el-form-item label="~" prop="weeklyEndTime" placeholder="周报开始日期" label-width="5px">
                <el-date-picker disabled v-model="addFormOne.weeklyEndTime" type="date" placeholder="选择日期时间" style="min-width:200px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="当前月份" prop="monthShowTime" placeholder="当前月份">
                <el-input disabled v-model="addFormOne.monthShowTime" clearable :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-form :model="addFormTwo" ref="addFormTwo" label-position="left" :rules="addFormTwoRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div id="title">
                <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:650px;">项目基本信息</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目名称" prop="projectIdName" placeholder="项目名称">
                <el-select v-model="addFormTwo.projectIdName" clearable placeholder="请选择" style="min-width:200px" @change="projectChanged">
                  <el-option v-for="item in addFormTwo.options.idOptions" :key="item.id" :label="item.name" :value="[item.id,item.name]"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="建设管理单位" prop="adminId" placeholder="当前月份">
                <el-select v-model="addFormTwo.adminId" clearable :disabled="!addFormTwo.projectIdName" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormTwo.options.adminIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="监理单位" prop="supervisionId" placeholder="周报开始日期">
                <el-select v-model="addFormTwo.supervisionId" clearable :disabled="!addFormTwo.projectIdName" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormTwo.options.supervisionIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="施工单位" prop="constructDeptId" placeholder="周报开始日期">
                <el-select v-model="addFormTwo.constructDeptId" clearable :disabled="!addFormTwo.projectIdName" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormTwo.options.constructDeptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="所在区域" prop="districtId" placeholder="项目名称">
                <el-select v-model="addFormTwo.districtId" clearable :disabled="!addFormTwo.projectIdName" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormTwo.options.districtIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="详细地址" prop="detailedAddress" placeholder="当前月份">
                <el-input v-model="addFormTwo.detailedAddress" clearable :disabled="!addFormTwo.projectIdName" :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="定位经度" prop="longitude" placeholder="周报开始日期">
                <el-input v-model="addFormTwo.longitude" clearable :disabled="!addFormTwo.projectIdName" :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="定位纬度" prop="latitude" placeholder="周报开始日期">
                <el-input v-model="addFormTwo.latitude" clearable :disabled="!addFormTwo.projectIdName" :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="实际开工时间" prop="actualStartTime" placeholder="项目名称">
                <el-date-picker v-model="addFormTwo.actualStartTime" :disabled="!addFormTwo.projectIdName" type="date" placeholder="选择日期时间" style="min-width:200px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="计划竣工时间" prop="planCompletionTime" placeholder="当前月份">
                <el-date-picker v-model="addFormTwo.planCompletionTime" :disabled="!addFormTwo.projectIdName" type="date" placeholder="选择日期时间" style="min-width:200px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目规模" prop="projectScale" placeholder="周报开始日期">
                <el-input v-model="addFormTwo.projectScale" clearable :disabled="!addFormTwo.projectIdName" :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="一线作业人数" prop="currentWorkerNum" placeholder="周报开始日期">
                <el-input v-model="addFormTwo.currentWorkerNum" clearable :disabled="!addFormTwo.projectIdName" :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="当前分包人数" prop="currentSubcontractorNum" placeholder="项目名称">
                <el-input v-model="addFormTwo.currentSubcontractorNum" clearable :disabled="!addFormTwo.projectIdName" :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="所属部门" prop="adminDept" placeholder="当前月份">
                <el-select v-model="addFormTwo.adminDept" clearable :disabled="!addFormTwo.projectIdName" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormTwo.options.adminDeptOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
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
      <el-form :model="addFormThree" ref="addFormThree" label-position="left" :rules="addFormThreeRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div id="title">
                <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:650px;">项目人员信息</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目经理" prop="projectManagerId" placeholder="项目名称">
                <el-select v-model="addFormThree.projectManagerId" clearable :disabled="!addFormTwo.projectIdName" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormThree.options.projectManagerIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="安全专责" prop="safetyStaffId" placeholder="当前月份">
                <el-select v-model="addFormThree.safetyStaffId" clearable :disabled="!addFormTwo.projectIdName" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormThree.options.safetyStaffIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="质量专责" prop="qualityStaffId" placeholder="周报开始日期">
                <el-select v-model="addFormThree.qualityStaffId" clearable :disabled="!addFormTwo.projectIdName" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormThree.options.qualityStaffIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="总监/总监代表" prop="chiefInspectorId" placeholder="项目名称">
                <el-select v-model="addFormThree.chiefInspectorId" clearable :disabled="!addFormTwo.projectIdName" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormThree.options.chiefInspectorIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="安全监理" prop="safetySupervisorId" placeholder="当前月份">
                <el-select v-model="addFormThree.safetySupervisorId" clearable :disabled="!addFormTwo.projectIdName" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormThree.options
                      .safetySupervisorIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="专业监理" prop="professionalSupervisorId" placeholder="周报开始日期">
                <el-select v-model="addFormThree.professionalSupervisorId" clearable :disabled="!addFormTwo.projectIdName" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormThree.options
                      .professionalSupervisorIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="bar">
            <div id="title">
              <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:595px;">当前总体施工进度详情</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-button type="primary" style="margin-right: 20px" @click="addOneLineWeeklyWorkProgressAddReqs">添加条目</el-button>
      <el-button type="primary" style="margin-right: 20px" @click="deleteLinesWeeklyWorkProgressAddReqs">删除条目</el-button>
      <br />
      <br />
      <el-table :data="addFormFour.weeklyWorkProgressAddReqs" @selection-change="selectWeeklyWorkProgressAddReqs" border>
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="500" prop="jobNumberShow" label="分部分项工程" align="center">
          <template slot-scope="scope">
            <el-cascader v-model="scope.row.jobNumberShow" :options="addFormFour.options.jobNumberOptions" @change="jobNumberChanged(scope.index, scope.row)" :props="optionPropsA" style="min-width:450px"></el-cascader>
          </template>
        </el-table-column>
        <el-table-column label="当前总体施工进度详情" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.currentProgress" clearable :rows="1" placeholder="请选择"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="bar">
            <div id="title">
              <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:655px;margin-bottom:30px">下周作业安排</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-checkbox v-model="addFormFour.hasWorkNextWeek" style="margin-left:20px">下周是否有作业</el-checkbox>
      <el-button type="primary" style="margin-left:50px;margin-right: 20px" @click="addOneLineWeeklyRiskContentAddReqs" :disabled="!addFormFour.hasWorkNextWeek">添加条目</el-button>
      <el-button type="primary" style="margin-right: 20px" @click="deleteLinesWeeklyRiskContentAddReqs">删除条目</el-button>
      <el-checkbox v-model="addFormFour.hasThreePlusRiskWork" disabled style="margin-left:20px">是否有三级及以上风险</el-checkbox>
      <br />
      <br />
      <el-table :data="addFormFour.weeklyRiskContentAddReqs" @selection-change="selectWeeklyRiskContentAddReqs" border>
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="400" prop="workProcessShow" label="分部分项工程" align="center">
          <template slot-scope="scope">
            <el-cascader v-model="scope.row.workProcessShow" :props="optionPropsB" :options="addFormFour.options.workProcessOptions" @change="workProcessChanged(scope.index, scope.row)" style="min-width:350px"></el-cascader>
          </template>
        </el-table-column>
        <el-table-column prop="riskLevel" label="风险等级" width="100px" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.riskAdd" style="color:red">{{ scope.row.riskLevel }}</span>
            <span v-else>{{ scope.row.riskLevel }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="workContent" label="下周作业安排、位置及内容" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.workContent" clearable :rows="1" placeholder="请选择"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="riskAdd" label="是否风险升级管理" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.riskAdd" clearable placeholder="请选择" style="min-width:200px" @change="updateFlagChange(scope.index,scope.row)">
              <el-option v-for="item in addFormFour.options.riskAddOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
            </el-select>
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
      <el-form :model="addFormFive" ref="addFormFive" label-position="left" :rules="addFormFiveRule" label-width="100px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="实际状态" prop="actualState" placeholder="当前月份">
                <el-select v-model="addFormFive.actualState" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormFive.options.actualStateOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="管控内状态" prop="controlledState" placeholder="周报开始日期">
                <el-select v-model="addFormFive.controlledState" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormFive.options.controlledStateOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>

      <div style="margin-left:35%;margin-top:30px;margin-bottom:10px">
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
import * as addApi from "@/api/addApi.js";
export default {
  data() {
    return {
      //跳转参数
      backPath: "weeklyData",
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
      addFormOne: {
        weeklyStartTime: "",
        weeklyEndTime: "",
        monthShowTime: "",
        monthStartTime: ""
      },
      addFormOneRule: {
        weeklyStartTime: [
          { required: true, message: "请选择周报开始时间", trigger: "change" }
        ],
        monthShowTime: [
          { required: true, message: "请选择周报开始时间", trigger: "change" }
        ],
      },
      //添加周报——项目信息
      addFormTwo: {
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
      addFormTwoRule: {
        projectIdName: [
          { required: true, message: "请选择项目名称", trigger: "change" }
        ],
        adminDept: [
          { required: true, message: "请选择所属部门", trigger: "change" }
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
      addFormThree: {
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
      addFormThreeRule: {
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
      addFormFour: {
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
          jobNumberOptions: [],
          riskAddOptions: [
            {
              value: true,
              name: "是"
            },
            {
              value: false,
              name: "否"
            },
          ]
        }
      },
      //状态值
      addFormFive: {
        actualState: "",
        controlledState: "",
        options: {
          actualStateOptions: {},
          controlledStateOptions: {}
        }
      },
      addFormFiveRule: {
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
    //获取所有项目名称
    getApi.getAllProjectName().then(response => {
      this.addFormTwo.options.idOptions = response;
    });
    //获取所有建设管理单位
    getApi.getAllAdministrativeDeptName().then(response => {
      this.addFormTwo.options.adminIdOptions = response;
    });
    //获取所有监理单位
    getApi.getAllSupervisionDeptName().then(response => {
      this.addFormTwo.options.supervisionIdOptions = response;
    });
    //获取区域
    getApi.getAllDistrictName().then(response => {
      this.addFormTwo.options.districtIdOptions = response;
    });
    //获取所有所属部门
    getApi.getAllProjectAdminDeptEnum().then(response => {
      this.addFormTwo.options.adminDeptOptions = response;
    });
    //获取管控内状态
    getApi.getAllProjectControlledStateEnum().then(response => {
      this.addFormFive.options.controlledStateOptions = response;
    });
    //获取所有实际状态
    getApi.getAllProjectActualStateEnum().then(response => {
      this.addFormFive.options.actualStateOptions = response;
    });
    //获取施工单位
    getApi.getAllConstructDeptName().then(response => {
      this.addFormTwo.options.constructDeptIdOptions = response;
    });

    //获取所有人员信息
    getApi.getAllStaffName().then(response => {
      this.addFormThree.options.projectManagerIdOptions = response;
      this.addFormThree.options.safetyStaffIdOptions = response;
      this.addFormThree.options.qualityStaffIdOptions = response;
      this.addFormThree.options.chiefInspectorIdOptions = response;
      this.addFormThree.options.safetySupervisorIdOptions = response;
      this.addFormThree.options.professionalSupervisorIdOptions = response;
    });
    //获取分部分项工程
    this.addFormFour.options.jobNumberOptions = getApi.getJobNumber();
    //获取分部分项工程
    this.addFormFour.options.workProcessOptions = getApi.getWorkProcess();
  },
  methods: {
    //升级后，变化
    updateFlagChange(index, row) {
      if (row.workProcessShow === "" || row.workProcessShow === undefined) return;
      this.workProcessChangedA(index, row);
    },
    //判断是否修改过项目信息
    projectInfoUpdate() {
      var data = this.beforeProjectInfo;
      this.projectUpdateFlag = false;
      if (this.addFormTwo.adminId != data.adminId) this.projectUpdateFlag = true;
      if (this.addFormTwo.supervisionId != data.supervisionId) this.projectUpdateFlag = true;
      if (this.addFormTwo.constructDeptId != data.constructDeptId) this.projectUpdateFlag = true;
      if (this.addFormTwo.districtId != data.districtId) this.projectUpdateFlag = true;
      if (this.addFormTwo.detailedAddress != data.detailedAddress)
        this.projectUpdateFlag = true;
      if (this.addFormTwo.latitude != data.latitude) this.projectUpdateFlag = true;
      if (this.addFormTwo.longitude != data.longitude) this.projectUpdateFlag = true;
      if (this.addFormTwo.projectScale != data.projectScale) this.projectUpdateFlag = true;
      if (this.addFormTwo.currentWorkerNum != data.currentWorkerNum)
        this.projectUpdateFlag = true;
      if (
        this.addFormTwo.currentSubcontractorNum !=
        data.currentSubcontractorNum
      )
        this.projectUpdateFlag = true;
      if (this.addFormThree.projectManagerId != data.projectManagerId)
        this.projectUpdateFlag = true;
      if (this.addFormThree.safetyStaffId != data.safetyStaffId)
        this.projectUpdateFlag = true;
      if (this.addFormThree.qualityStaffId != data.qualityStaffId)
        this.projectUpdateFlag = true;
      if (this.addFormThree.chiefInspectorId != data.chiefInspectorId)
        this.projectUpdateFlag = true;
      if (this.addFormThree.safetySupervisorId != data.safetySupervisorId)
        this.projectUpdateFlag = true;
      if (
        this.addFormThree.professionalSupervisorId !=
        data.professionalSupervisorId
      )
        this.projectUpdateFlag = true;
      if (this.addFormTwo.adminDept != data.adminDept) this.projectUpdateFlag = true;
      if (
        api.changeDate(this.addFormTwo.actualStartTime) !=
        api.changeDate(new Date(data.actualStartTime))
      )
        this.projectUpdateFlag = true;
      if (
        api.changeDate(this.addFormTwo.planCompletionTime) !=
        api.changeDate(new Date(data.planCompletionTime))
      )
        this.projectUpdateFlag = true;
    },
    //项目名称改变或选择时，自动填写后续内容
    projectChanged() {
      if (this.addFormTwo.projectIdName === "") {
        this.beforeProjectInfo = {};
        this.addFormTwo.id = "";
        this.addFormTwo.name = "";
      }
      else {
        this.addFormTwo.id = this.addFormTwo.projectIdName[0];
        this.addFormTwo.name = this.addFormTwo.projectIdName[1];
      }
      if (this.addFormTwo.id === "") {
        this.addFormTwo.adminId = "";
        this.addFormTwo.supervisionId = "";
        this.addFormTwo.constructDeptId = "";
        this.addFormTwo.districtId = "";
        this.addFormTwo.detailedAddress = "";
        this.addFormTwo.latitude = "";
        this.addFormTwo.longitude = "";
        this.addFormTwo.projectScale = "";
        this.addFormTwo.currentWorkerNum = "";
        this.addFormTwo.currentSubcontractorNum = "";
        this.addFormTwo.adminDept = "";
        this.addFormTwo.actualStartTime = "";
        this.addFormTwo.planCompletionTime = "";

        this.addFormThree.projectManagerId = "";
        this.addFormThree.safetyStaffId = "";
        this.addFormThree.qualityStaffId = "";
        this.addFormThree.chiefInspectorId = "";
        this.addFormThree.safetySupervisorId = "";
        this.addFormThree.professionalSupervisorId = "";

        return;
      } else {
        getApi
          .getProjectInfoDetailPageShowRespById(this.addFormTwo.id)
          .then(response => {
            let data = response[0];
            this.beforeProjectInfo = data;
            this.addFormTwo.adminId = data.adminId;
            this.addFormTwo.supervisionId = data.supervisionId;
            this.addFormTwo.constructDeptId = data.constructDeptId;
            this.addFormTwo.districtId = data.districtId;
            this.addFormTwo.detailedAddress = data.detailedAddress;
            this.addFormTwo.latitude = data.latitude;
            this.addFormTwo.longitude = data.longitude;
            this.addFormTwo.projectScale = data.projectScale;
            this.addFormTwo.currentWorkerNum = data.currentWorkerNum;
            this.addFormTwo.currentSubcontractorNum =
              data.currentSubcontractorNum;
            this.addFormTwo.adminDept = data.adminDept;
            this.addFormTwo.actualStartTime = new Date(data.actualStartTime);
            this.addFormTwo.planCompletionTime = new Date(
              data.planCompletionTime
            );

            this.addFormThree.projectManagerId = data.projectManagerId;
            this.addFormThree.safetyStaffId = data.safetyStaffId;
            this.addFormThree.qualityStaffId = data.qualityStaffId;
            this.addFormThree.chiefInspectorId = data.chiefInspectorId;
            this.addFormThree.safetySupervisorId = data.safetySupervisorId;
            this.addFormThree.professionalSupervisorId =
              data.professionalSupervisorId;
          });
      }
    },
    //周报开始日期改变，自动获取月份，周数，周次
    weeklyStartTimeChanged() {
      if (this.addFormOne.weeklyStartTime == null) {
        this.addFormOne.weeklyStartTime = "";
        this.addFormOne.weeklyEndTime = "";
        this.addFormOne.monthShowTime = "";
        this.addFormOne.monthStartTime = "";
        return;
      }
      this.addFormOne.weeklyEndTime = api.getThisWeekStart(
        this.addFormOne.weeklyStartTime
      );
      this.addFormOne.monthShowTime = api
        .changeDate(this.addFormOne.weeklyStartTime)
        .substring(0, 7);
      this.addFormOne.monthStartTime =
        api.changeDate(this.addFormOne.weeklyStartTime).substring(0, 7) + "-01";
    },
    //表格选中
    selectWeeklyWorkProgressAddReqs(val) {
      this.addFormFour.multiSelectionA = val;
    },
    selectWeeklyConstructContentAddReqs(val) {
      this.addFormFour.multiSelectionB = val;
    },
    selectWeeklyRiskContentAddReqs(val) {
      this.addFormFour.multiSelectionC = val;
    },

    //增加一行施工进度
    addOneLineWeeklyWorkProgressAddReqs() {
      this.addFormFour.weeklyWorkProgressAddReqs.push({
        jobNumber: "",
        currentProgress: ""
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
          this.addFormFour.multiSelectionA.forEach(element => {
            let i = 0;
            this.addFormFour.weeklyWorkProgressAddReqs.forEach(ele => {
              if (ele === element) {
                this.addFormFour.weeklyWorkProgressAddReqs.splice(i, 1);
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
      this.addFormFour.weeklyConstructContentAddReqs.push({
        constructContent: "",
        jobNumber: ""
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
          this.addFormFour.multiSelectionB.forEach(element => {
            let i = 0;
            this.addFormFour.weeklyConstructContentAddReqs.forEach(ele => {
              if (ele === element) {
                this.addFormFour.weeklyConstructContentAddReqs.splice(i, 1);
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
      this.addFormFour.weeklyRiskContentAddReqs.push({
        riskLevel: "",
        riskAdd:false,
        workContent: "",
        workEndTime: "",
        workProcess: "",
        workStartTime: ""
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
          this.addFormFour.multiSelectionC.forEach(element => {
            let i = 0;
            this.addFormFour.weeklyRiskContentAddReqs.forEach(ele => {
              if (ele === element) {
                this.addFormFour.weeklyRiskContentAddReqs.splice(i, 1);
                i--;
              }
              i++;
            });
          });
          let num = 0;
          this.addFormFour.weeklyRiskContentAddReqs.forEach(ele => {
            if (ele.riskLevel >= 3)
              num = 1;
          })
          if (num === 1) {
            this.addFormFour.hasThreePlusRiskWork = true;
          } else if (num === 0) this.addFormFour.hasThreePlusRiskWork = false;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //当某一行的分部分项工程值发生改变时，风险等级相应变化
    workProcessChangedA(index, row) {
      row.workProcess = row.workProcessShow[row.workProcessShow.length - 1];
      row.workProcessTotalList = row.workProcessShow.toString();
      this.findFlag = false;
      this.Traversal(
        this.addFormFour.options.workProcessOptions,
        row.workProcess,
        row
      );
      let num = 0;
      this.addFormFour.weeklyRiskContentAddReqs.forEach(ele => {
        if (ele.riskLevel >= 3)
          num = 1;
      })
      if (num === 1) {
        this.addFormFour.hasThreePlusRiskWork = true;
      } else if (num === 0) this.addFormFour.hasThreePlusRiskWork = false;
    },
    workProcessChanged(index, row) {
      row.workProcess = row.workProcessShow[row.workProcessShow.length - 1];
      row.workProcessTotalList = row.workProcessShow.toString();
      this.findFlag = false;
      row.riskAdd = false;
      this.Traversal(
        this.addFormFour.options.workProcessOptions,
        row.workProcess,
        row
      );
      let num = 0;
      this.addFormFour.weeklyRiskContentAddReqs.forEach(ele => {
        if (ele.riskLevel >= 3)
          num = 1;
      })
      if (num === 1) {
        this.addFormFour.hasThreePlusRiskWork = true;
      } else if (num === 0) this.addFormFour.hasThreePlusRiskWork = false;
    },
    //将分部分项工程设置为最后一列
    jobNumberChanged(index, row) {
      row.jobNumber = row.jobNumberShow[row.jobNumberShow.length - 1];
      row.jobNumberTotalList = row.jobNumberShow.toString();
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
          if (row.riskAdd) row.riskLevel++;

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
      this.$refs["addFormOne"].validate(valid => {
        if (valid) {
          validNum++;
        }
      });
      this.$refs["addFormTwo"].validate(valid => {
        if (valid) {
          validNum++;
        }
      });
      this.$refs["addFormThree"].validate(valid => {
        if (valid) {
          validNum++;
        }
      });
      this.$refs["addFormFive"].validate(valid => {
        if (valid) {
          validNum++;
        }
      });
      if (validNum === 4) {
        let projectUpdateReq = {};
        let projectWeeklyAddReq;
        let weeklyRiskContentAddReqs;
        let weeklyWorkProgressAddReqs;
        //首先验证项目信息是否修改
        this.projectInfoUpdate();
        if (this.projectUpdateFlag) {
          projectUpdateReq = {
            id: this.addFormTwo.id,
            name: this.addFormTwo.name,
            adminId: this.addFormTwo.adminId,
            supervisionId: this.addFormTwo.supervisionId,
            constructDeptId: this.addFormTwo.constructDeptId,
            districtId: this.addFormTwo.districtId,
            detailedAddress: this.addFormTwo.detailedAddress,
            latitude: this.addFormTwo.latitude,
            longitude: this.addFormTwo.longitude,
            projectScale: this.addFormTwo.projectScale,
            currentWorkerNum: this.addFormTwo.currentWorkerNum,
            currentSubcontractorNum: this.addFormTwo.currentSubcontractorNum,
            adminDept: this.addFormTwo.adminDept,
            actualStartTime: api.changeDate(this.addFormTwo.actualStartTime),
            planCompletionTime: api.changeDate(this.addFormTwo.planCompletionTime),
            chiefInspectorId: this.addFormThree.chiefInspectorId,
            professionalSupervisorId: this.addFormThree.professionalSupervisorId,
            projectManagerId: this.addFormThree.projectManagerId,
            qualityStaffId: this.addFormThree.qualityStaffId,
            safetyStaffId: this.addFormThree.safetyStaffId,
            safetySupervisorId: this.addFormThree.safetySupervisorId,
          };
        }
        //加入周报信息
        projectWeeklyAddReq = {
          actualState: this.addFormFive.actualState,
          controlledState: this.addFormFive.controlledState,
          adminDept: this.addFormTwo.adminDept,
          adminId: this.addFormTwo.adminId,
          chiefInspectorId: this.addFormThree.chiefInspectorId,
          constructDeptId: this.addFormTwo.constructDeptId,
          detailedAddress: this.addFormTwo.detailedAddress,
          districtId: this.addFormTwo.districtId,
          hasThreePlusRiskWork: this.addFormFour.hasThreePlusRiskWork,
          hasWorkNextWeek: this.addFormFour.hasWorkNextWeek,
          latitude: this.addFormTwo.latitude,
          longitude: this.addFormTwo.longitude,
          monthStartTime: this.addFormOne.monthStartTime,
          professionalSupervisorId: this.addFormThree.professionalSupervisorId,
          projectId: this.addFormTwo.id,
          projectManagerId: this.addFormThree.projectManagerId,
          qualityStaffId: this.addFormThree.qualityStaffId,
          safetyStaffId: this.addFormThree.safetyStaffId,
          safetySupervisorId: this.addFormThree.safetySupervisorId,
          supervisionId: this.addFormTwo.supervisionId,
          currentSubcontractorNum: this.addFormTwo.currentSubcontractorNum,
          currentWorkerNum: this.addFormTwo.currentWorkerNum,
          projectScale: this.addFormTwo.projectScale,
          weeklyStartTime: api.changeDate(this.addFormOne.weeklyStartTime),
          actualStartTime: api.changeDate(this.addFormTwo.actualStartTime),
          planCompletionTime: api.changeDate(this.addFormTwo.planCompletionTime),
        };
        //主要施工内容信息
        //风险作业内容信息
        weeklyRiskContentAddReqs = this.addFormFour.weeklyRiskContentAddReqs;
        console.log(weeklyRiskContentAddReqs)
        //施工进度信息
        weeklyWorkProgressAddReqs = this.addFormFour.weeklyWorkProgressAddReqs;
        //信息整合
        let list = {
          projectUpdateReq: projectUpdateReq,
          projectWeeklyAddReq: projectWeeklyAddReq,
          weeklyRiskContentAddReqs: weeklyRiskContentAddReqs,
          weeklyWorkProgressAddReqs: weeklyWorkProgressAddReqs
        };
        addApi.addProjectWeeklyInfo(list).then(response => {
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
