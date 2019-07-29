<template>
  <div class="body">
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="bar">
            <div class="title">周报开始时间</div>
            <el-date-picker
              v-model="weeklyStartTime"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
              style="min-width:260px"
            ></el-date-picker>
          </div>
        </el-col>
        <el-col :span="6" style="margin-left:80px">
          <div class="bar">
            <el-button type="primary">查看周报</el-button>
            <el-button type="primary">查看月报</el-button>
          </div>
        </el-col>
        <el-col :span="6" style="margin-left:80px">
          <div class="bar">
            <el-button type="primary">上一个</el-button>
            <el-button type="primary">下一个</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="bar">
            <div class="title">项目名称</div>
            <el-select v-model="projectId" clearable placeholder="请选择" style="min-width:200px">
              <el-option
                v-for="item in projectIdOptions"
                :key="item.id"
                :label="item.projectId"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="bar">
            <div class="title">建设管理单位</div>
            <el-select v-model="adminId" clearable placeholder="请选择" style="min-width:200px">
              <el-option
                v-for="item in adminOptions"
                :key="item.id"
                :label="item.adminId"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="bar">
            <div class="title">下周是否有作业</div>
            <el-select
              v-model="hasWorkNextWeek"
              clearable
              placeholder="请选择"
              style="min-width:200px"
            >
              <el-option
                v-for="item in hasWorkNextWeekOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="bar">
            <div class="title">存在三级及以上风险</div>
            <el-select
              v-model="hasThirdLevelPlusWork"
              clearable
              placeholder="请选择"
              style="min-width:200px"
            >
              <el-option
                v-for="item in hasThirdLevelPlusWorkOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="6">
          <div class="bar">
            <div class="title">项管部门</div>
            <el-select v-model="adminDept" clearable placeholder="请选择" style="min-width:200px">
              <el-option
                v-for="item in adminDeptOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="bar">
            <div class="title">实际状态</div>
            <el-select v-model="actualState" clearable placeholder="请选择" style="min-width:200px">
              <el-option
                v-for="item in actualStateOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="bar">
            <div class="title">管控内状态</div>
            <el-select
              v-model="controlledState"
              clearable
              placeholder="请选择"
              style="min-width:200px"
            >
              <el-option
                v-for="item in controlledStateOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="bar">
            <div class="title">督查情况</div>
            <el-select v-model="supervision" clearable placeholder="请选择" style="min-width:200px">
              <el-option
                v-for="item in supervisionOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <el-button type="primary" style="margin-left: 20px" @click>搜索</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card">
      <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
        <el-col :span="2">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click="toAddWeekly">添加周报</el-button>
          </div>
        </el-col>
        <el-col :offset="1" :span="2">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click>删除周报</el-button>
          </div>
        </el-col>
      </el-row>
      <!-- <br />
      <hr />
      <br />-->

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
        <el-table-column width="300" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="300" prop="projectId" label="项目名称" align="center"></el-table-column>
        <el-table-column width="300" prop="adminId" label="建设管理单位" align="center"></el-table-column>
        <el-table-column width="300" prop="currentProgress" label="当前总体施工进度" align="center"></el-table-column>
        <el-table-column width="300" prop="workContentNextWeek" label="下周主要施工作业内容" align="center"></el-table-column>
        <el-table-column
          width="350"
          prop="hasThirdLevelPlusWork"
          label="下周的三级及以上风险作业安排、位置及内容"
          align="center"
        ></el-table-column>
        <el-table-column width="350" prop="projectManagementDept" label="项管部门" align="center"></el-table-column>
        <el-table-column width="300" prop="actualState" label="实际状态" align="center"></el-table-column>
        <el-table-column width="300" prop="controlledState" label="管控内状态" align="center"></el-table-column>
        <el-table-column width="300" prop="inherentRisk" label="固有风险" align="center"></el-table-column>
        <el-table-column width="300" prop="dynamicRisk" label="动态风险" align="center"></el-table-column>
        <el-table-column width="300" prop="supervision" label="督察情况" align="center"></el-table-column>

        <el-table-column width="200" label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="lookDetails">查看详情</el-button>
            <el-button type="text" @click>修改周报</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="70%" :modal="false">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">周报开始时间</div>
            <el-input
              v-model="ruleForm.weeklyStartTime"
              clearable
              :rows="1"
              :disabled="true"
              placeholder="请输入"
              style="min-width:200px"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">所属月份</div>
            <el-input
              v-model="ruleForm.currentMonth"
              clearable
              :rows="1"
              :disabled="true"
              placeholder="请输入"
              style="min-width:200px"
            ></el-input>
          </div>
        </el-col>
      </el-row>
      <br />
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="projectId" label="项目名称" width="180"></el-table-column>
        <el-table-column prop="adminId" label="建设管理单位" width="180"></el-table-column>
        <el-table-column prop="supervisionId" label="监理单位" width="180"></el-table-column>
        <el-table-column prop="constructDept" label="施工单位" width="180"></el-table-column>
        <el-table-column prop="districtId" label="项目所在区域" width="180"></el-table-column>
        <el-table-column prop="detailedAddress" label="详细地址" width="180"></el-table-column>
        <el-table-column prop="actualStartTime" label="实际开工时间" width="180"></el-table-column>
        <el-table-column prop="planCompletionTime" label="计划竣工时间" width="180"></el-table-column>
        <el-table-column prop="projectScale" label="项目规模" width="180"></el-table-column>
        <el-table-column prop="currentWorkerNum" label="一线作业人员数" width="180"></el-table-column>
        <el-table-column prop="currentSubcontractorNum" label="当前分包人员数" width="180"></el-table-column>
      </el-table>

      <br />
      <br />
      <br />
      <br />

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="adminDept" label="项管部门" width="180"></el-table-column>
        <el-table-column prop="currentProgressId" label="当前总体施工进度" width="180"></el-table-column>
        <el-table-column prop="hasWorkNextWeek" label="下周是否有作业" width="180"></el-table-column>
        <el-table-column prop="workContentNextWeek" label="下周主要施工作业内容" width="180"></el-table-column>
        <el-table-column prop="hasThreePlusRiskWork" label="是否有三级以上风险" width="180"></el-table-column>
        <el-table-column prop="actualState" label="实际状态" width="180"></el-table-column>
        <el-table-column prop="controlledState" label="管控内状态" width="180"></el-table-column>
        <el-table-column prop="inherentRisk" label="固有风险" width="180"></el-table-column>
        <el-table-column prop="dynamicRisk" label="动态风险" width="180"></el-table-column>
        <el-table-column prop="inspectState" label="督察情况" width="180"></el-table-column>
      </el-table>

      <br />
      <br />
      <br />
      <br />

      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%"
      >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column property="riskLevel" label="作业风险等级" width="120"></el-table-column>
        <el-table-column property="workContentNextWeek" label="下周作业安排、位置及内容" width="120"></el-table-column>
        <el-table-column property="workStartTime" label="作业开始时间"></el-table-column>
        <el-table-column property="workEndTime" label="作业结束时间"></el-table-column>
      </el-table>
      <br />
      <br />
      <br />
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="bar">
            <div class="title" style="margin-left:35%;font-size:18px">建设管理单位责任人信息</div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">项目经理</div>
            <el-input
              v-model="ruleForm.projectManagerId"
              clearable
              :disabled="true"
              :rows="1"
              placeholder="请选择"
              style="min-width:200px"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">联系方式</div>
            <el-input
              v-model="ruleForm.contactInformation1"
              clearable
              :disabled="true"
              :rows="1"
              placeholder="请选择"
              style="min-width:200px"
            ></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">安全专职</div>
            <el-input
              v-model="ruleForm.safetyStaffIdOptions"
              clearable
              :disabled="true"
              :rows="1"
              placeholder="请选择"
              style="min-width:200px"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">联系方式</div>
            <el-input
              v-model="ruleForm.contactInformation2"
              clearable
              :disabled="true"
              :rows="1"
              placeholder="请选择"
              style="min-width:200px"
            ></el-input>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">质量专职</div>
            <el-input
              v-model="ruleForm.qualityStaffIdOptions"
              clearable
              :disabled="true"
              :rows="1"
              placeholder="请选择"
              style="min-width:200px"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">联系方式</div>
            <el-input
              v-model="ruleForm.contactInformation3"
              clearable
              :disabled="true"
              :rows="1"
              placeholder="请选择"
              style="min-width:200px"
            ></el-input>
          </div>
        </el-col>
      </el-row>





      <el-row :gutter="20">
        <el-col :span="20">
          <div class="bar">
            <div class="title" style="margin-left:35%;font-size:18px">监理单位责任人信息</div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">总监/总监代表</div>
            <el-input
              v-model="ruleForm.chiefInspectorId"
              clearable
              :disabled="true"
              :rows="1"
              placeholder="请选择"
              style="min-width:200px"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">联系方式</div>
            <el-input
              v-model="ruleForm.contactInformation4"
              clearable
              :disabled="true"
              :rows="1"
              placeholder="请选择"
              style="min-width:200px"
            ></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">安全监理</div>
           
            <el-input
              v-model="ruleForm.safetySupervisorIdOptions"
              clearable
              :disabled="true"
              :rows="1"
              placeholder="请选择"
              style="min-width:200px"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">联系方式</div>
            <el-input
              v-model="ruleForm.contactInformation5"
              clearable
              :disabled="true"
              :rows="1"
              placeholder="请选择"
              style="min-width:200px"
            ></el-input>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">专业监理</div>
            <el-input
              v-model="ruleForm.professionalSupervisorIdOptions"
              clearable
              :disabled="true"
              :rows="1"
              placeholder="请选择"
              style="min-width:200px"
            ></el-input>
            
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">联系方式</div>
            <el-input
              v-model="ruleForm.contactInformation6"
              clearable
              :disabled="true"
              :rows="1"
              placeholder="请选择"
              style="min-width:200px"
            ></el-input>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  data() {
    return {
      projectManagerIdOptions: [],
      safetyStaffIdOptions: [],
      qualityStaffIdOptions: [],
      ruleForm: [],
      dialogVisible: false,
      tableData: [
        {
          id: 1,
          supervision: "啊啊啊",
          projectId: 2,
          adminId: 3,
          supervisionId: 4,
          constructDept: 5,
          isConstructDeptEnterprise: 6,
          projectLocation: 7,
          districtId: 8,
          detailedAddress: 9,
          actualStartTime: 10,
          planCompletionTime: 11,
          projectScale: 12,
          currentProgress: 13,
          currentWorkerNum: 14,
          currentSubcontractorNum: 15,
          hasWorkNextWeek: 16,
          workContentNextWeek: 17,
          hasTowerErectionNextWeek: 18,
          hasThirdLevelPlusWork: 19,
          hasFourthLevelWork: 20,
          hasFifthLevelWork: 21,
          thirdLevelPlusWorkContent: 22,
          contactPerson: 123,
          isMajorProject: 124,
          isSupervisedByProvincialCompany: 125,
          note: 126,
          actualState: 127,
          controlledState: 128,
          createTime: 129,
          monthStartTime: 130,
          weeklyStartTime: 131,
          weekCount: 132,
          inherentRisk: 133,
          dynamicRisk: 134,
          hasInspect: 135
        },
        {
          id: 1,
          projectId: 2,
          supervision: "啊啊啊",
          adminId: 3,
          supervisionId: 4,
          constructDept: 5,
          isConstructDeptEnterprise: 6,
          projectLocation: 7,
          districtId: 8,
          detailedAddress: 9,
          actualStartTime: 10,
          planCompletionTime: 11,
          projectScale: 12,
          currentProgress: 13,
          currentWorkerNum: 14,
          currentSubcontractorNum: 15,
          hasWorkNextWeek: 16,
          workContentNextWeek: 17,
          hasTowerErectionNextWeek: 18,
          hasThirdLevelPlusWork: 19,
          hasFourthLevelWork: 20,
          hasFifthLevelWork: 21,
          thirdLevelPlusWorkContent: 22,
          contactPerson: 123,
          isMajorProject: 124,
          isSupervisedByProvincialCompany: 125,
          note: 126,
          actualState: 127,
          controlledState: 128,
          createTime: 129,
          monthStartTime: 130,
          weeklyStartTime: 131,
          weekCount: 132,
          inherentRisk: 133,
          dynamicRisk: 134,
          hasInspect: 135
        },
        {
          id: 1,
          projectId: 2,
          supervision: "啊啊啊",
          adminId: 3,
          supervisionId: 4,
          constructDept: 5,
          isConstructDeptEnterprise: 6,
          projectLocation: 7,
          districtId: 8,
          detailedAddress: 9,
          actualStartTime: 10,
          planCompletionTime: 11,
          projectScale: 12,
          currentProgress: 13,
          currentWorkerNum: 14,
          currentSubcontractorNum: 15,
          hasWorkNextWeek: 16,
          workContentNextWeek: 17,
          hasTowerErectionNextWeek: 18,
          hasThirdLevelPlusWork: 19,
          hasFourthLevelWork: 20,
          hasFifthLevelWork: 21,
          thirdLevelPlusWorkContent: 22,
          contactPerson: 123,
          isMajorProject: 124,
          isSupervisedByProvincialCompany: 125,
          note: 126,
          actualState: 127,
          controlledState: 128,
          createTime: 129,
          monthStartTime: 130,
          weeklyStartTime: 131,
          weekCount: 132,
          inherentRisk: 133,
          dynamicRisk: 134,
          hasInspect: 135
        }
      ],
      weeklyStartTime: "",
      projectId: "",
      adminId: "",
      supervisionId: "",
      hasThirdLevelPlusWork: "",
      hasThirdLevelPlusWorkOptions: [],
      hasWorkNextWeek: "",
      hasWorkNextWeekOptions: [],
      adminDeptId: "",
      adminDeptOptions: [],
      actualState: "",
      actualStateOptions: [],
      controlledState: "",
      controlledStateOptions: [],

      projectIdOptions: [
        {
          id: 1,
          projectId: "项目A"
        },
        {
          id: 2,
          projectId: "项目B"
        },
        {
          id: 3,
          projectId: "项目C"
        },
        {
          id: 4,
          projectId: "项目D"
        }
      ],
      adminOptions: [
        {
          id: 1,
          adminId: "建设管理单位A"
        },
        {
          id: 2,
          adminId: "建设管理单位B"
        },
        {
          id: 3,
          adminId: "建设管理单位C"
        },
        {
          id: 4,
          adminId: "建设管理单位D"
        }
      ],
      supervisionOptions: [
        {
          id: 1,
          supervisionId: "监理单位A"
        },
        {
          id: 2,
          supervisionId: "监理单位B"
        },
        {
          id: 3,
          supervisionId: "监理单位C"
        },
        {
          id: 4,
          supervisionId: "监理单位D"
        }
      ],

      pickerOptions: {
        // disabledDate(time) {
        //   return time.getTime() > Date.now();
        // },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      }
    };
  },

  methods: {
    lookDetails(){
      this.dialogVisible=true
    },
    toAddWeekly() {
      this.$router.push({
        path: `/weekly/addWeeklyData`,
        query: {}
      });
    },
    exportExcel() {
      /* generate workbook object from table */
      var wb = XLSX.utils.table_to_book(document.querySelector("#out-table"));
      /* get binary string as output */
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          "周报信息.xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    },

    addWeeklyData() {
      this.$router.push({
        path: `/weekly/addWeeklyData`,
        query: {}
      });
    },
    importWeeklyData() {
      this.$router.push({
        path: `/weekly/importWeeklyData`,
        query: {}
      });
    }
  }
};
</script>

<style lang="less" scoped>
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
</style>
