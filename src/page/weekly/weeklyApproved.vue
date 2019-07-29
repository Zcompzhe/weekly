<template>
  <div class="body">
    <el-card class="box-card" style="height:100px">
      <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
        <el-col :span="8">
          <div class="bar">
            <div class="title">作业日期</div>
            <el-input
              v-model="projectName"
              clearable
              :rows="1"
              placeholder="请选择"
              style="min-width:200px"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">建设管理单位</div>
            <el-input
              v-model="projectName"
              clearable
              :rows="1"
              placeholder="请选择"
              style="min-width:200px"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">项管部门</div>
            <el-select v-model="constructDept" clearable placeholder="请选择" style="min-width:200px">
              <el-option
                v-for="item in constructDeptOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" style="margin-right: 20px" @click="search">搜索</el-button>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card">
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
        <el-table-column width="400" prop="projectId" label="项目名称" align="center"></el-table-column>
        <el-table-column width="210" prop="constructDept" label="风险等级" align="center"></el-table-column>
        <el-table-column width="400" prop="projectLocation" label="作业内容" align="center"></el-table-column>
        <el-table-column width="249" prop="actualStartTime" label="核准情况" align="center">
            <template slot-scope="scope">
            <el-radio-group v-model="scope.row.approved" style="margin-left:30px">
                  <el-radio :label="true">是</el-radio>
                  <el-radio :label="false">否</el-radio>
                </el-radio-group>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <br>
      <br>

      <el-table
      v-if="showIt"
        :data="thisWeekly"
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
        <el-table-column width="210" prop="projectId" label="项目名称" align="center"></el-table-column>
        <el-table-column width="210" prop="adminId" label="建设管理单位" align="center"></el-table-column>
        <el-table-column width="210" prop="currentProgress" label="当前总体施工进度" align="center"></el-table-column>
        <el-table-column width="210" prop="weeklyStartTime" label="周报开始日期" align="center"></el-table-column>
        <el-table-column width="210" prop="workContentNextWeek" label="主要施工作业内容" align="center"></el-table-column>
        <el-table-column width="320" prop="thirdLevelPlusWorkContent" label="下周的三级及以上风险作业安排、位置及内容" align="center"></el-table-column>
        <el-table-column width="210" prop="note" label="备注" align="center"></el-table-column>
        <el-table-column width="210" prop="actualState" label="实际状态" align="center"></el-table-column>
        <el-table-column width="210" prop="controlledState" label="管控内状态" align="center"></el-table-column>
      </el-table>

      <el-dialog title="详细信息" :visible.sync="dialogVisible" width="50%" :modal="false">
        <el-table
          :data="tableDataA"
          max-height="400"
          border
          :stripe="true"
          :highlight-current-row="true"
          style="width: 100%; margin-top: 20px"
          id="out-table"
        >
          <el-table-column type="selection" width="50" align="center"></el-table-column>
          <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
          <el-table-column width="210" prop="projectId" label="项目名称" align="center"></el-table-column>
          <el-table-column width="210" prop="adminId" label="建设管理单位" align="center"></el-table-column>
          <el-table-column width="210" prop="supervisionId" label="监理单位" align="center"></el-table-column>
          <el-table-column width="210" prop="constructDept" label="施工单位" align="center"></el-table-column>
          <el-table-column width="210" prop="districtId" label="项目所在区域" align="center"></el-table-column>
          <el-table-column width="210" prop="detailedAddress" label="详细地址" align="center"></el-table-column>
          <el-table-column width="210" prop="actualStartTime" label="实际开工时间" align="center"></el-table-column>
          <el-table-column width="210" prop="planCompletionTime" label="计划竣工时间" align="center"></el-table-column>
          <el-table-column width="210" prop="projectScale" label="项目规模" align="center"></el-table-column>
          <el-table-column width="210" prop="currentProgress" label="当前总体施工进度" align="center"></el-table-column>
          <el-table-column
            width="250"
            prop="currentWorkerNum"
            label="当前施工单位一线自有作业人员数"
            align="center"
          ></el-table-column>
          <el-table-column
            width="210"
            prop="currentSubcontractorNum"
            label="当前分包人员数"
            align="center"
          ></el-table-column>
          <el-table-column width="210" prop="actualState" label="实际状态" align="center"></el-table-column>
          <el-table-column width="210" prop="controlledState" label="管控内状态" align="center"></el-table-column>
        </el-table>
        <br>
        <br>
        <br>

        <el-table :data="tableDataB" style="width: 100%">
          <el-table-column prop="date" label="所属单位类型" width="180"></el-table-column>
          <el-table-column prop="name" label="职位" width="180"></el-table-column>
          <el-table-column prop="address" label="人员"></el-table-column>
          <el-table-column prop="address" label="联系方式"></el-table-column>
        </el-table>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  data() {
    return {
      tableDataA:[],
      tableDataB:[],
      showIt:false,
      dialogVisible: false,
      tableData: [
        {
          id: 1,
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
      ]
    };
  },

  methods: {
    setProjectPerson(row){
       this.$router.push({
        path: `/project/projectPerson`,
        query: {
        }
      });
    },
    showThisWeekly(row){
      this.showIt=true

    },
    lookDetails(){
      this.dialogVisible=true
    },
    toAddWeekly(row){
      this.$router.push({
        path: `/weekly/addWeeklyData`,
        query: {
           id: row.id,
          projectId: row.projectId,
          adminId:row.adminId,
          supervisionId: row.supervisionId,
          constructDept:row.constructDept,
          isConstructDeptEnterprise:row.isConstructDeptEnterprise,
          projectLocation: row.projectLocation,
          districtId: row.districtId,
          detailedAddress: row.detailedAddress,
          actualStartTime: row.actualStartTime,
          planCompletionTime: row.planCompletionTime,
          projectScale: row.projectScale,
          currentProgress: row.currentProgress,
          currentWorkerNum: row.currentWorkerNum,
          currentSubcontractorNum: row.currentSubcontractorNum,
          hasWorkNextWeek: row.hasWorkNextWeek,
          workContentNextWeek: row.workContentNextWeek,
          hasTowerErectionNextWeek: row.hasTowerErectionNextWeek,
          hasThirdLevelPlusWork:row.hasThirdLevelPlusWork,
          hasFourthLevelWork:row.hasFourthLevelWork,
          hasFifthLevelWork: row.hasFifthLevelWork,
          thirdLevelPlusWorkContent: row.thirdLevelPlusWorkContent,
          contactPerson: row.contactPerson,
          isMajorProject: row.isMajorProject,
          isSupervisedByProvincialCompany:row.isSupervisedByProvincialCompany,
          note: row.note,
          actualState: row.actualState,
          controlledState: row.controlledState,
          createTime: row.createTime,
          monthStartTime: row.monthStartTime,
          weeklyStartTime: row.weeklyStartTime,
          weekCount: row.weekCount,
          inherentRisk: row.inherentRisk,
          dynamicRisk:row.dynamicRisk,
          hasInspect: row.hasInspect
        }
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

    addProject() {
      this.$router.push({
        path: `/project/addProjectInfo`,
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
</style>
