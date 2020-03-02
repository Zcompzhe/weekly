<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="searchTable" label-position="left" ref="searchTable" :rules="searchTableRule" label-width="140px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="督查日期" prop="inspectStartDate" placeholder="周报开始日期">
                <el-date-picker v-model="searchTable.inspectStartDate" :clearable="false" @change="inspectDateChange" type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:0px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6" style="margin-left:-12px">
            <div class="bar">
              <el-form-item label="~" prop="inspectEndDate" placeholder="周报开始日期" label-width="5px">
                <el-date-picker v-model="searchTable.inspectEndDate" disabled :clearable="false" type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:2px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="周报日期" prop="weeklyStartTime" placeholder="周报开始日期">
                <el-date-picker v-model="searchTable.weeklyStartTime" type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:0px" @change="weeklyStartTimeChanged"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6" style="margin-left:-12px">
            <div class="bar">
              <el-form-item label="~" prop="weeklyEndTime" placeholder="周报开始日期" label-width="5px">
                <el-date-picker disabled v-model="searchTable.weeklyEndTime" type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:2px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>

        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="项目名称" prop="projectId" placeholder="项目名称">
                <el-select v-model="searchTable.projectId" clearable placeholder="请选择" style="min-width:430px;margin-left:0px">
                  <el-option v-for="item in searchTable.options.projectIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8" style="margin-top:-20px;margin-left:400px">
            <div class="bar">
              <el-button type="primary" style="margin-left: -40px" @click="searchInspection()">搜索</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-table :data="inspection.tableData" max-height="400" border style="width: 100%; margin-top: 20px">
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="110" prop="inspectDate" label="督查日期" align="center"></el-table-column>
        <el-table-column width="380" prop="projectName" label="项目名称" align="center"></el-table-column>
        <el-table-column width="180" prop="weeklyTime" label="周报日期" align="center"></el-table-column>
        <el-table-column width="150" prop="problemCount" label="存在问题数" align="center"></el-table-column>
        <el-table-column prop="rectificationFeedbackCount" label="反馈条目数" align="center"></el-table-column>
        <el-table-column width="400" label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="searchRetification(scope.row)">查看整改通知单</el-button>
            <el-button type="text" @click="openCheckPanel(scope.row)">反馈整改结果</el-button>
            <el-button type="text" @click="addProblemPic(scope.row)">添加整改照片</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br><br>
      <div v-if="addPhotoPanelFlag">
        <el-row :gutter="20">
          <el-col :span="20">
            <el-button type="text" size="small" @click="closeCheckPanelB()">关闭该栏</el-button>
          </el-col>
        </el-row>
        <el-table :data="problemForm.tableData" v-if="addPhotoPanelFlag" max-height="400" border style="width: 100%; margin-top: 20px">
          <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
          <el-table-column min-width="300" prop="rectificationSituation" label="整改情况" align="center"></el-table-column>
          <el-table-column width="210" prop="rectificationDept" label="整改项目部" align="center"></el-table-column>
          <el-table-column width="210" prop="rectificationStaffName" label="整改负责人" align="center"></el-table-column>
          <el-table-column width="210" prop="rectificationDate" label="整改时间" align="center"></el-table-column>
          <el-table-column width="300" prop="photoNumber" label="上传照片数" align="center"></el-table-column>
          <el-table-column width="200" label="操作" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button type="text" @click="addPhotoPanel(scope.row)">上传照片</el-button>
              <el-button type="text" @click="searchPhotoA(scope.row)">查看照片</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 文件操作 -->
        <el-row :gutter="20" v-if="toAddPhotoPanelFlag">
          <el-upload ref="upload" action :file-list="fileList" :http-request="sigleFileUploadAction" :show-file-list="false" multiple style="margin-left:11%" :auto-upload="true">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          </el-upload>
        </el-row>
        <el-table :data="photo.tableData" max-height="1000" border style="width: 100%; margin-top: 20px" v-if="toAddPhotoPanelFlag">
          <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
          <el-table-column min-width="300" prop="name" label="图片名称" align="center"></el-table-column>
        </el-table>
        <el-table :data="photoTable" max-height="1000" v-if="photoShowFlagA" border style="width: 100%; margin-top: 20px">
          <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
          <el-table-column min-width="300" prop="photoName" label="问题图片名称" align="center"></el-table-column>
          <el-table-column width="200" label="操作" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button type="text" @click="showThisPic(scope.$index,scope.row)">查看图片</el-button>
              <el-button type="text" @click="deletePicA(scope.row)">删除图片</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 图片预览部分 -->
      <el-dialog :visible.sync="isShowImageDialog" :modal="false">
        <el-carousel indicator-position="outside" height="600px" :autoplay="false" arrow="never">
          <el-carousel-item v-for="src in urlIndex" :key="src" :label="src">
            <img :src="src" style="max-width: 100%;max-height: 100%;display: block; margin: 0 auto;" />
          </el-carousel-item>
        </el-carousel>
      </el-dialog>

      <br><br>
      <div v-if="detailPanelFlag">
        <el-row :gutter="20">
          <el-col :span="20">
            <el-button type="text" size="small" @click="closeCheckPanelA()">关闭该栏</el-button>
          </el-col>
        </el-row>
        <el-form :model="detailForm" ref="detailForm" label-position="left" :rules="detailFormRule" label-width="120px" class="demo-ruleForm">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="bar">
                <el-form-item label="被查项目" prop="projectName" placeholder="项目名称">
                  <el-input v-model="detailForm.projectName" clearable disabled :rows="1" placeholder="请选择" style="width:225px"></el-input>
                </el-form-item>
              </div>
            </el-col>

            <el-col :span="8">
              <div class="bar">
                <el-form-item label="被查地点" prop="inspectAddress" placeholder="当前月份">
                  <el-input v-model="detailForm.inspectAddress" disabled clearable :rows="1" placeholder="请选择" style="width:225px"></el-input>
                </el-form-item>
              </div>
            </el-col>

            <el-col :span="8">
              <div class="bar">
                <el-form-item label="检查时间" prop="inspectDate" placeholder="周报开始日期">
                  <el-input v-model="detailForm.inspectDate" clearable disabled :rows="1" placeholder="请选择" style="width:225px"></el-input>
                </el-form-item>
              </div>
            </el-col>

          </el-row>

          <el-row :gutter="20">
            <el-col :span="8">
              <div class="bar">
                <el-form-item label="业主项目部" prop="ownerDeptId" placeholder="项目名称">
                  <el-input v-model="detailForm.ownerDeptId" clearable disabled :rows="1" placeholder="请选择" style="width:225px"></el-input>
                </el-form-item>
              </div>
            </el-col>

            <el-col :span="8">
              <div class="bar">
                <el-form-item label="施工项目部" prop="constructDeptId" placeholder="当前月份">
                  <el-input v-model="detailForm.constructDeptId" clearable disabled :rows="1" placeholder="请选择" style="width:225px"></el-input>
                </el-form-item>
              </div>
            </el-col>

            <el-col :span="8">
              <div class="bar">
                <el-form-item label="监理项目部" prop="adminDeptId" placeholder="周报开始日期">
                  <el-input v-model="detailForm.adminDeptId" clearable disabled :rows="1" placeholder="请选择" style="width:225px"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="20">
              <div class="bar">
                <el-form-item label="检查范围和简要内容" label-width="150px" prop="checkRangeAndContent" placeholder="项目名称">
                  <el-input type="textarea" :rows="4" disabled placeholder="暂无信息" v-model="detailForm.checkRangeAndContent" style="margin-left:20px;width:1000px"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <br />
          <br />
          <hr>
          <br />
          <br />
          <el-table :data="detailForm.tableData" border>
            <el-table-column type="selection" width="50" align="center"></el-table-column>
            <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
            <el-table-column width="380" prop="problem" label="检查问题" align="center"></el-table-column>
            <el-table-column width="140" prop="violationType" label="违章性质" align="center"></el-table-column>
            <el-table-column width="140" prop="responsibleDept" label="责任项目部" align="center"></el-table-column>
            <el-table-column width="140" prop="photoNumber" label="问题照片数" align="center"></el-table-column>
            <el-table-column prop="rectificationRequirement" label="整改要求" align="center"></el-table-column>
            <el-table-column width="150" label="操作" align="center" fixed="right">
              <template slot-scope="scope">
                <el-button type="text" @click="searchPhoto(scope.row)">查看照片</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-form>
        <el-table :data="photoTable" max-height="1000" v-if="photoShowFlag" border style="width: 100%; margin-top: 20px">
          <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
          <el-table-column min-width="300" prop="photoName" label="问题图片名称" align="center"></el-table-column>
          <el-table-column width="200" label="操作" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button type="text" @click="showThisPic(scope.$index,scope.row)">查看图片</el-button>
              <!-- <el-button type="text" @click="deletePic(scope.row)">删除图片</el-button> -->
            </template>
          </el-table-column>
        </el-table>

        <!-- 图片预览部分 -->
        <el-dialog :visible.sync="isShowImageDialog" :modal="false">
          <el-carousel indicator-position="outside" height="600px" :autoplay="false" arrow="never">
            <el-carousel-item v-for="src in urlIndex" :key="src" :label="src">
              <img :src="src" style="max-width: 100%;max-height: 100%;display: block; margin: 0 auto;" />
            </el-carousel-item>
          </el-carousel>
        </el-dialog>
      </div>

      <el-dialog title="详细信息" :visible.sync="feedBackPanelFlag" width="1400px" :modal="false">
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">被查项目</div>
              <el-input disabled v-model="feedBackForm.projectName" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">被查地点</div>
              <el-input disabled v-model="feedBackForm.inspectAddress" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">检查时间</div>
              <el-input disabled v-model="feedBackForm.inspectDate" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <div v-for="item in problemNum" :key="item" style="height:600px">
          <br><br>
          <hr>
          <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
            <el-col :span="10">
              <div class="bar">
                <div id="title">
                  <p id="tableTitle" style="min-width:1000px;font-size:24px;margin-left:580px;margin-top:20px">{{ problemTitle[item-1] }}</p>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
            <el-col :span="12">
              <div class="bar">
                <div class="title">违章性质</div>
                <el-input disabled v-model="inspectionRectificationAddFeedbackShowResps[item-1].violationType" disabled style="min-width:350px"></el-input>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="bar">
                <div class="title">责任项目部</div>
                <el-input disabled v-model="inspectionRectificationAddFeedbackShowResps[item-1].responsibleDept" disabled style="min-width:350px"></el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
            <el-col :span="12">
              <div class="bar">
                <div class="title">检查问题</div>
                <el-input disabled v-model="inspectionRectificationAddFeedbackShowResps[item-1].problem" disabled style="min-width:350px"></el-input>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="bar">
                <div class="title">整改要求</div>
                <el-input disabled v-model="inspectionRectificationAddFeedbackShowResps[item-1].rectificationRequirement" disabled style="min-width:350px"></el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
            <el-col :span="10">
              <div class="bar">
                <div id="title">
                  <p id="tableTitle" style="min-width:1000px;font-size:24px;margin-left:580px;margin-top:20px">问题{{item}}整改反馈信息</p>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="20">
              <el-button type="primary" size="mini" :disabled="!inspectionRectificationAddFeedbackShowResps[item-1].hasFeedback" @click="closeCheckPanel(item-1)">删除本条反馈</el-button>
            </el-col>
          </el-row>
          <el-form :model="inspectionRectificationAddFeedbackShowResps[item-1]" label-position="left" ref="inspectionRectificationAddFeedbackShowResps" :rules="inspectionRectificationAddFeedbackShowRespsRule" label-width="120px" class="demo-ruleForm">
            <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
              <el-col :span="8">
                <div class="bar">
                  <el-form-item label="整改项目部" prop="rectificationDept" placeholder="查岗队伍数">
                    <el-select v-model="inspectionRectificationAddFeedbackShowResps[item-1].rectificationDept" clearable placeholder="请选择" style="min-width:300px">
                      <el-option v-for="item in feedbackOptions.rectificationDeptOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="bar">
                  <el-form-item label="整改负责人" prop="rectificationStaffId" placeholder="查岗队伍数">
                    <el-select v-model="inspectionRectificationAddFeedbackShowResps[item-1].rectificationStaffId" clearable placeholder="请选择" style="min-width:300px">
                      <el-option v-for="item in feedbackOptions.rectificationStaffIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="bar">
                  <el-form-item label="整改时间" prop="rectificationDate" placeholder="查岗队伍数">
                    <el-date-picker v-model="inspectionRectificationAddFeedbackShowResps[item-1].rectificationDate" type="date" placeholder="选择日期时间" style="min-width:300px"></el-date-picker>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-form-item label="整改情况" prop="rectificationSituation" placeholder="查岗队伍数">
                    <el-input v-model="inspectionRectificationAddFeedbackShowResps[item-1].rectificationSituation" type="textarea" clearable :rows="5" placeholder="请选择" style="min-width:1200px;margin-left:20px"></el-input>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div style="margin-left:38%;margin-top:30px;margin-bottom:10px">
          <el-button type="primary" style="margin-right: 80px" @click="submitFeedBack">信息保存</el-button>
          <el-button type="primary" style="margin-right: 80px" @click="feedBackPanelFlag=false">取消</el-button>
        </div>
      </el-dialog>
    </el-card>

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
      //添加问题照片表格
      photoTTT: {},
      fileList: [],
      photo: {
        tableData: []
      },
      formData: [],
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
      //反馈结果整改
      feedBackPanelFlag: false,
      feedbackRow: {},
      firstTable: [],
      isUpdate: false,
      feedbackOptions: {
        rectificationDeptOptions: [],
        rectificationStaffIdOptions: [],
      },
      problemNum: 0,
      feedBackForm: {
      },
      inspectionRectificationAddFeedbackShowResps: {},
      problemTitle: [],
      inspectionRectificationAddFeedbackShowRespsRule: {
        rectificationDept: [
          { required: true, message: "请选择整改项目部！", trigger: "change" }
        ],
        rectificationStaffId: [
          { required: true, message: "请选择整改负责人！", trigger: "change" }
        ],
        rectificationDate: [
          { required: true, message: "请选择整改日期！", trigger: "change" }
        ],
        rectificationSituation: [
          { required: true, message: "请输入整改情况！", trigger: "change" }
        ],
      },
      //查看照片
      searchProblemRow: [],
      searchProblemRowA: [],
      photoShowFlag: false,
      photoShowFlagA: false,
      photoTable: [],
      url: [],
      urlIndex: [],
      isShowImageDialog: false,
      //查看详情控制
      rectificationForm: [],
      detailPanelFlag: false,
      detailForm: {
        tableData: [],
        projectName: "",
        inspectAddress: "",
        inspectDate: "",
        ownerDeptId: "",
        constructDeptId: "",
        adminDeptId: "",
        checkRangeAndContent: "",
      },
      detailFormRule: {},
      //搜索条件数据
      searchTable: {
        inspectStartDate: "",
        inspectEndDate: "",
        weeklyEndTime: "",
        weeklyStartTime: "",
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
    this.searchInspection();
    //获取项目列表
    getApi.getAllProjectName().then(response => {
      this.searchTable.options.projectIdOptions = response;

    });
    //获取整改负责人
    getApi.getAllStaffName().then(response => {
      this.feedbackOptions.rectificationStaffIdOptions = response;
    });
    //获取整改项目部
    getApi.getAllRectification().then(response => {
      this.feedbackOptions.rectificationDeptOptions = response;
    });
  },
  methods: {
    //上传文件
    sigleFileUploadAction(item) {
      if (item.file.type === "image/png" || item.file.type === "image/jpeg") {
        this.formData.append("files", item.file);
        this.photo.tableData.push({ name: item.file.name })
        console.log(this.photo.tableData)
      } else {
        this.$message({
          type: "error",
          message: "上传头像图片只能是 JPG 格式或 PNG 格式!"
        });
      }
    },

    submitUpload() {
      this.formData.append("id", this.problemRow.id);
      addApi.uploadRectifyPhoto(this.formData).then(response => {
        this.formData = new FormData();
        this.problemRow = {};
        this.photoTable = [];
        this.toAddPhotoPanelFlag = false;
        this.problemForm.tableData = [];
        this.addProblemPic(this.photoTTT)
      });

    },
    //开始添加问题照片
    addPhotoPanel(row) {
      this.toAddPhotoPanelFlag = true;
      this.problemRow = row;
      this.photo.tableData = [];
      this.formData = new FormData();
    },
    //添加问题照片
    addProblemPic(row) {
      this.photoTTT = row;

      getApi.getRectificationFeedbackShowRespByJobOrderId(row.jobOrderId).then(response => {
        this.addPhotoPanelFlag = true;
        this.photoShowFlag = false;
        this.photoShowFlagA = false;
        this.detailPanelFlag = false;
        this.problemForm.tableData = response;
      })
    },
    submitFeedBack() {
      //全部为添加
      let ok = 0;
      let list = [];
      console.log(this.isUpdate)
      if (this.isUpdate) {
        this.inspectionRectificationAddFeedbackShowResps.forEach(ele => {
          if ((ele.rectificationDate != null && ele.rectificationDate != "")
            && (ele.rectificationDept != null && ele.rectificationDept != "")
            && (ele.rectificationSituation != null && ele.rectificationSituation != "")
            && (ele.rectificationStaffId != null && ele.rectificationStaffId != "")) {
            //此时不为空
            this.firstTable.forEach(element => {
              //说明原来已经有了
              if (element.id === ele.id) {
                if (element.rectificationDate === api.changeDate(new Date(ele.rectificationDate)) &&
                  element.rectificationDept === ele.rectificationDept &&
                  element.rectificationSituation === ele.rectificationSituation &&
                  element.rectificationStaffId === ele.rectificationStaffId) {
                  //说明未修改
                }
                else {
                  //已修改过
                  list.push({
                    listUpdateOperation: "更新",
                    rectificationContentId: ele.id,
                    id: ele.rectificationFeedBackId,
                    rectificationDate: api.changeDate(ele.rectificationDate),
                    rectificationDept: ele.rectificationDept,
                    rectificationSituation: ele.rectificationSituation,
                    rectificationStaffId: ele.rectificationStaffId
                  })
                }
              } else {
                //说明原来没有，是新增的
                list.push({
                  listUpdateOperation: "添加",
                  rectificationContentId: ele.id,
                  rectificationDate: api.changeDate(ele.rectificationDate),
                  rectificationDept: ele.rectificationDept,
                  rectificationSituation: ele.rectificationSituation,
                  rectificationStaffId: ele.rectificationStaffId
                })
              }
            })
          } else if ((ele.rectificationDate === null || ele.rectificationDate === "")
            && (ele.rectificationDept === null || ele.rectificationDept === "") &&
            (ele.rectificationSituation === null || ele.rectificationSituation === "") &&
            (ele.rectificationStaffId === null || ele.rectificationStaffId === "")) {

            if (ele.hasFeedback) {
              this.$message({
                type: "error",
                message: "已反馈的问题，不能修改为空值，否则请点击删除！"
              });
              ok = 1;
              return;
            } else {

            }
          } else {
            this.$message({
              type: "error",
              message: "任何一个问题只能全部填写或者全部为空！"
            });
            ok = 1;
            return;
          }
        })
        if (ok === 0) {
          if (list.length === 0) this.feedBackPanelFlag = false;
          else {
            updateApi.updateRectificationFeedbackList(list).then(res => {
              this.feedBackPanelFlag = false;
              this.searchInspection();
            })
          }
        }
      } else {
        this.inspectionRectificationAddFeedbackShowResps.forEach(ele => {
          if ((ele.rectificationDate != null && ele.rectificationDate != "")
            && (ele.rectificationDept != null && ele.rectificationDept != "")
            && (ele.rectificationSituation != null && ele.rectificationSituation != "")
            && (ele.rectificationStaffId != null && ele.rectificationStaffId != "")) {
            //此时不为空
            list.push({
              rectificationContentId: ele.id,
              rectificationDate: api.changeDate(ele.rectificationDate),
              rectificationDept: ele.rectificationDept,
              rectificationSituation: ele.rectificationSituation,
              rectificationStaffId: ele.rectificationStaffId
            })
          } else if ((ele.rectificationDate === null || ele.rectificationDate === "")
            && (ele.rectificationDept === null || ele.rectificationDept === "") &&
            (ele.rectificationSituation === null || ele.rectificationSituation === "") &&
            (ele.rectificationStaffId === null || ele.rectificationStaffId === "")) {

          }
          else {
            this.$message({
              type: "error",
              message: "任何一个问题只能全部填写或者全部为空！"
            });
            ok = 1;
            return;
          }
        })
        if (ok === 0) {
          if (list.length === 0) this.feedBackPanelFlag = false;
          else {
            addApi.addRectificationFeedback(list).then(res => {
              this.feedBackPanelFlag = false;
              this.searchInspection();
            })
          }
        }
      }
    },
    openCheckPanel(row) {
      getApi.getRectificationAddFeedbackShowRespByJobOrderId(row.jobOrderId).then(response => {
        this.feedBackPanelFlag = true;
        this.feedbackRow = row;
        this.feedBackForm = response.inspectionJobOrderRectificationAddFeedbackShowResp;
        this.inspectionRectificationAddFeedbackShowResps = response.inspectionRectificationAddFeedbackShowResps;
        this.problemNum = this.inspectionRectificationAddFeedbackShowResps.length;
        this.isUpdate = false;
        this.firstTable = [];
        for (let i = 0; i < this.problemNum; i++) {
          // if (this.inspectionRectificationAddFeedbackShowResps[i].rectificationDept === null || this.inspectionRectificationAddFeedbackShowResps[i].rectificationDept === "")
          //   this.inspectionRectificationAddFeedbackShowResps[i].rectificationDept = this.inspectionRectificationAddFeedbackShowResps[i].responsibleDept;
          if (this.inspectionRectificationAddFeedbackShowResps[i].hasFeedback) {
            this.firstTable.push({
              id: this.inspectionRectificationAddFeedbackShowResps[i].id,
              rectificationDate: this.inspectionRectificationAddFeedbackShowResps[i].rectificationDate,
              rectificationDept: this.inspectionRectificationAddFeedbackShowResps[i].rectificationDept,
              rectificationStaffId: this.inspectionRectificationAddFeedbackShowResps[i].rectificationStaffId,
              rectificationSituation: this.inspectionRectificationAddFeedbackShowResps[i].rectificationSituation
            })
            this.problemTitle[i] = "检查问题" + (i + 1) + "(已反馈)";
            this.isUpdate = true;
          }
          else this.problemTitle[i] = "检查问题" + (i + 1) + "(未反馈)"
        }
      })
    },
    //删除图片
    deletePicA(row) {
      this.$confirm("确认删除该图片？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteApi.deleteRectificationPhotoPathByPathId(row.id).then(response => {
            getApi.getRectificationFeedbackShowRespByJobOrderId(this.photoTTT.jobOrderId).then(response => {
              this.problemForm.tableData = response;
            })
            this.searchPhotoA(this.searchProblemRowA)
            this.photoShowFlagA = true;
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    deletePic(row) {
      this.$confirm("确认删除该图片？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteApi.deleteInspectPhotoPathByPathId({
            jobOrderTypeName: "整改通知单",
            id: row.id
          }).then(response => {
            this.searchRetification(this.addProblemRow)
            searchApi.getRectificationPhotoResourceByFeedbackId(this.searchProblemRowA.id).then(response => {
              this.photoShowFlagA = true;
              this.photoTable = response.returnList[0];
              this.url = [];
              response.returnList[0].forEach(element => {
                this.url.push(`${window.$config.PIC}` + element.photoResourceUrl);
              })
            })

          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //查看图片
    showThisPic(index, row) {
      this.urlIndex = [];
      this.urlIndex.push(this.url[index]);
      this.isShowImageDialog = true;
    },
    //查看照片
    searchPhotoA(row) {

      this.searchProblemRowA = row;
      searchApi.getRectificationPhotoResourceByFeedbackId(row.id).then(response => {
        this.photoShowFlagA = true;
        this.photoTable = response.returnList[0];
        this.url = [];
        response.returnList[0].forEach(element => {
          this.url.push(`${window.$config.PIC}` + element.photoResourceUrl);
        })
      })
    },
    searchPhoto(row) {
      let list = {
        contentId: row.id,
        jobOrderTypeName: this.rectificationForm.jobOrderType
      };
      this.searchProblemRow = row;
      searchApi.getInspectPhotoResourceByContentId(list).then(response => {
        this.photoShowFlag = true;
        this.photoTable = response.returnList[0];
        this.url = [];
        response.returnList[0].forEach(element => {
          this.url.push(`${window.$config.PIC}` + element.photoResourceUrl);
        })
      })
    },
    closeCheckPanel(i) {
      this.$confirm("该操作会清除未保存的信息，是否确认删除选中条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteApi.deleteRectificationFeedbackInfoById(this.inspectionRectificationAddFeedbackShowResps[i].rectificationFeedBackId).then(res => {
            // this.openCheckPanel(this.feedbackRow);
            this.searchInspection();
            this.feedBackPanelFlag = false;
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    closeCheckPanelA() {
      this.detailPanelFlag = false;

      this.photoShowFlag = false;
    },
    closeCheckPanelB() {
      this.addPhotoPanelFlag = false;
      this.photoShowFlagA = false;
    },

    //查看整改结果
    searchRetification(row) {
      this.addProblemRow = row;
      let list = {
        inspectionId: row.id,
        jobOrderTypeName: row.jobOrderType
      }
      searchApi.getInspectJobOrderInfoByInspectionId(list).then(response => {
        this.rectificationForm = row;
        this.detailPanelFlag = true;
        this.addPhotoPanelFlag = false;
        this.photoTable = [];
        this.detailForm.tableData = response.returnListSecondary[0];
        this.detailForm.projectName = response.returnListMajor[0][0].projectName;
        this.detailForm.inspectAddress = response.returnListMajor[0][0].inspectAddress;
        this.detailForm.inspectDate = response.returnListMajor[0][0].inspectDate;
        this.detailForm.ownerDeptId = response.returnListMajor[0][0].ownerDeptName;
        this.detailForm.constructDeptId = response.returnListMajor[0][0].constructDeptName;
        this.detailForm.adminDeptId = response.returnListMajor[0][0].adminDeptName;
        this.detailForm.checkRangeAndContent = response.returnListMajor[0][0].checkRangeAndContent;

      })
    },
    //督查日期修改
    inspectDateChange() {
      if (this.searchTable.inspectStartDate == null) {
        this.searchTable.inspectStartDate = "";
        this.searchTable.inspectEndDate = "";
        return;
      }
      this.searchTable.inspectEndDate = api.getThisWeekStartTwo(
        this.searchTable.inspectStartDate
      );
    },
    //周报开始日期改变，自动获取月份，周数，周次
    weeklyStartTimeChanged() {
      if (this.searchTable.weeklyStartTime == null) {
        this.searchTable.weeklyStartTime = "";
        this.searchTable.weeklyEndTime = "";
        return;
      }
      this.searchTable.weeklyEndTime = api.getThisWeekStart(
        this.searchTable.weeklyStartTime
      );
    },
    //搜索
    searchInspection() {
      if ((this.searchTable.inspectEndDate === null && this.searchTable.inspectStartDate != null) || (this.searchTable.inspectEndDate != null && this.searchTable.inspectStartDate === null)) {
        this.$message({
          type: "error",
          message: "督查起止日期必须均填写或均不填写！"
        });
        return;
      }

      console.log(this.searchTable)
      let list = {
        inspectEndDate: this.searchTable.inspectEndDate === null ? undefined : api.changeDate(new Date(this.searchTable.inspectEndDate)),
        inspectStartDate: this.searchTable.inspectStartDate === null ? undefined : api.changeDate(new Date(this.searchTable.inspectStartDate)),
        projectId: this.searchTable.projectId === "" ? undefined : this.searchTable.projectId,
        weeklyStartTime: this.searchTable.weeklyStartTime === null ? undefined : api.changeDate(this.searchTable.weeklyStartTime),
      }
      searchApi.getRectificationFeedbackInspectionByCondition(list).then(response => {
        this.inspection.tableData = response.returnList[0];
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
