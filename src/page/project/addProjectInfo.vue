<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="projectForm" :rules="projectFormRule" ref="projectForm" label-width="120px" class="demo-ruleForm">
        <!-- <el-row :gutter="20">
          <el-col :span="20"> 
            <div class="bar">
              <div class="title" style="margin-left:54%;font-size:24px">添加项目信息</div>
            </div>
          </el-col>
        </el-row> -->
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div id="title">
                <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:620px;">项目基本信息</p>
              </div>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="项目名称" prop="name" placeholder="请选择项目名称">
                <el-input v-model="projectForm.name" clearable :rows="1" placeholder="请输入" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="所属建管单位" prop="adminId" placeholder="请选择所属建管单位">
                <el-select v-model="projectForm.adminId" clearable placeholder="请选择" style="min-width:200px" @change="adminIdChanged()">
                  <el-option v-for="item in projectForm.options.adminIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="6">
            <div class="bar">
              <el-form-item label="监理单位" prop="supervisionId" placeholder="请选择监理单位">
                <el-select v-model="projectForm.supervisionId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in projectForm.options.supervisionIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="施工单位" prop="constructDeptId" placeholder="请输入施工单位">
                <el-select v-model="projectForm.constructDeptId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in projectForm.options.constructDeptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="所在区域" prop="districtId" placeholder="请输入项目所在区域">
                <el-select v-model="projectForm.districtId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in projectForm.options.districtIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="详细地址" prop="detailedAddress" placeholder="请输入详细地址">
                <el-input v-model="projectForm.detailedAddress" clearable :rows="1" placeholder="请输入" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="定位经度" prop="longitude" placeholder="请输入详细地址">
                <el-input v-model="projectForm.longitude" clearable :rows="1" placeholder="浮点型，如：100.123" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="定位纬度" prop="latitude" placeholder="请输入详细地址">
                <el-input v-model="projectForm.latitude" clearable :rows="1" placeholder="浮点型，如：100.123" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="电压等级" prop="voltageClass" placeholder="请选择电压等级">
                <el-select v-model="projectForm.voltageClass" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in projectForm.options.voltageClassOptions" :key="item.value" :label="item.value" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="作业类型" prop="assignmentType" placeholder="请选择作业类型">
                <el-select v-model="projectForm.assignmentType" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in projectForm.options.assignmentTypeOptions" :key="item.value" :label="item.value" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="施工单位类别" prop="constructionType" placeholder="请选择施工单位类别">
                <el-select v-model="projectForm.constructionType" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in projectForm.options.constructionTypeOptions" :key="item.value" :label="item.value" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="项目规模" prop="projectScale" placeholder="请输入项目规模">
                <el-input v-model="projectForm.projectScale" clearable :rows="1" placeholder="请输入" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="实际开工时间" prop="actualStartTime" placeholder="请选择实际开工时间">
                <el-date-picker v-model="projectForm.actualStartTime" align="right" type="date" placeholder="选择日期" style="min-width:200px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="计划竣工时间" prop="planCompletionTime" placeholder="请选择计划竣工时间">
                <el-date-picker v-model="projectForm.planCompletionTime" align="right" type="date" placeholder="选择日期" style="min-width:200px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="主业作业人数" prop="mainWorkerNum" placeholder="请输入主业单位作业人数">
                <el-input v-model="projectForm.mainWorkerNum" clearable :rows="1" placeholder="整数，如：20" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="6">
            <div class="bar">
              <el-form-item label="外包作业人数" prop="outsourcingWorkerNum" placeholder="请输入外包单位作业人数">
                <el-input v-model="projectForm.outsourcingWorkerNum" clearable :rows="1" placeholder="整数，如：20" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="当前分包人数" prop="currentSubcontractorNum" placeholder="请选择实际状态">
                <el-input v-model="projectForm.currentSubcontractorNum" clearable :rows="1" placeholder="整数，如：20" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="所属部门" prop="adminDept" placeholder="请选择实际状态">
                <el-select v-model="projectForm.adminDept" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in projectForm.options.adminDeptOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="项目状态" prop="projectState" placeholder="管控内状态">
                <el-select v-model="projectForm.projectState" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in projectForm.options.projectStateOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <br />

    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="bar">
            <div id="title">
              <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:620px;margin-top:30px">项目人员信息</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-form :model="personForm" :rules="personFormRule" ref="personForm" label-width="120px" class="demo-ruleForm">
        <!-- <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div class="title" style="margin-left:54%;font-size:18px">所属建管单位责任人信息</div>
            </div>
          </el-col>
        </el-row> -->

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目经理" prop="projectManagerId" placeholder="请选择项目经理">
                <!-- <el-select v-model="personForm.projectManagerId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="personForm.projectManagerId" placeholder="人员暂缺" :options="personForm.options.personOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>

              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="质量专责" prop="qualityStaffId" placeholder="请选择质量专责">
                <!-- <el-select v-model="personForm.qualityStaffId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="personForm.qualityStaffId" placeholder="人员暂缺"  :options="personForm.options.personOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>

              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="安全专责" prop="safetyStaffId" placeholder="请选择安全专责">
                <!-- <el-select v-model="personForm.safetyStaffId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="personForm.safetyStaffId" placeholder="人员暂缺"  :options="personForm.options.personOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>

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
              <el-form-item label="总监/总监代表" prop="chiefInspectorId" placeholder="请选择总监/总监代表">
                <!-- <el-select v-model="personForm.chiefInspectorId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="personForm.chiefInspectorId" placeholder="人员暂缺"  :options="personForm.options.personOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>

              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="专业监理" prop="professionalSupervisorId" placeholder="请选择专业监理">
                <!-- <el-select v-model="personForm.professionalSupervisorId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="personForm.professionalSupervisorId" placeholder="人员暂缺"  :options="personForm.options.personOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="安全监理" prop="safetySupervisorId" placeholder="请选择安全监理">
                <!-- <el-select v-model="personForm.safetySupervisorId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="personForm.safetySupervisorId" placeholder="人员暂缺"  :options="personForm.options.personOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="施工单位负责人" prop="constructionPrincipal" placeholder="请选择施工单位负责人">
                <el-input v-model="personForm.constructionPrincipal" clearable :rows="1" placeholder="请输入" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="联系方式" prop="constructionPrincipalNumber" placeholder="请选择联系方式">
                <el-input v-model="personForm.constructionPrincipalNumber" clearable :rows="1" placeholder="请输入" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>

        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="Mbutton">
              <el-col :span="6">
                <el-button type="primary" @click="saveAllInfo">信息保存</el-button>
              </el-col>
              <el-col :span="6">
                <el-button type="primary" @click="addProjectInfo">信息上报</el-button>
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
import * as addApi from "@/api/addApi.js";
import * as dataApi from "@/api/dataChange.js";
export default {
  data() {
    return {
      propsPerson: {
        value: "id",
        label: "name"
      },
      //返回路径
      backPath: "projectMana",
      //项目信息
      projectForm: {
        name: "",
        adminId: "",
        supervisionId: "",
        constructDeptId: "",
        districtId: "",
        detailedAddress: "",
        longitude: "",
        latitude: "",
        voltageClass:"",
        assignmentType:"",
        constructionType:"",
        actualStartTime: "",
        planCompletionTime: "",
        projectScale: "",
        mainWorkerNum: "",
        outsourcingWorkerNum:"",
        currentSubcontractorNum: "",
        adminDept: "",
        projectState: "",
        
        options: {
          adminIdOptions: {},
          supervisionIdOptions: {},
          districtIdOptions: {},
          adminDeptOptions: {},
          constructDeptIdOptions: {},
          voltageClassOptions:{},
          assignmentTypeOptions:{},
          constructionTypeOptions:{},
          projectStateOptions: [{
            value: true,
            name: "是"
          }, {
            value: false,
            name: "否"
          }]
        }
      },
      projectFormRule: {
        adminDept: [
          { required: true, message: "请选择所属部门", trigger: "change" }
        ],
        adminId: [
          { required: true, message: "请选择所属建管单位", trigger: "change" }
        ],
        supervisionId: [
          { required: true, message: "请选择监理单位", trigger: "change" }
        ],
        constructDeptId: [
          { required: true, message: "请输入施工单位", trigger: "change" }
        ],
        detailedAddress: [
          { required: true, message: "请输入详细地址", trigger: "change" }
        ],
        districtId: [
          { required: true, message: "请选择所在区域", trigger: "change" }
        ],
        latitude: [
          {
            required: true,
            trigger: "change",
            validator: (rule, value, callback) => {
              if (value != "" && value != null) {
                var reg = /^([+]\d+[.]\d+|[-]\d+[.]\d+|\d+[.]\d+|[+]\d+|[-]\d+|\d+)$/gi
                if (!reg.test(value)) {
                  callback(new Error("定位纬度需要浮点型，如：100.123"));
                } else {
                  callback();
                }
              } else {
                callback(new Error("请输入定位纬度"));
              }
            }
          }
        ],
        longitude: [
          {
            required: true,
            trigger: "change",
            validator: (rule, value, callback) => {
              if (value != "" && value != null) {
                var reg = /^([+]\d+[.]\d+|[-]\d+[.]\d+|\d+[.]\d+|[+]\d+|[-]\d+|\d+)$/gi
                if (!reg.test(value)) {
                  callback(new Error("定位经度需要浮点型，如：100.123"));
                } else {
                  callback();
                }
              } else {
                callback(new Error("请输入定位经度度"));
              }
            }
          }
        ],
        name: [
          { required: true, message: "请输入项目名称", trigger: "change" }
        ],
        projectState: [
          { required: true, message: "请选择项目状态", trigger: "change" }
        ],
        actualStartTime: [
          { required: false, message: "请选择实际开工时间", trigger: "change" }
        ],
        currentSubcontractorNum: [
          {
            required: false,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (value == "0") callback();
              if (value != "" && value != null) {
                var reg = /^[1-9]\d*$/;
                if (!reg.test(value) && value!="0") {
                  callback(new Error("当前分包人数需要整数，如：20"));
                } else {
                  callback();
                }
              } else {
                callback(new Error("请输入当前分包人数"));
              }
            }
          }
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
        planCompletionTime: [
          { required: false, message: "请选择计划竣工时间", trigger: "change" }
        ],
        projectScale: [
          { required: false, message: "请输入项目规模", trigger: "change" }
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
        }
      },
      personFormRule: {
        chiefInspectorId: [
          { required: true, message: "请选择总监", trigger: "change" }
        ],
        professionalSupervisorId: [
          { required: true, message: "请选择专业监理", trigger: "change" }
        ],
        projectManagerId: [
          { required: true, message: "请选择项目经理", trigger: "change" }
        ],
        qualityStaffId: [
          { required: true, message: "请选择质量专责", trigger: "change" }
        ],
        safetyStaffId: [
          { required: true, message: "请选择安全专责", trigger: "change" }
        ],
        safetySupervisorId: [
          { required: true, message: "请选择安全监理", trigger: "change" }
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
    //其他页面跳转的数据
    let data = this.$route.params;
    // this.backPath = data.backPath;
    let saveFlag = false;
    saveFlag = localStorage.getItem("saveFlag");
    if (saveFlag === 'true') {
      console.log(localStorage)
      this.projectForm = JSON.parse(localStorage.getItem("projectForm"));
      this.personForm = JSON.parse(localStorage.getItem("personForm"));
      this.projectForm.actualStartTime = new Date(this.projectForm.actualStartTime);
      this.projectForm.planCompletionTime = new Date(this.projectForm.planCompletionTime);
      localStorage.removeItem('saveFlag');
      localStorage.setItem('saveFlag', false);
    } else {
      //获取运行状态
      getApi.getAllProjectStateEnum().then(response => {
        this.projectForm.options.projectStateOptions = response;
      });
      //获取所有所属建管单位
      getApi.getAllAdministrativeDeptName().then(response => {
        this.projectForm.options.adminIdOptions = response;
      });
      //获取所有监理单位
      getApi.getAllSupervisionDeptName().then(response => {
        this.projectForm.options.supervisionIdOptions = response;
      });
      //获取区域
      getApi.getAllDistrictName().then(response => {
        this.projectForm.options.districtIdOptions = response;
      });
      //获取所有所属部门
      getApi.getAllProjectAdminDeptEnum().then(response => {
        this.projectForm.options.adminDeptOptions = response;
      });
      //获取电压等级
      this.projectForm.options.voltageClassOptions = dataApi.getVoltageClass();
      //获取作业类型
      this.projectForm.options.assignmentTypeOptions = dataApi.getAssignmentType();
      //获取施工单位类别
      this.projectForm.options.constructionTypeOptions = dataApi.getConstructionType();
      //获取所有人员信息
      getApi.getUserCascader().then(response => {
        this.personForm.options.personOptions = response.options;
        this.personForm.options.personOptions.forEach(ele=>{
          if(ele.id==-1){
            ele.children[0].id = 100000;
          }
        })
      });
      //获取施工单位
      getApi.getAllConstructDeptName().then(response => {
        this.projectForm.options.constructDeptIdOptions = response;
      });
    }

  },

  methods: {
    adminIdChanged(){
    
      this.projectForm.options.adminIdOptions.forEach(ele=>{
        if(ele.name == "国网上海市电力公司工程建设咨询分公司" && ele.id == this.projectForm.adminId){
          this.personForm.projectManagerId=  [-1,100000];
          this.personForm.qualityStaffId =  [-1,100000];
          this.personForm.safetyStaffId = [-1,100000];
        }
      })
    },

    //信息保存
    saveAllInfo() {
      // storage["addFormOne"] = this.addFormOne;
      // storage["addFormTwo"] = this.addFormTwo;
      // // storage["addFormThree"] = this.addFormThree;
      // storage["addFormFour"] = this.addFormFour;
      // storage["addFormFive"] = this.addFormFive;
      localStorage.removeItem('projectForm');
      localStorage.removeItem('personForm');
      localStorage.removeItem('saveFlag');
      let obj1 = JSON.stringify(this.projectForm);
      let obj2 = JSON.stringify(this.personForm);
      localStorage.setItem('projectForm', obj1);
      localStorage.setItem('personForm', obj2);
      localStorage.setItem('saveFlag', true);
      this.$router.push({
        name: this.backPath
      })
    },
    //信息上报
    addProjectInfo() {
      let validNum = 0;
      this.$refs["projectForm"].validate(valid => {
        if (valid) {
          validNum++;
        }
      });
      this.$refs["personForm"].validate(valid => {
        if (valid) {
          validNum++;
        }
      });
      if (validNum === 2) {
        let list = {
          adminDept: this.projectForm.adminDept,
          adminId: this.projectForm.adminId,
          constructDeptId: this.projectForm.constructDeptId,
          detailedAddress: this.projectForm.detailedAddress,
          districtId: this.projectForm.districtId,
          latitude: this.projectForm.latitude,
          longitude:this.projectForm.longitude,
          voltageClass: this.projectForm.voltageClass,
          assignmentType: this.projectForm.assignmentType,
          constructionType: this.projectForm.constructionType,
          name: this.projectForm.name,
          projectState: this.projectForm.projectState,
          supervisionId: this.projectForm.supervisionId,
          currentSubcontractorNum: this.projectForm.currentSubcontractorNum,
          mainWorkerNum: this.projectForm.mainWorkerNum,
          outsourcingWorkerNum:this.projectForm.outsourcingWorkerNum,

          constructionPrincipalNumber:this.personForm.constructionPrincipalNumber,
          constructionPrincipal:this.personForm.constructionPrincipal,
          projectScale: this.projectForm.projectScale,
          actualStartTime: api.changeDate(this.projectForm.actualStartTime),
          planCompletionTime: api.changeDate(this.projectForm.planCompletionTime),

          chiefInspectorId: this.personForm.chiefInspectorId[1] == 100000? (-1):this.personForm.chiefInspectorId[1] ,
          professionalSupervisorId: this.personForm.professionalSupervisorId[1]== 100000? (-1):this.personForm.professionalSupervisorId[1] ,
          projectManagerId: this.personForm.projectManagerId[1]== 100000? (-1):this.personForm.projectManagerId[1] ,
          qualityStaffId: this.personForm.qualityStaffId[1]== 100000? (-1):this.personForm.qualityStaffId[1] ,
          safetyStaffId: this.personForm.safetyStaffId[1]== 100000? (-1):this.personForm.safetyStaffId[1] ,
          safetySupervisorId: this.personForm.safetySupervisorId[1]== 100000? (-1):this.personForm.safetySupervisorId[1] ,

          chiefInspectorDeptId: this.personForm.chiefInspectorId[0],
          professionalSupervisorDeptId: this.personForm.professionalSupervisorId[0],
          projectManagerDeptId: this.personForm.projectManagerId[0],
          qualityStaffDeptId: this.personForm.qualityStaffId[0],
          safetyStaffDeptId: this.personForm.safetyStaffId[0],
          safetySupervisorDeptId: this.personForm.safetySupervisorId[0],
        }
        addApi.addProjectInfo(list).then(response => {
          this.goback();
        })
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