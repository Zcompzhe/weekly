<template>
  <div class="body">

    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="8">
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
        <el-col :span="8">
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
        <el-col :span="8">
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
      </el-row>


            <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">下周是否有作业</div>
            <el-select v-model="hasWorkNextWeek" clearable placeholder="请选择" style="min-width:200px">
              <el-option
                v-for="item in hasWorkNextWeekOptions"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="8">
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
        <el-col :span="8">
          <div class="bar">
            <div class="title">管控内状态</div>
            <el-select v-model="controlledState" clearable placeholder="请选择" style="min-width:200px">
              <el-option
                v-for="item in controlledStateOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
          <el-col :offset="1" :span="2">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click="">搜索</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card">
      <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
        <el-col :span="8">
          <div class="bar">
            <div class="title">查岗日期</div>
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
        <el-col :offset="1" :span="2">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click="addWeeklyData">确认添加</el-button>
          </div>
        </el-col>
        <el-col :offset="1" :span="2">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click="addWeeklyData">取消</el-button>
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
        <el-table-column width="300" prop="supervisionId" label="监理单位" align="center"></el-table-column>
        <el-table-column width="300" prop="constructDept" label="施工单位" align="center"></el-table-column>
        <el-table-column
          width="300"
          prop="isConstructDeptEnterprise"
          label="施工单位是否为系统内集体企业"
          align="center"
        ></el-table-column>
        <el-table-column width="300" prop="projectLocation" label="项目地点" align="center"></el-table-column>
        <el-table-column width="300" prop="detailedAddress" label="详细地址" align="center"></el-table-column>
        <el-table-column width="300" prop="actualStartTime" label="实际开工时间" align="center"></el-table-column>
        <el-table-column width="300" prop="planCompletionTime" label="计划竣工时间" align="center"></el-table-column>
        <el-table-column width="300" prop="projectScale" label="项目规模" align="center"></el-table-column>
        <el-table-column width="300" prop="currentProgress" label="当前总体施工进度" align="center"></el-table-column>
        <el-table-column width="300" prop="currentWorkerNum" label="当前施工单位一线自有作业人员数" align="center"></el-table-column>
        <el-table-column width="300" prop="currentSubcontractorNum" label="当前分包人员数" align="center"></el-table-column>
        <el-table-column width="300" prop="hasWorkNextWeek" label="下周是否有作业" align="center"></el-table-column>
        <el-table-column width="300" prop="workContentNextWeek" label="下周主要施工作业内容" align="center"></el-table-column>
        <el-table-column
          width="300"
          prop="hasTowerErectionNextWeek"
          label="下周是否有组塔作业"
          align="center"
        ></el-table-column>
        <el-table-column
          width="350"
          prop="hasThirdLevelPlusWork"
          label="下周的三级及以上风险作业安排、位置及内容"
          align="center"
        ></el-table-column>
        <el-table-column width="300" prop="contactPerson" label="建设管理单位联系人" align="center"></el-table-column>
        <el-table-column width="300" prop="isMajorProject" label="是否重点工程" align="center"></el-table-column>
        <el-table-column
          width="300"
          prop="isSupervisedByProvincialCompany"
          label="本周省公司已督导项目"
          align="center"
        ></el-table-column>
        <el-table-column width="300" prop="note" label="备注" align="center"></el-table-column>
        <el-table-column width="300" prop="actualState" label="实际状态" align="center"></el-table-column>
        <el-table-column width="300" prop="controlledState" label="管控内状态" align="center"></el-table-column>
        <el-table-column width="300" prop="inherentRisk" label="固有风险" align="center"></el-table-column>
        <el-table-column width="300" prop="dynamicRisk" label="动态风险" align="center"></el-table-column>

        <!-- 下面两个没有 -->
        <el-table-column width="300" prop="index" label="本月该项目是否安排督查" align="center"></el-table-column>
        <el-table-column width="300" prop="index" label="下周作业是否安排督查" align="center"></el-table-column>

        <el-table-column width="100" label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click>查看整改通知</el-button>
            <el-button type="text" @click>修改内容</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  data() {
    return {
        controlledState:"",
        actualState:"",
        actualStateOptions:[],
        controlledStateOptions:[],
        hasWorkNextWeekOptions:[
            {
                value:true,
                name:"有"
            },
            {
                value:false,
                name:"无"
            }
        ],

        hasWorkNextWeek:"",
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
      ],
      weeklyStartTime: "",
      projectId: "",
      adminId: "",
      supervisionId: "",

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
</style>
