<template>
  <div class="body">
    <el-card class="box-card">
      <el-form
        :model="addFormOne"
        label-position="left"
        :rules="addFormOneRule"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="周报开始日期" prop="weeklyStartTime" placeholder="周报开始日期">
                <el-date-picker
                  v-model="addFormOne.weeklyStartTime"
                  type="date"
                  placeholder="选择日期时间"
                  style="min-width:200px"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="当前月份" prop="monthStartTime" placeholder="当前月份">
                 <el-input
                  v-model="addFormOne.monthStartTime"
                  clearable
                  :rows="1"
                  placeholder="请选择"
                  style="min-width:200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="本月周数" prop="currentMonthWeek" placeholder="周报开始日期">
                 <el-input
                  v-model="addFormOne.currentMonthWeek"
                  clearable
                  :rows="1"
                  placeholder="请选择"
                  style="min-width:200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="当前周次" prop="currentWeek" placeholder="周报开始日期">
                 <el-input
                  v-model="addFormOne.currentWeek"
                  clearable
                  :rows="1"
                  placeholder="请选择"
                  style="min-width:200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-form
        :model="addFormTwo"
        label-position="left"
        :rules="addFormTwoRule"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目名称" prop="id" placeholder="项目名称">
                <el-select
                  v-model="addFormTwo.id"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in addFormTwo.options.idOptions"
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
              <el-form-item label="建设管理单位" prop="adminId" placeholder="当前月份">
                <el-select
                  v-model="addFormTwo.adminId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in addFormTwo.options.adminIdOptions"
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
              <el-form-item label="监理单位" prop="supervisionId" placeholder="周报开始日期">
                <el-select
                  v-model="addFormTwo.supervisionId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in addFormTwo.options.supervisionIdOptions"
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
              <el-form-item label="施工单位" prop="constructDept" placeholder="周报开始日期">
                <el-input
                  v-model="addFormTwo.constructDept"
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
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="所在区域" prop="districtId" placeholder="项目名称">
                <el-select
                  v-model="addFormTwo.districtId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in addFormTwo.options.districtIdOptions"
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
              <el-form-item label="详细地址" prop="detailedAddress" placeholder="当前月份">
                <el-input
                  v-model="addFormTwo.detailedAddress"
                  clearable
                  :rows="1"
                  placeholder="请选择"
                  style="min-width:200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="定位经度" prop="longitude" placeholder="周报开始日期">
                <el-input
                  v-model="addFormTwo.longitude"
                  clearable
                  :rows="1"
                  placeholder="请选择"
                  style="min-width:200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="定位纬度" prop="latitude" placeholder="周报开始日期">
                <el-input
                  v-model="addFormTwo.latitude"
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
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="实际开工时间" prop="actualStartTime" placeholder="项目名称">
                <el-date-picker
                  v-model="addFormOne.actualStartTime"
                  type="date"
                  placeholder="选择日期时间"
                  style="min-width:200px"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="计划竣工时间" prop="planCompletionTime" placeholder="当前月份">
                <el-date-picker
                  v-model="addFormOne.planCompletionTime"
                  type="date"
                  placeholder="选择日期时间"
                  style="min-width:200px"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目规模" prop="projectScale" placeholder="周报开始日期">
                <el-input
                  v-model="addFormTwo.projectScale"
                  clearable
                  :rows="1"
                  placeholder="请选择"
                  style="min-width:200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="一线作业人数" prop="currentWorkerNum" placeholder="周报开始日期">
                <el-input
                  v-model="addFormTwo.currentWorkerNum"
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
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="当前分包人数" prop="currentSubcontractorNum" placeholder="项目名称">
                <el-input
                  v-model="addFormTwo.currentSubcontractorNum"
                  clearable
                  :rows="1"
                  placeholder="请选择"
                  style="min-width:200px"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项管部门" prop="adminDept" placeholder="当前月份">
                <el-select
                  v-model="addFormTwo.adminDept"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in addFormTwo.options.adminDeptOptions"
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
        :model="addFormThree"
        label-position="left"
        :rules="addFormThree"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目经理" prop="projectManagerId" placeholder="项目名称">
                <el-select
                  v-model="addFormThree.projectManagerId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in addFormThree.options.projectManagerIdOptions"
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
              <el-form-item label="安全专责" prop="safetyStaffId" placeholder="当前月份">
                <el-select
                  v-model="addFormThree.safetyStaffId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in addFormThree.options.safetyStaffIdOptions"
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
              <el-form-item label="质量专责" prop="qualityStaffId" placeholder="周报开始日期">
                <el-select
                  v-model="addFormThree.qualityStaffId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in addFormThree.options.qualityStaffIdOptions"
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
              <el-form-item label="总监/总监代表" prop="chiefInspectorId" placeholder="项目名称">
                <el-select
                  v-model="addFormThree.chiefInspectorId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in addFormThree.options.chiefInspectorIdOptions"
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
              <el-form-item label="安全监理" prop="safetySupervisorId" placeholder="当前月份">
                <el-select
                  v-model="addFormThree.safetySupervisorId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in addFormThree.options.safetySupervisorIdOptions"
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
              <el-form-item label="专业监理" prop="professionalSupervisorId" placeholder="周报开始日期">
                <el-select
                  v-model="addFormThree.professionalSupervisorId"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in addFormThree.options.professionalSupervisorIdOptions"
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
      <el-button
        type="primary"
        style="margin-right: 20px"
        @click="addOneLineWeeklyWorkProgressAddReqs"
      >添加条目</el-button>
      <el-button
        type="primary"
        style="margin-right: 20px"
        @click="deleteLinesWeeklyWorkProgressAddReqs"
      >添加条目</el-button>
      <br />
      <br />
      <el-table :data="addFormFour.weeklyWorkProgressAddReqs" border>
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="400" prop="jobNumber" label="工程编号" align="center">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.jobNumber"
              clearable
              :rows="1"
              placeholder="请选择"
              style="min-width:300px"
            ></el-input>
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
      <el-checkbox v-model="addFormFour.hasWorkNextWeek" style="margin-left:20px">下周是否有作业</el-checkbox>
      <el-button
        type="primary"
        style="margin-left:50px;margin-right: 20px"
        @click="addOneLineWeeklyConstructContentAddReqs"
      >添加条目</el-button>
      <el-button
        type="primary"
        style="margin-right: 20px"
        @click="deleteLinesWeeklyConstructContentAddReqs"
      >添加条目</el-button>
      <br />
      <br />
      <el-table :data="addFormFour.weeklyConstructContentAddReqs" border>
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="400" prop="jobNumber" label="工程编号" align="center">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.jobNumber"
              clearable
              :rows="1"
              placeholder="请选择"
              style="min-width:300px"
            ></el-input>
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
      <el-checkbox v-model="addFormFour.hasThreePlusRiskWork" style="margin-left:20px">是否有三级以上风险</el-checkbox>
      <el-button
        type="primary"
        style="margin-left:50px;margin-right: 20px"
        @click="addOneLineWeeklyRiskContentAddReqs"
      >添加条目</el-button>
      <el-button
        type="primary"
        style="margin-right: 20px"
        @click="deleteLinesWeeklyRiskContentAddReqs"
      >添加条目</el-button>
      <br />
      <br />
      <el-table :data="addFormFour.weeklyConstructContentAddReqs" border>
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="400" prop="workProcess" label="工序" align="center">
          <template slot-scope="scope">
            <el-cascader
              v-model="scope.row.workProcess"
              :options="addFormFour.options.workProcessOptions"
              @change="workProcessChanged(scope.row.row)"
            ></el-cascader>
          </template>
        </el-table-column>
        <el-table-column prop="riskLevel" label="风险等级" align="center"></el-table-column>
        <el-table-column prop="workContent" label="下周作业安排、位置及内容" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.workContent" clearable :rows="1" placeholder="请选择"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="workStartTime" label="作业开始时间" align="center">
          <template slot-scope="scope">
            <el-date-picker
              v-model="scope.row.workStartTime"
              type="date"
              placeholder="选择日期时间"
              style="min-width:200px"
            ></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column prop="workEndTime" label="作业结束时间" align="center">
          <template slot-scope="scope">
            <el-date-picker
              v-model="scope.row.workEndTime"
              type="date"
              placeholder="选择日期时间"
              style="min-width:200px"
            ></el-date-picker>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-card class="box-card">
      <el-form
        :model="addFormFive"
        label-position="left"
        :rules="addFormFiveRule"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="实际状态" prop="actualState" placeholder="当前月份">
                <el-select
                  v-model="addFormFive.actualState"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in addFormFive.options.actualStateOptions"
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
              <el-form-item label="管控内状态" prop="controlledState" placeholder="周报开始日期">
                <el-select
                  v-model="addFormFive.controlledState"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in addFormFive.options.controlledStateOptions"
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

    <br />
  </div>
</template>

<script>
import { POINT_CONVERSION_COMPRESSED } from "constants";
export default {
  data() {
    return {
      //添加周报
      addFormOne: {
        weeklyStartTime: "",
        monthStartTime: "",
        currentMonthWeek: "",
        currentWeek: ""
      },
      addFormOneRule: {},
      //添加周报——项目信息
      addFormTwo: {
        id: "",
        adminId: "",
        supervisionId: "",
        constructDept: "",
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
          districtIdOptions: {},
          adminDeptOptions: {}
        }
      },
      addFormTwoRule: {},
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
      addFormThreeRule: {},
      //添加周报——工程表格信息
      addFormFour: {
        //当前施工进度
        weeklyWorkProgressAddReqs: [
          {
            jobNumber: "工程编号1",
            currentProgress: "进度1"
          },
          {
            jobNumber: "工程编号2",
            currentProgress: "进度2"
          }
        ],
        //下周是否有作业
        hasWorkNextWeek: false,
        //下周主要施工内容
        weeklyConstructContentAddReqs: [],
        //是否有三级以上风险
        hasThreePlusRiskWork: false,
        //风险作业内容
        weeklyRiskContentAddReqs: [],
        options: {
          workProcessOptions: []
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
      addFormFiveRule: {}
    };
  },

  methods: {
    //增加一行施工进度
    addOneLineWeeklyWorkProgressAddReqs() {},
    //删除选中多行施工进度
    deleteLinesWeeklyWorkProgressAddReqs() {},
    //增加一行施工内容
    addOneLineWeeklyConstructContentAddReqs() {},
    //删除选中多行施工内容
    deleteLinesWeeklyConstructContentAddReqs() {},
    //增加一行风险
    addOneLineWeeklyRiskContentAddReqs() {},
    //删除选中多行风险
    deleteLinesWeeklyRiskContentAddReqs() {},
    //当某一行的工序值发生改变时，风险等级相应变化
    workProcessChanged(row) {}
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