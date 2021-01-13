<template>
  <div class="body">
    <el-card class="box-card">
      <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
        <el-col :span="12">
          <div class="bar">
            <div class="title">所属建管单位</div>
            <el-select v-model="searchTable.adminId" clearable placeholder="请选择" style="min-width:200px;margin-left:32px">
              <el-option v-for="item in searchTable.options.adminIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="bar">
            <div class="title">所属部门</div>
            <el-select v-model="searchTable.adminDept" clearable placeholder="请选择" style="min-width:200px">
              <el-option v-for="item in searchTable.options.adminDeptOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="3">
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-top: 20px; margin-bottom: 5px;">
        <el-col :span="12">
          <div class="bar">
            <div class="title">所在区域</div>
            <el-select v-model="searchTable.districtId" clearable placeholder="请选择" style="min-width:200px;margin-left:32px">
              <el-option v-for="item in searchTable.options.districtIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="bar">
            <div class="title">项目状态</div>
            <el-select v-model="searchTable.projectState" clearable placeholder="请选择" style="min-width:200px">
              <el-option v-for="item in searchTable.options.projectStateOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" style="margin-right: 20px" @click="searchProject(1)">搜索</el-button>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card">
      <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
        <el-col :span="2">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click="addProject">添加项目</el-button>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px" @click="showAllInfo">查看所有分项工程</el-button>
          </div>
        </el-col>
      </el-row>

      <el-table :data="projectInfo.tableData" max-height="800" border style="width: 100%; margin-top: 20px">
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="350" prop="name" label="项目名称" align="center"></el-table-column>
        <el-table-column width="210" prop="adminName" label="所属建管单位" align="center"></el-table-column>
        <el-table-column width="100" prop="constructDeptName" label="施工单位" align="center"></el-table-column>
        <el-table-column width="150" prop="adminDept" label="所属部门" align="center"></el-table-column>
        <el-table-column width="100" prop="districtName" label="所在区域" align="center"></el-table-column>
        <el-table-column width="300" prop="detailedAddress" label="详细地址" align="center"></el-table-column>
        <el-table-column width="100" prop="projectState" label="项目状态" align="center"></el-table-column>
        <el-table-column width="250" label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="detailProject(scope.row)">查看详情</el-button>
            <el-button type="text" @click="updateProject(scope.row)">修改信息</el-button>
            <el-button type="text" @click="deleteProject(scope.row)">删除信息</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pagination.currentPage" :page-sizes="pagination.pageSizes" :page-size="pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total"></el-pagination>
      </div>
      <br>
      <br>
      <br>

      <!-- <el-table
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
        <el-table-column width="210" prop="adminId" label="所属建管单位" align="center"></el-table-column>
        <el-table-column width="210" prop="currentProgress" label="当前总体施工进度" align="center"></el-table-column>
        <el-table-column width="210" prop="weeklyStartTime" label="周报开始日期" align="center"></el-table-column>
        <el-table-column width="210" prop="workContentNextWeek" label="主要施工作业内容" align="center"></el-table-column>
        <el-table-column width="320" prop="thirdLevelPlusWorkContent" label="下周的三级及以上风险作业安排、位置及内容" align="center"></el-table-column>
        <el-table-column width="210" prop="note" label="备注" align="center"></el-table-column>
        <el-table-column width="210" prop="actualState" label="实际状态" align="center"></el-table-column>
        <el-table-column width="210" prop="controlledState" label="管控内状态" align="center"></el-table-column>
      </el-table>-->
      <el-dialog title="分项工程信息" :visible.sync="jobNumberFlag" width="1200px" :modal="false">
        <el-tree :data="jobNumberOptions" width="1000px" :props="defaultProps" :default-expand-all="false" @node-click="handleNodeClick"></el-tree>
      </el-dialog>

      <el-dialog title="详细信息" :visible.sync="detailPanelFlag" width="1400px" :modal="false">
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目名称</div>
              <el-input disabled v-model="projectDetail.name" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">所属建管单位</div>
              <el-input disabled v-model="projectDetail.adminName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">监理单位</div>
              <el-input disabled v-model="projectDetail.supervisionName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">施工单位</div>
              <el-input disabled v-model="projectDetail.constructDeptName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">所在区域</div>
              <el-input disabled v-model="projectDetail.districtName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">乡镇/街道</div>
              <el-input disabled v-model="projectDetail.street" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">详细地址</div>
              <el-input disabled v-model="projectDetail.detailedAddress" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
           <el-col :span="8">
           </el-col>


          </el-row>
          <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">定位经度</div>
              <el-input disabled v-model="projectDetail.longitude" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">定位纬度</div>
              <el-input disabled v-model="projectDetail.latitude" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">所属部门</div>
              <el-input disabled v-model="projectDetail.adminDept" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目状态</div>
              <el-input disabled v-model="projectDetail.projectState" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>

        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">电压等级</div>
              <el-input disabled v-model="projectDetail.voltageClass" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目性质</div>
              <el-input disabled v-model="projectDetail.projectProperty" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">工程类型</div>
              <el-input disabled v-model="projectDetail.engineeringType" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">作业类型</div>
              <el-input disabled v-model="projectDetail.assignmentType" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">施工单位类别</div>
              <el-input disabled v-model="projectDetail.constructionType" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目规模</div>
              <el-input disabled v-model="projectDetail.projectScale" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
      
          <el-col :span="8">
            <div class="bar">
              <div class="title">实际开工时间</div>
              <el-input disabled v-model="projectDetail.actualStartTime" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">计划竣工时间</div>
              <el-input disabled v-model="projectDetail.planCompletionTime" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">主业单位作业人数</div>
              <el-input disabled v-model="projectDetail.mainWorkerNum" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">外包单位作业人数</div>
              <el-input disabled v-model="projectDetail.outsourcingWorkerNum" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <div class="title">直属单位人数</div>
              <el-input disabled v-model="projectDetail.directWorkerNum" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">当前分包人员数</div>
              <el-input disabled v-model="projectDetail.currentSubcontractorNum" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          
          </el-row>

        <br>
        <hr><br>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目经理</div>
              <el-input disabled v-model="projectDetail.projectManagerName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">质量专责</div>
              <el-input disabled v-model="projectDetail.qualityStaffName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">安全专责</div>
              <el-input disabled v-model="projectDetail.safetyStaffName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">总监/总监代表</div>
              <el-input disabled v-model="projectDetail.chiefInspectorName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">专业监理</div>
              <el-input disabled v-model="projectDetail.professionalSupervisorName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">安全监理</div>
              <el-input disabled v-model="projectDetail.safetySupervisorName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
         <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">施工单位负责人</div>
              <el-input disabled v-model="projectDetail.constructionPrincipal" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">负责人联系方式</div>
              <el-input disabled v-model="projectDetail.constructionPrincipalNumber" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
         </el-row>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
import * as api from "@/api/date.js";
import * as getApi from "@/api/getApi.js";
import * as deleteApi from "@/api/deleteApi.js";
import * as searchApi from "@/api/searchApi.js";
export default {
  data() {
    return {
      defaultProps: {
        id: 'value',
        label: 'value'
      },
      //查看所有分项工程
      jobNumberOptions: [],
      jobNumberFlag: false,
      //搜索条件数据
      searchTable: {
        adminId: "",
        adminDept: "",
        districtId: "",
        projectState: "",
        options: {
          adminIdOptions: [],
          projectStateOptions: [{
            value: true,
            name: "是"
          }, {
            value: false,
            name: "否"
          }],
          districtIdOptions: {},
          adminDeptOpitons: {},
        }
      },
      //项目信息部分
      projectInfo: {
        tableData: [],
        multiSelection: [],
      },
      //页码部分
      pagination: {
        currentPage: 1,
        pageSizes: [10, 25, 50, 100],
        pageSize: 10,
        total: 0
      },
      //查看详情弹窗控制
      detailPanelFlag: false,
      projectDetail: {
        // name: "",
        // adminName: "",
        // supervisionName: "",
        // constructDept: "",
        // districtName: "",
        // detailedAddress: "",
        // longitude: "",
        // latitude: "",
        // actualStartTime: "",
        // planCompletionTime: "",
        // projectScale: "",
        // currentWorkerNum: "",
        // currentSubcontractorNum: "",
        // adminDept: "",
        // projectManagerName: "",
        // safetyStaffName: "",
        // qualityStaffName: "",
        // chiefInspectorName: "",
        // safetySupervisorName: "",
        // professionalSupervisorName: "",
        // projectState: "",
      },


    };
  },

  created: function () {
    //所有分项工程
    this.jobNumberOptions = getApi.getJobNumberA();
    //获取所有所属建管单位
    getApi.getAllAdministrativeDeptName().then(response => {
      this.searchTable.options.adminIdOptions = response;
    });
    //获取所有所属部门
    getApi.getAllProjectAdminDeptEnum().then(response => {
      this.searchTable.options.adminDeptOptions = response;
    });
    //获取运行状态
    getApi.getAllProjectStateEnum().then(response => {
      this.searchTable.options.projectStateOptions = response;
    });
    //获取区域
    getApi.getAllDistrictName().then(response => {
      this.searchTable.options.districtIdOptions = response;
    });
    //空搜索获取信息
    let list = {
      numberOfPage: this.pagination.pageSize,
      pageNumber: 0,
    }
    searchApi.getProjectInfoByCondition(list).then(response => {
      this.projectInfo.tableData = response.returnList[0];
      this.pagination.total = response.totalNumber;
    })
  },

  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    showAllInfo() {
      this.jobNumberFlag = true;
    },
    //点击搜索按钮
    searchProject(pageNum) {
      console.log(this.pagination)
      let list = {
        numberOfPage: this.pagination.pageSize,
        pageNumber: pageNum - 1,
        adminDept: this.searchTable.adminDept === "" ? undefined : this.searchTable.adminDept,
        districtId: this.searchTable.districtId === "" ? undefined : this.searchTable.districtId,
        adminId: this.searchTable.adminId === "" ? undefined : this.searchTable.adminId,
        projectState: this.searchTable.projectState === "" ? undefined : this.searchTable.projectState
      }
      searchApi.getProjectInfoByCondition(list).then(response => {
        this.projectInfo.tableData = response.returnList[0];
        this.pagination.total = response.totalNumber;
      })
    },
    //项目列表选中
    projectSelect(val) {
      this.projectInfo.multiSelection = val;
    },
    //页码操控部分
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.searchProject(1);
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val;
      this.searchProject(val);
    },
    //添加项目
    addProject() {
      this.$router.push({
        path: `/project/addProjectInfo`,
      });
    },
    //删除此条项目
    deleteProject(row) {
      this.$confirm("确认删除该条项目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteApi.deleteProjectInfoById(row.id).then(response => {
            if (response > 0) this.searchProject(this.pagination.currentPage)
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //查看该条详情
    detailProject(row) {
      getApi.getProjectInfoDetailPageShowRespById(row.id).then(response => {
        this.detailPanelFlag = true;
        this.projectDetail = response[0];
      })
    },
    showThisWeekly(row) {
      this.showIt = true

    },
    lookDetails() {
      this.dialogVisible = true
    },
    updateProject(row) {
      this.$router.push({
        name: `updateProject`,
        params: {
          id: row.id,
          backPath: "projectMana"
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
        name: `addProject`,
        params: {
          backPath: "projectMana"
        }
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
.block {
  padding: 30px 0;
  text-align: center;
}
.el-dialog {
  min-width: 1000px;
  .el-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 15px;
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
