<template>
  <div class="body">
    <el-card class="box-card">
      <el-form
        :model="projectForm"
        :rules="projectFormRule"
        ref="projectForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <!-- <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div class="title" style="margin-left:54%;font-size:22px">修改项目信息</div>
            </div>
          </el-col>
        </el-row> -->
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div id="title">
                <p
                  id="tableTitle"
                  style="
                    min-width: 1000px;
                    font-size: 28px;
                    margin-left: 620px;
                    margin-top: 30px;
                  "
                >
                  项目基本信息
                </p>
              </div>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="项目名称"
                prop="name"
                placeholder="请选择项目名称"
              >
                <el-input
                  v-model="projectForm.name"
                  clearable
                  :rows="1"
                  placeholder="请输入"
                  style="min-width: 200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="所属建管单位"
                prop="adminId"
                placeholder="请选择所属建管单位"
              >
                <el-select
                  v-model="projectForm.adminId"
                  clearable
                  placeholder="请选择"
                  style="min-width: 200px"
                  @change="adminIdChanged()"
                >
                  <el-option
                    v-for="item in projectForm.options.adminIdOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="监理单位"
                prop="supervisionId"
                placeholder="请选择监理单位"
              >
                <el-select
                  v-model="projectForm.supervisionId"
                  clearable
                  placeholder="请选择"
                  style="min-width: 200px"
                >
                  <el-option
                    v-for="item in projectForm.options.supervisionIdOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="施工单位"
                prop="constructDeptId"
                placeholder="请输入施工单位"
              >
                <el-select
                  v-model="projectForm.constructDeptId"
                  clearable
                  placeholder="请选择"
                  style="min-width: 200px"
                >
                  <el-option
                    v-for="item in projectForm.options.constructDeptIdOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="所在区域"
                prop="districtId"
                placeholder="请输入项目所在区域"
              >
                <el-select
                  v-model="projectForm.districtId"
                  clearable
                  placeholder="请选择"
                  style="min-width: 200px"
                >
                  <el-option
                    v-for="item in projectForm.options.districtIdOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="乡镇/街道" prop="street" placeholder="请输入乡镇/街道">
                <el-input v-model="projectForm.street" clearable :rows="1" placeholder="请输入" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="详细地址"
                prop="detailedAddress"
                placeholder="请输入详细地址"
              >
                <el-input
                  v-model="projectForm.detailedAddress"
                  clearable
                  :rows="1"
                  placeholder="请输入"
                  style="min-width: 200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="定位经度"
                prop="longitude"
                placeholder="请输入详细地址"
              >
                <el-input
                  v-model="projectForm.longitude"
                  clearable
                  :rows="1"
                  placeholder="浮点型，如：100.123"
                  style="min-width: 200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="定位纬度"
                prop="latitude"
                placeholder="请输入详细地址"
              >
                <el-input
                  v-model="projectForm.latitude"
                  clearable
                  :rows="1"
                  placeholder="浮点型，如：100.123"
                  style="min-width: 200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="所属部门"
                prop="adminDept"
                placeholder="请选择实际状态"
              >
                <el-select
                  v-model="projectForm.adminDept"
                  clearable
                  placeholder="请选择"
                  style="min-width: 200px"
                >
                  <el-option
                    v-for="item in projectForm.options.adminDeptOptions"
                    :key="item.name"
                    :label="item.name"
                    :value="item.name"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="项目状态"
                prop="projectState"
                placeholder="管控内状态"
              >
                <el-select
                  v-model="projectForm.projectState"
                  clearable
                  placeholder="请选择"
                  style="min-width: 200px"
                >
                  <el-option
                    v-for="item in projectForm.options.projectStateOptions"
                    :key="item.name"
                    :label="item.name"
                    :value="item.name"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="电压等级"
                prop="voltageClass"
                placeholder="请选择电压等级"
              >
                <el-select
                  v-model="projectForm.voltageClass"
                  clearable
                  placeholder="请选择"
                  style="min-width: 200px"
                >
                  <el-option
                    v-for="item in projectForm.options.voltageClassOptions"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="项目性质" prop="projectProperty" placeholder="请选择项目性质">
                <el-select v-model="projectForm.projectProperty" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in projectForm.options.projectPropertyOptions" :key="item.value" :label="item.value" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="工程类型" prop="engineeringType" placeholder="请选择工程类型">
                <el-select v-model="projectForm.engineeringType" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in projectForm.options.engineeringTypeOptions" :key="item.value" :label="item.value" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="作业类型"
                prop="assignmentType"
                placeholder="请选择作业类型"
              >
                <el-select
                  v-model="projectForm.assignmentType"
                  clearable
                  placeholder="请选择"
                  style="min-width: 200px"
                >
                  <el-option
                    v-for="item in projectForm.options.assignmentTypeOptions"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="施工单位类别"
                prop="constructionType"
                placeholder="请选择施工单位类别"
              >
                <el-select
                  v-model="projectForm.constructionType"
                  clearable
                  placeholder="请选择"
                  style="min-width: 200px"
                >
                  <el-option
                    v-for="item in projectForm.options.constructionTypeOptions"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="项目规模"
                prop="projectScale"
                placeholder="请输入项目规模"
              >
                <el-input
                  v-model="projectForm.projectScale"
                  clearable
                  :rows="1"
                  placeholder="请输入"
                  style="min-width: 200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
        
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="实际开工时间"
                prop="actualStartTime"
                placeholder="请选择实际开工时间"
              >
                <el-date-picker
                  v-model="projectForm.actualStartTime"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  style="min-width: 200px"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="计划竣工时间"
                prop="planCompletionTime"
                placeholder="请选择计划竣工时间"
              >
                <el-date-picker
                  v-model="projectForm.planCompletionTime"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  style="min-width: 200px"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="主业作业人数"
                prop="mainWorkerNum"
                placeholder="请输入主业单位作业人数"
              >
                <el-input
                  v-model="projectForm.mainWorkerNum"
                  clearable
                  :rows="1"
                  placeholder="整数，如：20"
                  style="min-width: 200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="外包作业人数"
                prop="outsourcingWorkerNum"
                placeholder="请输入外包单位作业人数"
              >
                <el-input
                  v-model="projectForm.outsourcingWorkerNum"
                  clearable
                  :rows="1"
                  placeholder="整数，如：20"
                  style="min-width: 200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
            <el-col :span="6">
            <div class="bar">
              <el-form-item label="直属单位人数" prop="directWorkerNum" placeholder="请输入直属单位人数">
                <el-input v-model="projectForm.directWorkerNum" clearable :rows="1" placeholder="整数，如：20" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="当前分包人数"
                prop="currentSubcontractorNum"
                placeholder="请选择实际状态"
              >
                <el-input
                  v-model="projectForm.currentSubcontractorNum"
                  clearable
                  :rows="1"
                  placeholder="整数，如20"
                  style="min-width: 200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          
        </el-row>
      </el-form>
    </el-card>

    <br />

    <el-card class="box-card">
      <el-form
        :model="personForm"
        :rules="personFormRule"
        ref="personForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div id="title">
                <p
                  id="tableTitle"
                  style="
                    min-width: 1000px;
                    font-size: 28px;
                    margin-left: 620px;
                    margin-top: 30px;
                  "
                >
                  项目人员信息
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
        <!-- <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div class="title" style="margin-left:50%;font-size:18px">所属建管单位责任人信息</div>
            </div>
          </el-col>
        </el-row> -->

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item
                label="项目经理"
                prop="projectManagerId"
                placeholder="请选择项目经理"
              >
                <!-- <el-select v-model="personForm.projectManagerId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader
                  v-model="personForm.projectManagerId"
                  placeholder="人员暂缺"
                  :options="personForm.options.personOptions"
                  :show-all-levels="false"
                  :props="propsPerson"
                  style="min-width: 300px; margin-left: 20px"
                ></el-cascader>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item
                label="质量专责"
                prop="qualityStaffId"
                placeholder="请选择质量专责"
              >
                <!-- <el-select v-model="personForm.qualityStaffId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader
                  v-model="personForm.qualityStaffId"
                  placeholder="人员暂缺"
                  :options="personForm.options.personOptions"
                  :show-all-levels="false"
                  :props="propsPerson"
                  style="min-width: 300px; margin-left: 20px"
                ></el-cascader>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item
                label="安全专责"
                prop="safetyStaffId"
                placeholder="请选择安全专责"
              >
                <!-- <el-select v-model="personForm.safetyStaffId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader
                  v-model="personForm.safetyStaffId"
                  placeholder="人员暂缺"
                  :options="personForm.options.personOptions"
                  :show-all-levels="false"
                  :props="propsPerson"
                  style="min-width: 300px; margin-left: 20px"
                ></el-cascader>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <!-- <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div class="title" style="margin-left:52%;font-size:18px">监理单位责任人信息</div>
            </div>
          </el-col>
        </el-row> -->

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item
                label="总监/总监代表"
                prop="chiefInspectorId"
                placeholder="请选择总监/总监代表"
              >
                <!-- <el-select v-model="personForm.chiefInspectorId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader
                  v-model="personForm.chiefInspectorId"
                  placeholder="人员暂缺"
                  :options="personForm.options.personOptions"
                  :show-all-levels="false"
                  :props="propsPerson"
                  style="min-width: 300px; margin-left: 20px"
                ></el-cascader>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item
                label="专业监理"
                prop="professionalSupervisorId"
                placeholder="请选择专业监理"
              >
                <!-- <el-select v-model="personForm.professionalSupervisorId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader
                  v-model="personForm.professionalSupervisorId"
                  placeholder="人员暂缺"
                  :options="personForm.options.personOptions"
                  :show-all-levels="false"
                  :props="propsPerson"
                  style="min-width: 300px; margin-left: 20px"
                ></el-cascader>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item
                label="安全监理"
                prop="safetySupervisorId"
                placeholder="请选择安全监理"
              >
                <!-- <el-select v-model="personForm.safetySupervisorId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader
                  v-model="personForm.safetySupervisorId"
                  placeholder="人员暂缺"
                  :options="personForm.options.personOptions"
                  :show-all-levels="false"
                  :props="propsPerson"
                  style="min-width: 300px; margin-left: 20px"
                ></el-cascader>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
                <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="施工单位负责人" prop="constructionPrincipal" placeholder="请选择施工单位负责人">
                <el-input v-model="personForm.constructionPrincipal" clearable  :rows="1" placeholder="请输入" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="联系方式" prop="constructionPrincipalNumber" placeholder="请选择联系方式">
                <el-input v-model="personForm.constructionPrincipalNumber"  clearable :rows="1" placeholder="请输入" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>

        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="Mbutton">
              <el-col :span="6">
                <!-- <el-button type="primary">信息保存</el-button> -->
              </el-col>
              <el-col :span="6">
                <el-button type="primary" @click="updateProjectInfo"
                  >信息上报</el-button
                >
              </el-col>
              <el-col :span="6">
                <el-button type="primary" @click="cancel">取消</el-button>
              </el-col>
            </div>
          </el-col>
        </el-row>
        
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { POINT_CONVERSION_COMPRESSED } from "constants";
import * as api from "@/api/date.js";
import * as getApi from "@/api/getApi.js";
import * as updateApi from "@/api/updateApi.js";
import * as dataApi from "@/api/dataChange.js";
export default {
  data() {
    return {
      propsPerson: {
        value: "id",
        label: "name",
      },
      firstData: {},
      //修改的项目ID
      id: "",
      //返回路径
      backPath: "projectMana",
      //项目信息
      projectForm: {
        name: "",
        adminId: "",
        supervisionId: "",
        constructDeptId: "",
        districtId: "",
        street:"",
        detailedAddress: "",
        longitude: "",
        latitude: "",
        voltageClass:"",
        assignmentType:"",
        constructionType:"",
        actualStartTime: "",
        projectProperty:"",
        planCompletionTime: "",
        engineeringType:"",
        projectScale: "",
        currentWorkerNum: "",
        currentSubcontractorNum: "",
        directWorkerNum:"",
         mainWorkerNum: "",
        outsourcingWorkerNum:"",
        adminDept: "",
        projectState: "",
        options: {
          adminIdOptions: {},
          engineeringTypeOptions:{},
          supervisionIdOptions: {},
          projectPropertyOptions:{},
          districtIdOptions: {},
          adminDeptOptions: {},
          constructDeptIdOptions: {},
          voltageClassOptions:{},
          assignmentTypeOptions:{},
          constructionTypeOptions:{},
          projectStateOptions: [
            {
              value: true,
              name: "是",
            },
            {
              value: false,
              name: "否",
            },
          ],
        },
      },
      projectFormRule: {
        adminDept: [
          { required: true, message: "请选择所属部门", trigger: "change" },
        ],
        adminId: [
          { required: true, message: "请选择所属建管单位", trigger: "change" },
        ],
        supervisionId: [
          { required: true, message: "请选择监理单位", trigger: "change" },
        ],
        constructDeptId: [
          { required: true, message: "请输入施工单位", trigger: "change" },
        ],
        street:[
          { required: false, message: "请输入乡镇/街道", trigger: "change" },
        ],
        detailedAddress: [
          { required: true, message: "请输入详细地址", trigger: "change" },
        ],
        districtId: [
          { required: true, message: "请选择所在区域", trigger: "change" },
        ],
        latitude: [
          {
            required: true,
            trigger: "change",
            validator: (rule, value, callback) => {
              if (value != "" && value != null) {
                var reg = /^([+]\d+[.]\d+|[-]\d+[.]\d+|\d+[.]\d+|[+]\d+|[-]\d+|\d+)$/gi;
                if (!reg.test(value)) {
                  callback(new Error("定位纬度需要浮点型，如：100.123"));
                } else {
                  callback();
                }
              } else {
                callback(new Error("请输入定位纬度"));
              }
            },
          },
        ],
        longitude: [
          {
            required: true,
            trigger: "change",
            validator: (rule, value, callback) => {
              if (value != "" && value != null) {
                var reg = /^([+]\d+[.]\d+|[-]\d+[.]\d+|\d+[.]\d+|[+]\d+|[-]\d+|\d+)$/gi;
                if (!reg.test(value)) {
                  callback(new Error("定位经度需要浮点型，如：100.123"));
                } else {
                  callback();
                }
              } else {
                callback(new Error("请输入定位经度"));
              }
            },
          },
        ],
        name: [
          { required: true, message: "请输入项目名称", trigger: "change" },
        ],
        projectState: [
          { required: true, message: "请选择项目状态", trigger: "change" },
        ],
        actualStartTime: [
          { required: false, message: "请选择实际开工时间", trigger: "change" },
        ],
        currentSubcontractorNum: [
          {
            required: false,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (value == "0") callback();
              if (value != "" && value != null) {
                var reg = /^[1-9]\d*$/;
                if (!reg.test(value) && value != "0") {
                  callback(new Error("当前分包人数需要整数，如：20"));
                } else {
                  callback();
                }
              } else {
                callback(new Error("请输入当前分包人数"));
              }
            },
          },
        ],
               mainWorkerNum: [
          {
            required: false,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (value == "0") callback();
              if (value != "" && value != null) {
                var reg = /^[1-9]\d*$/;
                if (!reg.test(value)&& value!="0") {
                  callback(new Error("主业单位作业人员数需要整数，如：20"));
                } else {
                  callback();
                }
              } else {
                callback();
              }
            }
          }
        ],
        outsourcingWorkerNum:[
          {
            required: false,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (value == "0") callback();
              if (value != "" && value != null) {
                var reg = /^[1-9]\d*$/;
                if (!reg.test(value)&& value!="0") {
                  callback(new Error("外包单位作业人员数需要整数，如：20"));
                } else {
                  callback();
                }
              } else {
                callback();
              }
            }
          }
        ],
        directWorkerNum:[
          {
            required: false,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (value == "0") callback();
              if (value != "" && value != null) {
                var reg = /^[1-9]\d*$/;
                if (!reg.test(value)&& value!="0") {
                  callback(new Error("直属单位人数需要整数，如：20"));
                } else {
                  callback();
                }
              } else {
                callback();
              }
            }
          }
        ],
        planCompletionTime: [
          { required: false, message: "请选择计划竣工时间", trigger: "change" },
        ],
        projectScale: [
          { required: false, message: "请输入项目规模", trigger: "change" },
        ],
      },
      //人员信息
      personForm: {
        projectManagerId: "",
        safetyStaffId: "",
        qualityStaffId: "",
        chiefInspectorId: "",
        professionalSupervisorId: "",
        safetySupervisorId: "",
        constructionPrincipalNumber:"",
        constructionPrincipal:"",
        options: {
          personOptions: [],
        },
      },
      personFormRule: {
        chiefInspectorId: [
          { required: true, message: "请选择总监", trigger: "change" },
        ],
        professionalSupervisorId: [
          { required: true, message: "请选择专业监理", trigger: "change" },
        ],
        projectManagerId: [
          { required: true, message: "请选择项目经理", trigger: "change" },
        ],
        qualityStaffId: [
          { required: true, message: "请选择质量专责", trigger: "change" },
        ],
        safetyStaffId: [
          { required: true, message: "请选择安全专责", trigger: "change" },
        ],
        safetySupervisorId: [
          { required: true, message: "请选择安全监理", trigger: "change" },
        ],
        constructionPrincipalNumber:[
          {
            required: false,
            trigger: "change",
            validator: (rule, value, callback) => {
              if (value != "" && value != null) {
                var reg = /^([+]\d+[.]\d+|[-]\d+[.]\d+|\d+[.]\d+|[+]\d+|[-]\d+|\d+)$/gi
                if (!reg.test(value)) {
                  callback(new Error("请输入施工单位负责人联系方式。"));
                } else {
                  callback();
                }
              } else {
                callback();
              }
            }
          }
        ],
        constructionPrincipal:[
          { required: false, message: "请输入施工单位负责人", trigger: "change" }
        ],
      },
    };
  },

  created() {
    //获取运行状态
    getApi.getAllProjectStateEnum().then((response) => {
      this.projectForm.options.projectStateOptions = response;
    });
    //获取所有所属建管单位
    getApi.getAllAdministrativeDeptName().then((response) => {
      this.projectForm.options.adminIdOptions = response;
    });
    //获取所有监理单位
    getApi.getAllSupervisionDeptName().then((response) => {
      this.projectForm.options.supervisionIdOptions = response;
    });
    //获取区域
    getApi.getAllDistrictName().then((response) => {
      this.projectForm.options.districtIdOptions = response;
    });
    //获取所有所属部门
    getApi.getAllProjectAdminDeptEnum().then((response) => {
      this.projectForm.options.adminDeptOptions = response;
    });
    //获得项目性质
    this.projectForm.options.projectPropertyOptions = dataApi.getProjectProperty();
    //获得工程类型
    this.projectForm.options.engineeringTypeOptions = dataApi.getEngineeringType();
    //获取电压等级
    this.projectForm.options.voltageClassOptions = dataApi.getVoltageClass();
    //获取作业类型
    this.projectForm.options.assignmentTypeOptions = dataApi.getAssignmentType();
    //获取施工单位类别
    this.projectForm.options.constructionTypeOptions = dataApi.getConstructionType();
    //获取所有人员信息
    getApi.getUserCascader().then((response) => {
      this.personForm.options.personOptions = response.options;
      this.personForm.options.personOptions.forEach((ele) => {
        if (ele.id == -1) {
          ele.children[0].id = 100000;
        }
      });
    });
    //获取施工单位
    getApi.getAllConstructDeptName().then((response) => {
      this.projectForm.options.constructDeptIdOptions = response;
    });

    //其他页面跳转的数据
    let data = this.$route.params;
    this.id = data.id;
    this.backPath = data.backPath;
    getApi.getProjectInfoDetailPageShowRespById(this.id).then((res) => {
      let response = res[0];
      this.firstData = response;
      this.projectForm.name = response.name;
      this.projectForm.adminId = response.adminId;
      this.projectForm.supervisionId = response.supervisionId;
      this.projectForm.constructDeptId = response.constructDeptId;
      this.projectForm.districtId = response.districtId;
      this.projectForm.street = response.street;
      this.projectForm.detailedAddress = response.detailedAddress;
      this.projectForm.longitude = response.longitude;
      this.projectForm.latitude = response.latitude;
      this.projectForm.projectProperty = response.projectProperty;
      this.projectForm.engineeringType = response.engineeringType;
      this.projectForm.voltageClass = response.voltageClass;
      this.projectForm.assignmentType = response.assignmentType;
      this.projectForm.constructionType = response.constructionType;
      this.projectForm.projectScale = response.projectScale;
      this.projectForm.mainWorkerNum = response.mainWorkerNum;
      this.projectForm.outsourcingWorkerNum = response.outsourcingWorkerNum;
      this.projectForm.directWorkerNum = response.directWorkerNum;
      this.projectForm.currentSubcontractorNum =
        response.currentSubcontractorNum;
      this.projectForm.adminDept = response.adminDept;
      this.projectForm.projectState = response.projectState;
      this.projectForm.actualStartTime = new Date(response.actualStartTime);
      this.projectForm.planCompletionTime = new Date(
        response.planCompletionTime
      );

      this.personForm.projectManagerId = [
        response.projectManagerDeptId,
        response.projectManagerId == -1 ? 100000 : response.projectManagerId,
      ];
      this.personForm.safetyStaffId = [
        response.safetyStaffDeptId,
        response.safetyStaffId == -1 ? 100000 : response.safetyStaffId,
      ];
      this.personForm.qualityStaffId = [
        response.qualityStaffDeptId,
        response.qualityStaffId == -1 ? 100000 : response.qualityStaffId,
      ];
      this.personForm.chiefInspectorId = [
        response.chiefInspectorDeptId,
        response.chiefInspectorId == -1 ? 100000 : response.chiefInspectorId,
      ];
      this.personForm.professionalSupervisorId = [
        response.professionalSupervisorDeptId,
        response.professionalSupervisorId == -1
          ? 100000
          : response.professionalSupervisorId,
      ];
      this.personForm.safetySupervisorId = [
        response.safetySupervisorDeptId,
        response.safetySupervisorId == -1
          ? 100000
          : response.safetySupervisorId,
      ];
      this.personForm.constructionPrincipal = response.constructionPrincipal;
      this.personForm.constructionPrincipalNumber = response.constructionPrincipalNumber;
    });
  },

  methods: {
    adminIdChanged() {
      this.projectForm.options.adminIdOptions.forEach((ele) => {
        if (
          ele.name != "国网上海市电力公司工程建设咨询分公司" &&
          ele.id == this.projectForm.adminId
        ) {
          this.personForm.projectManagerId = [-1, 100000];
          this.personForm.qualityStaffId = [-1, 100000];
          this.personForm.safetyStaffId = [-1, 100000];
        }
      });
    },
    //信息上报
    updateProjectInfo() {
      let validNum = 0;
      this.$refs["projectForm"].validate((valid) => {
        if (valid) {
          validNum++;
        }
      });
      this.$refs["personForm"].validate((valid) => {
        if (valid) {
          validNum++;
        }
      });
      if (validNum === 2) {
        let list = {
          id: this.id,
          adminDept:
            this.projectForm.adminDept != this.firstData.adminDept
              ? this.projectForm.adminDept
              : undefined,
          adminId:
            this.projectForm.adminId != this.firstData.adminId
              ? this.projectForm.adminId
              : undefined,
          constructDeptId:
            this.projectForm.constructDeptId != this.firstData.constructDeptId
              ? this.projectForm.constructDeptId
              : undefined,
          street:this.projectForm.street != this.firstData.street
              ? this.projectForm.street
              : undefined,
          detailedAddress:
            this.projectForm.detailedAddress != this.firstData.detailedAddress
              ? this.projectForm.detailedAddress
              : undefined,
          districtId:
            this.projectForm.districtId != this.firstData.districtId
              ? this.projectForm.districtId
              : undefined,
          latitude:
            this.projectForm.latitude != this.firstData.latitude
              ? this.projectForm.latitude
              : undefined,
          longitude:
            this.projectForm.longitude != this.firstData.longitude
              ? this.projectForm.longitude
              : undefined,
          voltageClass:
            this.projectForm.voltageClass != this.firstData.voltageClass
              ? this.projectForm.voltageClass
              : undefined,

          projectProperty:
            this.projectForm.projectProperty != this.firstData.projectProperty
              ? this.projectForm.projectProperty
              : undefined,

          engineeringType:
            this.projectForm.engineeringType != this.firstData.engineeringType
              ? this.projectForm.engineeringType
              : undefined,

          
          assignmentType:
            this.projectForm.assignmentType != this.firstData.assignmentType
              ? this.projectForm.assignmentType
              : undefined,
          constructionType:
            this.projectForm.constructionType != this.firstData.constructionType
              ? this.projectForm.constructionType
              : undefined,
          mainWorkerNum:
            this.projectForm.mainWorkerNum != this.firstData.mainWorkerNum
              ? this.projectForm.mainWorkerNum
              : undefined,
          outsourcingWorkerNum:
            this.projectForm.outsourcingWorkerNum != this.firstData.outsourcingWorkerNum
              ? this.projectForm.outsourcingWorkerNum
              : undefined,
          directWorkerNum:this.projectForm.directWorkerNum != this.firstData.directWorkerNum
              ? this.projectForm.directWorkerNum
              : undefined,
          projectState:
            this.projectForm.projectState != this.firstData.projectState
              ? this.projectForm.projectState
              : undefined,
          name:
            this.projectForm.name != this.firstData.name
              ? this.projectForm.name
              : undefined,
          supervisionId:
            this.projectForm.supervisionId != this.firstData.supervisionId
              ? this.projectForm.supervisionId
              : undefined,
          currentSubcontractorNum:
            this.projectForm.currentSubcontractorNum !=
            this.firstData.currentSubcontractorNum
              ? this.projectForm.currentSubcontractorNum
              : undefined,
          currentWorkerNum:
            this.projectForm.currentWorkerNum != this.firstData.currentWorkerNum
              ? this.projectForm.currentWorkerNum
              : undefined,
          projectScale:
            this.projectForm.projectScale != this.firstData.projectScale
              ? this.projectForm.projectScale
              : undefined,
          actualStartTime:
            api.changeDate(this.projectForm.actualStartTime) !=
            this.firstData.actualStartTime
              ? api.changeDate(this.projectForm.actualStartTime)
              : undefined,
          planCompletionTime:
            api.changeDate(this.projectForm.planCompletionTime) !=
            this.firstData.planCompletionTime
              ? api.changeDate(this.projectForm.planCompletionTime)
              : undefined,
          professionalSupervisorId:
            this.personForm.professionalSupervisorId[1] !=
            this.firstData.professionalSupervisorId
              ? this.personForm.professionalSupervisorId[1]
              : undefined,
          projectManagerId:
            this.personForm.projectManagerId[1] !=
            this.firstData.projectManagerId
              ? this.personForm.projectManagerId[1]
              : undefined,
          qualityStaffId:
            this.personForm.qualityStaffId[1] != this.firstData.qualityStaffId
              ? this.personForm.qualityStaffId[1]
              : undefined,
          safetyStaffId:
            this.personForm.safetyStaffId[1] != this.firstData.safetyStaffId
              ? this.personForm.safetyStaffId[1]
              : undefined,
          safetySupervisorId:
            this.personForm.safetySupervisorId[1] !=
            this.firstData.safetySupervisorId
              ? this.personForm.safetySupervisorId[1]
              : undefined,
          chiefInspectorId:
            this.personForm.chiefInspectorId[1] !=
            this.firstData.chiefInspectorId
              ? this.personForm.chiefInspectorId[1]
              : undefined,

          professionalSupervisorDeptId:
            this.personForm.professionalSupervisorId[0] !=
            this.firstData.professionalSupervisorDeptId
              ? this.personForm.professionalSupervisorId[0]
              : undefined,
          projectManagerDeptId:
            this.personForm.projectManagerId[0] !=
            this.firstData.projectManagerDeptId
              ? this.personForm.projectManagerId[0]
              : undefined,
          qualityStaffDeptId:
            this.personForm.qualityStaffId[0] !=
            this.firstData.qualityStaffDeptId
              ? this.personForm.qualityStaffId[0]
              : undefined,
          safetyStaffDeptId:
            this.personForm.safetyStaffId[0] != this.firstData.safetyStaffDeptId
              ? this.personForm.safetyStaffId[0]
              : undefined,
          safetySupervisorDeptId:
            this.personForm.safetySupervisorId[0] !=
            this.firstData.safetySupervisorDeptId
              ? this.personForm.safetySupervisorId[0]
              : undefined,
          chiefInspectorDeptId:
            this.personForm.chiefInspectorId[0] !=
            this.firstData.chiefInspectorDeptId
              ? this.personForm.chiefInspectorId[0]
              : undefined,
          constructionPrincipalNumber:this.personForm.constructionPrincipalNumber != this.firstData.constructionPrincipalNumber
              ? this.personForm.constructionPrincipalNumber
              : undefined,
            constructionPrincipal:this.personForm.constructionPrincipal != this.firstData.constructionPrincipal
              ? this.personForm.constructionPrincipal
              : undefined,
        };
        if (
          list.projectManagerId == 100000 &&
          this.firstData.projectManagerId == -1
        )
          list.projectManagerId = undefined;
        if (
          list.qualityStaffId == 100000 &&
          this.firstData.qualityStaffId == -1
        )
          list.qualityStaffId = undefined;
        if (list.safetyStaffId == 100000 && this.firstData.safetyStaffId == -1)
          list.safetyStaffId = undefined;
        if (
          list.safetySupervisorId == 100000 &&
          this.firstData.safetySupervisorId == -1
        )
          list.safetySupervisorId = undefined;
        if (
          list.chiefInspectorId == 100000 &&
          this.firstData.chiefInspectorId == -1
        )
          list.chiefInspectorId = undefined;
        if (
          list.professionalSupervisorId == 100000 &&
          this.firstData.professionalSupervisorId == -1
        )
          list.professionalSupervisorId = undefined;

        if (
          list.projectManagerId == 100000 &&
          this.firstData.projectManagerId != -1
        )
          list.projectManagerId = -1;
        if (
          list.qualityStaffId == 100000 &&
          this.firstData.qualityStaffId != -1
        )
          list.qualityStaffId = -1;
        if (list.safetyStaffId == 100000 && this.firstData.safetyStaffId != -1)
          list.safetyStaffId = -1;
        if (
          list.safetySupervisorId == 100000 &&
          this.firstData.safetySupervisorId != -1
        )
          list.safetySupervisorId = -1;
        if (
          list.chiefInspectorId == 100000 &&
          this.firstData.chiefInspectorId != -1
        )
          list.chiefInspectorId = -1;
        if (
          list.professionalSupervisorId == 100000 &&
          this.firstData.professionalSupervisorId != -1
        )
          list.professionalSupervisorId = -1;
        updateApi.updateProject(list).then((response) => {
          this.goback();
        });
      }
    },
    goback() {
      this.$router.push({
        name: this.backPath,
      });
    },
    cancel() {
      this.$router.push({
        name: this.backPath,
      });
    },
  },
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