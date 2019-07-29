<template>
  <div class="body">
    <el-card class="box-card">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <span class="Mtitle">添加项目信息</span>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="项目名称" prop="projectId" placeholder="请选择项目名称">
                <el-input
                  v-model="ruleForm.projectId"
                  clearable
                  :rows="1"
                  placeholder="请选择"
                  style="min-width:200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="建设管理单位" prop="adminId" placeholder="请选择建设管理单位">
                <el-select
                  v-model="ruleForm.adminId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in adminIdOptions"
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
              <el-form-item label="监理单位" prop="supervisionId" placeholder="请选择监理单位">
                <el-select
                  v-model="ruleForm.supervisionId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in supervisionIdOptions"
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
              <el-form-item label="施工单位" prop="constructDept" placeholder="请输入施工单位">
                <el-input
                  v-model="ruleForm.constructDept"
                  clearable
                  :rows="1"
                  placeholder="请选择"
                  style="min-width:200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="项目所在区域" prop="districtId" placeholder="请输入项目所在区域">
                <el-select
                  v-model="ruleForm.districtId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in districtIdOptions"
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
              <el-form-item label="详细地址" prop="detailedAddress" placeholder="请输入详细地址">
                <el-input
                  v-model="ruleForm.detailedAddress"
                  clearable
                  :rows="1"
                  placeholder="请选择"
                  style="min-width:200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="实际开工时间" prop="actualStartTime" placeholder="请选择实际开工时间">
                <el-date-picker
                  v-model="ruleForm.actualStartTime"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  style="min-width:200px"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="计划竣工时间" prop="planCompletionTime" placeholder="请选择计划竣工时间">
                <el-date-picker
                  v-model="ruleForm.planCompletionTime"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  style="min-width:200px"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>

        
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="项目规模" prop="projectScale" placeholder="请输入项目规模">
                <el-input
                  v-model="ruleForm.projectScale"
                  clearable
                  :rows="1"
                  placeholder="请选择"
                  style="min-width:200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          

          <el-col :span="6">
            <div class="bar">
              <el-form-item label="当前施工进度" prop="currentProgress" placeholder="请输入当前总体施工进度">
                <el-select
                  v-model="ruleForm.currentProgress"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in currentProgressOptions"
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
              <el-form-item label="一线作业人数" prop="currentWorkerNum" placeholder="请输入一线作业人数">
                <el-input
                  v-model="ruleForm.currentWorkerNum"
                  clearable
                  :rows="1"
                  placeholder="请选择"
                  style="min-width:200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="当前分包人数" prop="currentSubcontractorNum" placeholder="请输入当前分包人员数">
                <el-input
                  v-model="ruleForm.currentSubcontractorNum"
                  clearable
                  :rows="1"
                  placeholder="请选择"
                  style="min-width:200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="所属部门" prop="dept" placeholder="请选择实际状态">
                <el-select
                  v-model="ruleForm.dept"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in deptOptions"
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
              <el-form-item label="实际状态" prop="actualState" placeholder="请选择实际状态">
                <el-select
                  v-model="ruleForm.actualState"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in actualStateOptions"
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
              <el-form-item label="管控内状态" prop="controlledState" placeholder="管控内状态">
                <el-select
                  v-model="ruleForm.controlledState"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in controlledStateOptions"
                    :key="item.name"
                    :label="item.name"
                    :value="item.name"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <br />

    <el-card class="box-card">
      <el-form
        :model="ruleForm1"
        :rules="rules1"
        ref="ruleForm1"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div class="title" style="margin-left:49%;font-size:18px">建设管理单位责任人信息</div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="项目经理" prop="projectManager" placeholder="请选择项目经理">
                <el-select
                  v-model="ruleForm1.projectManager"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in projectManagerOptions"
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
              <el-form-item label="安全专职" prop="safetyStaff" placeholder="请选择安全专职">
                <el-select
                  v-model="ruleForm1.safetyStaff"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in safetyStaffOptions"
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
              <el-form-item label="质量专职" prop="qualityStaff" placeholder="请选择质量专职">
                <el-select
                  v-model="ruleForm1.qualityStaff"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in qualityStaffOptions"
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
          <el-col :span="20">
            <div class="bar">
              <div class="title" style="margin-left:49%;font-size:18px">监理单位责任人信息</div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="总监/总监代表" prop="chiefInspector" placeholder="请选择总监/总监代表">
                <el-select
                  v-model="ruleForm1.chiefInspector"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in chiefInspectorOptions"
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
              <el-form-item label="专业监理" prop="professionalSupervisor" placeholder="请选择专业监理">
                <el-select
                  v-model="ruleForm1.professionalSupervisor"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in professionalSupervisorOptions"
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
              <el-form-item label="安全监理" prop="safetySupervisor" placeholder="请选择安全监理">
                <el-select
                  v-model="ruleForm1.safetySupervisor"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in safetySupervisorOptions"
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
          <el-col :span="20">
            <div class="Mbutton">
              <el-col :span="6">
                <el-button type="primary" @click="addProject">确认添加</el-button>
              </el-col>
              <el-col :span="6">
                <el-button type="primary" @click="goback">取消</el-button>
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
export default {
  data() {
    return {
      ruleForm1:{
        qualityStaff:"",
        safetyStaff:"",
        projectManager:"",
        safetySupervisor:"",
        professionalSupervisor:"",
        chiefInspector:"",
        
      },
      professionalSupervisorOptions:[],
      safetySupervisorOptions:[],
      chiefInspectorOptions:[],
      qualityStaffOptions:[],
      safetyStaffOptions:[],
      projectManagerOptions:[],
      isMajorProjectOptions: [
        {
          value: true,
          name: "是"
        },
        {
          value: false,
          name: "否"
        }
      ],
      projectIdOptions: [],
      weekCountOptions: [
        {
          weekCount: 1
        },
        {
          weekCount: 2
        },
        {
          weekCount: 3
        },
        {
          weekCount: 4
        }
      ],
      rules: {
        customerName: [
          { required: true, message: "请输入客户名称", trigger: "blur" }
        ],
        brandName: [
          { required: true, message: "请输入品牌名称", trigger: "blur" }
        ],
        rangeName: [
          { required: true, message: "请输入系列名称", trigger: "blur" }
        ],
        planType: [
          { required: true, message: "请输入计划类型", trigger: "blur" }
        ],
        planObjectName: [
          { required: true, message: "请输入计划对象", trigger: "blur" }
        ],
        topPlanName: [
          { required: true, message: "请输入上级计划", trigger: "blur" }
        ],
        planName: [
          { required: true, message: "请输入计划名称", trigger: "blur" }
        ],
        projectType: [
          { required: true, message: "请选择项目类型", trigger: "change" }
        ],
        quantity: [
          { required: true, message: "请输入计划款数", trigger: "blur" }
        ],
        date: [
          { required: true, message: "请选择起止时间", trigger: "change" }
        ],
        productDateType: [
          { required: true, message: "请选择日期类型", trigger: "change" }
        ],
        productDate: [
          { required: true, message: "请选择日期", trigger: "change" }
        ],
        planProductName: [
          { required: true, message: "请选择计划产品", trigger: "change" }
        ],
        planPropose: [
          { required: true, message: "请输入计划建议", trigger: "blur" }
        ],
        planDescribe: [
          { required: true, message: "请输入计划描述", trigger: "blur" }
        ],
        note: [{ required: false, message: "请输入计划建议", trigger: "blur" }]
      },

      ruleForm: {
        monthStartTime: "",
        projectId: "",
        adminId: "",
        supervisionId: "",
        constructDept: "",
        constructDeptEnterprise: "",
        projectLocation: "",
        districtId: "",
        detailedAddress: "",
        actualStartTime: "",
        planCompletionTime: "",
        projectScale: "",
        currentProgress: "",
        currentWorkerNum: "",
        currentSubcontractorNum: "",
        hasWorkNextWeek: false,
        workContentNextWeek: "",
        hasTowerErectionNextWeek: false,
        hasThirdLevelPlusWork: false,
        hasFourthLevelWork: false,
        itIsSupervisedByProvincialCompany: false,
        hasFifthLevelWork: false,
        thirdLevelPlusWorkContent: "",
        contactPerson: "",
        itIsMajorProject: "",
        note: "",
        actualState: "",
        controlledState: "",
        createTime: "",
        monthStartTime: "",
        weeklyStartTime: "",
        weekCount: "",
        inherentRisk: "",
        dynamicRisk: "",
        hasInspect: 0
      },
      adminIdOptions: [],
      supervisionIdOptions: [],
      districtIdOptions: [],
      constructDeptEnterpriseOptions: [],
      actualStateOptions: [],
      controlledStateOptions: []
    };
  },

  created() {
    //获得项目名称下拉框
    this.$axios
      .get(`${window.$config.HOST}/baseInfoManagement/getAllProjectBaseInfo`)
      .then(response => {
        this.projectIdOptions = response.data;
      })
      .catch(error => {
        this.$message({
          message: "获取项目信息失败！",
          type: "error"
        });
      });

    //获得建设管理单位
    this.$axios
      .get(`${window.$config.HOST}/baseInfoManagement/getAllAdministrativeDept`)
      .then(response => {
        this.adminIdOptions = response.data;
      })
      .catch(error => {
        this.$message({
          message: "获取建设管理单位失败！",
          type: "error"
        });
      });

    //获得监理单位
    this.$axios
      .get(`${window.$config.HOST}/baseInfoManagement/getAllSupervisionDept`)
      .then(response => {
        this.supervisionIdOptions = response.data;
      })
      .catch(error => {
        this.$message({
          message: "获取监理单位失败！",
          type: "error"
        });
      });

    //获得区域信息
    this.$axios
      .get(`${window.$config.HOST}/baseInfoManagement/getAllDistrictName`)
      .then(response => {
        this.districtIdOptions = response.data;
      })
      .catch(error => {
        this.$message({
          message: "获取区域信息失败！",
          type: "error"
        });
      });

    //获取施工单位是否为系统内集体企业的枚举
    this.$axios
      .get(
        `${window.$config.HOST}/baseInfoManagement/getAllProjectConstructDeptEnum`
      )
      .then(response => {
        response.data.forEach(element => {
          this.constructDeptEnterpriseOptions.push({
            name: element
          });
        });
      })
      .catch(error => {
        this.$message({
          message: "获取施工单位类型失败！",
          type: "error"
        });
      });

    //获取实际状态
    this.$axios
      .get(
        `${window.$config.HOST}/baseInfoManagement/getAllProjectActualStateEnum`
      )
      .then(response => {
        response.data.forEach(element => {
          this.actualStateOptions.push({
            name: element
          });
        });
      })
      .catch(error => {
        this.$message({
          message: "获取实际状态失败！",
          type: "error"
        });
      });

    //获取管控状态
    this.$axios
      .get(
        `${window.$config.HOST}/baseInfoManagement/getAllProjectControlledStateEnum`
      )
      .then(response => {
        response.data.forEach(element => {
          this.controlledStateOptions.push({
            name: element
          });
        });
      })
      .catch(error => {
        this.$message({
          message: "获取管控状态失败！",
          type: "error"
        });
      });
  },

  methods: {
    // 改变日期格式
    changeDate(date) {
      if (!date) {
        return undefined;
      } else {
        // var date = new Date(date);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        var d = date.getDate();
        d = d < 10 ? "0" + d : d;
        return y + "-" + m + "-" + d;
      }
    },
    goback() {
      this.$router.push({
        path: `/project/projectInfoMana`,
        query: {}
      });
    },
    addWeekly() {
      let list = {
        projectId: this.ruleForm.projectId,
        adminId: this.ruleForm.adminId,
        supervisionId: this.ruleForm.supervisionId,
        constructDept: this.ruleForm.constructDept,
        constructDeptEnterprise: this.ruleForm.constructDeptEnterprise,
        projectLocation: this.ruleForm.projectLocation,
        districtId: this.ruleForm.districtId,
        detailedAddress: this.ruleForm.detailedAddress,
        actualStartTime: this.changeDate(this.ruleForm.actualStartTime),
        planCompletionTime: this.changeDate(this.ruleForm.planCompletionTime),
        projectScale: this.ruleForm.projectScale,
        currentProgress: this.ruleForm.currentProgress,
        currentSubcontractorNum: this.ruleForm.currentSubcontractorNum,
        hasWorkNextWeek: this.ruleForm.hasWorkNextWeek,
        workContentNextWeek: this.ruleForm.workContentNextWeek,
        hasTowerErectionNextWeek: this.ruleForm.hasTowerErectionNextWeek,
        hasThirdLevelPlusWork: this.ruleForm.hasThirdLevelPlusWork,
        hasFourthLevelWork: this.ruleForm.hasFourthLevelWork,
        hasFifthLevelWork: this.ruleForm.hasFifthLevelWork,
        thirdLevelPlusWorkContent: this.ruleForm.thirdLevelPlusWorkContent,
        contactPerson: this.ruleForm.contactPerson,
        itIsMajorProject: this.ruleForm.itIsMajorProject,
        itIsSupervisedByProvincialCompany: this.ruleForm
          .itIsSupervisedByProvincialCompany,
        note: this.ruleForm.note,
        actualState: this.ruleForm.actualState,
        controlledState: this.ruleForm.controlledState,
        monthStartTime: this.changeDate(this.ruleForm.monthStartTime),
        weeklyStartTime: this.changeDate(this.ruleForm.weeklyStartTime),
        weekCount: this.ruleForm.weekCount
      };

      console.log(list);
      this.$axios
        .post(
          `${window.$config.HOST}/projectWeeklyManagement/addProjectWeekly`,
          list
        )
        .then(response => {
          if (response.data.returnBackCode === 1) {
            this.$message({
              message: "添加成功!",
              type: "success"
            });
          } else {
            this.$message({
              message: "添加失败：" + response.data.returnBackInfo,
              type: "error"
            });
          }
        })
        .catch(error => {
          this.$message({
            message: "添加出现未知的错误！",
            type: "error"
          });
        });
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