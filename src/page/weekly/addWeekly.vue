<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="addFormOne" label-position="left" ref="addFormOne" :rules="addFormOneRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div id="title">
                <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:620px;">周计划(周报)时间</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="周报开始日期" prop="weeklyStartTime" placeholder="周报开始日期">
                <el-date-picker v-model="addFormOne.weeklyStartTime" type="date" placeholder="选择日期时间" style="min-width:200px" @change="weeklyStartTimeChanged"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8" style="margin-left:-130px">
            <div class="bar">
              <el-form-item label="~" prop="weeklyEndTime" placeholder="周报开始日期" label-width="5px">
                <el-date-picker disabled v-model="addFormOne.weeklyEndTime" type="date" placeholder="选择日期时间" style="min-width:200px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="当前月份" prop="monthShowTime" placeholder="当前月份">
                <el-input disabled v-model="addFormOne.monthShowTime" clearable :rows="1" placeholder="请输入" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-form :model="addFormTwo" ref="addFormTwo" label-position="left" :rules="addFormTwoRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div id="title">
                <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:650px;">项目基本信息</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目名称" prop="projectId" placeholder="项目名称">
                <el-select v-model="addFormTwo.projectId" clearable placeholder="请选择" style="min-width:200px" @change="projectChanged">
                  <el-option v-for="item in addFormTwo.options.idOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="所属建管单位" prop="adminId" placeholder="当前月份">
                <el-select v-model="addFormTwo.adminId" clearable :disabled="!addFormTwo.projectId" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormTwo.options.adminIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="监理单位" prop="supervisionId" placeholder="周报开始日期">
                <el-select v-model="addFormTwo.supervisionId" clearable :disabled="!addFormTwo.projectId" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormTwo.options.supervisionIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="施工单位" prop="constructDeptId" placeholder="周报开始日期">
                <el-select v-model="addFormTwo.constructDeptId" clearable :disabled="!addFormTwo.projectId" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormTwo.options.constructDeptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="所在区域" prop="districtId" placeholder="项目名称">
                <el-select v-model="addFormTwo.districtId" clearable :disabled="!addFormTwo.projectId" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormTwo.options.districtIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="详细地址" prop="detailedAddress" placeholder="当前月份">
                <el-input v-model="addFormTwo.detailedAddress" clearable :disabled="!addFormTwo.projectId" :rows="1" placeholder="请输入" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="定位经度" prop="longitude" placeholder="周报开始日期">
                <el-input v-model="addFormTwo.longitude" clearable :disabled="!addFormTwo.projectId" :rows="1" placeholder="浮点型，如：100.123" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="定位纬度" prop="latitude" placeholder="周报开始日期">
                <el-input v-model="addFormTwo.latitude" clearable :disabled="!addFormTwo.projectId" :rows="1" placeholder="浮点型，如：100.123" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="电压等级" prop="voltageClass" placeholder="电压等级">
                <el-select v-model="addFormTwo.voltageClass" clearable :disabled="!addFormTwo.projectId" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormTwo.options.voltageClassOptions" :key="item.value" :label="item.value" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="作业类型" prop="assignmentType" placeholder="作业类型">
                <el-select v-model="addFormTwo.assignmentType" clearable :disabled="!addFormTwo.projectId" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormTwo.options.assignmentTypeOptions" :key="item.value" :label="item.value" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="施工单位类别" prop="constructionType" placeholder="周报开始日期">
                <el-select v-model="addFormTwo.constructionType" clearable :disabled="!addFormTwo.projectId" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormTwo.options.constructionTypeOptions" :key="item.value" :label="item.value" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目规模" prop="projectScale" placeholder="周报开始日期">
                <el-input v-model="addFormTwo.projectScale" clearable :disabled="!addFormTwo.projectId" :rows="1" placeholder="请输入" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="实际开工时间" prop="actualStartTime" placeholder="项目名称">
                <el-date-picker v-model="addFormTwo.actualStartTime" :disabled="!addFormTwo.projectId" type="date" placeholder="选择日期时间" style="min-width:200px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="计划竣工时间" prop="planCompletionTime" placeholder="当前月份">
                <el-date-picker v-model="addFormTwo.planCompletionTime" :disabled="!addFormTwo.projectId" type="date" placeholder="选择日期时间" style="min-width:200px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="主业作业人数" prop="mainWorkerNum" placeholder="周报开始日期">
                <el-input v-model="addFormTwo.mainWorkerNum" clearable :disabled="!addFormTwo.projectId" :rows="1" placeholder="整数，如20" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="外包作业人数" prop="outsourcingWorkerNum" placeholder="周报开始日期">
                <el-input v-model="addFormTwo.outsourcingWorkerNum" clearable :disabled="!addFormTwo.projectId" :rows="1" placeholder="整数，如20" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="当前分包人数" prop="currentSubcontractorNum" placeholder="项目名称">
                <el-input v-model="addFormTwo.currentSubcontractorNum" clearable :disabled="!addFormTwo.projectId" :rows="1" placeholder="整数，如20" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="所属部门" prop="adminDept" placeholder="当前月份">
                <el-select v-model="addFormTwo.adminDept" clearable :disabled="!addFormTwo.projectId" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormTwo.options.adminDeptOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8"></el-col>
          <el-col :span="8"></el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-form :model="addFormThree" ref="addFormThree" label-position="left" :rules="addFormThreeRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div id="title">
                <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:650px;">项目人员信息</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目经理" prop="projectManagerId" placeholder="项目名称">
                <!-- <el-select v-model="addFormThree.projectManagerId" clearable :disabled="!addFormTwo.projectId" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormThree.options.projectManagerIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="addFormThree.projectManagerId" :disabled="!addFormTwo.projectId" :options="addFormThree.options.projectManagerIdOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="质量专责" prop="qualityStaffId" placeholder="周报开始日期">
                <!-- <el-select v-model="addFormThree.qualityStaffId" clearable :disabled="!addFormTwo.projectId" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormThree.options.qualityStaffIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="addFormThree.qualityStaffId" :disabled="!addFormTwo.projectId" :options="addFormThree.options.qualityStaffIdOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="安全专责" prop="safetyStaffId" placeholder="当前月份">
                <!-- <el-select v-model="addFormThree.safetyStaffId" clearable :disabled="!addFormTwo.projectId" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormThree.options.safetyStaffIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="addFormThree.safetyStaffId" :disabled="!addFormTwo.projectId" :options="addFormThree.options.safetyStaffIdOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="总监/总监代表" prop="chiefInspectorId" placeholder="项目名称">
                <!-- <el-select v-model="addFormThree.chiefInspectorId" clearable :disabled="!addFormTwo.projectId" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormThree.options.chiefInspectorIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="addFormThree.chiefInspectorId" :disabled="!addFormTwo.projectId" :options="addFormThree.options.chiefInspectorIdOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="专业监理" prop="professionalSupervisorId" placeholder="周报开始日期">
                <!-- <el-select v-model="addFormThree.professionalSupervisorId" clearable :disabled="!addFormTwo.projectId" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormThree.options
                      .professionalSupervisorIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="addFormThree.professionalSupervisorId" :disabled="!addFormTwo.projectId" :options="addFormThree.options.professionalSupervisorIdOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="安全监理" prop="safetySupervisorId" placeholder="当前月份">
                <!-- <el-select v-model="addFormThree.safetySupervisorId" clearable :disabled="!addFormTwo.projectId" placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormThree.options
                      .safetySupervisorIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="addFormThree.safetySupervisorId" :disabled="!addFormTwo.projectId" :options="addFormThree.options.safetySupervisorIdOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="施工单位负责人" prop="constructionPrincipal" placeholder="请选择施工单位负责人">
                <el-input v-model="addFormThree.constructionPrincipal" clearable disabled :rows="1" placeholder="请输入" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="联系方式" prop="constructionPrincipalNumber" placeholder="请选择联系方式">
                <el-input v-model="addFormThree.constructionPrincipalNumber" clearable disabled :rows="1" placeholder="请输入" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="bar">
            <div id="title">
              <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:595px;">当前总体施工进度详情</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-button type="primary" style="margin-right: 20px" @click="addOneLineWeeklyWorkProgressAddReqs">添加条目</el-button>
      <el-button type="primary" style="margin-right: 20px" @click="deleteLinesWeeklyWorkProgressAddReqs">删除条目</el-button>
      <br />
      <br />
      <el-table :data="addFormFour.weeklyWorkProgressAddReqs" @selection-change="selectWeeklyWorkProgressAddReqs" border>
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="500" prop="jobNumberShow" label="分部分项工程" align="center">
          <template slot-scope="scope">
            <el-cascader v-model="scope.row.jobNumberShow" :options="addFormFour.options.jobNumberOptions" @change="jobNumberChanged(scope.index, scope.row)" :props="optionPropsA" style="min-width:450px"></el-cascader>
          </template>
        </el-table-column>
        <el-table-column label="当前总体施工进度详情" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.currentProgress" clearable :rows="1" placeholder="请输入"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="bar">
            <div id="title">
              <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:655px;margin-bottom:30px">下周作业安排</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-checkbox v-model="addFormFour.hasWorkNextWeek" style="margin-left:20px">下周是否有作业</el-checkbox>
      <el-button type="primary" style="margin-left:50px;margin-right: 20px" @click="addOneLineWeeklyRiskContentAddReqs" :disabled="!addFormFour.hasWorkNextWeek">添加条目</el-button>
      <el-button type="primary" style="margin-right: 20px" @click="deleteLinesWeeklyRiskContentAddReqs">删除条目</el-button>
      <el-checkbox v-model="addFormFour.hasThreePlusRiskWork" v-if="false" disabled style="margin-left:20px">是否有三级及以上风险</el-checkbox>
      <br />
      <br />
      <el-table :data="addFormFour.weeklyRiskContentAddReqs" @selection-change="selectWeeklyRiskContentAddReqs" border>
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="400" prop="workProcessShow" label="风险库" align="center">
          <template slot-scope="scope">
            <el-cascader v-model="scope.row.workProcessShow" :props="optionPropsB" :options="addFormFour.options.workProcessOptions" @change="workProcessChanged(scope.index, scope.row)" style="min-width:350px"></el-cascader>
          </template>
        </el-table-column>
        <el-table-column prop="riskLevel" label="风险等级" width="100px" align="center">
          <template slot-scope="scope">
            <!-- <span v-if="scope.row.riskAdd" style="color:red">{{ scope.row.riskLevel }}</span>
            <span v-else>{{ scope.row.riskLevel }}</span> -->
            <el-input v-model="scope.row.riskLevel" clearable :rows="1" placeholder="请输入" @change="riskLevelChanged(scope.row)"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="workContent" label="下周作业安排、位置及内容" width="300px" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.workContent" clearable :rows="1" placeholder="请输入"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="riskAdd" label="是否风险升级管理"  width="250px" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.riskAdd" placeholder="请选择" style="min-width:200px" @change="updateFlagChange(scope.index,scope.row)">
              <el-option v-for="item in addFormFour.options.riskAddOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="isElectrification" label="是否带电" width="150px" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.isElectrification" placeholder="请选择" style="min-width:100px">
              <el-option v-for="item in addFormFour.options.riskAddOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="laborSubcontractor" label="劳务分包单位" width="300px" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.laborSubcontractor" clearable :rows="1" placeholder="请输入"></el-input>
          </template>
        </el-table-column>
                <el-table-column prop="professionalSubcontractor" label="专业分包单位" width="300px" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.professionalSubcontractor" clearable :rows="1" placeholder="请输入"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="workStartTime" width="180px" label="作业开始时间" align="center">
          <template slot-scope="scope">
            <el-date-picker v-model="scope.row.workStartTime" type="date" placeholder="选择日期时间" @change="dateChangeToSecondA(scope.row)" style="width:150px"></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column prop="workEndTime" width="180px" label="作业结束时间" align="center">
          <template slot-scope="scope">
            <el-date-picker v-model="scope.row.workEndTime" type="date" placeholder="选择日期时间" @change="dateChangeToSecondB(scope.row)" style="width:150px"></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column prop="personnelName" label="到岗到位人员姓名" width="300px" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.personnelName" :disabled="scope.row.riskLevel<3" clearable :rows="1" placeholder="请输入"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="personnelPosition" label="到岗到位人员职务" width="300px" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.personnelPosition" :disabled="scope.row.riskLevel<3" clearable :rows="1" placeholder="请输入"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="personnelPhone" label="到岗到位人员手机号码" width="300px" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.personnelPhone" :disabled="scope.row.riskLevel<3" clearable :rows="1" placeholder="请输入"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="personnelTime" label="到岗到位人员到位时间" width="300px" align="center">
          <template slot-scope="scope">
            <el-date-picker  @change="changeFormatDate(scope.row.personnelTime)"     v-model="scope.row.personnelTime" :disabled="scope.row.riskLevel<3"     type="datetime"      placeholder="选择日期时间"      default-time="9:00:00">
            </el-date-picker>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="bar">
            <div id="title">
              <p id="tableTitle" style="min-width:1000px;font-size:28px;margin-left:655px;">项目运作状态</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-form :model="addFormFive" ref="addFormFive" label-position="left" :rules="addFormFiveRule" label-width="100px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="实际状态" prop="actualState" placeholder="当前月份">
                <el-select v-model="addFormFive.actualState" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormFive.options.actualStateOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="管控内状态" prop="controlledState" placeholder="周报开始日期">
                <el-select v-model="addFormFive.controlledState" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormFive.options.controlledStateOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="e安全上线" prop="hasESecurityOnline" placeholder="e安全上线">
                <el-select v-model="addFormFive.hasESecurityOnline" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addFormFive.options.hasESecurityOnlineOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>

      <div style="margin-left:35%;margin-top:30px;margin-bottom:10px">
        <el-button type="primary" style="margin-right: 80px" @click="saveAllInfo">信息保存</el-button>
        <el-button type="primary" style="margin-right: 80px" @click="submitProjectWeeklyInfo">信息上报</el-button>
        <el-button type="primary" style="margin-right: 80px" @click="cancelAllInfo">取消</el-button>
      </div>
    </el-card>
    <br />
  </div>
</template>

<script>
import { POINT_CONVERSION_COMPRESSED } from "constants";
import * as api from "@/api/date.js";
import * as getApi from "@/api/getApi.js";
import * as addApi from "@/api/addApi.js";
import * as dataApi from "@/api/dataChange.js";
export default {
  data() {
    return {
      propsPerson: {
        value: "id",
        label: "name"
      },
      //跳转参数
      backPath: "weeklyData",
      //项目修改标志
      projectUpdateFlag: false,
      beforeProjectInfo: {},
      //节点映射
      optionPropsA: {
        value: "value",
        label: "value",
        children: "children"
      },
      optionPropsB: {
        value: "value",
        label: "label",
        children: "children"
      },
      //遍历FLAG
      findFlag: false,

      //添加周报
      addFormOne: {
        weeklyStartTime: "",
        weeklyEndTime: "",
        monthShowTime: "",
        monthStartTime: ""
      },
      addFormOneRule: {
        weeklyStartTime: [
          { required: true, message: "请选择周报开始时间", trigger: "change" }
        ],
        monthShowTime: [
          { required: true, message: "请选择周报开始时间", trigger: "change" }
        ],
      },
      //添加周报——项目信息
      addFormTwo: {
        id: "",
        name: "",
        projectId: "",
        adminId: "",
        supervisionId: "",
        constructDeptId: "",
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
        constructionType:"",
        voltageClass:"",
        assignmentType:"",
        mainWorkerNum:"",
        outsourcingWorkerNum:"",

        options: {
          idOptions: {},
          adminIdOptions: {},
          supervisionIdOptions: {},
          constructDeptIdOptions: {},
          constructionTypeOptions:{},
          voltageClassOptions:{},
          assignmentTypeOptions:{},
          districtIdOptions: {},
          adminDeptOptions: {}
        }
      },
      addFormTwoRule: {
        projectId: [
          { required: true, message: "请选择项目名称", trigger: "change" }
        ],
        adminDept: [
          { required: true, message: "请选择所属部门", trigger: "change" }
        ],
        adminId: [
          { required: true, message: "请选择建设管理单位", trigger: "change" }
        ],
        constructDeptId: [
          { required: true, message: "请输入施工单位", trigger: "change" }
        ],
        detailedAddress: [
          { required: true, message: "请输入详细地址", trigger: "change" }
        ],
        districtId: [
          { required: true, message: "请选择区域", trigger: "change" }
        ],
        latitude: [
          {
            required: true,
            trigger: "change",
            validator: (rule, value, callback) => {
              if (value != "" && value != null) {
                var reg = /^([+]\d+[.]\d+|[-]\d+[.]\d+|\d+[.]\d+|[+]\d+|[-]\d+|\d+)$/gi
                if (!reg.test(value)) {
                  callback(new Error("定位纬度需要浮点型，如：100.123"));
                } else {
                  callback();
                }
              } else {
                callback(new Error("请输入定位纬度"));
              }
            }
          }
        ],
        longitude: [
          {
            required: true,
            trigger: "change",
            validator: (rule, value, callback) => {
              if (value != "" && value != null) {
                var reg = /^([+]\d+[.]\d+|[-]\d+[.]\d+|\d+[.]\d+|[+]\d+|[-]\d+|\d+)$/gi
                if (!reg.test(value)) {
                  callback(new Error("定位经度需要浮点型，如：100.123"));
                } else {
                  callback();
                }
              } else {
                callback(new Error("请输入定位经度度"));
              }
            }
          }
        ],
        supervisionId: [
          { required: true, message: "请选择监理单位", trigger: "change" }
        ],
        actualStartTime: [
          { required: false, message: "请输入实际开工时间", trigger: "change" }
        ],
        currentSubcontractorNum: [
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (value == "0") callback();
              if (value != "" && value != null) {
                var reg = /^[1-9]\d*$/;
                if (!reg.test(value) && value != "0") {
                  callback(new Error("当前分包人数需要整数，如：20"));
                } else {
                  callback();
                }
              } else {
                callback(new Error("请输入当前分包人数"));
              }
            }
          }
        ],
        mainWorkerNum: [
          {
            required: false,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (value == "0") callback();
              if (value != "" && value != null) {
                var reg = /^[1-9]\d*$/;
                if (!reg.test(value) && value != "0") {
                  callback(new Error("主业单位人数需要整数，如：20"));
                } else {
                  callback();
                }
              } else {
                callback();
              }
            }
          }
        ],
        outsourcingWorkerNum: [
          {
            required: false,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (value == "0") callback();
              if (value != "" && value != null) {
                var reg = /^[1-9]\d*$/;
                if (!reg.test(value) && value != "0") {
                  callback(new Error("外包单位人数需要整数，如：20"));
                } else {
                  callback();
                }
              } else {
                callback();
              }
            }
          }
        ],
        planCompletionTime: [
          { required: false, message: "请输入计划竣工时间", trigger: "change" }
        ],
        projectScale: [
          { required: false, message: "请输入项目规模", trigger: "change" }
        ],
      },
      //添加周报——项目人员信息
      addFormThree: {
        projectManagerId: "",
        safetyStaffId: "",
        qualityStaffId: "",
        chiefInspectorId: "",
        safetySupervisorId: "",
        professionalSupervisorId: "",
        constructionPrincipalNumber:"",
        constructionPrincipal:"",

        options: {
          projectManagerIdOptions: [],
          safetyStaffIdOptions: [],
          qualityStaffIdOptions: [],
          chiefInspectorIdOptions: [],
          safetySupervisorIdOptions: [],
          professionalSupervisorIdOptions: []
        }
      },
      addFormThreeRule: {
        professionalSupervisorId: [
          { required: true, message: "请选择专业监理", trigger: "change" }
        ],
        chiefInspectorId: [
          { required: true, message: "请选择总监/总监代表", trigger: "change" }
        ],
        projectManagerId: [
          { required: true, message: "请选择项目经理", trigger: "change" }
        ],
        qualityStaffId: [
          { required: true, message: "请选择质量专责", trigger: "change" }
        ],
        safetySupervisorId: [
          { required: true, message: "请选择安全监理", trigger: "change" }
        ],
        safetyStaffId: [
          { required: true, message: "请选择安全专责", trigger: "change" }
        ],
      },
      //添加周报——工程表格信息
      addFormFour: {
        //当前施工进度
        multiSelectionA: [],
        weeklyWorkProgressAddReqs: [],
        //下周是否有作业
        hasWorkNextWeek: false,
        //下周主要施工内容
        multiSelectionB: [],
        weeklyConstructContentAddReqs: [],
        //是否有三级以上风险
        hasThreePlusRiskWork: false,
        //风险作业内容
        multiSelectionC: [],
        weeklyRiskContentAddReqs: [],
        options: {
          workProcessOptions: [],
          jobNumberOptions: [],
          riskAddOptions: [
            {
              value: true,
              name: "是"
            },
            {
              value: false,
              name: "否"
            },
          ]
        }
      },
      //状态值
      addFormFive: {
        actualState: "",
        controlledState: "",
        hasESecurityOnline:"",
        options: {
          actualStateOptions: {},
          controlledStateOptions: {},
          hasESecurityOnlineOptions:[
            {
              name:"是",
              value:true
            },
            {
              name:"否",
              value:false
            }
          ]
        }
      },
      addFormFiveRule: {
        actualState: [
          { required: true, message: "请选择实际状态", trigger: "change" }
        ],
        controlledState: [
          { required: true, message: "请选择管控内状态", trigger: "change" }
        ],

        hasESecurityOnline:[
           { required: false, message: "请选择e安全上线", trigger: "change" }
        ]
      }
    };
  },

  created: function () {
    //其他页面跳转的数据
    let data = this.$route.params;
    // this.backPath = data.backPath;
    // obj = JSON.parse(localStorage.getItem("temp2"));
    //查看是否有草稿

    let saveFlag = false;
    saveFlag = localStorage.getItem("saveFlag");
    if (saveFlag === 'true') {
      console.log(localStorage)
      this.addFormOne = JSON.parse(localStorage.getItem("addFormOne"));
      this.addFormTwo = JSON.parse(localStorage.getItem("addFormTwo"));
      this.addFormThree = JSON.parse(localStorage.getItem("addFormThree"));
      this.addFormFour = JSON.parse(localStorage.getItem("addFormFour"));
      this.addFormFive = JSON.parse(localStorage.getItem("addFormFive"));
      this.beforeProjectInfo = JSON.parse(localStorage.getItem("beforeProjectInfo"));
      this.addFormOne.weeklyStartTime = new Date(this.addFormOne.weeklyStartTime);
      this.addFormTwo.actualStartTime = new Date(this.addFormTwo.actualStartTime);
      this.addFormTwo.planCompletionTime = new Date(this.addFormTwo.planCompletionTime);
      localStorage.removeItem('saveFlag');
      localStorage.setItem('saveFlag', false);
    } else {
      //获取所有项目名称
      getApi.getAllRunningProjectName().then(response => {
        this.addFormTwo.options.idOptions = response;
      });
      //获取所有建设管理单位
      getApi.getAllAdministrativeDeptName().then(response => {
        this.addFormTwo.options.adminIdOptions = response;
      });
      //获取所有监理单位
      getApi.getAllSupervisionDeptName().then(response => {
        this.addFormTwo.options.supervisionIdOptions = response;
      });
      //获取区域
      getApi.getAllDistrictName().then(response => {
        this.addFormTwo.options.districtIdOptions = response;
      });
      //获取所有所属部门
      getApi.getAllProjectAdminDeptEnum().then(response => {
        this.addFormTwo.options.adminDeptOptions = response;
      });
      //获取电压等级
      this.addFormTwo.options.voltageClassOptions = dataApi.getVoltageClass();
      //获取作业类型
      this.addFormTwo.options.assignmentTypeOptions = dataApi.getAssignmentType();
      //获取施工单位类别
      this.addFormTwo.options.constructionTypeOptions = dataApi.getConstructionType();
      //获取管控内状态
      getApi.getAllProjectControlledStateEnum().then(response => {
        this.addFormFive.options.controlledStateOptions = response;
      });
      //获取所有实际状态
      getApi.getAllProjectActualStateEnum().then(response => {
        this.addFormFive.options.actualStateOptions = response;
      });
      //获取施工单位
      getApi.getAllConstructDeptName().then(response => {
        this.addFormTwo.options.constructDeptIdOptions = response;
      });

      //获取所有人员的级联选择器
      getApi.getUserCascader().then(response => {
        response.options.forEach(ele=>{
          if(ele.id==-1){
            ele.children[0].id = 100000;
          }
        })
        this.addFormThree.options.projectManagerIdOptions = response.options;
        this.addFormThree.options.safetyStaffIdOptions = response.options;
        this.addFormThree.options.qualityStaffIdOptions = response.options;
        this.addFormThree.options.chiefInspectorIdOptions = response.options;
        this.addFormThree.options.safetySupervisorIdOptions = response.options;
        this.addFormThree.options.professionalSupervisorIdOptions = response.options;
      });
      //获取分部分项工程
      this.addFormFour.options.jobNumberOptions = getApi.getJobNumber();
      //获取分部分项工程
      this.addFormFour.options.workProcessOptions = getApi.getWorkProcess();
    }

  },
  methods: {
    //修改日期格式
    changeFormatDate(row){
      row = api.changeDateToSecond2(row);
    },
    // 风险等级改变
    riskLevelChanged(row){
      if(parseInt(row.riskLevel) < 3){
        row.personnelName = "";
        row.personnelPosition = "";
        row.personnelPhone = "";
        row.personnelTime = "";

      }
    },
    //信息保存
    saveAllInfo() {
      // storage["addFormOne"] = this.addFormOne;
      // storage["addFormTwo"] = this.addFormTwo;
      // // storage["addFormThree"] = this.addFormThree;
      // storage["addFormFour"] = this.addFormFour;
      // storage["addFormFive"] = this.addFormFive;
      localStorage.removeItem('addFormOne');
      localStorage.removeItem('addFormTwo');
      localStorage.removeItem('addFormThree');
      localStorage.removeItem('addFormFour');
      localStorage.removeItem('addFormFive');
      localStorage.removeItem('beforeProjectInfo');
      localStorage.removeItem('saveFlag');
      let obj1 = JSON.stringify(this.addFormOne);
      let obj2 = JSON.stringify(this.addFormTwo);
      let obj3 = JSON.stringify(this.addFormThree);
      let obj4 = JSON.stringify(this.addFormFour);
      let obj5 = JSON.stringify(this.addFormFive);
      let obj6 = JSON.stringify(this.beforeProjectInfo);
      localStorage.setItem('addFormOne', obj1);
      localStorage.setItem('addFormTwo', obj2);
      localStorage.setItem('addFormThree', obj3);
      localStorage.setItem('addFormFour', obj4);
      localStorage.setItem('addFormFive', obj5);
      localStorage.setItem('beforeProjectInfo', obj6);
      localStorage.setItem('saveFlag', true);
      this.$router.push({
        name: this.backPath
      })
    },
    //升级后，变化
    updateFlagChange(index, row) {

      // if (row.workProcessShow === "" || row.workProcessShow === undefined) return;
      // this.workProcessChangedA(index, row);
    },

    //项目名称改变或选择时，自动填写后续内容
    projectChanged() {
      if (this.addFormTwo.projectId === "") {
        this.beforeProjectInfo = {};
        this.addFormTwo.id = "";
        this.addFormTwo.name = "";
      }
      else {
        this.addFormTwo.options.idOptions.forEach(ele => {
          if (ele.id === this.addFormTwo.projectId) {
            this.addFormTwo.id = ele.id;
            this.addFormTwo.name = ele.name;
          }
        })
      }
      if (this.addFormTwo.id === "") {
        this.addFormTwo.adminId = "";
        this.addFormTwo.supervisionId = "";
        this.addFormTwo.constructDeptId = "";
        this.addFormTwo.districtId = "";
        this.addFormTwo.detailedAddress = "";
        this.addFormTwo.latitude = "";
        this.addFormTwo.longitude = "";
        this.addFormTwo.projectScale = "";
        this.addFormTwo.currentWorkerNum = "";
        this.addFormTwo.currentSubcontractorNum = "";
        this.addFormTwo.adminDept = "";
        this.addFormTwo.actualStartTime = "";
        this.addFormTwo.planCompletionTime = "";
        this.addFormTwo.voltageClass = "";
        this.addFormTwo.assignmentType = "";
        this.addFormTwo.constructionType = "";
        this.addFormTwo.mainWorkerNum = "";
        this.addFormTwo.outsourcingWorkerNum = "";
        this.addFormThree.constructionPrincipalNumber = "";
        this.addFormThree.constructionPrincipal = "";
        this.addFormThree.projectManagerId = "";
        this.addFormThree.safetyStaffId = "";
        this.addFormThree.qualityStaffId = "";
        this.addFormThree.chiefInspectorId = "";
        this.addFormThree.safetySupervisorId = "";
        this.addFormThree.professionalSupervisorId = "";

        return;
      } else {
        getApi
          .getProjectInfoDetailPageShowRespById(this.addFormTwo.id)
          .then(response => {
            let data = response[0];
            this.beforeProjectInfo = data;
            this.addFormTwo.adminId = data.adminId;
            this.addFormTwo.supervisionId = data.supervisionId;
            this.addFormTwo.constructDeptId = data.constructDeptId;
            this.addFormTwo.districtId = data.districtId;
            this.addFormTwo.detailedAddress = data.detailedAddress;
            this.addFormTwo.latitude = data.latitude;
            this.addFormTwo.longitude = data.longitude;
            this.addFormTwo.projectScale = data.projectScale;
            this.addFormTwo.currentWorkerNum = data.currentWorkerNum;
            this.addFormTwo.currentSubcontractorNum =
              data.currentSubcontractorNum;
            this.addFormTwo.voltageClass = data.voltageClass;
            this.addFormTwo.assignmentType = data.assignmentType;
            this.addFormTwo.constructionType = data.constructionType;
            this.addFormTwo.mainWorkerNum = data.mainWorkerNum;
            this.addFormTwo.outsourcingWorkerNum = data.outsourcingWorkerNum;
            this.addFormTwo.adminDept = data.adminDept;
            this.addFormTwo.actualStartTime = new Date(data.actualStartTime);
            this.addFormTwo.planCompletionTime = new Date(
              data.planCompletionTime
            );

            this.addFormThree.projectManagerId = [data.projectManagerDeptId, data.projectManagerId];
            this.addFormThree.safetyStaffId = [data.safetyStaffDeptId, data.safetyStaffId];
            this.addFormThree.qualityStaffId = [data.qualityStaffDeptId, data.qualityStaffId];
            this.addFormThree.chiefInspectorId = [data.chiefInspectorDeptId, data.chiefInspectorId];
            this.addFormThree.safetySupervisorId = [data.safetySupervisorDeptId, data.safetySupervisorId];
            this.addFormThree.professionalSupervisorId =
              [data.professionalSupervisorDeptId, data.professionalSupervisorId];
            
            this.addFormThree.constructionPrincipalNumber = data.constructionPrincipalNumber;
            this.addFormThree.constructionPrincipal = data.constructionPrincipal;
            
            if(this.addFormThree.projectManagerId[1] == -1) this.addFormThree.projectManagerId[1]=100000;
            if(this.addFormThree.qualityStaffId[1] == -1) this.addFormThree.qualityStaffId[1]=100000;
            if(this.addFormThree.safetyStaffId[1] == -1) this.addFormThree.safetyStaffId[1]=100000;
            if(this.addFormThree.chiefInspectorId[1] == -1) this.addFormThree.chiefInspectorId[1]=100000;
            if(this.addFormThree.safetySupervisorId[1] == -1) this.addFormThree.safetySupervisorId[1]=100000;
            if(this.addFormThree.professionalSupervisorId[1] == -1) this.addFormThree.professionalSupervisorId[1]=100000;
          });
      }
    },
    //周报开始日期改变，自动获取月份，周数，周次
    weeklyStartTimeChanged() {
      if (this.addFormOne.weeklyStartTime == null) {
        this.addFormOne.weeklyStartTime = "";
        this.addFormOne.weeklyEndTime = "";
        this.addFormOne.monthShowTime = "";
        this.addFormOne.monthStartTime = "";
        return;
      }
      this.addFormOne.weeklyEndTime = api.getThisWeekStart(
        this.addFormOne.weeklyStartTime
      );
      this.addFormOne.monthShowTime = api
        .changeDate(this.addFormOne.weeklyStartTime)
        .substring(0, 7);
      this.addFormOne.monthStartTime =
        api.changeDate(this.addFormOne.weeklyStartTime).substring(0, 7) + "-01";
    },
    //表格选中
    selectWeeklyWorkProgressAddReqs(val) {
      this.addFormFour.multiSelectionA = val;
    },
    selectWeeklyConstructContentAddReqs(val) {
      this.addFormFour.multiSelectionB = val;
    },
    selectWeeklyRiskContentAddReqs(val) {
      this.addFormFour.multiSelectionC = val;
    },

    //增加一行施工进度
    addOneLineWeeklyWorkProgressAddReqs() {
      this.addFormFour.weeklyWorkProgressAddReqs.push({
        jobNumber: "",
        currentProgress: ""
      });
    },
    //删除选中多行施工进度
    deleteLinesWeeklyWorkProgressAddReqs() {
      this.$confirm("确认删除选中条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.addFormFour.multiSelectionA.forEach(element => {
            let i = 0;
            this.addFormFour.weeklyWorkProgressAddReqs.forEach(ele => {
              if (ele === element) {
                this.addFormFour.weeklyWorkProgressAddReqs.splice(i, 1);
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
    //增加一行施工内容
    addOneLineWeeklyConstructContentAddReqs() {
      this.addFormFour.weeklyConstructContentAddReqs.push({
        constructContent: "",
        jobNumber: ""
      });
    },
    //删除选中多行施工内容
    deleteLinesWeeklyConstructContentAddReqs() {
      this.$confirm("确认删除选中条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.addFormFour.multiSelectionB.forEach(element => {
            let i = 0;
            this.addFormFour.weeklyConstructContentAddReqs.forEach(ele => {
              if (ele === element) {
                this.addFormFour.weeklyConstructContentAddReqs.splice(i, 1);
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
    //增加一行风险
    addOneLineWeeklyRiskContentAddReqs() {
      this.addFormFour.weeklyRiskContentAddReqs.push({
        riskLevel: "0",
        riskAdd: false,
        workContent: "",
        workEndTime: "",
        workProcess: "",
        workStartTime: "",
        isElectrification:false,
        laborSubcontractor:"",
        professionalSubcontractor:"",
        personnelName :"",
        personnelPosition:"",
        personnelPhone : "",
        personnelTime : ""
      });
    },
    //删除选中多行风险
    deleteLinesWeeklyRiskContentAddReqs() {
      this.$confirm("确认删除选中条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.addFormFour.multiSelectionC.forEach(element => {
            let i = 0;
            this.addFormFour.weeklyRiskContentAddReqs.forEach(ele => {
              if (ele === element) {
                this.addFormFour.weeklyRiskContentAddReqs.splice(i, 1);
                i--;
              }
              i++;
            });
          });
          let num = 0;
          this.addFormFour.weeklyRiskContentAddReqs.forEach(ele => {
            if (ele.riskLevel >= 3 || (ele.riskLevel === 2 && ele.riskAdd === true))
              num = 1;
          })
          if (num === 1) {
            this.addFormFour.hasThreePlusRiskWork = true;
          } else if (num === 0) this.addFormFour.hasThreePlusRiskWork = false;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //当某一行的分部分项工程值发生改变时，风险等级相应变化
    workProcessChangedA(index, row) {
      row.workProcess = row.workProcessShow[row.workProcessShow.length - 1];
      row.workProcessTotalList = row.workProcessShow.toString();
      // this.findFlag = false;
      // this.Traversal(
      //   this.addFormFour.options.workProcessOptions,
      //   row.workProcess,
      //   row
      // );
      // let num = 0;
      // this.addFormFour.weeklyRiskContentAddReqs.forEach(ele => {
      //   if (ele.riskLevel >= 3 || (ele.riskLevel === 2 && ele.riskAdd ===true))
      //     num = 1;
      // })
      // if (num === 1) {
      //   this.addFormFour.hasThreePlusRiskWork = true;
      // } else if (num === 0) this.addFormFour.hasThreePlusRiskWork = false;
    },
    workProcessChanged(index, row) {
      row.workProcess = row.workProcessShow[row.workProcessShow.length - 1];
      row.workProcessTotalList = row.workProcessShow.toString();
      this.findFlag = false;
      // row.riskAdd = false;
      // this.Traversal(
      //   this.addFormFour.options.workProcessOptions,
      //   row.workProcess,
      //   row
      // );
      // let num = 0;
      // this.addFormFour.weeklyRiskContentAddReqs.forEach(ele => {
      //   if (ele.riskLevel >= 3 || (ele.riskLevel === 2 && ele.riskAdd ===true))
      //     num = 1;
      // })
      // if (num === 1) {
      //   this.addFormFour.hasThreePlusRiskWork = true;
      // } else if (num === 0) this.addFormFour.hasThreePlusRiskWork = false;
    },
    //将分部分项工程设置为最后一列
    jobNumberChanged(index, row) {
      row.jobNumber = row.jobNumberShow[row.jobNumberShow.length - 1];
      row.jobNumberTotalList = row.jobNumberShow.toString();
    },
    //遍历找到该值
    Traversal(T, data, row) {
      if (!T) return;
      if (this.findFlag === true) {
        return;
      }
      for (let i = 0; i < T.length; i++) {
        if (T[i].value === data) {
          this.findFlag = true;
          row.riskLevel = T[i].riskLevel;
          if (row.riskAdd) row.riskLevel++;

          return;
        }
        this.Traversal(T[i].children, data, row);
      }
    },
    //修改日期格式 
    dateChangeToSecondA(row) {
      row.workStartTime = api.changeDateToSecond(row.workStartTime);
    },
    dateChangeToSecondB(row) {
      row.workEndTime = api.changeDateToSecond(row.workEndTime);
    },
    //信息上报
    submitProjectWeeklyInfo() {
      let validNum = 0;
      this.$refs["addFormOne"].validate(valid => {
        if (valid) {
          validNum++;
        }
      }); console.log(validNum)
      this.$refs["addFormTwo"].validate(valid => {
        if (valid) {
          validNum++;
        }
      }); console.log(validNum)
      this.$refs["addFormThree"].validate(valid => {
        if (valid) {
          validNum++;
        }
      }); console.log(validNum)
      this.$refs["addFormFive"].validate(valid => {
        if (valid) {
          validNum++;
        }
      });
      console.log(validNum)
      if (validNum === 4) {
        if (this.isValidTable()) {
          this.$message({
            type: "error",
            message: "请填写当前总体施工进度详情表格和下周作业安排表格中的所有条目！"
          });
          return;
        }
        let projectUpdateReq = {};
        let projectWeeklyAddReq;
        let weeklyRiskContentAddReqs;
        let weeklyWorkProgressAddReqs;
        //首先验证项目信息是否修改
        // this.projectInfoUpdate();
        // if (this.projectUpdateFlag) {
        projectUpdateReq = {
          id: this.addFormTwo.id,
          name: this.addFormTwo.name != this.beforeProjectInfo.name ? this.addFormTwo.name : undefined,
          adminId: this.addFormTwo.adminId != this.beforeProjectInfo.adminId ? this.addFormTwo.adminId : undefined,
          supervisionId: this.addFormTwo.supervisionId != this.beforeProjectInfo.supervisionId ? this.addFormTwo.supervisionId : undefined,
          constructDeptId: this.addFormTwo.constructDeptId != this.beforeProjectInfo.constructDeptId ? this.addFormTwo.constructDeptId : undefined,
          districtId: this.addFormTwo.districtId != this.beforeProjectInfo.districtId ? this.addFormTwo.districtId : undefined,
          detailedAddress: this.addFormTwo.detailedAddress != this.beforeProjectInfo.detailedAddress ? this.addFormTwo.detailedAddress : undefined,
          latitude: this.addFormTwo.latitude != this.beforeProjectInfo.latitude ? this.addFormTwo.latitude : undefined,
          longitude: this.addFormTwo.longitude != this.beforeProjectInfo.longitude ? this.addFormTwo.longitude : undefined,
          projectScale: this.addFormTwo.projectScale != this.beforeProjectInfo.projectScale ? this.addFormTwo.projectScale : undefined,
          currentWorkerNum: this.addFormTwo.currentWorkerNum != this.beforeProjectInfo.currentWorkerNum ? this.addFormTwo.currentWorkerNum : undefined,
          currentSubcontractorNum: this.addFormTwo.currentSubcontractorNum != this.beforeProjectInfo.currentSubcontractorNum ? this.addFormTwo.currentSubcontractorNum : undefined,
          adminDept: this.addFormTwo.adminDept != this.beforeProjectInfo.adminDept ? this.addFormTwo.adminDept : undefined,

          voltageClass: this.addFormTwo.voltageClass != this.beforeProjectInfo.voltageClass ? this.addFormTwo.voltageClass : undefined,
          assignmentType: this.addFormTwo.assignmentType != this.beforeProjectInfo.assignmentType ? this.addFormTwo.assignmentType : undefined,
          constructionType: this.addFormTwo.constructionType != this.beforeProjectInfo.constructionType ? this.addFormTwo.constructionType : undefined,
          mainWorkerNum: this.addFormTwo.mainWorkerNum != this.beforeProjectInfo.mainWorkerNum ? this.addFormTwo.mainWorkerNum : undefined,
          outsourcingWorkerNum: this.addFormTwo.outsourcingWorkerNum != this.beforeProjectInfo.outsourcingWorkerNum ? this.addFormTwo.outsourcingWorkerNum : undefined,

          constructionPrincipalNumber: this.addFormThree.constructionPrincipalNumber != this.beforeProjectInfo.constructionPrincipalNumber ? this.addFormThree.constructionPrincipalNumber : undefined,
          constructionPrincipal: this.addFormThree.constructionPrincipal != this.beforeProjectInfo.constructionPrincipal ? this.addFormThree.constructionPrincipal : undefined,






          actualStartTime: api.changeDate(this.addFormTwo.actualStartTime) != this.beforeProjectInfo.actualStartTime ? api.changeDate(this.addFormTwo.actualStartTime) : undefined,
          planCompletionTime: api.changeDate(this.addFormTwo.planCompletionTime) != this.beforeProjectInfo.planCompletionTime ? api.changeDate(this.addFormTwo.planCompletionTime) : undefined,
          chiefInspectorId: this.addFormThree.chiefInspectorId[1] != this.beforeProjectInfo.chiefInspectorId ? this.addFormThree.chiefInspectorId[1] : undefined,
          professionalSupervisorId: this.addFormThree.professionalSupervisorId[1] != this.beforeProjectInfo.professionalSupervisorId ? this.addFormThree.professionalSupervisorId[1] : undefined,
          projectManagerId: this.addFormThree.projectManagerId[1] != this.beforeProjectInfo.projectManagerId ? this.addFormThree.projectManagerId[1] : undefined,
          qualityStaffId: this.addFormThree.qualityStaffId[1] != this.beforeProjectInfo.qualityStaffId ? this.addFormThree.qualityStaffId[1] : undefined,
          safetyStaffId: this.addFormThree.safetyStaffId[1] != this.beforeProjectInfo.safetyStaffId ? this.addFormThree.safetyStaffId[1] : undefined,
          safetySupervisorId: this.addFormThree.safetySupervisorId[1] != this.beforeProjectInfo.safetySupervisorId ? this.addFormThree.safetySupervisorId[1] : undefined,

          chiefInspectorDeptId: this.addFormThree.chiefInspectorId[0] != this.beforeProjectInfo.chiefInspectorDeptId ? this.addFormThree.chiefInspectorId[0] : undefined,
          professionalSupervisorDeptId: this.addFormThree.professionalSupervisorId[0] != this.beforeProjectInfo.professionalSupervisorDeptId ? this.addFormThree.professionalSupervisorId[0] : undefined,
          projectManagerDeptId: this.addFormThree.projectManagerId[0] != this.beforeProjectInfo.projectManagerDeptId ? this.addFormThree.projectManagerId[0] : undefined,
          qualityStaffDeptId: this.addFormThree.qualityStaffId[0] != this.beforeProjectInfo.qualityStaffDeptId ? this.addFormThree.qualityStaffId[0] : undefined,
          safetyStaffDeptId: this.addFormThree.safetyStaffId[0] != this.beforeProjectInfo.safetyStaffDeptId ? this.addFormThree.safetyStaffId[0] : undefined,
          safetySupervisorDeptId: this.addFormThree.safetySupervisorId[0] != this.beforeProjectInfo.safetySupervisorDeptId ? this.addFormThree.safetySupervisorId[0] : undefined,
        };

        if(this.beforeProjectInfo.projectManagerId == -1 && this.addFormThree.projectManagerId[1]==100000) projectUpdateReq.projectManagerId = undefined;
        if(this.beforeProjectInfo.safetyStaffId == -1 && this.addFormThree.safetyStaffId[1]==100000) projectUpdateReq.safetyStaffId = undefined;
        if(this.beforeProjectInfo.qualityStaffId == -1 && this.addFormThree.qualityStaffId[1]==100000) projectUpdateReq.qualityStaffId = undefined;
        if(this.beforeProjectInfo.chiefInspectorId == -1 && this.addFormThree.chiefInspectorId[1] == 100000) projectUpdateReq.chiefInspectorId=undefined;
        if(this.beforeProjectInfo.safetySupervisorId == -1 && this.addFormThree.safetySupervisorId[1] == 100000) projectUpdateReq.safetySupervisorId=undefined;
        if(this.beforeProjectInfo.professionalSupervisorId == -1 && this.addFormThree.professionalSupervisorId[1] == 100000) projectUpdateReq.professionalSupervisorId=undefined;
    
        //   }
        console.log(this.addFormOne)
        console.log(this.addFormTwo)
        console.log(this.addFormThree)
        console.log(this.addFormFour)
        console.log(this.addFormFive)
        console.log(this.beforeProjectInfo)

        let num = 0;
        this.addFormFour.weeklyRiskContentAddReqs.forEach(ele => {
          if (ele.riskLevel >= 3 || (ele.riskLevel === 2 && ele.riskAdd === true))
            num = 1;
        })
        if (num === 1) {
          this.addFormFour.hasThreePlusRiskWork = true;
        } else if (num === 0) this.addFormFour.hasThreePlusRiskWork = false;

        //加入周报信息
        projectWeeklyAddReq = {
          actualState: this.addFormFive.actualState,
          controlledState: this.addFormFive.controlledState,
          hasESecurityOnline:this.addFormFive.hasESecurityOnline,
          adminDept: this.addFormTwo.adminDept,
          adminId: this.addFormTwo.adminId,
          constructDeptId: this.addFormTwo.constructDeptId,
          detailedAddress: this.addFormTwo.detailedAddress,
          districtId: this.addFormTwo.districtId,
          hasThreePlusRiskWork: this.addFormFour.hasThreePlusRiskWork,
          hasWorkNextWeek: this.addFormFour.hasWorkNextWeek,
          latitude: this.addFormTwo.latitude,
          longitude: this.addFormTwo.longitude,
          monthStartTime: this.addFormOne.monthStartTime,
          projectId: this.addFormTwo.id,
          supervisionId: this.addFormTwo.supervisionId,
          currentSubcontractorNum: this.addFormTwo.currentSubcontractorNum,
          currentWorkerNum: this.addFormTwo.currentWorkerNum,
          projectScale: this.addFormTwo.projectScale,
          weeklyStartTime: api.changeDate(this.addFormOne.weeklyStartTime),
          actualStartTime: api.changeDate(this.addFormTwo.actualStartTime),
          planCompletionTime: api.changeDate(this.addFormTwo.planCompletionTime),
          chiefInspectorId: this.addFormThree.chiefInspectorId[1],
          professionalSupervisorId: this.addFormThree.professionalSupervisorId[1],
          projectManagerId: this.addFormThree.projectManagerId[1],
          qualityStaffId: this.addFormThree.qualityStaffId[1],
          safetyStaffId: this.addFormThree.safetyStaffId[1],
          safetySupervisorId: this.addFormThree.safetySupervisorId[1],

          voltageClass: this.addFormTwo.voltageClass,
          assignmentType: this.addFormTwo.assignmentType,
          constructionType: this.addFormTwo.constructionType ,
          mainWorkerNum: this.addFormTwo.mainWorkerNum ,
          outsourcingWorkerNum: this.addFormTwo.outsourcingWorkerNum,

          constructionPrincipalNumber: this.addFormThree.constructionPrincipalNumber,
          constructionPrincipal: this.addFormThree.constructionPrincipal,




          chiefInspectorDeptId: this.addFormThree.chiefInspectorId[0],
          professionalSupervisorDeptId: this.addFormThree.professionalSupervisorId[0],
          projectManagerDeptId: this.addFormThree.projectManagerId[0],
          qualityStaffDeptId: this.addFormThree.qualityStaffId[0],
          safetyStaffDeptId: this.addFormThree.safetyStaffId[0],
          safetySupervisorDeptId: this.addFormThree.safetySupervisorId[0],
        };
        if(this.addFormThree.projectManagerId[1]==100000) projectWeeklyAddReq.projectManagerId = -1;
        if(this.addFormThree.safetyStaffId[1]==100000) projectWeeklyAddReq.safetyStaffId = -1;
        if(this.addFormThree.qualityStaffId[1]==100000) projectWeeklyAddReq.qualityStaffId = -1;
        if(this.addFormThree.chiefInspectorId[1] == 100000) projectWeeklyAddReq.chiefInspectorId = -1;
        if(this.addFormThree.safetySupervisorId[1] == 100000) projectWeeklyAddReq.safetySupervisorId = -1;
        if(this.addFormThree.professionalSupervisorId[1] == 100000) projectWeeklyAddReq.professionalSupervisorId = -1;
        //主要施工内容信息

        //风险作业内容信息
        weeklyRiskContentAddReqs = this.addFormFour.weeklyRiskContentAddReqs;
        weeklyRiskContentAddReqs.forEach(ele=>{
          ele.personnelTime = api.changeDateToSecond2(ele.personnelTime);
        })
        console.log(weeklyRiskContentAddReqs)
        //施工进度信息
        weeklyWorkProgressAddReqs = this.addFormFour.weeklyWorkProgressAddReqs;
        //信息整合
        let list = {
          projectUpdateReq: projectUpdateReq,
          projectWeeklyAddReq: projectWeeklyAddReq,
          weeklyRiskContentAddReqs: weeklyRiskContentAddReqs,
          weeklyWorkProgressAddReqs: weeklyWorkProgressAddReqs
        };
        addApi.addProjectWeeklyInfo(list).then(response => {
          this.goback();
        });
      }
    },
    //判断是否表格内容全部填写
    isValidTable() {
      console.log(this.addFormFour.weeklyRiskContentAddReqs)
      console.log(this.addFormFour.weeklyWorkProgressAddReqs)
      let flag = false;
      this.addFormFour.weeklyRiskContentAddReqs.forEach(ele => {
        if (ele.riskLevel === "" || ele.workContent === "" || ele.workEndTime === "" || ele.workProcess === "" || ele.workStartTime === "" ||
          ele.riskLevel === null || ele.workContent === null || ele.workEndTime === null || ele.workProcess === null || ele.workStartTime === null) flag = true;
      })
      this.addFormFour.weeklyWorkProgressAddReqs.forEach(ele => {
        if (ele.currentProgress === "" || ele.jobNumber === "") flag = true;
      })
      return flag;
    },
    //取消
    cancelAllInfo() {
      this.$router.push({
        name: this.backPath
      })
    },
    goback() {
      this.$router.push({
        name: this.backPath
      })
    }
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
