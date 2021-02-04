<template>
  <div class="body">
    <el-card class="box-card">
      <el-form
        :model="searchTable"
        label-position="left"
        ref="searchTable"
        :rules="searchTableRule"
        label-width="140px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item
                label="周报日期"
                prop="weeklyStartTime"
                placeholder="周报开始日期"
              >
                <el-date-picker
                  v-model="searchTable.weeklyStartTime"
                  :clearable="false"
                  type="date"
                  placeholder="选择日期时间"
                  style="min-width: 200px; margin-left: 0px"
                  @change="weeklyStartTimeChanged"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6" style="margin-left: -12px">
            <div class="bar">
              <el-form-item
                label="~"
                prop="weeklyEndTime"
                placeholder="周报开始日期"
                label-width="5px"
              >
                <el-date-picker
                  disabled
                  v-model="searchTable.weeklyEndTime"
                  type="date"
                  placeholder="选择日期时间"
                  style="min-width: 200px; margin-left: 2px"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8" style="margin-left: -32px">
            <div class="bar">
              <el-form-item
                label="所属建管单位"
                prop="adminId"
                placeholder="项目名称"
              >
                <el-select
                  v-model="searchTable.adminId"
                  clearable
                  placeholder="请选择"
                  style="min-width: 200px"
                >
                  <el-option
                    v-for="item in searchTable.options.adminIdOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item
                label="所属部门"
                prop="adminDept"
                placeholder="项目名称"
              >
                <el-select
                  v-model="searchTable.adminDept"
                  clearable
                  placeholder="请选择"
                  style="min-width: 200px"
                >
                  <el-option
                    v-for="item in searchTable.options.adminDeptOptions"
                    :key="item.name"
                    :label="item.name"
                    :value="item.name"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="bar">
              <el-form-item
                label="项目名称"
                prop="projectId"
                placeholder="项目名称"
              >
                <el-select
                  v-model="searchTable.projectId"
                  clearable
                  placeholder="请选择"
                  style="min-width: 422px; margin-left: 0px"
                >
                  <el-option
                    v-for="item in searchTable.options.projectIdOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item
                label="是否有作业"
                prop="hasWorkNextWeek"
                placeholder="项目名称"
              >
                <el-select
                  v-model="searchTable.hasWorkNextWeek"
                  clearable
                  placeholder="请选择"
                  style="min-width: 200px"
                >
                  <el-option
                    v-for="item in searchTable.options.hasWorkNextWeekOptions"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item
                label="存在三级及以上风险"
                prop="hasThreePlusRiskWork"
                placeholder="项目名称"
              >
                <el-select
                  v-model="searchTable.hasThreePlusRiskWork"
                  clearable
                  placeholder="请选择"
                  style="min-width: 200px"
                >
                  <el-option
                    v-for="item in searchTable.options
                      .hasThreePlusRiskWorkOptions"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-bottom: 10px">
          <el-col :span="8">
            <div class="bar">
              <el-button
                type="primary"
                style="margin-right: 20px"
                @click="searchWeekly(1)"
                >搜索</el-button
              >
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
              <p
                id="tableTitle"
                style="min-width: 1000px; font-size: 18px; margin-left: 380px"
              >
                {{ tableTitle }}
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-top: 30px; margin-bottom: 5px">
        <el-col :span="2">
          <div class="bar">
            <el-button
              type="primary"
              style="margin-right: 20px"
              @click="addWeeklyPage"
              >添加周报</el-button
            >
          </div>
        </el-col>
        <!-- <el-col :offset="1" :span="2">
          <div class="bar">
            <el-button type="primary" style="margin-right: 20px">删除周报</el-button>
          </div>
        </el-col> -->
        <el-col :offset="1" :span="2">
          <div class="bar">
            <el-button
              type="primary"
              style="margin-right: 20px"
              @click="exportWeekly"
              >导出计管中心周报</el-button
            >
          </div>
        </el-col>
        <el-col :offset="1" :span="2">
          <div class="bar">
            <el-button
              type="primary"
              style="margin-right: 20px"
              @click="exportWeeklyTwo"
              >导出安保部周报</el-button
            >
          </div>
        </el-col>

        <el-col :offset="1" :span="2">
          <div class="bar">
            <el-button
              type="primary"
              style="margin-right: 20px"
              @click="toExportWeeklyStatisticAsExcel"
              >导出作业统计表</el-button
            >
          </div>
        </el-col>

        <el-col :offset="1" :span="2">
          <div class="bar">
            <el-button
              type="primary"
              style="margin-right: 20px"
              @click="showNotSubmit"
              >本周未上报项目</el-button
            >
          </div>
        </el-col>
      </el-row>

      <el-table
        :data="weeklyInfo.tableData"
        max-height="400"
        border
        @selection-change="weeklySelect"
        :stripe="true"
        :highlight-current-row="true"
        style="width: 100%; margin-top: 20px"
        id="out-table"
      >
        <el-table-column
          type="selection"
          width="50"
          align="center"
        ></el-table-column>
        <el-table-column
          width="50"
          type="index"
          label="序号"
          align="center"
        ></el-table-column>
        <el-table-column
          width="350"
          prop="projectName"
          label="项目名称"
          align="center"
        ></el-table-column>
        <el-table-column
          width="210"
          prop="adminName"
          label="所属建管单位"
          align="center"
        ></el-table-column>
        <el-table-column
          width="450"
          prop="workCurrentProgress"
          label="当前总体施工进度"
          align="left"
        ></el-table-column>
        <el-table-column
          width="450"
          prop="constructContentNextWeek"
          label="下周主要施工作业内容"
          align="left"
        ></el-table-column>
        <el-table-column
          width="450"
          prop="threePlusRiskWorkContent"
          label="下周的三级及以上风险作业安排、位置及内容"
          align="left"
        ></el-table-column>
        <el-table-column
          width="120"
          prop="adminDept"
          label="所属部门"
          align="center"
        ></el-table-column>
        <el-table-column
          width="80"
          prop="actualState"
          label="实际状态"
          align="center"
        ></el-table-column>
        <el-table-column
          width="110"
          prop="controlledState"
          label="管控内状态"
          align="center"
        ></el-table-column>
        <el-table-column
          width="80"
          prop="inherentRisk"
          label="固有风险"
          align="center"
        ></el-table-column>
        <el-table-column
          width="80"
          prop="dynamicRisk"
          label="动态风险"
          align="center"
        ></el-table-column>
        <el-table-column width="300" label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="detailWeekly(scope.row)"
              >查看详情</el-button
            >
            <el-button type="text" @click="updateWeekly(scope.row)"
              >修改信息</el-button
            >
            <el-button type="text" @click="deleteWeekly(scope.row)"
              >删除信息</el-button
            >
            <el-button type="text" @click="historicalInfo(scope.row)"
              >历史数据</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="pagination.currentPage"
          :page-sizes="pagination.pageSizes"
          :page-size="pagination.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pagination.total"
        ></el-pagination>
      </div>

      <el-dialog
        title="导出作业统计表"
        :visible.sync="exportPanel.exportFlag"
        width="1400px"
        :modal="false"
      >
       <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px">
       <el-col :span="8">
       </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">作业统计日期</div>
               <el-date-picker
                  v-model="exportPanel.weeklyStartTime"
                  type="date"
                  placeholder="选择日期时间"
                  style="min-width: 200px; margin-left: 0px"
                  @change="exportWeeklyStartTimeChanged"
                ></el-date-picker>
            </div>
          </el-col>

          <el-col :span="8">
       </el-col>

        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px">
          <div style="margin:auto"><el-button type="primary" @click="exportWeeklyStatisticAsExcel()"
              >导出</el-button
            ></div>
        </el-row>

      </el-dialog>
      <el-dialog
        title="详细信息"
        :visible.sync="detailPanelFlag"
        width="1400px"
        :modal="false"
      >
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div id="title">
                <p
                  id="tableTitle"
                  style="
                    min-width: 1000px;
                    font-size: 22px;
                    margin-left: 645px;
                    margin-bottom: 30px;
                  "
                >
                  项目信息
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px">
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目名称</div>
              <el-input
                v-model="weeklyDetail.projectName"
                disabled
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">所属建管单位</div>
              <el-input
                disabled
                v-model="weeklyDetail.adminName"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">监理单位</div>
              <el-input
                disabled
                v-model="weeklyDetail.supervisionName"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">施工单位</div>
              <el-input
                disabled
                v-model="weeklyDetail.constructDeptName"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px">
          <el-col :span="8">
            <div class="bar">
              <div class="title">所在区域</div>
              <el-input
                v-model="weeklyDetail.districtName"
                disabled
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">乡镇/街道</div>
              <el-input
                disabled
                v-model="weeklyDetail.street"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">详细地址</div>
              <el-input
                disabled
                v-model="weeklyDetail.detailedAddress"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px">
          <el-col :span="8">
            <div class="bar">
              <div class="title">定位经度</div>
              <el-input
                disabled
                v-model="weeklyDetail.longitude"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">定位纬度</div>
              <el-input
                disabled
                v-model="weeklyDetail.latitude"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">施工单位类别</div>
              <el-input
                disabled
                v-model="weeklyDetail.constructionType"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <div class="title">下周是否有作业</div>
              <el-input
                disabled
                v-model="weeklyDetail.hasWorkNextWeekStr"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px">
          <el-col :span="8">
            <div class="bar">
              <div class="title">实际开工时间</div>
              <el-input
                disabled
                v-model="weeklyDetail.actualStartTime"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">计划竣工时间</div>
              <el-input
                disabled
                v-model="weeklyDetail.planCompletionTime"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目规模</div>
              <el-input
                disabled
                v-model="weeklyDetail.projectScale"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8"></el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px">
          <el-col :span="8">
            <div class="bar">
              <div class="title">所属部门</div>
              <el-input
                v-model="weeklyDetail.adminDept"
                disabled
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">实际状态</div>
              <el-input
                disabled
                v-model="weeklyDetail.actualState"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">管控内状态</div>
              <el-input
                disabled
                v-model="weeklyDetail.controlledState"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">e安全上线</div>
              <el-input
                disabled
                v-model="weeklyDetail.hasESecurityOnline"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px">
          <el-col :span="8">
            <div class="bar">
              <div class="title">电压等级</div>
              <el-input
                disabled
                v-model="weeklyDetail.voltageClass"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <div class="title">项目性质</div>
              <el-input
                disabled
                v-model="weeklyDetail.projectProperty"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">工程类型</div>
              <el-input
                disabled
                v-model="weeklyDetail.engineeringType"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">作业类型</div>
              <el-input
                disabled
                v-model="weeklyDetail.assignmentType"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px">
          <el-col :span="8">
            <div class="bar">
              <div class="title">主业作业人数</div>
              <el-input
                disabled
                v-model="weeklyDetail.mainWorkerNum"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">外包作业人数</div>
              <el-input
                disabled
                v-model="weeklyDetail.outsourcingWorkerNum"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <div class="title">直属单位人数</div>
              <el-input
                disabled
                v-model="weeklyDetail.directWorkerNum"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">当前分包人数</div>
              <el-input
                disabled
                v-model="weeklyDetail.currentSubcontractorNum"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px">
          <el-col :span="8">
            <div class="bar">
              <div class="title">固有风险</div>
              <el-input
                disabled
                v-model="weeklyDetail.inherentRisk"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">动态风险</div>
              <el-input
                disabled
                v-model="weeklyDetail.dynamicRisk"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="bar">
              <div class="title">是否有三级及以上风险</div>
              <el-input
                disabled
                v-model="weeklyDetail.hasThreePlusRiskWorkStr"
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <br />
        <hr />
        <br />
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div id="title">
                <p
                  id="tableTitle"
                  style="
                    min-width: 1000px;
                    font-size: 22px;
                    margin-left: 645px;
                    margin-bottom: 30px;
                  "
                >
                  项目动态
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px">
          <el-col :span="23">
            <div class="bar">
              <div class="title" style="width: 229px">当前总体施工进度</div>
              <el-input
                disabled
                type="textarea"
                :rows="2"
                placeholder="暂无信息"
                v-model="weeklyDetail.workCurrentProgress"
                style="margin-left: 26px; width: 1400px"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="23">
            <div class="bar">
              <div class="title" style="width: 229px">下周主要施工作业内容</div>
              <el-input
                disabled
                type="textarea"
                :rows="2"
                placeholder="暂无信息"
                v-model="weeklyDetail.constructContentNextWeek"
                style="margin-left: 26px; width: 1400px"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <br />
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px">
          <el-col :span="23">
            <div class="bar">
              <div class="title" style="width: 229px">
                三级及以上风险作业安排、位置及内容
              </div>
              <el-input
                disabled
                type="textarea"
                :rows="2"
                placeholder="暂无信息"
                v-model="weeklyDetail.threePlusRiskWorkContent"
                style="margin-left: 26px; width: 1400px"
              ></el-input>
            </div>
          </el-col>
        </el-row>

        <br />
        <hr />
        <br />
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div id="title">
                <p
                  id="tableTitle"
                  style="
                    min-width: 1000px;
                    font-size: 22px;
                    margin-left: 625px;
                    margin-bottom: 30px;
                  "
                >
                  项目管理人员
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div class="title" style="margin-left: 53%; font-size: 18px">
                建设管理单位责任人信息
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 20px; margin-bottom: 5px">
          <el-col :span="8">
            <div class="bar">
              <div class="title">项目经理</div>
              <el-input
                disabled
                v-model="weeklyDetail.projectManagerName"
                
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">质量专责</div>
              <el-input
                
                v-model="weeklyDetail.qualityStaffName"
                disabled
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">安全专责</div>
              <el-input
                
                v-model="weeklyDetail.safetyStaffName"
                disabled
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px">
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input
                
                v-model="weeklyDetail.projectManagerTEL"
                disabled
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input
                
                v-model="weeklyDetail.qualityStaffTEL"
                disabled
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input
                
                v-model="weeklyDetail.safetyStaffTEL"
                disabled
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div class="title" style="margin-left: 55%; font-size: 18px">
                监理单位责任人信息
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 20px; margin-bottom: 5px">
          <el-col :span="8">
            <div class="bar">
              <div class="title">总监/总监代表</div>
              <el-input
                
                v-model="weeklyDetail.chiefInspectorName"
                disabled
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">专业监理</div>
              <el-input
                disabled
                v-model="weeklyDetail.professionalSupervisorName"
                
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">安全监理</div>
              <el-input
                disabled
                v-model="weeklyDetail.safetySupervisorName"
                
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px">
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input
                
                v-model="weeklyDetail.chiefInspectorTEL"
                disabled
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input
                
                v-model="weeklyDetail.professionalSupervisorTEL"
                disabled
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">联系方式</div>
              <el-input
                disabled
                v-model="weeklyDetail.safetySupervisorTEL"
                
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <br />
        <hr />
        <br />
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px">
          <el-col :span="8">
            <div class="bar">
              <div class="title">施工单位负责人</div>
              <el-input
                disabled
                v-model="weeklyDetail.constructionPrincipal"
                
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="bar">
              <div class="title">施工单位负责人联系方式</div>
              <el-input
                
                v-model="weeklyDetail.constructionPrincipalNumber"
                disabled
                style="min-width: 200px"
              ></el-input>
            </div>
          </el-col>
        </el-row>
      </el-dialog>

      <el-dialog
        title="历史数据"
        :visible.sync="historicalPanelFlag"
        width="1400px"
        :modal="false"
      >
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div id="title">
                <p
                  id="tableTitle"
                  style="
                    min-width: 1000px;
                    font-size: 22px;
                    margin-left: 25px;
                    margin-bottom: 30px;
                  "
                >
                  {{ historicalData.projectName }}历史周计划（周报）信息
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-table
          :data="historicalData.tableData"
          max-height="800"
          border
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column
            width="50"
            type="index"
            label="序号"
            align="center"
          ></el-table-column>
          <el-table-column
            width="210"
            prop="weeklyTime"
            label="周报日期"
            align="center"
          ></el-table-column>
          <el-table-column
            width="210"
            prop="adminName"
            label="所属建管单位"
            align="center"
          ></el-table-column>
          <el-table-column
            width="450"
            prop="workCurrentProgress"
            label="当前总体施工进度"
            align="left"
          ></el-table-column>
          <el-table-column
            width="450"
            prop="constructContentNextWeek"
            label="下周主要施工作业内容"
            align="left"
          ></el-table-column>
          <el-table-column
            width="450"
            prop="threePlusRiskWorkContent"
            label="下周的三级及以上风险作业安排、位置及内容"
            align="left"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="adminDept"
            label="所属部门"
            align="center"
          ></el-table-column>
          <el-table-column
            width="80"
            prop="actualState"
            label="实际状态"
            align="center"
          ></el-table-column>
          <el-table-column
            width="110"
            prop="controlledState"
            label="管控内状态"
            align="center"
          ></el-table-column>
          <el-table-column
            width="80"
            prop="inherentRisk"
            label="固有风险"
            align="center"
          ></el-table-column>
          <el-table-column
            width="80"
            prop="dynamicRisk"
            label="动态风险"
            align="center"
          ></el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChangeA"
            @current-change="handleCurrentChangeA"
            :current-page.sync="pagination2.currentPage"
            :page-sizes="pagination2.pageSizes"
            :page-size="pagination2.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pagination2.total"
          ></el-pagination>
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
export default {
  data() {
    return {
      //查看详情弹窗数据及控制
      detailPanelFlag: false,
      weeklyDetail: {},
      //表格数据控制
      tableTitle: "",
      weeklyInfo: {
        tableData: [],
        multiSelection: [],
      },
      //搜索条件数据
      searchTable: {
        weeklyStartTime: "",
        weeklyEndTime: "",
        projectId: "",
        options: {
          projectIdOptions: {},
          adminIdOptions: {},
          adminDeptOptions: {},
          hasWorkNextWeekOptions: [
            {
              value: true,
              name: "是",
            },
            {
              value: false,
              name: "否",
            },
          ],
          hasThreePlusRiskWorkOptions: [
            {
              value: true,
              name: "是",
            },
            {
              value: false,
              name: "否",
            },
          ],
        },
      },
      searchTableRule: {
        weeklyStartTime: [
          { required: true, message: "请选择周报开始时间", trigger: "change" },
        ],
      },
      //页码部分
      pagination: {
        currentPage: 1,
        pageSizes: [10, 25, 50, 100],
        pageSize: 10,
        total: 0,
      },
      //历史数据
      historicalPanelFlag: false,
      historicalBackup: [],
      historicalData: {
        projectName: "未知项目",
        tableData: [],
      },
      pagination2: {
        currentPage: 1,
        pageSizes: [10, 25, 50, 100],
        pageSize: 10,
        total: 0,
      },

      exportPanel: {
        weeklyStartTime: "",
        weeklyEndTime: "",
        exportFlag: false,
      },
    };
  },

  created: function () {
    //空搜索获取信息
    this.searchTable.weeklyStartTime = new Date();
    this.searchTable.weeklyEndTime = api.getThisWeekStart(
        this.searchTable.weeklyStartTime
      );
      
    this.searchTable.weeklyStartTime = api.addDate(this.searchTable.weeklyEndTime, -8);
    
    this.tableTitle =
      "公司" +
      new Date().getFullYear() +
      "年在建工程周报(" +
      api.changeDate(this.searchTable.weeklyStartTime) +
      "~" +
      api.changeDate(this.searchTable.weeklyEndTime) +
      ")";
    let list = {
      numberOfPage: this.pagination.pageSize,
      pageNumber: 0,
      weeklyStartTime: api.changeDate(this.searchTable.weeklyStartTime),
    };
    searchApi.getProjectWeeklyByCondition(list).then((response) => {
      this.weeklyInfo.tableData = response.returnList[0];
      //转换下周是否有三级以上风险
      this.weeklyInfo.tableData.forEach((element) => {
        if (element.hasThreePlusRiskWork)
          element.hasThreePlusRiskWorkStr = "是";
        else element.hasThreePlusRiskWorkStr = "否";
      });
      this.pagination.total = response.totalNumber;
    });
    //获取所属部门
    getApi.getAllProjectAdminDeptEnum().then((response) => {
      this.searchTable.options.adminDeptOptions = response;
    });
    //获取项目列表
    getApi.getAllProjectName().then((response) => {
      this.searchTable.options.projectIdOptions = response;
    });
    //获取建设管理单位
    getApi.getAllAdministrativeDeptName().then((response) => {
      this.searchTable.options.adminIdOptions = response;
    });
  },
  methods: {
    toExportWeeklyStatisticAsExcel() {
      this.exportPanel.weeklyStartTime = "";
      this.exportPanel.weeklyEndTime = "";
      this.exportPanel.exportFlag = true;
    },

    exportWeeklyStatisticAsExcel() {
      if(this.exportPanel.weeklyStartTime == "")
      {
        this.$message({
            type: "error",
            message: "请先选择周报开始日期再导出！",
          });
          return ;
      }
      let list = {
        weeklyStartTime:
          this.exportPanel.weeklyStartTime === "" ||
          this.exportPanel.weeklyStartTime === null
            ? undefined
            : api.changeDate(this.exportPanel.weeklyStartTime),
      };
      searchApi.exportWeeklyStatisticAsExcel(list).then((response) => {
        let content = response;
        let blob = new Blob([content]);
        let da = api.changeDate(new Date());
        let fileName = "weekly-Statistic-" + da + ".xlsx";
        console.log(response);
        if ("download" in document.createElement("a")) {
          // 非IE下载
          const elink = document.createElement("a");
          elink.download = fileName;
          elink.style.display = "none";
          elink.href = URL.createObjectURL(blob);
          document.body.appendChild(elink);
          elink.click();
          URL.revokeObjectURL(elink.href); // 释放URL 对象
          document.body.removeChild(elink);
        } else {
          // IE10+下载
          navigator.msSaveBlob(blob, fileName);
        }
      });
      this.exportPanel.exportFlag = false;
    },

    //本周未上报
    showNotSubmit() {
      this.$router.push({
        name: "noSubmit",
      });
    },
    //历史信息
    historicalInfo(row) {
      this.historicalBackup = row;
      searchApi
        .getProjectWeeklyByCondition({
          projectId: row.projectId,
          orderByIdDesc: true,
          pageNumber: this.pagination2.currentPage - 1,
          numberOfPage: this.pagination2.pageSize,
        })
        .then((res) => {
          this.historicalPanelFlag = true;
          this.historicalData.projectName = row.projectName;
          this.historicalData.tableData = res.returnList[0];
          this.pagination2.currentPage = 1;
          this.pagination2.total = res.totalNumber;
        });
    },
    //查看详情
    detailWeekly(row) {
      getApi.getProjectWeeklyDetailById(row.id).then((response) => {
        this.weeklyDetail = response[0];
        if (this.weeklyDetail.hasWorkNextWeek)
          this.weeklyDetail.hasWorkNextWeekStr = "是";
        else if (!this.weeklyDetail.hasWorkNextWeek)
          this.weeklyDetail.hasWorkNextWeekStr = "否";
        if (this.weeklyDetail.hasThreePlusRiskWork)
          this.weeklyDetail.hasThreePlusRiskWorkStr = "是";
        else if (!this.weeklyDetail.hasThreePlusRiskWork)
          this.weeklyDetail.hasThreePlusRiskWorkStr = "否";
        if (this.weeklyDetail.hasESecurityOnline)
          this.weeklyDetail.hasESecurityOnline = "是";
        else if (!this.weeklyDetail.hasESecurityOnline)
          this.weeklyDetail.hasESecurityOnline = "否";

        this.detailPanelFlag = true;
      });
    },
    //删除选中行的周报
    deleteWeekly(row) {
      this.$confirm("确认删除该条项目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteApi.deleteProjectWeeklyInfoById(row.id).then((response) => {
            if (response > 0) this.searchWeekly(this.pagination.currentPage);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    //搜索
    searchWeekly(pageNum) {
      this.$refs["searchTable"].validate((valid) => {
        if (valid) {
          let list = {
            numberOfPage: this.pagination.pageSize,
            pageNumber: pageNum - 1,
            adminDept:
              this.searchTable.adminDept === ""
                ? undefined
                : this.searchTable.adminDept,
            adminId:
              this.searchTable.adminId === ""
                ? undefined
                : this.searchTable.adminId,
            hasThreePlusRiskWork:
              this.searchTable.hasThreePlusRiskWork === ""
                ? undefined
                : this.searchTable.hasThreePlusRiskWork,
            hasWorkNextWeek:
              this.searchTable.hasWorkNextWeek === ""
                ? undefined
                : this.searchTable.hasWorkNextWeek,
            projectId:
              this.searchTable.projectId === ""
                ? undefined
                : this.searchTable.projectId,
            weeklyStartTime:
              this.searchTable.weeklyStartTime === ""
                ? undefined
                : api.changeDate(this.searchTable.weeklyStartTime),
          };
          searchApi.getProjectWeeklyByCondition(list).then((response) => {
            this.weeklyInfo.tableData = response.returnList[0];
            //转换下周是否有三级以上风险
            this.weeklyInfo.tableData.forEach((element) => {
              if (element.hasThreePlusRiskWork)
                element.hasThreePlusRiskWorkStr = "是";
              else element.hasThreePlusRiskWorkStr = "否";
            });
            this.pagination.total = response.totalNumber;

            //换算标题
            let startDate = this.searchTable.weeklyStartTime;
            let endDate = api.getThisWeekStart(startDate);

            this.tableTitle =
              "国网上海建设咨询公司" +
              new Date().getFullYear() +
              "年在建工程周报(" +
              api.changeDate(startDate) +
              "~" +
              api.changeDate(new Date(endDate)) +
              ")";
          });
        }
      });
    },
    //导出计管中心周报
    exportWeekly() {
      this.$router.push({
        name: "exportWeekly",
        params: {
          flag: "exportProjectWeekly",
        },
      });
    },
    //导出安保部周报
    exportWeeklyTwo() {
      this.$router.push({
        name: "exportWeekly",
        params: {
          flag: "exportInspectionProjectWeekly",
        },
      });
    },
    //周报列表选中
    weeklySelect(val) {
      this.weeklyInfo.multiSelection = val;
    },
    //周报开始日期改变，自动获取月份，周数，周次
    exportWeeklyStartTimeChanged() {
      if (
        this.exportPanel.weeklyStartTime == null ||
        this.exportPanel.weeklyStartTime == ""
      ) {
        this.exportPanel.weeklyStartTime = "";
        this.exportPanel.weeklyEndTime = "";
        return;
      }
      this.exportPanel.weeklyStartTime = api.getLastFriday(
        this.exportPanel.weeklyStartTime
      );
      console.log(this.exportPanel.weeklyStartTime)
    },
    weeklyStartTimeChanged() {
      if (this.searchTable.weeklyStartTime == null) {
        this.searchTable.weeklyStartTime = "";
        this.searchTable.weeklyEndTime = "";
        this.searchTable.monthShowTime = "";
        this.searchTable.monthStartTime = "";
        return;
      }
      this.searchTable.weeklyEndTime = api.getThisWeekStart(
        this.searchTable.weeklyStartTime
      );
      // this.searchTable.weeklyEndTime = api.changeDate(this.searchTable.weeklyEndTime);
      this.searchTable.weeklyStartTime = api.addDate(this.searchTable.weeklyEndTime, -8);
      
      this.searchTable.monthShowTime = api
        .changeDate(this.searchTable.weeklyStartTime)
        .substring(0, 7);
      this.searchTable.monthStartTime =
        api.changeDate(this.searchTable.weeklyStartTime).substring(0, 7) +
        "-01";
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
    //历史数据页码变化
    handleSizeChangeA(val) {
      this.pagination.pageSize = val;
      this.historicalInfo(this.historicalBackup);
    },
    handleCurrentChangeA(val) {
      this.pagination.currentPage = val;
      this.historicalInfo(this.historicalBackup);
    },
    addWeeklyPage() {
      this.$router.push({
        name: "addWeekly",
        params: {
          backPath: "weeklyData",
        },
      });
    },
    updateWeekly(row) {
      this.$router.push({
        name: "updateWeekly",
        params: {
          backPath: "weeklyData",
          id: row.id,
        },
      });
    },
  },
};
</script>
<style lang="less">
.el-table .cell {
  white-space: pre-line;
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
