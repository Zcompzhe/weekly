<template>
  <div class="body">
    <el-card class="box-card">
      <el-form
        :model="ruleForm1"
        :rules="rules1"
        ref="ruleForm1"
        label-width="140px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="10">
            <div class="bar">
              <el-form-item label="周报开始日期" prop="weeklyStartTime" placeholder="周报开始日期">
                <el-date-picker
                  v-model="ruleForm1.weeklyStartTime"
                  type="date"
                  placeholder="选择日期时间"
                  style="min-width:300px"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="10">
            <div class="bar">
              <el-form-item label="当前月份" prop="currentMonth" placeholder="当前月份">
                <el-date-picker
                  v-model="ruleForm1.currentMonth"
                  type="month"
                  placeholder="请选择当前月份"
                  style="min-width:300px"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <el-card class="box-card">
      <el-form
        :model="ruleForm2"
        :rules="rules2"
        ref="ruleForm2"
        label-width="110px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="项目名称" prop="projectId" placeholder="请选择项目名称">
                <el-input
                  v-model="ruleForm2.projectId"
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
                  v-model="ruleForm2.adminId"
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
                  v-model="ruleForm2.supervisionId"
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
                  v-model="ruleForm2.constructDept"
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
              <el-form-item label="所在区域" prop="districtId" placeholder="请输入项目所在区域">
                <el-select
                  v-model="ruleForm2.districtId"
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
                  v-model="ruleForm2.detailedAddress"
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
                  v-model="ruleForm2.actualStartTime"
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
                  v-model="ruleForm2.planCompletionTime"
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
                  v-model="ruleForm2.projectScale"
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
              <el-form-item label="一线作业人数" prop="currentWorkerNum" placeholder="请输入一线作业人数">
                <el-input
                  v-model="ruleForm2.currentWorkerNum"
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
                  v-model="ruleForm2.currentSubcontractorNum"
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
              <el-form-item label="项管部门" prop="dept" placeholder="请选择实际状态">
                <el-select
                  v-model="ruleForm2.adminDept"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in adminDeptOptions"
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

    <el-card class="box-card">
      <el-form
        :model="ruleForm3"
        :rules="rules3"
        ref="ruleForm3"
        label-width="140px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目经理" prop="projectManagerId" placeholder="请选择">
                <el-select
                  v-model="ruleForm3.projectManagerId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in projectManagerIdOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="安全专职" prop="safetyStaffId" placeholder="请选择">
                <el-select
                  v-model="ruleForm3.safetyStaffId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in safetyStaffIdOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="质量专职" prop="qualityStaffId" placeholder="请选择">
                <el-select
                  v-model="ruleForm3.qualityStaffId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in qualityStaffIdOptions"
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
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="总监/总监代表" prop="chiefInspectorId" placeholder="请选择">
                <el-select
                  v-model="ruleForm3.chiefInspectorId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in chiefInspectorIdOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="安全监理" prop="safetySupervisorId" placeholder="请选择">
                <el-select
                  v-model="ruleForm3.safetySupervisorId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in safetySupervisorIdOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="专业监理" prop="professionalSupervisorId" placeholder="请选择">
                <el-select
                  v-model="ruleForm3.professionalSupervisorId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in professionalSupervisorIdOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <el-card class="box-card">
      <el-form
        :model="ruleForm4"
        :rules="rules4"
        ref="ruleForm4"
        label-width="150px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="当前总体施工进度" prop="currentProgressId" placeholder="请选择">
                <el-select
                  v-model="ruleForm4.currentProgressId"
                  clearable
                  placeholder="请选择"
                  style="min-width:220px"
                >
                  <el-option
                    v-for="item in currentProgressIdOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="实际状态" prop="actualState" placeholder="请选择">
                <el-select
                  v-model="ruleForm4.actualState"
                  clearable
                  placeholder="请选择"
                  style="min-width:220px"
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

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="管控内状态" prop="controlledState" placeholder="请选择">
                <el-select
                  v-model="ruleForm4.controlledState"
                  clearable
                  placeholder="请选择"
                  style="min-width:220px"
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
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="下周是否有作业" prop="hasWorkNextWeek" placeholder="请选择">
                <el-radio-group v-model="ruleForm4.hasWorkNextWeek" style="margin-left:30px">
                  <el-radio :label="true">是</el-radio>
                  <el-radio :label="false">否</el-radio>
                </el-radio-group>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="是否有三级以上风险" prop="hasThreePlusRiskWork" placeholder="请选择">
                <el-radio-group v-model="ruleForm4.hasThreePlusRiskWork" style="margin-left:30px">
                  <el-radio :label="true">是</el-radio>
                  <el-radio :label="false">否</el-radio>
                </el-radio-group>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="下周主要施工内容" prop="workContentNextWeek" placeholder="请选择">
                <el-input
                  v-model="ruleForm4.workContentNextWeek"
                  clearable
                  type="textarea"
                  :rows="5"
                  placeholder="请选择"
                  style="min-width:400px"
                  @change="workContentNextWeekChanged"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="bar">
            <el-button
              v-if="flag===false"
              type="primary"
              style="margin-right: 20px"
              @click="addOneLine"
              disabled
            >添加条目</el-button>
            <el-button v-else type="primary" style="margin-right: 20px" @click="addOneLine">添加条目</el-button>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click="deleteLines">删除条目</el-button>
          </div>
        </el-col>
      </el-row>
      <el-table
        :data="tableData"
        max-height="400"
        border
        @selection-change="isChanged"
        :stripe="true"
        :highlight-current-row="true"
        style="width: 100%; margin-top: 20px"
        id="out-table"
      >
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="300" prop="riskLevel" label="风险等级" align="center">
          <template slot-scope="scope">
            <el-select size="medium" v-model="scope.row.riskLevel">
              <el-option
                v-for="item in riskLevelOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column width="500" prop="workContentNextWeek" label="下周作业安排、位置及内容" align="center">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.workContentNextWeek"
              clearable
              :rows="1"
              placeholder="请输入"
              style="min-width:400px"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column width="229" prop="workStartTime" label="作业开始时间" align="center">
          <template slot-scope="scope">
            <el-date-picker
              v-model="scope.row.workStartTime"
              type="date"
              placeholder="选择日期时间"
              style="width:180px"
            ></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column width="230" prop="workEndTime" label="作业结束时间" align="center">
          <template slot-scope="scope">
            <el-date-picker
              v-model="scope.row.workEndTime"
              type="date"
              placeholder="选择日期时间"
              style="width:180px"
            ></el-date-picker>
          </template>
        </el-table-column>
      </el-table>
      <el-row :gutter="20" style="margin-top:30px">
        <el-col :span="3" style="margin-left:40%">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click="add">确认添加</el-button>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click>取消</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <br />
  </div>
</template>

<script>
import { POINT_CONVERSION_COMPRESSED } from "constants";
export default {
  data() {
    return {
      flag: false,
      anyChanged: [],
      count: 1,
      riskLevelOptions: [
        {
          id: 1,
          name: "一级风险"
        },
        {
          id: 2,
          name: "二级风险"
        },
        {
          id: 3,
          name: "三级风险"
        }
      ],
      adminIdOptions: [],
      supervisionIdOptions: [],
      districtIdOptions: [],
      adminDeptOptions: [],
      projectManagerIdOptions: [
        {
          id: 1,
          name: "经理A"
        },
        {
          id: 2,
          name: "经理B"
        }
      ],
      safetyStaffIdOptions: [
        {
          id: 1,
          name: "安全专职A"
        }
      ],
      qualityStaffIdOptions: [
        {
          id: 1,
          name: "质量专职A"
        }
      ],
      chiefInspectorIdOptions: [
        {
          id: 1,
          name: "总监A"
        }
      ],
      safetySupervisorIdOptions: [
        {
          id: 1,
          name: "安全监理A"
        }
      ],
      professionalSupervisorIdOptions: [
        {
          id: 1,
          name: "专业监理A"
        }
      ],
      currentProgressIdOptions: [
        {
          id: 1,
          name: "50%"
        }
      ],
      actualStateOptions: [],
      controlledStateOptions: [],
      tableData: [],
      ruleForm1: {},
      rules1: {
        weeklyStartTime: [
          { required: true, message: "请选择周报开始日期", trigger: "change" }
        ],
        currentMonth: [
          { required: true, message: "请选择当前月份", trigger: "change" }
        ]
      },
      ruleForm2: {},
      rules2: {
        projectId: [
          { required: true, message: "请输入项目名称", trigger: "blur" }
        ],
        adminId: [
          { required: true, message: "请选择建设管理单位", trigger: "change" }
        ],
        supervisionId: [
          { required: true, message: "请选择监理单位", trigger: "change" }
        ],
        constructDept: [
          { required: true, message: "请输入施工单位", trigger: "blur" }
        ],
        districtId: [
          { required: true, message: "请选择所在区域", trigger: "change" }
        ],
        detailedAddress: [
          { required: true, message: "请输入详细地址", trigger: "blur" }
        ],
        actualStartTime: [
          { required: true, message: "请选择实际开工时间", trigger: "change" }
        ],
        planCompletionTime: [
          { required: true, message: "请选择计划竣工时间", trigger: "change" }
        ],
        projectScale: [
          { required: true, message: "请输入项目规模", trigger: "blur" }
        ],
        currentWorkerNum: [
          { required: true, message: "请输入一线作业人数", trigger: "blur" }
        ],
        currentSubcontractorNum: [
          { required: true, message: "请输入当前分包人数", trigger: "blur" }
        ],
        adminDept: [
          { required: true, message: "请选择项管部门", trigger: "change" }
        ]
      },
      ruleForm3: {},
      rules3: {
        projectManagerId: [
          { required: true, message: "请选择项目经理", trigger: "change" }
        ],
        safetyStaffId: [
          { required: true, message: "请选择安全专职", trigger: "change" }
        ],
        qualityStaffId: [
          { required: true, message: "请选择质量专职", trigger: "change" }
        ],
        chiefInspectorId: [
          { required: true, message: "请选择总监/总监代表", trigger: "change" }
        ],
        safetySupervisorId: [
          { required: true, message: "请选择安全监理", trigger: "change" }
        ],
        professionalSupervisorId: [
          { required: true, message: "请选择专业监理", trigger: "change" }
        ]
      },
      ruleForm4: {},
      rules4: {
        currentProgressId: [
          { required: true, message: "请选择项目经理", trigger: "change" }
        ],
        actualState: [
          { required: true, message: "请选择项目经理", trigger: "change" }
        ],
        controlledState: [
          { required: true, message: "请选择项目经理", trigger: "change" }
        ],
        workContentNextWeek: [
          { required: true, message: "请选择项目经理", trigger: "change" }
        ],
        hasWorkNextWeek: [
          { required: true, message: "请选择项目经理", trigger: "change" }
        ],
        hasThreePlusRiskWork: [
          { required: true, message: "请选择项目经理", trigger: "blur" }
        ]
      }
    };
  },

  created() {
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
    //获取项管部门
    this.$axios
      .get(
        `${window.$config.HOST}/baseInfoManagement/getAllProjectAdminDeptEnum`
      )
      .then(response => {
        response.data.forEach(element => {
          this.adminDeptOptions.push({
            name: element
          });
        });
      })
      .catch(error => {
        this.$message({
          message: "获取项管部门失败！",
          type: "error"
        });
      });
  },

  methods: {
    workContentNextWeekChanged() {
      if (this.ruleForm.workContentNextWeek != "") {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
    //删除条目
    deleteLines() {
      this.anyChanged.forEach(i => {
        let index = 0;
        this.tableData.forEach(j => {
          if (i.indexNum === j.indexNum) {
            this.tableData.splice(index, 1);
          }
          index = index + 1;
        });
      });
    },
    //选中
    isChanged(val) {
      this.anyChanged = val;
    },
    //添加
    add() {

      let max = 0;
      this.tableData.forEach(element => {
        if (element.riskLevel > max) max = element.riskLevel;
      });
      let list = {
        adminId: this.ruleForm2.adminId,
        supervisionId: this.ruleForm2.supervisionId,
        constructDept: this.ruleForm2.constructDept,
        districtId: this.ruleForm2.districtId,
        detailedAddress: this.ruleForm2.detailedAddress,
        actualStartTime: this.changeDate(this.ruleForm2.actualStartTime),
        planCompletionTime: this.changeDate(this.ruleForm2.planCompletionTime),
        projectScale: this.ruleForm2.projectScale,
        currentWorkerNum: this.ruleForm2.currentWorkerNum,
        currentSubcontractorNum: this.ruleForm2.currentSubcontractorNum,
        adminDept: this.ruleForm2.adminDept,
        currentProgressId: this.ruleForm4.currentProgressId,
        hasWorkNextWeek: this.ruleForm4.hasWorkNextWeek,
        workContentNextWeek: this.ruleForm4.workContentNextWeek,
        hasThreePlusRiskWork: this.ruleForm4.hasThreePlusRiskWork,
        actualState: this.ruleForm4.actualState,
        controlledState: this.ruleForm4.controlledState,
        monthStartTime: this.changeDate(this.ruleForm1.currentMonth),
        weeklyStartTime: this.changeDate(this.ruleForm1.weeklyStartTime),
        projectManagerId: this.ruleForm3.projectManagerId,
        safetyStaffId: this.ruleForm3.safetyStaffId,
        qualityStaffId: this.ruleForm3.qualityStaffId,
        chiefInspectorId: this.ruleForm3.chiefInspectorId,
        safetySupervisorId: this.ruleForm3.safetySupervisorId,
        professionalSupervisorId: this.ruleForm3.professionalSupervisorId,
        inherentRisk: max
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
              message: response.data.returnBackInfo,
              type: "success"
            });
          } else if (response.data.returnBackCode === 0) {
            this.$message({
              message: response.data.returnBackInfo,
              type: "Warn"
            });
          } else {
            this.$message({
              message: response.data.returnBackInfo,
              type: "error"
            });
          }
        })
        .catch(error => {
          this.$message({
            message: "添加失败，出现了未知的错误！",
            type: "error"
          });
        });
    },
    //添加条目
    addOneLine() {
      if (this.ruleForm.hasThreePlusRiskWork === false) {
        this.riskLevelOptions = [
          {
            id: 1,
            name: "一级风险"
          },
          {
            id: 2,
            name: "二级风险"
          }
        ];
      }
      this.tableData.push({
        indexNum: this.count
      });
      this.count = this.count + 1;
    },
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
        path: `/weekly/weeklyDataManage`,
        query: {}
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