<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="searchTable" label-position="left" ref="searchTable" :rules="searchTableRule" label-width="140px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="督查日期" prop="inspectStartDate" placeholder="周报开始日期">
                <el-date-picker v-model="searchTable.inspectStartDate" type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:0px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6" style="margin-left:-12px">
            <div class="bar">
              <el-form-item label="~" prop="inspectEndDate" placeholder="周报开始日期" label-width="5px">
                <el-date-picker v-model="searchTable.inspectEndDate" type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:2px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8" style="margin-left:-32px">
            <div class="bar">
              <el-form-item label="项目名称" prop="projectId" placeholder="项目名称">
                <el-select v-model="searchTable.projectId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in searchTable.options.projectIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8" style="margin-top:-20px">
            <div class="bar">
              <el-button type="primary" style="margin-right: 20px" @click="searchInspection()">搜索</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-table :data="inspection.tableData" max-height="400" border style="width: 100%; margin-top: 20px">
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="210" prop="inspectDate" label="督查日期" align="center"></el-table-column>
        <el-table-column width="210" prop="projectName" label="项目名称" align="center"></el-table-column>
        <el-table-column width="300" prop="teamName" label="督查队伍" align="center"></el-table-column>
        <el-table-column width="300" prop="inspectContent" label="督查内容" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.inspectContent" style="min-width:270px">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column width="350" prop="resultFeedBack" label="督查结果反馈情况" align="center"></el-table-column>
        <el-table-column width="210" prop="jobOrderType" label="通知单类型" align="center"></el-table-column>
        <el-table-column width="210" prop="problemCount" label="存在问题数" align="center"></el-table-column>
        <el-table-column width="400" label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="completeInspection(scope.row)">完成督查</el-button>
            <el-button type="text" @click="openCheckPanel(scope.row)">反馈检查问题</el-button>
            <el-button type="text" :disabled="scope.row.resultFeedBack != '已上报'" @click="addProblemPic(scope.row)">添加问题照片</el-button>
            <el-button type="text">删除通知单</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-card class="box-card" v-if="addPhotoPanelFlag">
      <el-form :model="problemForm" ref="problemForm" label-position="left" :rules="problemFormRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="业主项目部" prop="ownerDeptName" placeholder="项目名称">
                <el-input v-model="problemForm.ownerDeptName" disabled :rows="1" placeholder="暂无信息" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="施工项目部" prop="constructDeptName" placeholder="当前月份">
                <el-input v-model="problemForm.constructDeptName" disabled :rows="1" placeholder="暂无信息" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="监理项目部" prop="adminDeptName" placeholder="周报开始日期">
                <el-input v-model="problemForm.adminDeptName" disabled :rows="1" placeholder="暂无信息" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="被查地点" prop="inspectAddress" placeholder="周报开始日期">
                <el-input v-model="problemForm.inspectAddress" disabled :rows="1" placeholder="暂无信息" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <el-form-item label="检查范围和简要内容" label-width="150px" prop="checkRangeAndContent" placeholder="项目名称">
                <el-input type="textarea" disabled :rows="4" placeholder="暂无信息" v-model="problemForm.checkRangeAndContent" style="margin-left:20px;width:1000px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <el-table :data="problemForm.tableData" max-height="400" border style="width: 100%; margin-top: 20px" v-if="addProblemRow.jobOrderType==='口头警告'">
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column min-width="300" prop="problem" label="发现问题" align="center"></el-table-column>
        <el-table-column width="210" prop="responsibleDept" label="责任项目部" align="center"></el-table-column>
        <el-table-column width="300" prop="photoNumber" label="上传照片数量" align="center"></el-table-column>
        <el-table-column width="200" label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text">上传照片</el-button>
            <el-button type="text">查看照片</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-table :data="problemForm.tableData" max-height="400" border style="width: 100%; margin-top: 20px" v-if="addProblemRow.jobOrderType==='整改通知单'">
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column min-width="300" prop="problem" label="发现问题" align="center"></el-table-column>
        <el-table-column width="210" prop="violationType" label="违章性质" align="center"></el-table-column>
        <el-table-column width="300" prop="responsibleDept" label="责任项目部" align="center"></el-table-column>
        <el-table-column width="300" prop="rectificationRequirement" label="整改要求" align="center"></el-table-column>
        <el-table-column width="300" prop="photoNumber" label="上传照片数量" align="center"></el-table-column>
        <el-table-column width="200" label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="addPhotoPanel(scope.row)">上传照片</el-button>
            <el-button type="text" @click="searchPhoto(scope.row)">查看照片</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 图片预览部分 -->
      <div class="demo-image" v-if="showPhotoFlag">
        <div class="block" v-for="i in photoNumber" :key="i">
          <el-image style="width: 100px; height: 100px" :src="url[i]" fit="cover"></el-image>
        </div>
      </div>

      <!-- 文件操作 -->
      <el-row :gutter="20" v-if="toAddPhotoPanelFlag">
        <el-upload ref="upload" action :file-list="fileList" :http-request="sigleFileUploadAction" multiple style="margin-left:11%" :auto-upload="true">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        </el-upload>
      </el-row>
    </el-card>
    <!-- 反馈检查问题 -->
    <el-dialog title="反馈检查问题" :visible.sync="addInspectionProblemPanelFlag" width="1400px" :modal="false">
      <el-form :model="addCheckForm" ref="addCheckForm" label-position="left" :rules="addCheckFormRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="通知单类型" prop="jobOrderType" placeholder="项目名称">
                <el-select v-model="addCheckForm.jobOrderType" clearable placeholder="请选择" style="min-width:200px" @change="addCheckTypeChanged">
                  <el-option v-for="item in addCheckForm.options.jobOrderTypeOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
          </el-col>

          <el-col :span="8">

          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="被查项目" prop="projectId" placeholder="项目名称">
                <el-select v-model="addCheckForm.projectId" clearable disabled placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addCheckForm.options.projectIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="被查地点" prop="inspectAddress" placeholder="当前月份">
                <el-input v-model="addCheckForm.inspectAddress" clearable :rows="1" placeholder="请选择" style="width:225px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="检查时间" prop="inspectDate" placeholder="周报开始日期">
                <el-input v-model="addCheckForm.inspectDate" clearable disabled :rows="1" placeholder="请选择" style="width:225px"></el-input>
              </el-form-item>
            </div>
          </el-col>

        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="业主项目部" prop="ownerDeptId" placeholder="项目名称">
                <el-select v-model="addCheckForm.ownerDeptId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addCheckForm.options.ownerDeptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="施工项目部" prop="constructDeptId" placeholder="当前月份">
                <el-select v-model="addCheckForm.constructDeptId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addCheckForm.options.constructDeptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="监理项目部" prop="adminDeptId" placeholder="周报开始日期">
                <el-select v-model="addCheckForm.adminDeptId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addCheckForm.options.adminDeptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <el-form-item label="检查范围和简要内容" label-width="150px" prop="checkRangeAndContent" placeholder="项目名称">
                <el-input type="textarea" :rows="4" placeholder="暂无信息" v-model="addCheckForm.checkRangeAndContent" style="margin-left:20px;width:1000px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <br />
        <br />
        <hr>
        <br />
        <br />
        <el-button type="primary" style="margin-right: 20px" @click="addCheckTableRow">添加条目</el-button>
        <el-button type="primary" style="margin-right: 20px" @click="deleteSelectRow">删除条目</el-button>
        <br />
        <br />
        <el-table :data="addCheckForm.tableData" @selection-change="addCheckTableSelect" border v-if="addCheckForm.jobOrderType === '口头警告通知单'">
          <el-table-column type="selection" width="50" align="center"></el-table-column>
          <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
          <el-table-column width="500" label="发现问题" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.problem" :rows="1" placeholder="暂无信息" style="min-width:200px"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="责任项目部" align="center">
            <template slot-scope="scope">
              <el-select v-model="scope.row.responsibleDept" clearable placeholder="请选择" style="min-width:200px">
                <el-option v-for="item in addCheckForm.options.responsibleDeptOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
              </el-select>
            </template>
          </el-table-column>
        </el-table>

        <el-table :data="addCheckForm.tableData" @selection-change="addCheckTableSelect" border v-if="addCheckForm.jobOrderType === '整改通知单' ||addCheckForm.jobOrderType==='' ">
          <el-table-column type="selection" width="50" align="center"></el-table-column>
          <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
          <el-table-column width="500" label="发现问题" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.problem" :rows="1" placeholder="暂无信息" style="min-width:200px"></el-input>
            </template>
          </el-table-column>
          <el-table-column width="500" label="违章性质" align="center">
            <template slot-scope="scope">
              <el-select v-model="scope.row.violationType" clearable placeholder="请选择" style="min-width:200px">
                <el-option v-for="item in addCheckForm.options.violationTypeOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="责任项目部" align="center">
            <template slot-scope="scope">
              <el-select v-model="scope.row.responsibleDept" clearable placeholder="请选择" style="min-width:200px">
                <el-option v-for="item in addCheckForm.options.responsibleDeptOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="整改要求" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.rectificationRequirement" :rows="1" placeholder="暂无信息" style="min-width:200px"></el-input>
            </template>
          </el-table-column>
        </el-table>
        <br />
        <br />
        <br />
        <el-row :gutter="20">

          <el-col :span="8" align="right" style="margin-left:140px">
            <el-button type="primary" @click="addSubmitCheckForm">确认添加</el-button>
          </el-col>
          <el-col :span="8" align="center">
            <el-button type="primary" @click="cancelCheckForm">取消</el-button>
          </el-col>

        </el-row>

      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { POINT_CONVERSION_COMPRESSED } from "constants";
import * as api from "@/api/date.js";
import * as getApi from "@/api/getApi.js";
import * as addApi from "@/api/addApi.js";
import * as deleteApi from "@/api/deleteApi.js";
import * as searchApi from "@/api/searchApi.js";
import * as updateApi from "@/api/updateApi.js";
export default {
  data() {
    return {
      //反馈检查问题弹窗
      inspectionId: "",
      addInspectionProblemPanelFlag: false,
      addCheckForm: {
        jobOrderType: "",
        projectId: "",
        inspectAddress: "",
        inspectDate: "",
        adminDeptId: "",
        ownerDeptId: "",
        constructDeptId: "",
        checkRangeAndContent: "",
        tableData: [],
        multiSelection: [],

        options: {
          jobOrderTypeOptions: [],
          projectIdOptions: [],
          ownerDeptIdOptions: [],
          adminDeptIdOptions: [],
          constructDeptIdOptions: [],
          responsibleDeptOptions: [
          ],
          violationTypeOptions: [
            {
              name: "管理违章"
            },
            {
              name: "装置性违章"
            },
            {
              name: "行为违章"
            },
          ]
        }
      },
      addCheckFormRule: {
        jobOrderType: [
          { required: true, message: "请选择通知单类型", trigger: "change" }
        ],
        projectId: [
          { required: true, message: "请选择项目名称", trigger: "change" }
        ],
        inspectAddress: [
          { required: true, message: "请选择被查地点", trigger: "change" }
        ],
        inspectDate: [
          { required: true, message: "请选择被查日期", trigger: "change" }
        ],
        adminDeptId: [
          { required: true, message: "请选择监理项目部", trigger: "change" }
        ],
        ownerDeptId: [
          { required: true, message: "请选择业主项目部", trigger: "change" }
        ],
        constructDeptId: [
          { required: true, message: "请选择施工项目部", trigger: "change" }
        ],
        checkRangeAndContent: [
          { required: true, message: "请输入检查范围和简要内容", trigger: "change" }
        ],
      },
      //图片个数
      showPhotoFlag: true,
      photoNumber: 0,
      url: [],
      // 文件操作
      formData: "",
      fileList: [],
      uploadFileNameList: [],
      uploadResult: [],
      fileOperationDialogVisible: false,
      //添加问题照片表格
      addPhotoPanelFlag: false,
      toAddPhotoPanelFlag: false,
      problemRow: {},
      addProblemRow: {},
      problemForm: {
        checkRangeAndContent: "",
        adminDeptName: "",
        ownerDeptName: "",
        constructDeptName: "",
        inspectAddress: "",
        tableData: [],
      },
      problemFormRule: {

      },
      //搜索条件数据
      searchTable: {
        inspectStartDate: "",
        inspectEndDate: "",
        projectId: "",
        options: {
          projectIdOptions: {},
        }
      },
      searchTableRule: {
      },
      //表格数据控制
      inspection: {
        tableData: [],
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
    this.formData = new FormData();
    //空搜索获取信息
    let startDate = new Date();
    let endDate = api.getThisWeekStartTwo(startDate);
    this.searchTable.inspectStartDate = new Date(api.changeDate(startDate));
    this.searchTable.inspectEndDate = new Date(endDate);

    //获取项目列表
    getApi.getAllProjectName().then(response => {
      this.searchTable.options.projectIdOptions = response;
      this.addCheckForm.options.projectIdOptions = response;
    });

    //获取通知单类型
    getApi.getAllJobOrderTypeEnum().then(response => {
      this.addCheckForm.options.jobOrderTypeOptions = response;
    });

    //获取业主项目部
    getApi.getAllOwnerProjectDeptName().then(response => {
      this.addCheckForm.options.ownerDeptIdOptions = response;
    });

    //获取施工项目部
    getApi.getAllConstructProjectDeptName().then(response => {
      this.addCheckForm.options.constructDeptIdOptions = response;
    });

    //获取监理项目部
    getApi.getAllAdminProjectDeptName().then(response => {
      this.addCheckForm.options.adminDeptIdOptions = response;
    });

    //获取部门的枚举
    getApi.getAllResponsibleDeptEnum().then(response => {
      this.addCheckForm.options.responsibleDeptOptions = response;
    });
  },
  methods: {
    //确认添加问题
    addSubmitCheckForm() {
      this.$refs["addCheckForm"].validate(valid => {
        if (valid) {
          let inspectionJobOrderAddReq = {};
          let inspectionOralWarningContentAddReqs = [];
          let inspectionRectificationContentAddReqs = [];
          inspectionJobOrderAddReq = {
            adminDeptId: this.addCheckForm.adminDeptId,
            checkRangeAndContent: this.addCheckForm.checkRangeAndContent,
            constructDeptId: this.addCheckForm.constructDeptId,
            inspectAddress: this.addCheckForm.inspectAddress,
            inspectDate: this.addCheckForm.inspectDate,
            inspectionId: this.inspectionId,
            jobOrderType: this.addCheckForm.jobOrderType,
            ownerDeptId: this.addCheckForm.ownerDeptId,
            projectId: this.addCheckForm.projectId,

          };
          if (this.addCheckForm.jobOrderType === "口头警告通知单") inspectionOralWarningContentAddReqs = this.addCheckForm.tableData;
          else if (this.addCheckForm.jobOrderType === "整改通知单") inspectionRectificationContentAddReqs = this.addCheckForm.tableData;

          let list = {
            inspectionJobOrderAddReq,
            inspectionOralWarningContentAddReqs,
            inspectionRectificationContentAddReqs
          };

          addApi.addInspectionJobOrderInfo(list).then(response => {
            this.addInspectionProblemPanelFlag = false;
          })
        } else {
          this.$message({
            type: "error",
            message: "请填写所以必填项!"
          });
        }
      });
    },
    //取消添加问题
    cancelCheckForm() {
      this.addInspectionProblemPanelFlag = false;
    },
    //增加一行问题
    addCheckTableRow() {
      this.addCheckForm.tableData.push({
        problem: "",
      });
    },
    //删除选中多行问题
    deleteSelectRow() {
      this.$confirm("确认删除选中条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.addCheckForm.multiSelection.forEach(element => {
            let i = 0;
            this.addCheckForm.tableData.forEach(ele => {
              if (ele === element) {
                this.addCheckForm.tableData.splice(i, 1);
                i--;
              }
              i++;
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //反馈检查问题点击
    openCheckPanel(row) {
      this.inspectionId = row.id;

      //添加面板打开判断
      if (row.jobOrderType === "口头警告通知单" || row.jobOrderType === "整改通知单") {
      } else {
        this.addCheckForm.projectId = row.projectId;
        this.addCheckForm.inspectDate = row.inspectDate;
        this.addInspectionProblemPanelFlag = true;

      }
    },
    //检查问题表格选中
    addCheckTableSelect(val) {
      this.addCheckForm.multiSelection = val;
    },
    //添加的时候通知单类型改变
    addCheckTypeChanged() {
      this.addCheckForm.tableData = [];
      this.addCheckForm.multiSelection = [];
    },
    //搜索
    searchInspection() {
      let list = {
        inspectEndDate: this.searchTable.inspectEndDate === null ? undefined : api.changeDate(this.searchTable.inspectEndDate),
        inspectStartDate: this.searchTable.inspectStartDate === null ? undefined : api.changeDate(this.searchTable.inspectStartDate),
        projectId: this.searchTable.projectId === "" ? undefined : this.searchTable.projectId,
      }
      searchApi.getProjectInspectionResultByCondition(list).then(response => {
        this.inspection.tableData = response.returnList[0];
      })
    },
    //上传文件
    sigleFileUploadAction(item) {
      this.formData.append("files", item.file);
    },
    submitUpload() {
      this.formData.append("id", this.problemRow.id);
      this.formData.append("jobOrderId", this.addProblemRow.jobOrderId);
      addApi.addInspectPhotos(this.formData).then(response => {
        this.formData = [];
        this.problemRow = {};
        this.toAddPhotoPanelFlag = false;
        this.problemForm.tableData = [];
        let list = {
          inspectionId: this.addProblemRow.id,
          jobOrderTypeName: this.addProblemRow.jobOrderType
        }
        searchApi.getInspectJobOrderInfoByInspectionId(list).then(response => {
          this.problemForm.tableData = response.returnListSecondary[0];
        })
      });

    },
    //开始添加问题照片
    addPhotoPanel(row) {
      this.toAddPhotoPanelFlag = true;
      this.problemRow = row;
    },
    //完成督查
    completeInspection(row) {
      this.$confirm("确认要完成督查吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let list = {
            id: row.id,
            inspectContent: row.inspectContent,
            inspectionPlanState: "已督查"
          };
          updateApi.updateProjectInspection(list).then(response => {
            this.searchInspection();
          });
        })
        .catch(() => {
        });
    },
    //查看问题照片
    searchPhoto(row) {
      let list = {
        contentId: row.id,
        jobOrderTypeName: this.addProblemRow.jobOrderType
      };
      searchApi.getInspectPhotoResourceByContentId(list).then(response => {
        this.photoNumber = response.returnList[0].length;
        this.url = [];
        response.returnList[0].forEach(element => {
          this.url.push("http://localhost:8080" + element.photoResourceUrl);
        })
      })
    },
    //添加问题照片
    addProblemPic(row) {
      let list = {
        inspectionId: row.id,
        jobOrderTypeName: row.jobOrderType
      }
      searchApi.getInspectJobOrderInfoByInspectionId(list).then(response => {
        //记录下该请求的参数
        this.addProblemRow = row;
        this.addPhotoPanelFlag = true;
        let data = response.returnListMajor[0][0];
        this.problemForm.adminDeptName = data.adminDeptName;
        this.problemForm.constructDeptName = data.constructDeptName;
        this.problemForm.inspectAddress = data.inspectAddress;
        this.problemForm.ownerDeptName = data.ownerDeptName;
        this.problemForm.checkRangeAndContent = data.checkRangeAndContent;
        this.problemForm.tableData = response.returnListSecondary[0];
      })
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
