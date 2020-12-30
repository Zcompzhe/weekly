<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="updateFormOne" label-position="left" ref="updateFormOne" :rules="updateFormOneRule" label-width="120px" class="demo-ruleForm">
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
                <el-date-picker v-model="updateFormOne.weeklyStartTime" disabled type="date" placeholder="选择日期时间" style="min-width:200px" @change="weeklyStartTimeChanged"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8" style="margin-left:-130px">
            <div class="bar">
              <el-form-item label="~" prop="weeklyEndTime" placeholder="周报开始日期" label-width="5px">
                <el-date-picker disabled v-model="updateFormOne.weeklyEndTime" type="date" placeholder="选择日期时间" style="min-width:200px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="当前月份" prop="monthShowTime" placeholder="当前月份">
                <el-input disabled v-model="updateFormOne.monthShowTime" clearable :rows="1" placeholder="请输入" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-form :model="updateFormTwo" ref="updateFormTwo" label-position="left" :rules="updateFormTwoRule" label-width="120px" class="demo-ruleForm">
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
              <el-form-item label="项目名称" prop="projectIdName" placeholder="项目名称">
                <el-select disabled v-model="updateFormTwo.projectIdName" clearable placeholder="请选择" style="min-width:200px" @change="projectChanged">
                  <el-option v-for="item in updateFormTwo.options.idOptions" :key="item.id" :label="item.name" :value="[item.id,item.name]"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="所属建管单位" prop="adminId" placeholder="当前月份">
                <el-select disabled v-model="updateFormTwo.adminId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormTwo.options.adminIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="监理单位" prop="supervisionId" placeholder="周报开始日期">
                <el-select disabled v-model="updateFormTwo.supervisionId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormTwo.options.supervisionIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="施工单位" prop="constructDeptId" placeholder="周报开始日期">
                <el-select v-model="updateFormTwo.constructDeptId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormTwo.options.constructDeptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="所在区域" prop="districtId" placeholder="项目名称">
                <el-select disabled v-model="updateFormTwo.districtId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormTwo.options.districtIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="详细地址" prop="detailedAddress" placeholder="当前月份">
                <el-input v-model="updateFormTwo.detailedAddress" clearable :rows="1" placeholder="请输入" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="定位经度" prop="longitude" placeholder="周报开始日期">
                <el-input v-model="updateFormTwo.longitude" clearable :rows="1" placeholder="浮点型，如：100.123" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="定位纬度" prop="latitude" placeholder="周报开始日期">
                <el-input v-model="updateFormTwo.latitude" clearable :rows="1" placeholder="浮点型，如：100.123" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="电压等级" prop="voltageClass" placeholder="电压等级">
                <el-select v-model="updateFormTwo.voltageClass" clearable  placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormTwo.options.voltageClassOptions" :key="item.value" :label="item.value" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="作业类型" prop="assignmentType" placeholder="作业类型">
                <el-select v-model="updateFormTwo.assignmentType" clearable  placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormTwo.options.assignmentTypeOptions" :key="item.value" :label="item.value" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="施工单位类别" prop="constructionType" placeholder="周报开始日期">
                <el-select v-model="updateFormTwo.constructionType" clearable  placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormTwo.options.constructionTypeOptions" :key="item.value" :label="item.value" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="项目规模" prop="projectScale" placeholder="周报开始日期">
                <el-input v-model="updateFormTwo.projectScale" clearable  :rows="1" placeholder="请输入" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="实际开工时间" prop="actualStartTime" placeholder="项目名称">
                <el-date-picker v-model="updateFormTwo.actualStartTime" type="date" placeholder="选择日期时间" style="min-width:200px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="计划竣工时间" prop="planCompletionTime" placeholder="当前月份">
                <el-date-picker v-model="updateFormTwo.planCompletionTime" type="date" placeholder="选择日期时间" style="min-width:200px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="主业作业人数" prop="mainWorkerNum" placeholder="周报开始日期">
                <el-input v-model="updateFormTwo.mainWorkerNum" clearable  :rows="1" placeholder="整数，如20" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="外包作业人数" prop="outsourcingWorkerNum" placeholder="周报开始日期">
                <el-input v-model="updateFormTwo.outsourcingWorkerNum" clearable  :rows="1" placeholder="整数，如20" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="当前分包人数" prop="currentSubcontractorNum" placeholder="项目名称">
                <el-input v-model="updateFormTwo.currentSubcontractorNum" clearable :rows="1" placeholder="整数，如20" style="min-width:200px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="所属部门" prop="adminDept" placeholder="当前月份">
                <el-select v-model="updateFormTwo.adminDept" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormTwo.options.adminDeptOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
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
      <el-form :model="updateFormThree" ref="updateFormThree" label-position="left" :rules="updateFormThreeRule" label-width="120px" class="demo-ruleForm">
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
                <!-- <el-select v-model="updateFormThree.projectManagerId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormThree.options.projectManagerIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="updateFormThree.projectManagerId" :options="updateFormThree.options.projectManagerIdOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="质量专责" prop="qualityStaffId" placeholder="周报开始日期">
                <!-- <el-select v-model="updateFormThree.qualityStaffId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormThree.options.qualityStaffIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="updateFormThree.qualityStaffId" :options="updateFormThree.options.qualityStaffIdOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="安全专责" prop="safetyStaffId" placeholder="当前月份">
                <!-- <el-select v-model="updateFormThree.safetyStaffId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormThree.options.safetyStaffIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="updateFormThree.safetyStaffId" :options="updateFormThree.options.safetyStaffIdOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>
              </el-form-item>
            </div>
          </el-col>

        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="总监/总监代表" prop="chiefInspectorId" placeholder="项目名称">
                <!-- <el-select v-model="updateFormThree.chiefInspectorId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormThree.options.chiefInspectorIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="updateFormThree.chiefInspectorId" :options="updateFormThree.options.chiefInspectorIdOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="专业监理" prop="professionalSupervisorId" placeholder="周报开始日期">
                <!-- <el-select v-model="updateFormThree.professionalSupervisorId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormThree.options
                      .professionalSupervisorIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="updateFormThree.professionalSupervisorId" :options="updateFormThree.options.professionalSupervisorIdOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="安全监理" prop="safetySupervisorId" placeholder="当前月份">
                <!-- <el-select v-model="updateFormThree.safetySupervisorId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormThree.options
                      .safetySupervisorIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <el-cascader v-model="updateFormThree.safetySupervisorId" :options="updateFormThree.options.safetySupervisorIdOptions" :show-all-levels="false" :props="propsPerson" style="min-width:300px;margin-left:20px"></el-cascader>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="施工单位负责人" prop="constructionPrincipal" placeholder="请选择施工单位负责人">
                <el-input v-model="updateFormThree.constructionPrincipal" clearable disabled :rows="1" placeholder="请输入" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="联系方式" prop="constructionPrincipalNumber" placeholder="请选择联系方式">
                <el-input v-model="updateFormThree.constructionPrincipalNumber" clearable disabled :rows="1" placeholder="请输入" style="min-width:300px"></el-input>
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
      <el-table :data="updateFormFour.weeklyWorkProgressAddReqs" @selection-change="selectWeeklyWorkProgressAddReqs" border>
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="400" prop="jobNumberShow" label="分部分项工程" align="center">
          <template slot-scope="scope">
            <el-cascader v-model="scope.row.jobNumberShow" :options="updateFormFour.options.jobNumberOptions" @change="jobNumberChanged(scope.index, scope.row)" :props="optionPropsA" style="min-width:300px"></el-cascader>
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
      <el-checkbox v-model="updateFormFour.hasWorkNextWeek" style="margin-left:20px">下周是否有作业</el-checkbox>
      <el-button type="primary" style="margin-left:50px;margin-right: 20px" @click="addOneLineWeeklyRiskContentAddReqs" :disabled="!updateFormFour.hasWorkNextWeek">添加条目</el-button>
      <el-button type="primary" style="margin-right: 20px" @click="deleteLinesWeeklyRiskContentAddReqs">删除条目</el-button>
      <el-checkbox v-model="updateFormFour.hasThreePlusRiskWork" disabled style="margin-left:20px">是否有三级及以上风险</el-checkbox>
      <br />
      <br />
      <el-table :data="updateFormFour.weeklyRiskContentAddReqs" @selection-change="selectWeeklyRiskContentAddReqs" border>
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="400" prop="workProcessShow" label="风险库" align="center">
          <template slot-scope="scope">
            <el-cascader v-model="scope.row.workProcessShow" :props="optionPropsB" :options="updateFormFour.options.workProcessOptions" @change="workProcessChanged(scope.index, scope.row)" style="min-width:350px"></el-cascader>
          </template>
        </el-table-column>
        <el-table-column prop="riskLevel" label="风险等级" width="100px" align="center">
          <template slot-scope="scope">
            <!-- <span v-if="scope.row.riskAdd" style="color:red">{{ scope.row.riskLevel }}</span>
            <span v-else>{{ scope.row.riskLevel }}</span> -->
            <el-input v-model="scope.row.riskLevel" clearable @change="riskLevelChanged(scope.row)" :rows="1" placeholder="请输入"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="workContent" label="下周作业安排、位置及内容"  width="300px" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.workContent" clearable :rows="1" placeholder="请输入"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="riskAdd" label="是否风险升级管理"  width="250px" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.riskAdd"  placeholder="请选择" style="min-width:200px" @change="updateFlagChange(scope.index,scope.row)">
              <el-option v-for="item in updateFormFour.options.riskAddOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="isElectrification" label="是否带电" width="150px" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.isElectrification" placeholder="请选择" style="min-width:100px">
              <el-option v-for="item in updateFormFour.options.riskAddOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
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
      <el-form :model="updateFormFive" ref="updateFormFive" label-position="left" :rules="updateFormFiveRule" label-width="100px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="实际状态" prop="actualState" placeholder="当前月份">
                <el-select v-model="updateFormFive.actualState" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormFive.options.actualStateOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="管控内状态" prop="controlledState" placeholder="周报开始日期">
                <el-select v-model="updateFormFive.controlledState" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormFive.options.controlledStateOptions" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="e安全上线" prop="hasESecurityOnline" placeholder="e安全上线">
                <el-select v-model="updateFormFive.hasESecurityOnline" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in updateFormFive.options.hasESecurityOnlineOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>

      <div style="margin-left:35%;margin-top:30px;margin-bottom:10px">
        <!-- <el-button type="primary" style="margin-right: 80px" @click="saveAllInfo">信息保存</el-button> -->
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
import * as updateApi from "@/api/updateApi.js";
import * as dataApi from "@/api/dataChange.js";
export default {
  data() {
    return {
      propsPerson: {
        value: "id",
        label: "name"
      },
      firstData: {},
      //跳转参数
      backPath: "",
      id: "",
      //三个对比的list
      weeklyWorkProgress: [],
      weeklyConstructContent: [],
      weeklyRiskContent: [],
      deleteweeklyWorkProgressAddReqs: [],
      deleteweeklyConstructContentAddReqs: [],
      deleteweeklyRiskContentAddReqs: [],
      //项目修改标志
      projectUpdateFlag: false,
      firstData: {},
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
      updateFormOne: {
        weeklyStartTime: "",
        weeklyEndTime: "",
        monthShowTime: "",
        monthStartTime: ""
      },
      updateFormOneRule: {
        weeklyStartTime: [
          { required: true, message: "请选择周报开始时间", trigger: "change" }
        ],
        monthShowTime: [
          { required: true, message: "请选择周报开始时间", trigger: "change" }
        ],
      },
      //添加周报——项目信息
      updateFormTwo: {
        id: "",
        name: "",
        projectIdName: "",
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
      updateFormTwoRule: {
        projectIdName: [
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
                callback(new Error("请输入定位经度"));
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
      updateFormThree: {
        projectManagerId: "",
        safetyStaffId: "",
        qualityStaffId: "",
        chiefInspectorId: "",
        constructionPrincipalNumber:"",
        constructionPrincipal:"",
        safetySupervisorId: "",
        professionalSupervisorId: "",
        

        options: {
          projectManagerIdOptions: [],
          safetyStaffIdOptions: [],
          qualityStaffIdOptions: [],
          chiefInspectorIdOptions: [],
          safetySupervisorIdOptions: [],
          professionalSupervisorIdOptions: []
        }
      },
      updateFormThreeRule: {
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
      updateFormFour: {
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
      updateFormFive: {
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
      updateFormFiveRule: {
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
    this.backPath = data.backPath;
    this.id = data.id;
    //填写所有信息
    getApi.getProjectWeeklyInfoShowRespById(this.id).then(response => {
      let res = response[0];
      this.firstData = res.projectWeeklyShowResp;
      this.updateFormOne.weeklyStartTime = new Date(res.projectWeeklyShowResp.weeklyStartTime);
      this.weeklyStartTimeChanged();
      this.updateFormTwo.projectIdName = res.projectWeeklyShowResp.projectName;
      this.updateFormTwo.id = res.projectWeeklyShowResp.projectId;
      this.updateFormTwo.name = res.projectWeeklyShowResp.projectName;
      this.updateFormTwo.adminId = res.projectWeeklyShowResp.adminId;
      this.updateFormTwo.supervisionId = res.projectWeeklyShowResp.supervisionId;
      this.updateFormTwo.constructDeptId = res.projectWeeklyShowResp.constructDeptId;
      this.updateFormTwo.districtId = res.projectWeeklyShowResp.districtId;
      this.updateFormTwo.detailedAddress = res.projectWeeklyShowResp.detailedAddress;
      this.updateFormTwo.longitude = res.projectWeeklyShowResp.longitude;
      this.updateFormTwo.latitude = res.projectWeeklyShowResp.latitude;
      this.updateFormTwo.actualStartTime = new Date(res.projectWeeklyShowResp.actualStartTime);
      this.updateFormTwo.planCompletionTime = new Date(res.projectWeeklyShowResp.planCompletionTime);
      this.updateFormTwo.projectScale = res.projectWeeklyShowResp.projectScale;
      this.updateFormTwo.currentWorkerNum = res.projectWeeklyShowResp.currentWorkerNum;
      this.updateFormTwo.currentSubcontractorNum = res.projectWeeklyShowResp.currentSubcontractorNum;
      this.updateFormTwo.adminDept = res.projectWeeklyShowResp.adminDept;


      this.updateFormTwo.constructionType = res.projectWeeklyShowResp.constructionType;
      this.updateFormTwo.voltageClass = res.projectWeeklyShowResp.voltageClass;
      this.updateFormTwo.assignmentType = res.projectWeeklyShowResp.assignmentType;
      this.updateFormTwo.mainWorkerNum = res.projectWeeklyShowResp.mainWorkerNum;
      this.updateFormTwo.outsourcingWorkerNum = res.projectWeeklyShowResp.outsourcingWorkerNum;
      


      this.updateFormThree.constructionPrincipalNumber = res.projectWeeklyShowResp.constructionPrincipalNumber;
      this.updateFormThree.constructionPrincipal = res.projectWeeklyShowResp.constructionPrincipal;

      this.updateFormFive.actualState = res.projectWeeklyShowResp.actualState;
      this.updateFormFive.controlledState = res.projectWeeklyShowResp.controlledState;
      this.updateFormFive.hasESecurityOnline = res.projectWeeklyShowResp.hasESecurityOnline;
      this.updateFormFive.outsourcingWorkerNum = res.projectWeeklyShowResp.outsourcingWorkerNum;

      


      //人员
      this.updateFormThree.projectManagerId = [res.projectWeeklyShowResp.projectManagerDeptId, res.projectWeeklyShowResp.projectManagerId];
      this.updateFormThree.safetyStaffId = [res.projectWeeklyShowResp.safetyStaffDeptId, res.projectWeeklyShowResp.safetyStaffId];
      this.updateFormThree.qualityStaffId = [res.projectWeeklyShowResp.qualityStaffDeptId, res.projectWeeklyShowResp.qualityStaffId];
      this.updateFormThree.chiefInspectorId = [res.projectWeeklyShowResp.chiefInspectorDeptId, res.projectWeeklyShowResp.chiefInspectorId];
      this.updateFormThree.safetySupervisorId = [res.projectWeeklyShowResp.safetySupervisorDeptId, res.projectWeeklyShowResp.safetySupervisorId];
      this.updateFormThree.professionalSupervisorId = [res.projectWeeklyShowResp.professionalSupervisorDeptId, res.projectWeeklyShowResp.professionalSupervisorId];

      this.updateFormFour.hasWorkNextWeek = res.projectWeeklyShowResp.hasWorkNextWeek;
      this.updateFormFour.hasThreePlusRiskWork = res.projectWeeklyShowResp.hasThreePlusRiskWork;

      //表格
      this.updateFormFour.weeklyWorkProgressAddReqs = res.weeklyWorkProgressShowResps;
      // this.updateFormFour.weeklyConstructContentAddReqs = res.weeklyConstructContentShowResps;
      this.updateFormFour.weeklyRiskContentAddReqs = res.weeklyRiskContentShowResps;
      this.updateFormFour.weeklyRiskContentAddReqs.forEach(ele=>{
        if(ele.personnelTime!="") ele.personnelTime = new Date(ele.personnelTime);
      })



      this.updateFormFour.weeklyWorkProgressAddReqs.forEach(ele => {
        // ele.jobNumberTotalList = ele.jobNumberTotalList.substr(0, ele.jobNumberTotalList.length - 1);
        // ele.jobNumberTotalList = ele.jobNumberTotalList.substr(1, ele.jobNumberTotalList.length - 1);
        ele.jobNumberShow = ele.jobNumberTotalList.split(",");
        // ele.jobNumberTotalList = "[" + ele.jobNumberTotalList + "]";
        this.weeklyWorkProgress.push({
          currentProgress: ele.currentProgress,
          id: ele.id,
          jobNumberTotalList: ele.jobNumberTotalList
        })
      })
      // this.updateFormFour.weeklyConstructContentAddReqs.forEach(ele => {
      //   // ele.jobNumberTotalList = ele.jobNumberTotalList.substr(0, ele.jobNumberTotalList.length - 1);
      //   // ele.jobNumberTotalList = ele.jobNumberTotalList.substr(1, ele.jobNumberTotalList.length - 1);
      //   ele.jobNumberShow = ele.jobNumberTotalList.split(",");
      //   ele.jobNumberTotalList = "[" + ele.jobNumberTotalList + "]";
      //   this.weeklyConstructContent.push({
      //     constructContent: ele.constructContent,
      //     id: ele.id,
      //     jobNumberTotalList: ele.jobNumberTotalList
      //   })
      // })
      this.updateFormFour.weeklyRiskContentAddReqs.forEach(ele => {
        // ele.workProcessTotalList = ele.workProcessTotalList.substr(0, ele.workProcessTotalList.length - 1);
        // ele.workProcessTotalList = ele.workProcessTotalList.substr(1, ele.workProcessTotalList.length - 1);
        ele.workProcessShow = ele.workProcessTotalList.split(",");
        // ele.workProcessTotalList = "[" + ele.workProcessTotalList + "]";
        this.weeklyRiskContent.push({
          workStartTime: ele.workStartTime,
          workEndTime: ele.workEndTime,
          workContent: ele.workContent,
          riskAdd: ele.riskAdd,
          id: ele.id,
          workProcessTotalList: ele.workProcessTotalList,
          isElectrification:false,
        laborSubcontractor:ele.laborSubcontractor,
        professionalSubcontractor:ele.professionalSubcontractor,
        personnelName :ele.personnelName,
        personnelPosition:ele.personnelPosition,
        personnelPhone : ele.personnelPhone,
        personnelTime : ele.personnelTime,
        })

      })
      if(this.updateFormThree.projectManagerId[1]==-1) this.updateFormThree.projectManagerId[1] = 100000;
      if(this.updateFormThree.safetyStaffId[1]==-1) this.updateFormThree.safetyStaffId[1] = 100000;
      if(this.updateFormThree.qualityStaffId[1]==-1) this.updateFormThree.qualityStaffId[1] = 100000;
      if(this.updateFormThree.chiefInspectorId[1] == -1) this.updateFormThree.chiefInspectorId[1]=100000;
      if(this.updateFormThree.safetySupervisorId[1] == -1) this.updateFormThree.safetySupervisorId[1]=100000;
      if(this.updateFormThree.professionalSupervisorId[1] == -1) this.updateFormThree.professionalSupervisorId[1]=100000;
      console.log(this.updateFormFour)
    });
    //获取电压等级
    this.updateFormTwo.options.voltageClassOptions = dataApi.getVoltageClass();
    //获取作业类型
    this.updateFormTwo.options.assignmentTypeOptions = dataApi.getAssignmentType();
    //获取施工单位类别
    this.updateFormTwo.options.constructionTypeOptions = dataApi.getConstructionType();
    //获取所有项目名称
    getApi.getAllRunningProjectName().then(response => {
      this.updateFormTwo.options.idOptions = response;
    });
    //获取所有建设管理单位
    getApi.getAllAdministrativeDeptName().then(response => {
      this.updateFormTwo.options.adminIdOptions = response;
    });
    //获取所有监理单位
    getApi.getAllSupervisionDeptName().then(response => {
      this.updateFormTwo.options.supervisionIdOptions = response;
    });
    //获取区域
    getApi.getAllDistrictName().then(response => {
      this.updateFormTwo.options.districtIdOptions = response;
    });
    //获取所有所属部门
    getApi.getAllProjectAdminDeptEnum().then(response => {
      this.updateFormTwo.options.adminDeptOptions = response;
    });
    //获取管控内状态
    getApi.getAllProjectControlledStateEnum().then(response => {
      this.updateFormFive.options.controlledStateOptions = response;
    });
    //获取施工单位
    getApi.getAllConstructDeptName().then(response => {
      this.updateFormTwo.options.constructDeptIdOptions = response;
    });
    //获取所有实际状态
    getApi.getAllProjectActualStateEnum().then(response => {
      this.updateFormFive.options.actualStateOptions = response;
    });
    //获取所有人员的级联选择器
    getApi.getUserCascader().then(response => {
      response.options.forEach(ele=>{
          if(ele.id==-1){
            ele.children[0].id = 100000;
          }
        })
      this.updateFormThree.options.projectManagerIdOptions = response.options;
      this.updateFormThree.options.safetyStaffIdOptions = response.options;
      this.updateFormThree.options.qualityStaffIdOptions = response.options;
      this.updateFormThree.options.chiefInspectorIdOptions = response.options;
      this.updateFormThree.options.safetySupervisorIdOptions = response.options;
      this.updateFormThree.options.professionalSupervisorIdOptions = response.options;
    });
    //获取分部分项工程
    this.updateFormFour.options.jobNumberOptions = getApi.getJobNumber();
    //获取分部分项工程
    this.updateFormFour.options.workProcessOptions = getApi.getWorkProcess();
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
    //升级后，变化
    updateFlagChange(index, row) {
      if (row.workProcessShow === "" || row.workProcessShow === undefined) return;
      this.workProcessChangedA(index, row);
    },

    //项目名称改变或选择时，自动填写后续内容
    projectChanged() {
      if (this.updateFormTwo.projectIdName === "") {
        this.firstData = {};
        this.updateFormTwo.id = "";
        this.updateFormTwo.name = "";
      }
      else {
        this.updateFormTwo.id = this.updateFormTwo.projectIdName[0];
        this.updateFormTwo.name = this.updateFormTwo.projectIdName[1];
      }
      if (this.updateFormTwo.id === "") {
        this.updateFormTwo.adminId = "";
        this.updateFormTwo.supervisionId = "";
        this.updateFormTwo.constructDeptId = "";
        this.updateFormTwo.districtId = "";
        this.updateFormTwo.detailedAddress = "";
        this.updateFormTwo.latitude = "";
        this.updateFormTwo.longitude = "";
        this.updateFormTwo.projectScale = "";
        this.updateFormTwo.currentWorkerNum = "";
        this.updateFormTwo.currentSubcontractorNum = "";
        this.updateFormTwo.adminDept = "";
        this.updateFormTwo.actualStartTime = "";
        this.updateFormTwo.planCompletionTime = "";

        this.updateFormThree.projectManagerId = "";
        this.updateFormThree.safetyStaffId = "";
        this.updateFormThree.qualityStaffId = "";
        this.updateFormThree.chiefInspectorId = "";
        this.updateFormThree.safetySupervisorId = "";
        this.updateFormThree.professionalSupervisorId = "";

        return;
      } else {
        getApi
          .getProjectInfoDetailPageShowRespById(this.updateFormTwo.id)
          .then(response => {
            let data = response[0];
            this.firstData = data;
            this.updateFormTwo.adminId = data.adminId;
            this.updateFormTwo.supervisionId = data.supervisionId;
            this.updateFormTwo.constructDeptId = data.constructDeptId;
            this.updateFormTwo.districtId = data.districtId;
            this.updateFormTwo.detailedAddress = data.detailedAddress;
            this.updateFormTwo.latitude = data.latitude;
            this.updateFormTwo.longitude = data.longitude;
            this.updateFormTwo.projectScale = data.projectScale;
            this.updateFormTwo.currentWorkerNum = data.currentWorkerNum;
            this.updateFormTwo.currentSubcontractorNum =
              data.currentSubcontractorNum;
            this.updateFormTwo.adminDept = data.adminDept;
            this.updateFormTwo.actualStartTime = new Date(data.actualStartTime);
            this.updateFormTwo.planCompletionTime = new Date(
              data.planCompletionTime
            );

            this.updateFormThree.projectManagerId = data.projectManagerId;
            this.updateFormThree.safetyStaffId = data.safetyStaffId;
            this.updateFormThree.qualityStaffId = data.qualityStaffId;
            this.updateFormThree.chiefInspectorId = data.chiefInspectorId;
            this.updateFormThree.safetySupervisorId = data.safetySupervisorId;
            this.updateFormThree.professionalSupervisorId =
              data.professionalSupervisorId;

            if(this.updateFormThree.projectManagerId[1] == -1) this.updateFormThree.projectManagerId[1]=100000;
            if(this.updateFormThree.qualityStaffId[1] == -1) this.updateFormThree.qualityStaffId[1]=100000;
            if(this.updateFormThree.safetyStaffId[1] == -1) this.updateFormThree.safetyStaffId[1]=100000;
            if(this.updateFormThree.chiefInspectorId[1] == -1) this.updateFormThree.chiefInspectorId[1]=100000;
            if(this.updateFormThree.safetySupervisorId[1] == -1) this.updateFormThree.safetySupervisorId[1]=100000;
            if(this.updateFormThree.professionalSupervisorId[1] == -1) this.updateFormThree.professionalSupervisorId[1]=100000;
          });
      }
    },
    //周报开始日期改变，自动获取月份，周数，周次
    weeklyStartTimeChanged() {
      if (this.updateFormOne.weeklyStartTime == null) {
        this.updateFormOne.weeklyStartTime = "";
        this.updateFormOne.weeklyEndTime = "";
        this.updateFormOne.monthShowTime = "";
        this.updateFormOne.monthStartTime = "";
        return;
      }
      this.updateFormOne.weeklyEndTime = api.getThisWeekStart(
        this.updateFormOne.weeklyStartTime
      );
      this.updateFormOne.monthShowTime = api
        .changeDate(this.updateFormOne.weeklyStartTime)
        .substring(0, 7);
      this.updateFormOne.monthStartTime =
        api.changeDate(this.updateFormOne.weeklyStartTime).substring(0, 7) + "-01";
    },
    //表格选中
    selectWeeklyWorkProgressAddReqs(val) {
      this.updateFormFour.multiSelectionA = val;
    },
    selectWeeklyConstructContentAddReqs(val) {
      this.updateFormFour.multiSelectionB = val;
    },
    selectWeeklyRiskContentAddReqs(val) {
      this.updateFormFour.multiSelectionC = val;
    },

    //增加一行施工进度
    addOneLineWeeklyWorkProgressAddReqs() {
      this.updateFormFour.weeklyWorkProgressAddReqs.push({
        jobNumber: "",
        currentProgress: "",
        listUpdateOperation: "添加",
        weeklyId: this.id
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
          this.updateFormFour.multiSelectionA.forEach(element => {
            let i = 0;
            this.updateFormFour.weeklyWorkProgressAddReqs.forEach(ele => {
              if (ele === element) {
                if (ele.id) {
                  this.deleteweeklyWorkProgressAddReqs.push({
                    listUpdateOperation: "删除",
                    id: ele.id
                  });
                }
                this.updateFormFour.weeklyWorkProgressAddReqs.splice(i, 1);
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
      this.updateFormFour.weeklyConstructContentAddReqs.push({
        constructContent: "",
        jobNumber: "",
        listUpdateOperation: "添加",
        weeklyId: this.id
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
          this.updateFormFour.multiSelectionB.forEach(element => {
            let i = 0;
            this.updateFormFour.weeklyConstructContentAddReqs.forEach(ele => {
              if (ele === element) {
                if (ele.id) {
                  this.deleteweeklyConstructContentAddReqs.push({
                    listUpdateOperation: "删除",
                    id: ele.id
                  });
                }
                this.updateFormFour.weeklyConstructContentAddReqs.splice(i, 1);
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
      this.updateFormFour.weeklyRiskContentAddReqs.push({
        riskLevel: "0",
        workContent: "",
        workEndTime: "",
        workProcess: "",
        workStartTime: "",
        listUpdateOperation: "添加",
        weeklyId: this.id,
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
          this.updateFormFour.multiSelectionC.forEach(element => {
            let i = 0;
            this.updateFormFour.weeklyRiskContentAddReqs.forEach(ele => {
              if (ele === element) {
                if (ele.id) {
                  ele.listUpdateOperation = "删除";
                  this.deleteweeklyRiskContentAddReqs.push({
                    listUpdateOperation: "删除",
                    id: ele.id
                  });
                }
                this.updateFormFour.weeklyRiskContentAddReqs.splice(i, 1);

                i--;
              }
              i++;
            });
          });
          let num = 0;
          this.updateFormFour.weeklyRiskContentAddReqs.forEach(ele => {
            if (ele.riskLevel >= 3  || (ele.riskLevel === 2 && ele.riskAdd === true))
              num = 1;
          })
          if (num === 1) {
            this.updateFormFour.hasThreePlusRiskWork = true;
          } else if (num === 0) this.updateFormFour.hasThreePlusRiskWork = false;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    workProcessChangedA(index, row) {
      row.workProcess = row.workProcessShow[row.workProcessShow.length - 1];
      row.workProcessTotalList = row.workProcessShow.toString();
      // this.findFlag = false;
      // this.Traversal(
      //   this.updateFormFour.options.workProcessOptions,
      //   row.workProcess,
      //   row
      // );
      // let num = 0;
      // this.updateFormFour.weeklyRiskContentAddReqs.forEach(ele => {
      //   if (ele.riskLevel >= 3)
      //     num = 1;
      // })
      // if (num === 1) {
      //   this.updateFormFour.hasThreePlusRiskWork = true;
      // } else if (num === 0) this.updateFormFour.hasThreePlusRiskWork = false;
    },
    //当某一行的分部分项工程值发生改变时，风险等级相应变化
    workProcessChanged(index, row) {
      row.workProcess = row.workProcessShow[row.workProcessShow.length - 1];
      row.workProcessTotalList = row.workProcessShow.toString();
      // this.findFlag = false;
      // row.riskAdd = false;
      // this.Traversal(
      //   this.updateFormFour.options.workProcessOptions,
      //   row.workProcess,
      //   row
      // );
      // let num = 0;
      // this.updateFormFour.weeklyRiskContentAddReqs.forEach(ele => {
      //   if (ele.riskLevel >= 3)
      //     num = 1;
      // })
      // if (num === 1) {
      //   this.updateFormFour.hasThreePlusRiskWork = true;
      // } else if (num === 0) this.updateFormFour.hasThreePlusRiskWork = false;
    },
    //将分部分项工程设置为最后一列
    jobNumberChanged(index, row) {
      row.jobNumber = row.jobNumberShow[row.jobNumberShow.length - 1];
      row.jobNumberTotalList = row.jobNumberShow.toString();
      console.log(row);
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
    //信息保存
    saveAllInfo() {

    },
    //修改日期格式 
    dateChangeToSecondA(row) {
      row.workStartTime = api.changeDateToSecond(row.workStartTime);
    },
    dateChangeToSecondB(row) {
      row.workEndTime = api.changeDateToSecond(row.workEndTime);
    },
    //判断是否表格内容全部填写
    isValidTable() {
      console.log(this.updateFormFour.weeklyRiskContentAddReqs)
      console.log(this.updateFormFour.weeklyWorkProgressAddReqs)
      let flag = false;
      this.updateFormFour.weeklyRiskContentAddReqs.forEach(ele => {
        if (ele.riskLevel === "" || ele.workContent === "" || ele.workEndTime === "" || ele.workProcess === "" || ele.workStartTime === "" ||
          ele.riskLevel === null || ele.workContent === null || ele.workEndTime === null || ele.workProcess === null || ele.workStartTime === null) flag = true;
      })
      this.updateFormFour.weeklyWorkProgressAddReqs.forEach(ele => {
        if (ele.currentProgress === "" || ele.jobNumber === "") flag = true;
      })
      return flag;
    },
    //信息上报
    submitProjectWeeklyInfo() {
      let validNum = 0;
      this.$refs["updateFormOne"].validate(valid => {
        if (valid) {
          validNum++;
        }
      });
      this.$refs["updateFormTwo"].validate(valid => {
        if (valid) {
          validNum++;
        }
      });
      this.$refs["updateFormThree"].validate(valid => {
        if (valid) {
          validNum++;
        }
      });
      this.$refs["updateFormFive"].validate(valid => {
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
        // let weeklyConstructContentAddReqs = [];
        let weeklyRiskContentAddReqs = [];
        let weeklyWorkProgressAddReqs = [];
        //首先验证项目信息是否修改
        // this.projectInfoUpdate();
        //if (this.projectUpdateFlag) {
        console.log("name:", this.updateFormTwo.name, this.firstData.name)

        let num = 0;
        this.updateFormFour.weeklyRiskContentAddReqs.forEach(ele => {
          if (ele.riskLevel >= 3 || (ele.riskLevel === 2 && ele.riskAdd === true))
            num = 1;
        })
        if (num === 1) {
          this.updateFormFour.hasThreePlusRiskWork = true;
        } else if (num === 0) this.updateFormFour.hasThreePlusRiskWork = false;

        projectUpdateReq = {
          id: this.updateFormTwo.id,
          constructDeptId: this.updateFormTwo.constructDeptId != this.firstData.constructDeptId ? this.updateFormTwo.constructDeptId : undefined,
          detailedAddress: this.updateFormTwo.detailedAddress != this.firstData.detailedAddress ? this.updateFormTwo.detailedAddress : undefined,
          latitude: this.updateFormTwo.latitude != this.firstData.latitude ? this.updateFormTwo.latitude : undefined,
          longitude: this.updateFormTwo.longitude != this.firstData.longitude ? this.updateFormTwo.longitude : undefined,
          projectScale: this.updateFormTwo.projectScale != this.firstData.projectScale ? this.updateFormTwo.projectScale : undefined,
          currentWorkerNum: this.updateFormTwo.currentWorkerNum != this.firstData.currentWorkerNum ? this.updateFormTwo.currentWorkerNum : undefined,
          currentSubcontractorNum: this.updateFormTwo.currentSubcontractorNum != this.firstData.currentSubcontractorNum ? this.updateFormTwo.currentSubcontractorNum : undefined,
          adminDept: this.updateFormTwo.adminDept != this.firstData.adminDept ? this.updateFormTwo.adminDept : undefined,
          actualStartTime: api.changeDate(this.updateFormTwo.actualStartTime) != this.firstData.actualStartTime ? api.changeDate(this.updateFormTwo.actualStartTime) : undefined,
          planCompletionTime: api.changeDate(this.updateFormTwo.planCompletionTime) != this.firstData.planCompletionTime ? api.changeDate(this.updateFormTwo.planCompletionTime) : undefined,
          projectManagerId: this.updateFormThree.projectManagerId[1] != this.firstData.projectManagerId ? this.updateFormThree.projectManagerId[1] : undefined,
          qualityStaffId: this.updateFormThree.qualityStaffId[1] != this.firstData.qualityStaffId ? this.updateFormThree.qualityStaffId[1] : undefined,
          safetyStaffId: this.updateFormThree.safetyStaffId[1] != this.firstData.safetyStaffId ? this.updateFormThree.safetyStaffId[1] : undefined,
          professionalSupervisorId: this.updateFormThree.professionalSupervisorId[1] != this.firstData.professionalSupervisorId ? this.updateFormThree.professionalSupervisorId[1] : undefined,
          chiefInspectorId: this.updateFormThree.chiefInspectorId[1] != this.firstData.chiefInspectorId ? this.updateFormThree.chiefInspectorId[1] : undefined,
          safetySupervisorId: this.updateFormThree.safetySupervisorId[1] != this.firstData.safetySupervisorId ? this.updateFormThree.safetySupervisorId[1] : undefined,

          voltageClass: this.updateFormTwo.voltageClass != this.firstData.voltageClass ? this.updateFormTwo.voltageClass : undefined,
          assignmentType: this.updateFormTwo.assignmentType != this.firstData.assignmentType ? this.updateFormTwo.assignmentType : undefined,
          constructionType: this.updateFormTwo.constructionType != this.firstData.constructionType ? this.updateFormTwo.constructionType : undefined,
          mainWorkerNum: this.updateFormTwo.mainWorkerNum != this.firstData.mainWorkerNum ? this.updateFormTwo.mainWorkerNum : undefined,
          outsourcingWorkerNum: this.updateFormTwo.outsourcingWorkerNum != this.firstData.outsourcingWorkerNum ? this.updateFormTwo.outsourcingWorkerNum : undefined,

          constructionPrincipalNumber: this.updateFormThree.constructionPrincipalNumber != this.firstData.constructionPrincipalNumber ? this.updateFormThree.constructionPrincipalNumber : undefined,
          constructionPrincipal: this.updateFormThree.constructionPrincipal != this.firstData.constructionPrincipal ? this.updateFormThree.constructionPrincipal : undefined,



          projectManagerDeptId: this.updateFormThree.projectManagerId[0] != this.firstData.projectManagerDeptId ? this.updateFormThree.projectManagerId[0] : undefined,
          qualityStaffDeptId: this.updateFormThree.qualityStaffId[0] != this.firstData.qualityStaffDeptId ? this.updateFormThree.qualityStaffId[0] : undefined,
          safetyStaffDeptId: this.updateFormThree.safetyStaffId[0] != this.firstData.safetyStaffDeptId ? this.updateFormThree.safetyStaffId[0] : undefined,
          professionalSupervisorDeptId: this.updateFormThree.professionalSupervisorId[0] != this.firstData.professionalSupervisorDeptId ? this.updateFormThree.professionalSupervisorId[0] : undefined,
          chiefInspectorDeptId: this.updateFormThree.chiefInspectorId[0] != this.firstData.chiefInspectorDeptId ? this.updateFormThree.chiefInspectorId[0] : undefined,
          safetySupervisorDeptId: this.updateFormThree.safetySupervisorId[0] != this.firstData.safetySupervisorDeptId ? this.updateFormThree.safetySupervisorId[0] : undefined,
        };
        console.log(projectUpdateReq)

        if(this.firstData.projectManagerId == -1 && this.updateFormThree.projectManagerId[1]==100000) projectUpdateReq.projectManagerId = undefined;
        if(this.firstData.safetyStaffId == -1 && this.updateFormThree.safetyStaffId[1]==100000) projectUpdateReq.safetyStaffId = undefined;
        if(this.firstData.qualityStaffId == -1 && this.updateFormThree.qualityStaffId[1]==100000) projectUpdateReq.qualityStaffId = undefined;
        if(this.firstData.chiefInspectorId == -1 && this.updateFormThree.chiefInspectorId[1]==100000) projectUpdateReq.chiefInspectorId=undefined;
        if(this.firstData.safetySupervisorId == -1 && this.updateFormThree.safetySupervisorId[1]==100000) projectUpdateReq.safetySupervisorId=undefined;
        if(this.firstData.professionalSupervisorId == -1 && this.updateFormThree.professionalSupervisorId[1]==100000) projectUpdateReq.professionalSupervisorId=undefined;
        // }


        //加入周报信息
        projectWeeklyAddReq = {
          id: this.id,
          actualState: this.updateFormFive.actualState != this.firstData.actualState ? this.updateFormFive.actualState : undefined,
          controlledState: this.updateFormFive.controlledState != this.firstData.controlledState ? this.updateFormFive.controlledState : undefined,
          hasESecurityOnline: this.updateFormFive.hasESecurityOnline != this.firstData.hasESecurityOnline ? this.updateFormFive.hasESecurityOnline : undefined,
          adminDept: this.updateFormTwo.adminDept != this.firstData.adminDept ? this.updateFormTwo.adminDept : undefined,
          adminId: this.updateFormTwo.adminId != this.firstData.adminId ? this.updateFormTwo.adminId : undefined,
          constructDeptId: this.updateFormTwo.constructDeptId != this.firstData.constructDeptId ? this.updateFormTwo.constructDeptId : undefined,
          detailedAddress: this.updateFormTwo.detailedAddress != this.firstData.detailedAddress ? this.updateFormTwo.detailedAddress : undefined,
          districtId: this.updateFormTwo.districtId != this.firstData.districtId ? this.updateFormTwo.districtId : undefined,
          hasThreePlusRiskWork: this.updateFormFour.hasThreePlusRiskWork != this.firstData.hasThreePlusRiskWork ? this.updateFormFour.hasThreePlusRiskWork : undefined,
          hasWorkNextWeek: this.updateFormFour.hasWorkNextWeek != this.firstData.hasWorkNextWeek ? this.updateFormFour.hasWorkNextWeek : undefined,
          latitude: this.updateFormTwo.latitude != this.firstData.latitude ? this.updateFormTwo.latitude : undefined,
          longitude: this.updateFormTwo.longitude != this.firstData.longitude ? this.updateFormTwo.longitude : undefined,

          voltageClass: this.updateFormTwo.voltageClass != this.firstData.voltageClass ? this.updateFormTwo.voltageClass : undefined,
          assignmentType: this.updateFormTwo.assignmentType != this.firstData.assignmentType ? this.updateFormTwo.assignmentType : undefined,
          constructionType: this.updateFormTwo.constructionType != this.firstData.constructionType ? this.updateFormTwo.constructionType : undefined,
          mainWorkerNum: this.updateFormTwo.mainWorkerNum != this.firstData.mainWorkerNum ? this.updateFormTwo.mainWorkerNum : undefined,
          outsourcingWorkerNum: this.updateFormTwo.outsourcingWorkerNum != this.firstData.outsourcingWorkerNum ? this.updateFormTwo.outsourcingWorkerNum : undefined,

          
          monthStartTime: this.updateFormOne.monthStartTime != this.firstData.monthStartTime ? this.updateFormOne.monthStartTime : undefined,
          projectId: this.updateFormTwo.id != this.firstData.projectId ? this.updateFormTwo.id : undefined,
          supervisionId: this.updateFormTwo.supervisionId != this.firstData.supervisionId ? this.updateFormTwo.supervisionId : undefined,
          currentSubcontractorNum: this.updateFormTwo.currentSubcontractorNum != this.firstData.currentSubcontractorNum ? this.updateFormTwo.currentSubcontractorNum : undefined,
          currentWorkerNum: this.updateFormTwo.currentWorkerNum != this.firstData.currentWorkerNum ? this.updateFormTwo.currentWorkerNum : undefined,
          projectScale: this.updateFormTwo.projectScale != this.firstData.projectScale ? this.updateFormTwo.projectScale : undefined,
          weeklyStartTime: api.changeDate(this.updateFormOne.weeklyStartTime) != this.firstData.weeklyStartTime ? api.changeDate(this.updateFormOne.weeklyStartTime) : undefined,
          actualStartTime: api.changeDate(this.updateFormTwo.actualStartTime) != this.firstData.actualStartTime ? api.changeDate(this.updateFormTwo.actualStartTime) : undefined,
          planCompletionTime: api.changeDate(this.updateFormTwo.planCompletionTime) != this.firstData.planCompletionTime ? api.changeDate(this.updateFormTwo.planCompletionTime) : undefined,

          projectManagerId: this.updateFormThree.projectManagerId[1] != this.firstData.projectManagerId ? this.updateFormThree.projectManagerId[1] : undefined,
          qualityStaffId: this.updateFormThree.qualityStaffId[1] != this.firstData.qualityStaffId ? this.updateFormThree.qualityStaffId[1] : undefined,
          safetyStaffId: this.updateFormThree.safetyStaffId[1] != this.firstData.safetyStaffId ? this.updateFormThree.safetyStaffId[1] : undefined,
          professionalSupervisorId: this.updateFormThree.professionalSupervisorId[1] != this.firstData.professionalSupervisorId ? this.updateFormThree.professionalSupervisorId[1] : undefined,
          chiefInspectorId: this.updateFormThree.chiefInspectorId[1] != this.firstData.chiefInspectorId ? this.updateFormThree.chiefInspectorId[1] : undefined,
          safetySupervisorId: this.updateFormThree.safetySupervisorId[1] != this.firstData.safetySupervisorId ? this.updateFormThree.safetySupervisorId[1] : undefined,

          projectManagerDeptId: this.updateFormThree.projectManagerId[0] != this.firstData.projectManagerDeptId ? this.updateFormThree.projectManagerId[0] : undefined,
          qualityStaffDeptId: this.updateFormThree.qualityStaffId[0] != this.firstData.qualityStaffDeptId ? this.updateFormThree.qualityStaffId[0] : undefined,
          safetyStaffDeptId: this.updateFormThree.safetyStaffId[0] != this.firstData.safetyStaffDeptId ? this.updateFormThree.safetyStaffId[0] : undefined,
          professionalSupervisorDeptId: this.updateFormThree.professionalSupervisorId[0] != this.firstData.professionalSupervisorDeptId ? this.updateFormThree.professionalSupervisorId[0] : undefined,
          chiefInspectorDeptId: this.updateFormThree.chiefInspectorId[0] != this.firstData.chiefInspectorDeptId ? this.updateFormThree.chiefInspectorId[0] : undefined,
          safetySupervisorDeptId: this.updateFormThree.safetySupervisorId[0] != this.firstData.safetySupervisorDeptId ? this.updateFormThree.safetySupervisorId[0] : undefined,
        };

        if(this.updateFormThree.projectManagerId[1]==100000) projectWeeklyAddReq.projectManagerId = -1;
        if(this.updateFormThree.safetyStaffId[1]==100000) projectWeeklyAddReq.safetyStaffId = -1;
        if(this.updateFormThree.qualityStaffId[1]==100000) projectWeeklyAddReq.qualityStaffId = -1;
        if(this.updateFormThree.chiefInspectorId[1] == 100000) projectWeeklyAddReq.chiefInspectorId = -1;
        if(this.updateFormThree.safetySupervisorId[1] == 100000) projectWeeklyAddReq.safetySupervisorId = -1;
        if(this.updateFormThree.professionalSupervisorId[1] == 100000) projectWeeklyAddReq.professionalSupervisorId = -1;

        
        if(this.firstData.projectManagerId == -1 && this.updateFormThree.projectManagerId[1]==100000) projectWeeklyAddReq.projectManagerId = undefined;
        if(this.firstData.safetyStaffId == -1 && this.updateFormThree.safetyStaffId[1]==100000) projectWeeklyAddReq.safetyStaffId = undefined;
        if(this.firstData.qualityStaffId == -1 && this.updateFormThree.qualityStaffId[1]==100000) projectWeeklyAddReq.qualityStaffId = undefined;
        if(this.firstData.chiefInspectorId == -1 && this.updateFormThree.chiefInspectorId[1]==100000) projectWeeklyAddReq.chiefInspectorId=undefined;
        if(this.firstData.safetySupervisorId == -1 && this.updateFormThree.safetySupervisorId[1]==100000) projectWeeklyAddReq.safetySupervisorId=undefined;
        if(this.firstData.professionalSupervisorId == -1 && this.updateFormThree.professionalSupervisorId[1]==100000) projectWeeklyAddReq.professionalSupervisorId=undefined;
        //主要施工内容信息
        // this.updateFormFour.weeklyConstructContentAddReqs.forEach(element => {
        //   if (element.id) {
        //     this.weeklyConstructContent.forEach(ele => {
        //       if (ele.id === element.id) {
        //         if (ele.constructContent != element.constructContent || ele.jobNumberTotalList != element.jobNumberTotalList) {
        //           element.listUpdateOperation = "更新";
        //           weeklyConstructContentAddReqs.push(element);
        //         }
        //       }
        //     })
        //   } else {
        //     weeklyConstructContentAddReqs.push(element);
        //   }
        // })
        // this.deleteweeklyConstructContentAddReqs.forEach(element => {
        //   weeklyConstructContentAddReqs.push(element);
        // })

        //风险作业内容信息
        this.updateFormFour.weeklyRiskContentAddReqs.forEach(element => {
          if (element.id) {
            this.weeklyRiskContent.forEach(ele => {
              console.log("element:", element);
              console.log("ele:", ele);
              if (ele.id === element.id) {
                if (ele.riskAdd != element.riskAdd|| ele.riskLevel != element.riskLevel || ele.workEndTime != element.workEndTime || ele.workStartTime != element.workStartTime || ele.workContent != element.workContent || ele.workProcessTotalList != element.workProcessTotalList
                || ele.isElectrification != element.isElectrification|| ele.laborSubcontractor != element.laborSubcontractor|| ele.professionalSubcontractor != element.professionalSubcontractor
                || ele.personnelName != element.personnelName|| ele.personnelPosition != element.personnelPosition|| ele.personnelPhone != element.personnelPhone|| ele.personnelTime != element.personnelTime) {
                  element.listUpdateOperation = "更新";
                  weeklyRiskContentAddReqs.push(element);
                }
              }
            })
          } else {
            weeklyRiskContentAddReqs.push(element);
          }
        })
        this.deleteweeklyRiskContentAddReqs.forEach(element => {
          weeklyRiskContentAddReqs.push(element);
        })

        //施工进度信息
        this.updateFormFour.weeklyWorkProgressAddReqs.forEach(element => {
          if (element.id) {
            this.weeklyWorkProgress.forEach(ele => {
              if (ele.id === element.id) {
                if (ele.currentProgress != element.currentProgress || ele.jobNumberTotalList != element.jobNumberTotalList) {
                  element.listUpdateOperation = "更新";
                  weeklyWorkProgressAddReqs.push(element);
                }
              }
            })
          } else {
            weeklyWorkProgressAddReqs.push(element);
          }
        })
        this.deleteweeklyWorkProgressAddReqs.forEach(element => {
          weeklyWorkProgressAddReqs.push(element);
        })

        

        //信息整合
        let list = {
          projectUpdateReq: projectUpdateReq,
          projectWeeklyUpdateReq: projectWeeklyAddReq,
          // weeklyConstructContentUpdateReqs: weeklyConstructContentAddReqs,
          weeklyRiskContentUpdateReqs: weeklyRiskContentAddReqs,
          weeklyWorkProgressUpdateReqs: weeklyWorkProgressAddReqs
        };
        updateApi.updateProjectWeeklyInfo(list).then(response => {
          this.goback();
        });
      }
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
