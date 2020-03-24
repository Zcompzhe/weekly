<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="inspectionForm" label-position="left" ref="inspectionForm" :rules="inspectionFormRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="查岗队伍数" prop="inspectTeamCount" placeholder="查岗队伍数">
                <el-input :disabled="hasInspectionData" v-model.number="inspectionForm.inspectTeamCount" clearable :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="基于动态风险" prop="orderByDynamicRisk" placeholder="基于动态风险">
                <el-select v-model="inspectionForm.orderByDynamicRisk" placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in inspectionForm.options.orderByDynamicRiskOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <!-- <el-col :span="8" style="margin-top:-20px">
            <div class="bar">
              <el-button type="primary" style="margin-right: 20px">设定条件</el-button>
            </div>
          </el-col> -->
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-row :gutter="20" style="margin-top: 30px; margin-bottom: 5px;">
        <el-col :span="2">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click="searchWeekly(1)">生成今日风险排名</el-button>
          </div>
        </el-col>
        <el-col :offset="1" :span="2">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click="arrangeInspection">确认安排督查</el-button>
          </div>
        </el-col>
      </el-row>

      <el-table :data="weeklyInfo.tableData" max-height="400" border @selection-change="weeklySelect" :stripe="true" :highlight-current-row="true" style="width: 100%; margin-top: 20px" id="out-table">
        <el-table-column type="selection" width="50" align="center" fixed="left"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center" fixed="left"></el-table-column>
        <el-table-column width="210" prop="projectName" label="项目名称" align="center" fixed="left"></el-table-column>
        <el-table-column width="210" prop="weeklyTime" label="周报日期" align="center"></el-table-column>
        <el-table-column width="210" prop="dynamicRisk" label="今日作业最大动态风险" align="center"></el-table-column>
        <el-table-column width="210" prop="inherentRisk" label="今日作业最大固有风险" align="center"></el-table-column>
        <el-table-column width="410" prop="workArrangement" label="作业安排" align="left"></el-table-column>
        <el-table-column width="250" prop="adminName" label="所属建设管理单位" align="center"></el-table-column>
        <el-table-column width="120" prop="hasInspectThisWeekStr" label="本周是否督查" align="center"></el-table-column>
        <el-table-column width="120" prop="hasInspectThisMonthStr" label="本月是否督查" align="center"></el-table-column>
        <el-table-column width="160" prop="lastInspectTime" label="上次查岗日期" align="center"></el-table-column>
        <el-table-column width="250" label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="detailWeekly(scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pagination.currentPage" :page-sizes="pagination.pageSizes" :page-size="pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total"></el-pagination>
      </div>

      <el-dialog title="详细信息" :visible.sync="detailPanelFlag" width="1400px" :modal="false">
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目名称</div>
              <el-input disabled v-model="weeklyDetail.projectName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">所属建管单位</div>
              <el-input disabled v-model="weeklyDetail.adminName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">监理单位</div>
              <el-input disabled v-model="weeklyDetail.supervisionName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">施工单位</div>
              <el-input disabled v-model="weeklyDetail.constructDeptName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">所在区域</div>
              <el-input disabled v-model="weeklyDetail.districtName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">详细地址</div>
              <el-input disabled v-model="weeklyDetail.detailedAddress" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">定位经度</div>
              <el-input disabled v-model="weeklyDetail.longitude" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">定位纬度</div>
              <el-input disabled v-model="weeklyDetail.latitude" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">实际开工时间</div>
              <el-input disabled v-model="weeklyDetail.actualStartTime" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">计划竣工时间</div>
              <el-input disabled v-model="weeklyDetail.planCompletionTime" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目规模</div>
              <el-input disabled v-model="weeklyDetail.projectScale" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">一线作业人员数</div>
              <el-input disabled v-model="weeklyDetail.currentWorkerNum" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">当前分包人员数</div>
              <el-input disabled v-model="weeklyDetail.currentSubcontractorNum" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">所属部门</div>
              <el-input disabled v-model="weeklyDetail.adminDept" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">实际状态</div>
              <el-input disabled v-model="weeklyDetail.actualState" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">管控内状态</div>
              <el-input disabled v-model="weeklyDetail.controlledState" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">固有风险</div>
              <el-input disabled v-model="weeklyDetail.inherentRisk" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">动态风险</div>
              <el-input disabled v-model="weeklyDetail.dynamicRisk" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">下周是否有作业</div>
              <el-input disabled v-model="weeklyDetail.hasWorkNextWeekStr" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">是否有三级及以上风险</div>
              <el-input disabled v-model="weeklyDetail.hasThreePlusRiskWorkStr" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <br>
        <hr><br>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="12">
            <div class="bar">
              <div class="title">当前总体施工进度</div>
              <el-input disabled type="textarea" :rows="4" placeholder="暂无信息" v-model="weeklyDetail.workCurrentProgress" style="margin-left: 26px;width:600px"></el-input>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="bar">
              <div class="title">下周主要施工作业内容</div>
              <el-input disabled type="textarea" :rows="4" placeholder="暂无信息" v-model="weeklyDetail.constructContentNextWeek" style="margin-left: 26px;width:600px"></el-input>
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="23">
            <div class="bar">
              <div class="title">三级及以上风险作业安排、位置及内容</div>
              <el-input disabled type="textarea" :rows="4" placeholder="暂无信息" v-model="weeklyDetail.threePlusRiskWorkContent" style="margin-left: 26px;width:1000px"></el-input>
            </div>
          </el-col>
        </el-row>

        <br>
        <hr><br>
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div class="title" style="margin-left:50%;font-size:18px">所属建管单位责任人信息</div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 20px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目经理</div>
              <el-input disabled v-model="weeklyDetail.projectManagerName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">质量专责</div>
              <el-input disabled v-model="weeklyDetail.qualityStaffName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">安全专责</div>
              <el-input disabled v-model="weeklyDetail.safetyStaffName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input disabled v-model="weeklyDetail.projectManagerTEL" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input disabled v-model="weeklyDetail.qualityStaffTEL" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-col :span="8">
          <div class="bar">
            <div class="title">联系方式</div>
            <el-input disabled v-model="weeklyDetail.safetyStaffTEL" disabled style="min-width:200px"></el-input>
          </div>
        </el-col>
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div class="title" style="margin-left:52%;font-size:18px">监理单位责任人信息</div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 20px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">总监/总监代表</div>
              <el-input disabled v-model="weeklyDetail.chiefInspectorName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">专业监理</div>
              <el-input disabled v-model="weeklyDetail.professionalSupervisorName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">安全监理</div>
              <el-input disabled v-model="weeklyDetail.safetySupervisorName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input disabled v-model="weeklyDetail.chiefInspectorTEL" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input disabled v-model="weeklyDetail.professionalSupervisorTEL" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input disabled v-model="weeklyDetail.safetySupervisorTEL" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
      </el-dialog>
    </el-card>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="bar">
            <div id="title">
              <p id="tableTitle" style="min-width:1000px;font-size:20px;margin-left:58%">本周已安排的督查项目如下</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-top: 30px; margin-bottom: 5px;">
        <el-col :span="2">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click="setInspectTeam">保存设置</el-button>
          </div>
        </el-col>
      </el-row>

      <el-table :data="arrange.tableData" max-height="400" border>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="300" prop="inspectDate" label="督查日期" align="center"></el-table-column>
        <el-table-column width="300" prop="projectName" label="项目名称" align="center"></el-table-column>
        <el-table-column width="200" prop="weeklyTime" label="周报日期" align="center"></el-table-column>
        <el-table-column width="100" prop="inspectionPlanState" label="督查情况" align="center"></el-table-column>
        <el-table-column width="350" prop="teamName" label="督查队伍" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.teamNumber" placeholder="请选择" style="min-width:300px" disabled v-if="scope.row.inspectionPlanState==='已督查'">
              <el-option v-for="item in arrange.teamNumberOption" :key="item.value" :label="item.name" :value="item.value"></el-option>
            </el-select>
            <el-select v-model="scope.row.teamNumber" placeholder="请选择" style="min-width:300px" v-else>
              <el-option v-for="item in arrange.teamNumberOption" :key="item.value" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" disabled @click="cancelArrange(scope.row)" v-if="scope.row.inspectionPlanState==='已督查'">取消安排</el-button>
            <el-button type="text" @click="cancelArrange(scope.row)" v-else>取消安排</el-button>

          </template>
        </el-table-column>
      </el-table>
      <br><br><br>
      <div v-for="item in teamNum" :key="item">
        <div>
          <el-row :gutter="20">
            <el-col :span="20">
              <div class="bar">
                <div id="title">
                  <span style="font-size:18px">安监队{{item}}本周督查项目</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <br><br>
          <el-table :data="inspectionTable.tableData[item-1]" max-height="400" border>
            <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
            <el-table-column width="100" prop="teamName" label="督查队伍" align="center"></el-table-column>
            <el-table-column width="100" prop="inspectDate" label="督查日期" align="center"></el-table-column>
            <el-table-column width="280" prop="projectName" label="项目名称" align="center"></el-table-column>
            <el-table-column width="200" prop="weeklyTime" label="周报日期" align="center"></el-table-column>
            <el-table-column width="350" prop="threePlusRiskWorkContent" label="三级及以上风险作业安排、位置及内容" align="left"></el-table-column>
            <el-table-column width="280" prop="detailedAddress" label="详细地址" align="center"></el-table-column>
            <el-table-column width="100" prop="inspectionPlanState" label="督查情况" align="center"></el-table-column>
            <!-- <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button type="text">一键导航</el-button>
              </template>
            </el-table-column> -->
          </el-table>
        </div>
      </div>
    </el-card>
    <br />
  </div>
</template>

<script>
import { POINT_CONVERSION_COMPRESSED } from "constants";
import * as api from "@/api/date.js";
import * as searchApi from "@/api/searchApi.js";
import * as getApi from "@/api/getApi.js";
import * as deleteApi from "@/api/deleteApi.js";
import * as addApi from "@/api/addApi.js";
export default {
  data() {
    return {
      //安监队督查项目列表计数
      teamNum: 0,
      //页面标记
      hasInspectionData: false,
      //督查
      inspectionForm: {
        inspectTeamCount: "",
        orderByDynamicRisk: true,
        options: {
          orderByDynamicRiskOptions: [
            {
              value: true,
              name: "是"
            },
            {
              value: false,
              name: "否"
            }
          ]
        }
      },
      inspectionFormRule: {
        inspectTeamCount: [
          {
            required: true,
            message: "请输入大于0的数字！",
            trigger: "change"
          },
          { type: "number", message: "请输入大于0的数字！" }
        ],
      },
      //周报详情
      detailPanelFlag: false,
      weeklyDetail: {

      },
      //周报表格
      weeklyInfo: {
        tableData: [],
        multiSelection: [],
      },
      arrange: {
        tableData: [],
        multiSelection: [],
        teamNumberOption: [],
      },
      //安监队督查表格
      inspectionTable: {
        tableData: []
      },
      //页码部分
      pagination: {
        currentPage: 1,
        pageSizes: [10, 25, 50, 100],
        pageSize: 10,
        total: 0
      },
    };
  },

  created: function () {
    //获取督查队伍
    searchApi.getCurrentInspectWeekInspectionTeamCount().then(response => {
      if (response.returnBackCode > 0) {
        let res = response.returnList[0][0];
        this.hasInspectionData = res.hasInspectionData;
        this.inspectionForm.inspectTeamCount = res.inspectTeamCount;
        this.teamChanged();

        if (this.inspectionForm.inspectTeamCount > 0 && this.inspectionForm.inspectTeamCount) {
          this.searchWeekInspect();
          this.inspectionByCondition();
        }
      }
    })
  },
  methods: {
    //给督察队分配任务
    setInspectTeam() {
      let list = [];
      this.arrange.tableData.forEach(ele => {
        if (ele.inspectionPlanState != "已督查") list.push(ele)
      })
      addApi.setInspectTeam(list).then(response => {
        this.inspectionByCondition();
      })
    },
    //取消安排
    cancelArrange(row) {
      this.$confirm("确认删除该条督查信息？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteApi.cancelInspection(row.id).then(response => {
            this.searchWeekly(1);
            this.searchWeekInspect();
            this.inspectionByCondition();
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //安监队设置
    teamChanged() {
      this.teamNum = this.inspectionForm.inspectTeamCount;
      if (this.inspectionForm.inspectTeamCount > 0) {
        this.arrange.teamNumberOption = [];
        for (let i = 1; i <= parseInt(this.inspectionForm.inspectTeamCount); i++) {
          this.arrange.teamNumberOption.push({
            value: i,
            name: "安监队" + i
          })
        }
      } else {
        this.arrange.teamNumberOption = [];
      }
    },
    //生成风险排名
    searchWeekly(pageNum) {
      if ((new Date()).getHours() < 9) {
        this.$message({
          type: "info",
          message: "系统正在初始化，请9点以后再试!"
        });
        return;
      }
      this.$refs["inspectionForm"].validate(valid => {
        if (valid) {
          let list = {
            inspectTeamCount: this.inspectionForm.inspectTeamCount,
            numberOfPage: this.pagination.pageSize,
            orderByDynamicRisk: this.inspectionForm.orderByDynamicRisk,
            pageNumber: pageNum - 1
          };
          searchApi.getProjectWeeklyInspectionPageShowRespWithOrder(list).then(response => {
            this.weeklyInfo.tableData = response.returnList[0];
            this.pagination.total = response.totalNumber;
            this.teamChanged();
            this.weeklyInfo.tableData.forEach(element => {
              if (element.hasInspectThisMonth) element.hasInspectThisMonthStr = "是";
              else if (element.hasInspectThisMonth === false) element.hasInspectThisMonthStr = "否";

              if (element.hasInspectThisWeek) element.hasInspectThisWeekStr = "是";
              else if (element.hasInspectThisWeek === false) element.hasInspectThisWeekStr = "否";

            })
          })
        }
      });
    },
    //各个安监队督查情况
    inspectionByCondition() {
      searchApi.getThisWeekInspectTeamProjectInspectionByCondition({
        inspectTeamCount: this.inspectionForm.inspectTeamCount
      }).then(response => {
        this.inspectionTable.tableData = response.returnList;
      })
    },
    //获取本周督查
    searchWeekInspect() {
      getApi.getThisWeekProjectInspectionArrangePageShowResp().then(response => {
        this.arrange.tableData = response;
      })
    },
    //安排督查
    arrangeInspection() {
      let list = [];
      this.weeklyInfo.multiSelection.forEach(element => {
        list.push({
          inspectDate: api.changeDate(new Date()),
          projectId: element.projectId,
          weeklyId: element.id,
          weeklyStartTime: element.weeklyStartTime
        });
      });
      addApi.arrangeInspection(list).then(response => {
        this.searchWeekly(this.pagination.currentPage);
        this.searchWeekInspect();
      })


    },
    //查看详情
    detailWeekly(row) {
      getApi.getProjectWeeklyDetailById(row.id).then(response => {
        this.weeklyDetail = response[0];
        if (this.weeklyDetail.hasWorkNextWeek) this.weeklyDetail.hasWorkNextWeekStr = "是";
        else if (!this.weeklyDetail.hasWorkNextWeek) this.weeklyDetail.hasWorkNextWeekStr = "否";
        if (this.weeklyDetail.hasThreePlusRiskWork) this.weeklyDetail.hasThreePlusRiskWorkStr = "是";
        else if (!this.weeklyDetail.hasThreePlusRiskWork) this.weeklyDetail.hasThreePlusRiskWorkStr = "否";
        this.detailPanelFlag = true;
      })
    },
    //周报表格选中
    weeklySelect(val) {
      this.weeklyInfo.multiSelection = val;
    },
    //页码操控部分
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.searchWeekly(1);
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val;
      this.searchWeekly(val);
    },

  }
};
</script>

<style lang="less">
.el-table .cell {
  white-space: pre-line;
}
body .el-table th.gutter {
  display: table-cell !important;
}
</style>



<style lang="less" scoped>
.block {
  padding: 30px 0;
  text-align: center;
}
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
