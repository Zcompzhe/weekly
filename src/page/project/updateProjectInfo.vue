<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="projectForm" :rules="projectFormRule" ref="projectForm" label-width="120px" class="demo-ruleForm">
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
                <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:620px;margin-top:30px">项目基本信息</p>
              </div>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="项目名称" prop="name" placeholder="请选择项目名称">
                <el-input v-model="projectForm.name" clearable :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="所属建管单位" prop="adminId" placeholder="请选择所属建管单位">
                <el-select v-model="projectForm.adminId" clearable placeholder="请选择" style="min-width:200px">
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
                <el-input v-model="projectForm.detailedAddress" clearable :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="定位经度" prop="longitude" placeholder="请输入详细地址">
                <el-input v-model="projectForm.longitude" clearable :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="定位纬度" prop="latitude" placeholder="请输入详细地址">
                <el-input v-model="projectForm.latitude" clearable :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
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
              <el-form-item label="项目规模" prop="projectScale" placeholder="请输入项目规模">
                <el-input v-model="projectForm.projectScale" clearable :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="一线作业人数" prop="currentWorkerNum" placeholder="请输入一线作业人数">
                <el-input v-model="projectForm.currentWorkerNum" clearable :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="当前分包人数" prop="currentSubcontractorNum" placeholder="请选择实际状态">
                <el-input v-model="projectForm.currentSubcontractorNum" clearable :rows="1" placeholder="请选择" style="min-width:200px"></el-input>
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
              <el-form-item label="项目状态" prop="runningNow" placeholder="管控内状态">
                <el-select v-model="projectForm.runningNow" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in projectForm.options.runningNowOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <br />

    <el-card class="box-card">
      <el-form :model="personForm" :rules="personFormRule" ref="personForm" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div id="title">
                <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:620px;margin-top:30px">项目人员信息</p>
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
              <el-form-item label="项目经理" prop="projectManagerId" placeholder="请选择项目经理">
                <el-select v-model="personForm.projectManagerId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="质量专责" prop="qualityStaffId" placeholder="请选择质量专责">
                <el-select v-model="personForm.qualityStaffId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="安全专责" prop="safetyStaffId" placeholder="请选择安全专责">
                <el-select v-model="personForm.safetyStaffId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
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
                <el-select v-model="personForm.chiefInspectorId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="专业监理" prop="professionalSupervisorId" placeholder="请选择专业监理">
                <el-select v-model="personForm.professionalSupervisorId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="安全监理" prop="safetySupervisorId" placeholder="请选择安全监理">
                <el-select v-model="personForm.safetySupervisorId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in personForm.options.personOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="Mbutton">
              <el-col :span="6">
                <el-button type="primary">信息保存</el-button>
              </el-col>
              <el-col :span="6">
                <el-button type="primary" @click="updateProjectInfo">信息上报</el-button>
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
export default {
  data() {
    return {
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
        detailedAddress: "",
        longitude: "",
        latitude: "",
        actualStartTime: "",
        planCompletionTime: "",
        projectScale: "",
        currentWorkerNum: "",
        currentSubcontractorNum: "",
        adminDept: "",
        runningNow: "",
        options: {
          adminIdOptions: {},
          supervisionIdOptions: {},
          districtIdOptions: {},
          adminDeptOptions: {},
          constructDeptIdOptions: {},
          runningNowOptions: [{
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
          { required: true, message: "请输入纬度", trigger: "change" }
        ],
        longitude: [
          { required: true, message: "请输入经度", trigger: "change" }
        ],
        name: [
          { required: true, message: "请输入项目名称", trigger: "change" }
        ],
        runningNow: [
          { required: true, message: "请选择项目状态", trigger: "change" }
        ],
        actualStartTime: [
          { required: false, message: "请选择实际开工时间", trigger: "change" }
        ],
        currentSubcontractorNum: [
          { required: false, message: "请输入当前分包人数", trigger: "change" }
        ],
        currentWorkerNum: [
          { required: false, message: "请输入当前施工单位一线自有作业人员数", trigger: "change" }
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
        options: {
          personOptions: {},
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
      },
    };
  },

  created() {
    //获取运行状态
    getApi.getAllProjectStateEnum().then(response => {
      this.projectForm.options.runningNowOptions = response;
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
    //获取所有人员信息
    getApi.getAllStaffName().then(response => {
      this.personForm.options.personOptions = response;
    });
    //获取施工单位
    getApi.getAllConstructDeptName().then(response => {
      this.projectForm.options.constructDeptIdOptions = response;
    });

    //其他页面跳转的数据
    let data = this.$route.params;
    this.id = data.id;
    this.backPath = data.backPath;
    getApi.getProjectInfoDetailPageShowRespById(this.id).then(res => {
      let response = res[0];
      this.projectForm.name = response.name;
      this.projectForm.adminId = response.adminId;
      this.projectForm.supervisionId = response.supervisionId;
      this.projectForm.constructDeptId = response.constructDeptId;
      this.projectForm.districtId = response.districtId;
      this.projectForm.detailedAddress = response.detailedAddress;
      this.projectForm.longitude = response.longitude;
      this.projectForm.latitude = response.latitude;
      this.projectForm.projectScale = response.projectScale;
      this.projectForm.currentWorkerNum = response.currentWorkerNum;
      this.projectForm.currentSubcontractorNum = response.currentSubcontractorNum;
      this.projectForm.adminDept = response.adminDept;
      this.projectForm.runningNow = response.runningNow;
      this.projectForm.actualStartTime = new Date(response.actualStartTime);
      this.projectForm.planCompletionTime = new Date(response.planCompletionTime);

      this.personForm.projectManagerId = response.projectManagerId;
      this.personForm.safetyStaffId = response.safetyStaffId;
      this.personForm.qualityStaffId = response.qualityStaffId;
      this.personForm.chiefInspectorId = response.chiefInspectorId;
      this.personForm.professionalSupervisorId = response.professionalSupervisorId;
      this.personForm.safetySupervisorId = response.safetySupervisorId;
    })

  },

  methods: {
    //信息上报
    updateProjectInfo() {
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
          id: this.id,
          adminDept: this.projectForm.adminDept,
          adminId: this.projectForm.adminId,
          chiefInspectorId: this.personForm.chiefInspectorId,
          constructDeptId: this.projectForm.constructDeptId,
          detailedAddress: this.projectForm.detailedAddress,
          districtId: this.projectForm.districtId,
          latitude: this.projectForm.latitude,
          longitude: this.projectForm.longitude,
          name: this.projectForm.name,
          professionalSupervisorId: this.personForm.professionalSupervisorId,
          projectManagerId: this.personForm.projectManagerId,
          qualityStaffId: this.personForm.qualityStaffId,
          runningNow: this.projectForm.runningNow,
          safetyStaffId: this.personForm.safetyStaffId,
          safetySupervisorId: this.personForm.safetySupervisorId,
          supervisionId: this.projectForm.supervisionId,
          currentSubcontractorNum: this.projectForm.currentSubcontractorNum,
          currentWorkerNum: this.projectForm.currentWorkerNum,
          projectScale: this.projectForm.projectScale,
          actualStartTime: api.changeDate(this.projectForm.actualStartTime),
          planCompletionTime: api.changeDate(this.projectForm.planCompletionTime),
        }
        updateApi.updateProject(list).then(response => {
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