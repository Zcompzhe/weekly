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
        <el-table-column width="110" prop="inspectDate" label="督查日期" align="center"></el-table-column>
        <el-table-column width="250" prop="projectName" label="项目名称" align="center"></el-table-column>
        <el-table-column width="100" prop="teamName" label="督查队伍" align="center"></el-table-column>
        <el-table-column width="300" prop="inspectContent" label="检查范围和简要内容" align="center"></el-table-column>
        <el-table-column width="180" prop="resultFeedBack" label="督查结果通知情况" align="center"></el-table-column>
        <el-table-column width="180" prop="jobOrderType" label="通知单类型" align="center"></el-table-column>
        <el-table-column width="100" prop="problemCount" label="存在问题数" align="center"></el-table-column>
        <el-table-column width="80" prop="inspectionPlanState" label="督查情况" align="center"></el-table-column>
        <!-- <el-table-column prop="file_name" lable="文件名称">
          <template slot-scope="scope">
            <el-input v-model="scope.row.file_name" placeholder="请输入文件名称"></el-input>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-upload ref="upload" :data="uploadData" :show-file-list="false" action="uploadUrl" :on-success="handleSucess" :on-error="handleError" :auto-upload="true">
              <el-button size="small" type="primary" @click="curRowIndex=scope.$index">点击上传</el-button>
            </el-upload>
          </template>
        </el-table-column> -->
        <el-table-column width="450" label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="completeInspection(scope.row)">完成督查</el-button>
            <el-button type="text" @click="cancelInspection(scope.row)">取消安排</el-button>
            <el-button type="text" @click="openCheckPanel(scope.row)">添加督查通知单</el-button>
            <!-- <el-button type="text" :disabled="scope.row.resultFeedBack != '已上报'" @click="addProblemPic(scope.row)">添加问题照片</el-button> -->
            <el-button type="text" :disabled="scope.row.resultFeedBack === '未通知'" @click="deleteInspection(scope.row)">删除通知单</el-button>
            <el-button type="text" :disabled="scope.row.resultFeedBack === '未通知'">导出通知单</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <div v-if="addPhotoPanelFlag">
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
        <el-table :data="problemForm.tableData" max-height="400" border style="width: 100%; margin-top: 20px" v-if="addProblemRow.jobOrderType==='口头警告通知单'">
          <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
          <el-table-column min-width="300" prop="problem" label="发现问题" align="center"></el-table-column>
          <el-table-column width="210" prop="responsibleDept" label="责任项目部" align="center"></el-table-column>
          <el-table-column width="300" prop="photoNumber" label="上传照片数量" align="center"></el-table-column>
          <el-table-column width="200" label="操作" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button type="text" @click="addPhotoPanel(scope.row)">上传照片</el-button>
              <el-button type="text" @click="searchPhoto(scope.row)">查看照片</el-button>
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
        <br><br>
        <hr><br><br>

        <el-table :data="photoTable" max-height="1000" border style="width: 100%; margin-top: 20px" v-if="photoShowFlag">
          <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
          <el-table-column min-width="300" prop="photoName" label="问题图片名称" align="center"></el-table-column>
          <el-table-column width="200" label="操作" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button type="text" @click="showThisPic(scope.$index,scope.row)">查看图片</el-button>
              <el-button type="text" @click="deletePic(scope.row)">删除图片</el-button>
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
        <!-- <div class="demo-image" v-if="showPhotoFlag">
        <div class="block" v-for="i in photoNumber" :key="i">
          <el-image style="width: 100px; height: 100px" :src="url[i]" fit="cover"></el-image>
        </div>
      </div> -->

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

      </el-card>
    </div>
    <!-- 反馈检查问题 -->
    <!-- 添加弹窗 -->
    <el-dialog title="反馈检查问题" :visible.sync="addInspectionProblemPanelFlag" width="1400px" :modal="false">
      <el-form :model="addCheckForm" ref="addCheckForm" label-position="left" :rules="addCheckFormRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="通知单类型" prop="jobOrderType" placeholder="项目名称">
                <el-select v-model="addCheckForm.jobOrderType" placeholder="请选择" style="min-width:200px" @change="addCheckTypeChanged">
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
              <el-form-item label="业主项目部" prop="ownerDeptName" placeholder="项目名称">
                <!-- <el-select v-model="addCheckForm.ownerDeptId" disabled placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addCheckForm.options.ownerDeptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-input v-model="addCheckForm.ownerDeptName" clearable disabled :rows="1" placeholder="请选择" style="width:225px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="施工项目部" prop="constructDeptName" placeholder="当前月份">
                <!-- <el-select v-model="addCheckForm.constructDeptId" disabled placeholder="请选择" style="min-width:228px">
                  <el-option v-for="item in addCheckForm.options.constructDeptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-input v-model="addCheckForm.constructDeptName" clearable disabled :rows="1" placeholder="请选择" style="width:225px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="监理项目部" prop="adminDeptName" placeholder="周报开始日期">
                <!-- <el-select v-model="addCheckForm.adminDeptId" disabled placeholder="请选择" style="min-width:228px">
                  <el-option v-for="item in addCheckForm.options.adminDeptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-input v-model="addCheckForm.adminDeptName" clearable disabled :rows="1" placeholder="请选择" style="width:225px"></el-input>
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
        <el-row :gutter="20">
          <el-col :span="3">
            <el-button type="primary" style="margin-right: 20px" @click="addAddCheckTableRow">添加条目</el-button>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" style="margin-right: 20px" @click="deleteAddSelectRow">删除条目</el-button>
          </el-col>
          <el-col :span="3">
            <el-upload ref="upload" action :file-list="fileList" :http-request="sigleFileUploadAction" :show-file-list="false" multiple style="margin-left:11px" :auto-upload="true">
              <el-button slot="trigger" size="primary" :disabled="addCheckForm.multiSelection.length !=1" type="primary" @click="uploadJudge">选取文件</el-button>
              <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
            </el-upload>
          </el-col>
        </el-row>
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
          <el-table-column width="500" prop="hasPhoto" label="上传照片" align="center"></el-table-column>
        </el-table>

        <el-table :data="addCheckForm.tableData" @selection-change="addCheckTableSelect" border v-if="addCheckForm.jobOrderType === '整改通知单' ||addCheckForm.jobOrderType==='' ">
          <el-table-column type="selection" width="50" align="center"></el-table-column>
          <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
          <el-table-column width="400" label="发现问题" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.problem" :rows="1" placeholder="暂无信息" style="min-width:200px"></el-input>
            </template>
          </el-table-column>
          <el-table-column width="230" label="违章性质" align="center">
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
          <el-table-column width="180" prop="hasPhoto" label="上传照片" align="center"></el-table-column>
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
    <!-- 修改弹窗 -->
    <el-dialog title="反馈检查问题" :visible.sync="updateInspectionProblemPanelFlag" width="1400px" :modal="false">
      <el-form :model="updateCheckForm" ref="updateCheckForm" label-position="left" :rules="updateCheckFormRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="通知单类型" prop="jobOrderType" placeholder="项目名称">
                <el-select v-model="updateCheckForm.jobOrderType" disabled placeholder="请选择" style="min-width:200px" @change="updateCheckTypeChanged">
                  <el-option v-for="item in updateCheckForm.options.jobOrderTypeOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
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
                <el-select v-model="updateCheckForm.projectId" clearable disabled placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateCheckForm.options.projectIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="被查地点" prop="inspectAddress" placeholder="当前月份">
                <el-input v-model="updateCheckForm.inspectAddress" clearable :rows="1" placeholder="请选择" style="width:225px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="检查时间" prop="inspectDate" placeholder="周报开始日期">
                <el-input v-model="updateCheckForm.inspectDate" clearable disabled :rows="1" placeholder="请选择" style="width:225px"></el-input>
              </el-form-item>
            </div>
          </el-col>

        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="业主项目部" prop="ownerDeptName" placeholder="项目名称">
                <!-- <el-select v-model="updateCheckForm.ownerDeptId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateCheckForm.options.ownerDeptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-input v-model="addCheckForm.ownerDeptName" clearable disabled :rows="1" placeholder="请选择" style="width:225px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="施工项目部" prop="constructDeptName" placeholder="当前月份">
                <!-- <el-select v-model="updateCheckForm.constructDeptId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateCheckForm.options.constructDeptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-input v-model="addCheckForm.constructDeptName" clearable disabled :rows="1" placeholder="请选择" style="width:225px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="监理项目部" prop="adminDeptName" placeholder="周报开始日期">
                <!-- <el-select v-model="updateCheckForm.adminDeptId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateCheckForm.options.adminDeptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-input v-model="addCheckForm.adminDeptName" clearable disabled :rows="1" placeholder="请选择" style="width:225px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <el-form-item label="检查范围和简要内容" label-width="150px" prop="checkRangeAndContent" placeholder="项目名称">
                <el-input type="textarea" :rows="4" placeholder="暂无信息" v-model="updateCheckForm.checkRangeAndContent" style="margin-left:20px;width:1000px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <br />
        <br />
        <hr>
        <br />
        <br />
        <el-row :gutter="20">
          <el-col :span="3">
            <el-button type="primary" style="margin-right: 20px" @click="addUpdateCheckTableRow">添加条目</el-button>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" style="margin-right: 20px" @click="deleteUpdateSelectRow">删除条目</el-button>
          </el-col>
          <el-col :span="3">
            <el-upload ref="upload" action :file-list="fileListA" :http-request="sigleFileUploadActionA" :show-file-list="false" multiple style="margin-left:11px" :auto-upload="true">
              <el-button slot="trigger" size="primary" :disabled="updateCheckForm.multiSelection.length !=1" type="primary" @click="uploadJudgeA">选取文件</el-button>
              <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
            </el-upload>
          </el-col>
        </el-row>
        <br />
        <br />
        <el-table :data="updateCheckForm.tableData" @selection-change="updateCheckTableSelect" border v-if="updateCheckForm.jobOrderType === '口头警告通知单'">
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
                <el-option v-for="item in updateCheckForm.options.responsibleDeptOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column width="120" prop="photoNumber" label="上传照片数量" align="center"></el-table-column>
          <el-table-column width="180" prop="hasPhoto" label="新上传照片" align="center"></el-table-column>
          <el-table-column width="200" label="操作" align="center" fixed="right">
            <template slot-scope="scope">
              <el-button type="text" @click="searchPhoto(scope.row)">查看照片</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-table :data="updateCheckForm.tableData" @selection-change="updateCheckTableSelect" border v-if="updateCheckForm.jobOrderType === '整改通知单' ||updateCheckForm.jobOrderType==='' ">
          <el-table-column type="selection" width="50" align="center"></el-table-column>
          <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
          <el-table-column width="350" label="发现问题" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.problem" :rows="1" placeholder="暂无信息" style="min-width:200px"></el-input>
            </template>
          </el-table-column>
          <el-table-column width="190" label="违章性质" align="center">
            <template slot-scope="scope">
              <el-select v-model="scope.row.violationType" clearable placeholder="请选择" style="width:150px">
                <el-option v-for="item in updateCheckForm.options.violationTypeOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column width="190" label="责任项目部" align="center">
            <template slot-scope="scope">
              <el-select v-model="scope.row.responsibleDept" clearable placeholder="请选择" style="width:150px">
                <el-option v-for="item in updateCheckForm.options.responsibleDeptOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column width="240" label="整改要求" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.rectificationRequirement" :rows="1" placeholder="暂无信息" style="min-width:200px"></el-input>
            </template>
          </el-table-column>
          <el-table-column width="120" prop="photoNumber" label="上传照片数量" align="center"></el-table-column>
          <el-table-column width="180" prop="hasPhoto" label="新上传照片" align="center"></el-table-column>
          <el-table-column width="200" label="操作" align="center" fixed="right">
            <template slot-scope="scope">

              <el-button type="text" @click="searchPhoto(scope.row)">查看照片</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div v-if="showPicFlag">
          <el-row :gutter="20" style="margin-top:20px">
            <el-col :span="2">
              <el-button type="text" size="small" @click="closeCheckPanelA()">关闭该栏</el-button>
            </el-col>
            <el-col :span="2">
              <el-button type="text" size="small" style="margin-left:540px" @click="deletePic">删除图片</el-button>
            </el-col>
          </el-row>
          <el-carousel indicator-position="outside" height="400px" :autoplay="false" arrow="never">
            <el-carousel-item v-for="src in urlIndex" :key="src" :label="src">
              <img :src="src" style="max-width: 100%;max-height: 100%;display: block; margin: 0 auto;" />
            </el-carousel-item>
          </el-carousel>
          <!-- <el-row :gutter="20">
            <el-col :span="8" align="right" style="margin-left:280px">
              <el-button type="primary" @click="deletePic">删除图片</el-button>
            </el-col>
          </el-row> -->
        </div>
        <br />
        <br />
        <br />
        <el-row :gutter="20">

          <el-col :span="8" align="right" style="margin-left:140px">
            <el-button type="primary" @click="updateSubmitCheckForm">确认修改</el-button>
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

      //用于标志添加照片的行index
      showPicFlag: false,
      index: 1,
      fileListA: [],
      fileListAdd: [],
      //行内上传
      // uploadData: {
      //   file_key: 'file',
      //   business_id: '',
      // },
      // uploadUrl: '',
      // curRowIndex: null,
      //显示照片
      urlIndex: [],
      photoShowFlag: false,
      isShowImageDialog: false,
      searchProblemRow: {},
      photoTable: [],
      photo: {
        tableData: []
      },
      //反馈检查问题弹窗
      inspectionId: "",
      //添加
      addInspectionProblemPanelFlag: false,
      addCheckForm: {
        jobOrderType: "",
        projectId: "",
        inspectAddress: "",
        inspectDate: "",
        adminDeptId: "",
        ownerDeptId: "",
        constructDeptId: "",
        adminDeptName: "",
        ownerDeptName: "",
        constructDeptName: "",
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
      //修改
      updateInspectionProblemPanelFlag: false,
      updateCheckForm: {
        id: "",
        jobOrderType: "",
        projectId: "",
        inspectAddress: "",
        inspectDate: "",
        adminDeptId: "",
        ownerDeptId: "",
        constructDeptId: "",
        adminDeptName: "",
        ownerDeptName: "",
        constructDeptName: "",
        checkRangeAndContent: "",
        firstTableData: [],
        deleteTable: [],
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
      updateCheckFormRule: {
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
      searchPic: [],
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
    this.searchInspection();

    //获取项目列表
    getApi.getAllProjectName().then(response => {
      this.searchTable.options.projectIdOptions = response;
      this.addCheckForm.options.projectIdOptions = response;
      this.updateCheckForm.options.projectIdOptions = response;
    });

    //获取通知单类型
    getApi.getAllJobOrderTypeEnum().then(response => {
      this.addCheckForm.options.jobOrderTypeOptions = response;
      this.updateCheckForm.options.jobOrderTypeOptions = response;
    });


    //获取施工项目部
    getApi.getAllConstructDeptName().then(response => {
      this.addCheckForm.options.constructDeptIdOptions = response;
      this.updateCheckForm.options.constructDeptIdOptions = response;
    });

    //获取监理项目部
    getApi.getAllSupervisionDeptName().then(response => {
      this.addCheckForm.options.adminDeptIdOptions = response;
      this.updateCheckForm.options.adminDeptIdOptions = response;
    });

    //获取部门的枚举
    getApi.getAllResponsibleDeptEnum().then(response => {
      this.addCheckForm.options.responsibleDeptOptions = response;
      this.updateCheckForm.options.responsibleDeptOptions = response;
    });
  },
  methods: {
    //关闭查看照片
    closeCheckPanelA() {
      this.showPicFlag = false;
    },
    //上传判断
    uploadJudgeA() {
      console.log(this.updateCheckForm.multiSelection)
      if (this.updateCheckForm.multiSelection.length === 0) {
        this.$message({
          type: "error",
          message: "请选择一项再进行添加照片!"
        });
        return false;

      } else if (this.updateCheckForm.multiSelection.length > 1) {
        this.$message({
          type: "error",
          message: "只能选择一项进行添加照片!"
        });
        return false;
      } else if (this.updateCheckForm.multiSelection[0].photoNumber > 0) {
        this.$message({
          type: "error",
          message: "该问题已添加照片!"
        });
        return false;
      } else {
        return true;
      }

    },
    uploadJudge() {
      console.log(this.addCheckForm.multiSelection)
      if (this.addCheckForm.multiSelection.length === 0) {
        this.$message({
          type: "error",
          message: "请选择一项再进行添加照片!"
        });
        return false;

      } else if (this.addCheckForm.multiSelection.length > 1) {
        this.$message({
          type: "error",
          message: "只能选择一项进行添加照片!"
        });
        return false;
      } else if (this.addCheckForm.multiSelection[0].hasPhoto === "是") {
        this.$message({
          type: "error",
          message: "该问题已添加照片!"
        });
        return false;
      } else {
        return true;
      }

    },
    //删除通知单
    deleteInspection(row) {
      this.$confirm("确认删除该通知单？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteApi.deleteInspectionJobOrderInfoById(row.jobOrderId).then(response => {
            this.searchInspection();
            if (this.addProblemRow.id === row.id)
              this.addPhotoPanelFlag = false;
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
    //删除图片
    deletePic() {
      this.$confirm("此操作会丢失督察通知单中未保存的数据，是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteApi.deleteInspectPhotoPathByPathId({
            jobOrderTypeName: this.addProblemRow.jobOrderType,
            id: this.photoTable[0].id
          }).then(response => {
            this.cancelCheckForm();
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // deletePic(row) {
    //   this.$confirm("确认删除该图片？", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning"
    //   })
    //     .then(() => {
    //       deleteApi.deleteInspectPhotoPathByPathId({
    //         jobOrderTypeName: this.addProblemRow.jobOrderType,
    //         id: row.id
    //       }).then(response => {
    //         this.searchPhoto(this.searchProblemRow);
    //         let list = {
    //           inspectionId: this.addProblemRow.id,
    //           jobOrderTypeName: this.addProblemRow.jobOrderType
    //         }
    //         searchApi.getInspectJobOrderInfoByInspectionId(list).then(response => {
    //           this.problemForm.tableData = response.returnListSecondary[0];
    //         })
    //       })
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "已取消删除"
    //       });
    //     });
    // },
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

          searchApi.addInspectionJobOrderInfo(list).then(response => {
            //下面开始添加文件
            let idList = response.idList;
            let i = 0;
            let num = 0;
            this.addCheckForm.tableData.forEach(element => {
              this.fileList.forEach(ele => {
                if (ele.id === element.index) {
                  this.formData.append("files", ele.file);
                  this.formData.append("ids", idList[i]);
                  num++;
                }
              })
              i++;
            })
            this.formData.append("jobOrderId", response.majorId);
            if (num > 0) {
              addApi.addInspectPhotos(this.formData).then(response => {
                this.addInspectionProblemPanelFlag = false;
                this.searchInspection();
                this.formData = new FormData();
                this.addProblemRow = [];
                this.fileList = [];
              });
            }
            else {
              this.addInspectionProblemPanelFlag = false;
              this.searchInspection();
              this.formData = new FormData();
              this.addProblemRow = [];
              this.fileList = [];
            }


          })
        } else {
          this.$message({
            type: "error",
            message: "请填写所有必填项!"
          });
        }
      });
    },
    //确认修改问题
    updateSubmitCheckForm() {
      this.$refs["updateCheckForm"].validate(valid => {
        if (valid) {
          let inspectionJobOrderUpdateReq = {};
          let inspectionOralWarningContentUpdateReqs = [];
          let inspectionRectificationContentUpdateReqs = [];
          inspectionJobOrderUpdateReq = {
            id: this.updateCheckForm.id,
            adminDeptId: this.updateCheckForm.adminDeptId,
            checkRangeAndContent: this.updateCheckForm.checkRangeAndContent,
            constructDeptId: this.updateCheckForm.constructDeptId,
            inspectAddress: this.updateCheckForm.inspectAddress,
            jobOrderType: this.updateCheckForm.jobOrderType,
            ownerDeptId: this.updateCheckForm.ownerDeptId,
          };
          if (this.updateCheckForm.jobOrderType === "口头警告通知单") {
            this.updateCheckForm.tableData.forEach(element => {
              //先加入添加的
              if (element.listUpdateOperation === "添加") {
                inspectionOralWarningContentUpdateReqs.push(element);
              }
              //加入修改的
              this.updateCheckForm.firstTableData.forEach(ele => {
                if (ele.id === element.id) {
                  console.log("element:", element);
                  console.log("ele", ele);
                  if (ele.problem != element.problem || ele.responsibleDept != element.responsibleDept) {
                    element.listUpdateOperation = "更新";
                    inspectionOralWarningContentUpdateReqs.push(element);
                  }
                }
              })
            })
            //加入删除的
            this.updateCheckForm.deleteTable.forEach(element => {
              inspectionOralWarningContentUpdateReqs.push(element);
            })
          }
          else if (this.updateCheckForm.jobOrderType === "整改通知单") {
            this.updateCheckForm.tableData.forEach(element => {
              //先加入添加的
              if (element.listUpdateOperation === "添加") {
                inspectionRectificationContentUpdateReqs.push(element);
              }
              //加入修改的
              this.updateCheckForm.firstTableData.forEach(ele => {
                if (ele.id === element.id) {
                  if (ele.problem != element.problem || ele.responsibleDept != element.responsibleDept || ele.rectificationRequirement != element.rectificationRequirement || ele.violationType != element.violationType) {
                    element.listUpdateOperation = "更新";
                    inspectionRectificationContentUpdateReqs.push(element);
                  }
                }
              })
            })
            //加入删除的
            this.updateCheckForm.deleteTable.forEach(element => {
              inspectionRectificationContentUpdateReqs.push(element);
            })
          }

          let list = {
            inspectionJobOrderUpdateReq,
            inspectionOralWarningContentUpdateReqs,
            inspectionRectificationContentUpdateReqs
          };

          searchApi.updateInspectionJobOrderInfo(list).then(response => {
            //下面开始添加文件
            let idList = response.operateList;
            let i = 0;
            //先把新增的append
            let num = 0;
            this.updateCheckForm.tableData.forEach(element => {
              if (element.index > 0) {
                this.fileListAdd.forEach(ele => {
                  if (ele.id === element.index) {
                    this.formData.append("files", ele.file);
                    this.formData.append("ids", idList[i]);
                    num++;
                  }
                })
                i++;
              }
            })
            //再把修改的append
            this.fileListA.forEach(ele => {
              this.formData.append("files", ele.file);
              this.formData.append("ids", ele.id);
              num++;
            })
            this.formData.append("jobOrderId", this.addProblemRow.jobOrderId);
            if (num > 0) {
              addApi.addInspectPhotos(this.formData).then(response => {
                this.searchInspection();
                this.formData = new FormData();
                this.fileListA = [];
                this.fileListAdd = [];
                this.updateInspectionProblemPanelFlag = false;
              });
            } else {
              this.searchInspection();
              this.formData = new FormData();
              this.fileListA = [];
              this.fileListAdd = [];
              this.updateInspectionProblemPanelFlag = false;
            }
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
      this.updateInspectionProblemPanelFlag = false;
      this.showPicFlag = false;
    },
    //增加一行问题
    addAddCheckTableRow() {
      this.addCheckForm.tableData.push({
        problem: "",
        hasPhoto: "无",
        index: this.index
      });
      this.index++;
    },
    //删除选中多行问题
    deleteAddSelectRow() {
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
    //增加一行问题
    addUpdateCheckTableRow() {
      this.updateCheckForm.tableData.push({
        problem: "",
        listUpdateOperation: "添加",
        jobOrderId: this.updateCheckForm.id,
        photoNumber: 0,
        index: this.index,
        hasPhoto: "无"
      });
      this.index++;
    },
    //删除选中多行问题
    deleteUpdateSelectRow() {
      this.$confirm("确认删除选中条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.updateCheckForm.multiSelection.forEach(element => {
            let i = 0;
            this.updateCheckForm.tableData.forEach(ele => {
              if (ele === element) {
                if (ele.id) {
                  ele.listUpdateOperation = "删除";
                  this.updateCheckForm.deleteTable.push(ele);
                }
                this.updateCheckForm.tableData.splice(i, 1);
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
      this.addProblemRow = row;
      //添加面板打开判断
      if (row.jobOrderType === "口头警告通知单" || row.jobOrderType === "整改通知单") {
        let list = {
          inspectionId: row.id,
          jobOrderTypeName: row.jobOrderType
        }
        searchApi.getInspectJobOrderInfoByInspectionId(list).then(response => {
          let res = response.returnListMajor[0][0];
          this.fileListA = [];
          this.fileListAdd = [];
          this.formData = new FormData();
          this.index = 1;
          this.updateCheckForm.deleteTable = [];
          this.updateCheckForm.id = res.id;
          this.updateCheckForm.jobOrderType = res.jobOrderType;
          this.updateCheckForm.projectId = res.projectId;
          this.updateCheckForm.inspectAddress = res.inspectAddress;
          this.updateCheckForm.adminDeptId = res.adminDeptId;
          this.updateCheckForm.ownerDeptId = res.ownerDeptId;
          this.updateCheckForm.constructDeptId = res.constructDeptId;
          this.updateCheckForm.inspectDate = res.inspectDate;
          this.updateCheckForm.checkRangeAndContent = res.checkRangeAndContent;
          this.updateCheckForm.tableData = [];
          this.updateCheckForm.firstTableData = [];
          if (this.updateCheckForm.jobOrderType === '整改通知单') {
            response.returnListSecondary[0].forEach(ele => {
              this.updateCheckForm.firstTableData.push({
                violationType: ele.violationType,
                id: ele.id,
                responsibleDept: ele.responsibleDept,
                rectificationRequirement: ele.rectificationRequirement,
                problem: ele.problem,
                hasPhoto: "",
              })
              this.updateCheckForm.tableData.push({
                id: ele.id,
                inspectionId: ele.inspectionId,
                jobOrderId: ele.jobOrderId,
                photoNumber: ele.photoNumber,
                problem: ele.problem,
                rectificationRequirement: ele.rectificationRequirement,
                responsibleDept: ele.responsibleDept,
                violationType: ele.violationType,
                hasPhoto: ""
              })
            })
          } else if (this.updateCheckForm.jobOrderType === '口头警告通知单') {
            response.returnListSecondary[0].forEach(ele => {
              this.updateCheckForm.firstTableData.push({
                id: ele.id,
                responsibleDept: ele.responsibleDept,
                problem: ele.problem,
                hasPhoto: ""
              })
              this.updateCheckForm.tableData.push({
                id: ele.id,
                inspectionId: ele.inspectionId,
                jobOrderId: ele.jobOrderId,
                photoNumber: ele.photoNumber,
                problem: ele.problem,
                responsibleDept: ele.responsibleDept,
                hasPhoto: ""
              })
            })
          }
          this.showPicFlag = false;
          this.updateInspectionProblemPanelFlag = true;
        });


      } else {
        this.addCheckForm.jobOrderType = "";
        this.addCheckForm.checkRangeAndContent = "";
        this.addCheckForm.projectId = row.projectId;
        this.addCheckForm.inspectDate = row.inspectDate;
        this.addCheckForm.inspectAddress = row.detailedAddress;
        this.addCheckForm.ownerDeptId = row.adminId;
        this.addCheckForm.ownerDeptName = row.adminName;
        this.addCheckForm.constructDeptId = row.constructDeptId;
        this.addCheckForm.constructDeptName = row.constructDeptName;
        this.addCheckForm.adminDeptId = row.supervisionId;
        this.addCheckForm.adminDeptName = row.supervisionName;
        this.index = 1;
        this.fileList = [];
        this.addInspectionProblemPanelFlag = true;
      }
    },
    //检查问题表格选中
    addCheckTableSelect(val) {
      this.addCheckForm.multiSelection = val;
    },
    updateCheckTableSelect(val) {
      this.updateCheckForm.multiSelection = val;
    },
    //添加的时候通知单类型改变
    addCheckTypeChanged() {
      this.addCheckForm.tableData = [];
      this.addCheckForm.multiSelection = [];
    },
    updateCheckTypeChanged() {
      this.updateCheckForm.tableData = [];
      this.updateCheckForm.multiSelection = [];
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
    sigleFileUploadActionA(item) {
      console.log(this.updateCheckForm.tableData)
      if (!this.uploadJudgeA()) return;
      if (item.file.type === "image/png" || item.file.type === "image/jpeg") {
        //第一种情况：如果原来就有的数据，即无index，只有id
        if (this.updateCheckForm.multiSelection[0].id != "" && this.updateCheckForm.multiSelection[0].id != null && this.updateCheckForm.multiSelection[0].id != undefined) {
          let has = false;
          //如果之前上传过，则修改其上传的文件
          this.fileListA.forEach(ele => {
            if (ele.id === this.updateCheckForm.multiSelection[0].id) {
              has = true;
              ele.file = item.file;
            }
          })
          //如果之前没有上传过，则上传
          if (has === false) {
            this.fileListA.push({
              id: this.updateCheckForm.multiSelection[0].id,
              file: item.file
            });
          }
        }
        else {
          //第二种情况，之前没有的条目
          let has = false;
          //之前已经上传过了
          this.fileListAdd.forEach(ele => {
            if (ele.id === this.updateCheckForm.multiSelection[0].index) {
              ele.file = item.file;
              has = true;
            }
          })
          if (has === false) {
            this.fileListAdd.push({
              id: this.updateCheckForm.multiSelection[0].index,
              file: item.file
            });
          }
        }
        this.$forceUpdate();
        this.$set(this.updateCheckForm.multiSelection[0], "hasPhoto", item.file.name);
      } else {
        this.$message({
          type: "error",
          message: "上传头像图片只能是 JPG 格式或 PNG 格式!"
        });
      }
    },
    //更新的时候上传照片
    sigleFileUploadAction(item) {
      if (!this.uploadJudge()) return;
      if (item.file.type === "image/png" || item.file.type === "image/jpeg") {
        if (this.addCheckForm.multiSelection[0].hasPhoto != "无") {
          this.fileList.forEach(ele => {
            if (ele.id === this.addCheckForm.multiSelection[0].index) {
              ele.file = item.file;
            }
          })
        } else {
          this.fileList.push({
            id: this.addCheckForm.multiSelection[0].index,
            file: item.file
          });
        }
        this.addCheckForm.multiSelection[0].hasPhoto = item.file.name;
        console.log("filelist:", this.fileList)
        this.photo.tableData.push({ name: item.file.name })
        console.log(this.photo.tableData)
      } else {
        this.$message({
          type: "error",
          message: "上传头像图片只能是 JPG 格式或 PNG 格式!"
        });
      }
    },
    // sigleFileUploadAction(item) {
    //   if (item.file.type === "image/png" || item.file.type === "image/jpeg") {
    //     this.formData.append("files", item.file);
    //     this.photo.tableData.push({ name: item.file.name })
    //     console.log(this.photo.tableData)
    //   } else {
    //     this.$message({
    //       type: "error",
    //       message: "上传头像图片只能是 JPG 格式或 PNG 格式!"
    //     });
    //   }
    // },

    submitUpload() {
      this.formData.append("id", this.problemRow.id);
      this.formData.append("jobOrderId", this.addProblemRow.jobOrderId);
      addApi.addInspectPhotos(this.formData).then(response => {
        this.formData = new FormData();
        this.problemRow = {};
        this.toAddPhotoPanelFlag = false;
        this.problemForm.tableData = [];
        let list = {
          inspectionId: this.addProblemRow.id,
          jobOrderTypeName: this.addProblemRow.jobOrderType
        }
        searchApi.getInspectJobOrderInfoByInspectionId(list).then(response => {
          this.problemForm.tableData = response.returnListSecondary[0];
          if (this.photoShowFlag) {
            this.searchPhoto(this.searchPic);
          }
        })
      });

    },
    //开始添加问题照片
    addPhotoPanel(row) {
      this.toAddPhotoPanelFlag = true;
      this.problemRow = row;
      this.photo.tableData = [];
      this.formData = new FormData();
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
    //取消安排
    cancelInspection(row) {
      if (row.inspectionPlanState === "已督查") {
        this.$confirm("当前项目已完成督查，是否取消？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            getApi.cancelHasCheckInspection(row.id).then(response => {
              this.searchInspection();
            });
          })
          .catch(() => {
          });
        return;
      } else if (row.inspectionPlanState === "已安排") {
        getApi.cancelInspection(row.id).then(response => {
          this.searchInspection();
        });
      }
    },
    //查看问题照片
    // searchPhoto(row) {
    //   this.searchPic = row;
    //   let list = {
    //     contentId: row.id,
    //     jobOrderTypeName: this.addProblemRow.jobOrderType
    //   };
    //   this.searchProblemRow = row;
    //   searchApi.getInspectPhotoResourceByContentId(list).then(response => {
    //     this.photoShowFlag = true;
    //     this.photoTable = response.returnList[0];
    //     this.url = [];
    //     response.returnList[0].forEach(element => {
    //       this.url.push(`${window.$config.PIC}` + element.photoResourceUrl);
    //     })
    //   })
    // },
    searchPhoto(row) {
      this.searchPic = row;
      let list = {
        contentId: row.id,
        jobOrderTypeName: this.addProblemRow.jobOrderType
      };
      this.searchProblemRow = row;
      searchApi.getInspectPhotoResourceByContentId(list).then(response => {
        // this.photoShowFlag = true;
        this.photoTable = response.returnList[0];
        this.url = [];
        this.urlIndex = [];
        response.returnList[0].forEach(element => {
          this.url.push(`${window.$config.PIC}` + element.photoResourceUrl);
          this.urlIndex.push(this.url[0]);
          this.showPicFlag = true;
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
