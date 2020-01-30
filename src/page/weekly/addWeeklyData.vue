<template>
  <div class="body">
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">周报开始时间</div>
            <el-date-picker
              v-model="weeklyStartTime"
              type="date"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              @change="weeklyChanged"
            ></el-date-picker>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title" style="margin-left:-50px;max-width:20px">~</div>
            <el-date-picker
              v-model="weeklyStartTime2"
              type="date"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="margin-left:-30px"
              :disabled="true"
            ></el-date-picker>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">项目名称</div>
            <el-select v-model="projectId" clearable placeholder="请选择" style="min-width:200px">
              <el-option
                v-for="item in projectIdOptions"
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
            <div class="title">建设管理单位</div>
            <el-select v-model="adminId" clearable placeholder="请选择" style="min-width:200px">
              <el-option
                v-for="item in adminOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">项管部门</div>
            <el-select v-model="adminDept" clearable placeholder="请选择" style="min-width:200px">
              <el-option
                v-for="item in adminDeptOptions"
                :key="item.name"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="8">
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
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">存在三级及以上风险</div>
            <el-select
              v-model="hasThreeLevelPlusWork"
              clearable
              placeholder="请选择"
              style="min-width:200px"
            >
              <el-option
                v-for="item in hasThreeLevelPlusWorkOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <el-button type="primary" style="margin-left: 20px" @click="searchWeekly">搜索</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="bar">
            <div id="title">
              <p
                id="tableTitle"
                style="min-width:1000px;font-size:18px;margin-left:380px"
              >{{ tableTitle }}</p>
            </div>
          </div>
        </el-col>
      </el-row>
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
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="300" prop="projectName" label="项目名称" align="center"></el-table-column>
        <el-table-column width="200" prop="adminName" label="建设管理单位" align="center"></el-table-column>
        <el-table-column width="300" prop="currentProgress" label="当前总体施工进度" align="center"></el-table-column>
        <el-table-column width="300" prop="workContentNextWeek" label="下周主要施工作业内容" align="center"></el-table-column>
        <el-table-column
          width="350"
          prop="threePlusRiskWorkContent"
          label="下周的三级及以上风险作业安排、位置及内容"
          align="center"
        ></el-table-column>
        <el-table-column width="150" prop="adminDept" label="备注" align="center"></el-table-column>
        <el-table-column width="80" prop="actualState" label="实际状态" align="center"></el-table-column>
        <el-table-column width="80" prop="controlledState" label="管控内状态" align="center"></el-table-column>
        <!-- <el-table-column width="80" prop="inherentRisk" label="固有风险" align="center"></el-table-column>
        <el-table-column width="100" prop="dynamicRisk" label="动态风险" align="center"></el-table-column>
        <el-table-column width="80" prop="inspectState" label="督察情况" align="center"></el-table-column> -->

        <el-table-column width="200" label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="lookDetails(scope.row)">查看详情</el-button>
            <el-button type="text" @click="updateWeekly(scope.row)">修改周报</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br />

      <el-pagination
        :current-page="pagination.currentPage"
        :page-sizes="pagination.pageSize"
        :page-size="pagination.currentPageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.totalNumber"
      ></el-pagination>
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
      <el-table :data="tableDataA" border style="width: 100%">
        <el-table-column prop="projectName" label="项目名称" width="300"></el-table-column>
        <el-table-column prop="adminName" label="建设管理单位" width="180"></el-table-column>
        <el-table-column prop="supervisionName" label="监理单位" width="180"></el-table-column>
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

      <el-table :data="tableDataA" border style="width: 100%">
        <el-table-column prop="adminDept" label="项管部门" width="180"></el-table-column>
        <el-table-column prop="currentProgress" label="当前总体施工进度" width="180"></el-table-column>
        <el-table-column prop="hasWorkNextWeekStr" label="下周是否有作业" width="180"></el-table-column>
        <el-table-column prop="workContentNextWeek" label="下周主要施工作业内容" width="180"></el-table-column>
        <el-table-column prop="hasThreePlusRiskWorkStr" label="是否有三级以上风险" width="180"></el-table-column>
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

      <el-table ref="singleTable" :data="tableDataB" highlight-current-row style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column property="riskLevel" label="作业风险等级" width="120"></el-table-column>
        <el-table-column property="workContent" label="下周作业安排、位置及内容" width="250"></el-table-column>
        <el-table-column property="workStartTime" label="作业开始时间" width="200"></el-table-column>
        <el-table-column property="workEndTime" label="作业结束时间" width="200"></el-table-column>
      </el-table>
      <br />
      <br />
      <br />
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="bar">
            <div class="title" style="margin-left:35%;font-size:18px;min-width:200px">建设管理单位责任人信息</div>
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
            <div class="title" style="margin-left:35%;font-size:18px;min-width:200px">监理单位责任人信息</div>
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
      tableDataA: [],
      tableDataB: [],
      pagination: {
        totalNumber: 4,
        currentPageSize: 25,
        pageSize: [10, 25, 50, 100],
        currentPage: 1
      },

      tableTitle:
        "国网上海建设咨询公司2019年在建工程周报(2019-07-12~2019-07-19)",
      projectManagerIdOptions: [],
      safetyStaffIdOptions: [],
      qualityStaffIdOptions: [],
      ruleForm: [],
      dialogVisible: false,
      tableData: [
        {
          id: 1,
          projectName:"奉贤换流站调相机应用工程2x30万千乏调相机工程",
          adminName: "国网上海建设咨询公司",
          currentProgress: "厂房基础模板安装，拆除事故油地开挖",
          workContentNextWeek:"7/15-7/21 南侧基础模板拆除",
          threePlusRiskWorkContent: "7/15-7/21 南侧基础模板拆除",
          adminDept: "项管一部",
          actualState: "在建",
          controlledState:"不纳入",
         
        },
        {
          id: 2,
          projectName:"南桥500千伏变电站主要扩建工程",
          adminName: "国网上海建设咨询公司",
          currentProgress: "围墙施工",
          workContentNextWeek:"7/15-7/21 临时围墙砌筑",
          threePlusRiskWorkContent: "无",
          adminDept: "项管一部",
          actualState: "在建",
          controlledState:"竣工",
        },
        {
          id: 3,
          projectName:"胜辛220千伏输变电工程（线路部分）",
          adminName: "国网上海建设咨询公司",
          currentProgress: "基础施工",
          workContentNextWeek:"无",
          threePlusRiskWorkContent: "无",
          adminDept: "项管一部",
          actualState: "停工",
          controlledState:"停工",
        },
        {
          id: 4,
          projectName:"松江220千伏变电站改造工程",
          adminName: "国网上海建设咨询公司",
          currentProgress: "第一阶段完成",
          workContentNextWeek:"无",
          threePlusRiskWorkContent: "无",
          adminDept: "项管一部",
          actualState: "在建",
          controlledState:"在建",
        }
      ],
      beChanged: [],
      weeklyStartTime2: "",
      weeklyStartTime: "",
      projectId: "",
      adminId: "",
      supervisionId: "",
      hasThreeLevelPlusWork: "",
      hasThreeLevelPlusWorkOptions: [
        {
          id: 1,
          name: "是"
        },
        {
          id: 2,
          name: "否"
        }
      ],
      hasWorkNextWeek: "",
      hasWorkNextWeekOptions: [
        {
          id: 1,
          name: "是"
        },
        {
          id: 2,
          name: "否"
        }
      ],
      adminDept: "",
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

  created() {
    //初始化显示一周信息
    this.$axios
      .post(
        `${window.$config.HOST}/projectWeeklyManagement/getProjectWeeklyByCondition`,
        {
          pageNumber: 0,
          numberOfPage: 25
        }
      )
      .then(response => {
        this.tableData = response.data.returnList[0];
        this.pagination.totalNumber = response.data.totalNumber;
        this.$message({
          message: response.data.returnBackInfo,
          type: "success"
        });

        if (this.weeklyStartTime === "") {
          this.weeklyStartTime = new Date();
          this.weeklyChanged();
          this.tableTitle =
            "国网上海建设咨询公司" +
            new Date(this.weeklyStartTime).getFullYear() +
            "年在建工程周报(" +
            this.weeklyStartTime +
            "~" +
            this.weeklyStartTime2 +
            ")";
        } else {
          this.weeklyChanged();
          this.tableTitle =
            "国网上海建设咨询公司" +
            new Date(this.weeklyStartTime).getFullYear() +
            "年在建工程周报(" +
            this.weeklyStartTime +
            "~" +
            this.weeklyStartTime2 +
            ")";
        }
      })
      .catch(error => {
        this.$message({
          message: "获取周报数据失败！",
          type: "error"
        });
      });

    //获得建设管理单位
    this.$axios
      .get(`${window.$config.HOST}/baseInfoManagement/getAllAdministrativeDept`)
      .then(response => {
        if (response.data.returnBackCode >= 0) {
          this.adminOptions = response.data.returnList[0];
        } else {
          this.$message({
            message: response.data.returnBackInfo,
            type: "error"
          });
        }
      })
      .catch(error => {
        this.$message({
          message: "获取建设管理单位失败！",
          type: "error"
        });
      });

    //获得项管部门下拉框
    this.$axios
      .get(
        `${window.$config.HOST}/baseInfoManagement/getAllProjectAdminDeptEnum`
      )
      .then(response => {
        if (response.data.returnBackCode >= 0) {
          response.data.returnData.forEach(element => {
            this.adminDeptOptions.push({
              name: element
            });
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
          message: "获取项管部门信息失败！",
          type: "error"
        });
      });
    //获得项目名称
    this.$axios
      .get(`${window.$config.HOST}/projectWeeklyManagement/getAllProjectName`)
      .then(response => {
        if (response.data.returnBackCode >= 0) {
          this.projectIdOptions = response.data.returnList[0];
        } else {
          this.$message({
            message: response.data.returnBackInfo,
            type: "error"
          });
        }
      })
      .catch(error => {
        this.$message({
          message: "获取项目名称信息失败！",
          type: "error"
        });
      });
  },
  methods: {
    searchWeekly() {
      this.$axios
        .post(
          `${window.$config.HOST}/projectWeeklyManagement/getProjectWeeklyByCondition`,
          {
            pageNumber: 0,
            numberOfPage: 25,
            weeklyStartTime: this.weeklyStartTime,
            projectId: this.projectId,
            adminId: this.adminId,
            adminDept: this.adminDept,
            hasWorkNextWeek: this.hasWorkNextWeek,
            hasThreePlusRiskWork: this.hasThreePlusRiskWork
          }
        )
        .then(response => {
          this.tableData = response.data.returnList[0];
          this.pagination.totalNumber = response.data.totalNumber;
          this.$message({
            message: response.data.returnBackInfo,
            type: "success"
          });

          if (this.weeklyStartTime === "") {
            this.weeklyStartTime = new Date();
            this.weeklyChanged();
            this.tableTitle =
              "国网上海建设咨询公司" +
              new Date(this.weeklyStartTime).getFullYear() +
              "年在建工程周报(" +
              this.weeklyStartTime +
              "~" +
              this.weeklyStartTime2 +
              ")";
          } else {
            this.weeklyChanged();
            this.tableTitle =
              "国网上海建设咨询公司" +
              new Date(this.weeklyStartTime).getFullYear() +
              "年在建工程周报(" +
              this.weeklyStartTime +
              "~" +
              this.weeklyStartTime2 +
              ")";
          }
        })
        .catch(error => {
          this.$message({
            message: "获取周报数据失败！",
            type: "error"
          });
        });
    },
    updateWeekly(row) {
      this.$router.push({
        path: `/weekly/updateWeeklyData`,
        query: {
          date: row
        }
      });
    },
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
    isChanged(val) {
      this.beChanged = val;
    },
    weeklyChanged() {
      //先求星期几
      var c = this.changeDate(this.weeklyStartTime);
      var b = new Date(Date.parse(c.replace(/\-/g, "/")));
      console.log("选择的日期是星期", b.getDay());

      //如果星期大于等于5
      if (b.getDay() >= 5) {
        //第一步，将截止日期求出来

        this.weeklyStartTime2 = new Date(this.weeklyStartTime);
        this.weeklyStartTime2.setDate(
          this.weeklyStartTime2.getDate() - b.getDay() + 11
        );
        this.weeklyStartTime2 = this.changeDate(this.weeklyStartTime2);

        //第二步，将起始日期求出来

        this.weeklyStartTime.setDate(
          this.weeklyStartTime.getDate() - b.getDay() + 5
        );
        this.weeklyStartTime = this.changeDate(this.weeklyStartTime);
      } else {
        //第一步，将截止日期求出来

        this.weeklyStartTime2 = new Date(this.weeklyStartTime);
        this.weeklyStartTime2.setDate(
          this.weeklyStartTime2.getDate() - b.getDay() + 4
        );
        this.weeklyStartTime2 = this.changeDate(this.weeklyStartTime2);

        //第二步，将起始日期求出来

        this.weeklyStartTime.setDate(
          this.weeklyStartTime.getDate() - b.getDay() - 2
        );
        this.weeklyStartTime = this.changeDate(this.weeklyStartTime);
      }

      console.log(this.weeklyStartTime);
      console.log(this.weeklyStartTime2);
    },
    lookDetails(row) {
      this.$axios
        .get(
          `${window.$config.HOST}/projectWeeklyManagement/getProjectWeeklyDetailById`,
          {
            params: {
              id: row.id
            }
          }
        )
        .then(response => {
          if (
            response.data.returnBackCodeMajor === 1 &&
            response.data.returnBackCodeSecondary >= 0
          ) {
            this.$message({
              message: response.data.returnBackInfo,
              type: "success"
            });
            var list = response.data.returnListMajor[0];
            this.tableDataA = list;
            this.tableDataB = response.data.returnListSecondary[0];
            this.ruleForm.currentMonth = this.tableDataA[0].monthStartTime.substring(
              0,
              7
            );
            this.ruleForm.weeklyStartTime = this.tableDataA[0].weeklyStartTime.substring(
              0,
              10
            );
            this.tableDataA[0].actualStartTime = this.tableDataA[0].actualStartTime.substring(
              0,
              10
            );
            this.tableDataA[0].planCompletionTime = this.tableDataA[0].planCompletionTime.substring(
              0,
              10
            );
     



            console.log(this.tableDataA);
            if (this.tableDataA[0].hasWorkNextWeek) {
              this.tableDataA[0].hasWorkNextWeekStr = "是";
            } else {
              this.tableDataA[0].hasWorkNextWeekStr = "否";
            }

            if (this.tableDataA[0].hasThreePlusRiskWork) {
              this.tableDataA[0].hasThreePlusRiskWorkStr = "是";
            } else {
              this.tableDataA[0].hasThreePlusRiskWorkStr = "否";
            }
          } else {
            this.$message({
              message: response.data.returnBackInfo,
              type: "error"
            });
          }

          this.tableData = response.data.returnList[0];
          this.pagination.totalNumber = response.data.totalNumber;
          this.$message({
            message: response.data.returnBackInfo,
            type: "success"
          });

          if (this.weeklyStartTime === "") {
            this.weeklyStartTime = new Date();
            this.weeklyChanged();
            this.tableTitle =
              "国网上海建设咨询公司" +
              new Date(this.weeklyStartTime).getFullYear() +
              "年在建工程周报(" +
              this.weeklyStartTime +
              "~" +
              this.weeklyStartTime2 +
              ")";
          } else {
            this.weeklyChanged();
            this.tableTitle =
              "国网上海建设咨询公司" +
              new Date(this.weeklyStartTime).getFullYear() +
              "年在建工程周报(" +
              this.weeklyStartTime +
              "~" +
              this.weeklyStartTime2 +
              ")";
          }
        })
        .catch(error => {
          this.$message({
            message: "获取周报数据失败！",
            type: "error"
          });
        });
      this.dialogVisible = true;
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

      width: 160px;
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
