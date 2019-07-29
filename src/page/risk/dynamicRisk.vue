<template>
  <div class="body">
    <el-card class="box-card">
      <el-table
        :data="tableData1"
        max-height="400"
        border
        @selection-change="isChanged1"
        :stripe="true"
        :highlight-current-row="true"
        style="width: 100%; margin-top: 20px"
        id="out-table"
      >
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="100" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="308" prop="projectId" label="项目名称" align="center"></el-table-column>
        <el-table-column width="300" prop="adminId" label="建设管理单位" align="center"></el-table-column>

        <el-table-column width="300" prop="currentProgress" label="当前总体施工进度" align="center"></el-table-column>
        <el-table-column width="300" prop="workContentNextWeek" label="下周主要施工作业内容" align="center"></el-table-column>
        <el-table-column
          width="350"
          prop="hasThirdLevelPlusWork"
          label="三级风险作业安排、位置及内容"
          align="center"
        ></el-table-column>
        <el-table-column
          width="350"
          prop="hasThirdLevelPlusWork"
          label="四级风险作业安排、位置及内容"
          align="center"
        ></el-table-column>
        <el-table-column
          width="350"
          prop="hasThirdLevelPlusWork"
          label="五级风险作业安排、位置及内容"
          align="center"
        ></el-table-column>
        <el-table-column width="300" prop="inherentRisk" label="固有风险" align="center"></el-table-column>
      </el-table>
    </el-card>
    <el-card class="box-card">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="U1人员因素" name="first">
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U11作业人员施工经验：</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio11">
                    <el-radio :label="1" style="width:100%;">A 主要作业人员都有3 项及以上同类工程项目经验</el-radio>
                    <el-radio :label="2" style="width:100%;margin-top:10px">B 主要作业人员都有3 项及以上同类工程项目经验</el-radio>
                    <el-radio
                      :label="3"
                      style="width:100%;margin-top:10px"
                    >C 超过 50%的主要作业人员有 3 项及以上同类项目经验</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U12主要作业人员生理状态：</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio12">
                    <el-radio
                      :label="1"
                      style="width:100%;"
                    >A 作业人员体检合格；人员一个工作日平均工作时间不超过 8 小时，且夜间作业时间占总工期比重不超过 20%</el-radio>
                    <el-radio
                      :label="2"
                      style="width:100%;margin-top:10px"
                    >B 作业人员体检合格；人员作业时间大于 8 但不超过 10 小时，且夜间作业时间占总工期大于 20% 但不超过 30%</el-radio>
                    <el-radio
                      :label="3"
                      style="width:100%;margin-top:10px"
                    >C 作业人员体检合格；人员作业时间大于 10 小时，夜间作业时间占总工期大于 30%</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U13指挥人员技能及经验：</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio13">
                    <el-radio :label="1" style="width:100%;">A 指挥人员具有 3 个及以上同类项目现场指挥经验</el-radio>
                    <el-radio
                      :label="2"
                      style="width:100%;margin-top:10px"
                    >B 指挥人员具有 1 或 2 个同类项目现场指挥经验</el-radio>
                    <el-radio :label="3" style="width:100%;margin-top:10px">C 指挥人员无同类项目现场指挥经验</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="U2机械因素" name="second">
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U21机械设备性能:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio21">
                    <el-radio :label="1" style="width:100%;">A 设备已使用时间未超过设备使用年限</el-radio>
                    <el-radio
                      :label="2"
                      style="width:100%;margin-top:10px"
                    >B 设备已使用时间达到设备使用年限，但经过鉴定可以降级使用的</el-radio>
                    <el-radio
                      :label="3"
                      style="width:100%;margin-top:10px"
                    >C 设备使用时间已超过设备使用年限，且未经检定合格</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U22机械设备维修保养:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio22">
                    <el-radio :label="1" style="width:100%;">A 建立完善的维修保养体系，且保养记录齐全；外观检查，工况良好</el-radio>
                    <el-radio :label="2" style="width:100%;margin-top:10px">B 建立完善的维修保养体系，外观检查，工况一般</el-radio>
                    <el-radio
                      :label="3"
                      style="width:100%;margin-top:10px"
                    >C 建立完善的维修保养体系，保养记录不齐全，工况较差</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U23机械设备负荷情况:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio23">
                    <el-radio :label="1" style="width:100%;">A 起吊荷载不超过起重机械额定起重量的 90%</el-radio>
                    <el-radio
                      :label="2"
                      style="width:100%;margin-top:10px"
                    >B 起吊荷载大于起重机械额定起重量的 90% 但不超过 95%</el-radio>
                    <el-radio
                      :label="3"
                      style="width:100%;margin-top:10px"
                    >C 起吊荷载大于起重机械额定起重量的 95%，或者两台机械实行台吊作业的</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="U3环境因素" name="third">
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U31施工工期:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio31">
                    <el-radio :label="1" style="width:100%;">A 满足合理工期要求</el-radio>
                    <el-radio :label="2" style="width:100%;margin-top:10px">B 达到 80% 及以上合理工期要求</el-radio>
                    <el-radio :label="3" style="width:100%;margin-top:10px">C 未达到 80% 及以上合理工期要求</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U32周围环境:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio32">
                    <el-radio :label="1" style="width:100%;">A 周边环境开阔，隔离措施完善，便于施工</el-radio>
                    <el-radio
                      :label="2"
                      style="width:100%;margin-top:10px"
                    >B 学校、城镇、人流密集场所或施工场地狭窄等较复杂的周边环境</el-radio>
                    <el-radio
                      :label="3"
                      style="width:100%;margin-top:10px"
                    >C 非常复杂，隔离措施难以实施，施工场地影响范围内有历史文物、地铁、共同沟、大直径管道、大型压力总水管等重要建筑物及设施，或夜间施工</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U33气候情况:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio33">
                    <el-radio
                      :label="1"
                      style="width:100%;"
                    >A 正常状态（气温大于 17℃但不超过26℃ ，风速不超过1.5m/s，无降雨或有降雨但降雨量不超过 9.9mm 等条件均满足）</el-radio>
                    <el-radio
                      :label="2"
                      style="width:100%;margin-top:10px"
                    >B 不良天气（气温高于 5℃ 但不超过 17℃ 或高于 26℃ 但不超过 35℃，风速大于1.5m/s 但不超过5.4 m/s，降雨量大于 9.9 mm 但不超过 24.9mm 等条件中的任意一项）</el-radio>
                    <el-radio
                      :label="3"
                      style="width:100%;margin-top:10px"
                    >C 坏天气（温度高于 35 ℃ 或低于 5℃，风速大于5.4m/s 但不超过10.8m/s，降雨量大于 24.9mm 但不超过 49.9 mm 等条件中的任意一项）</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U34地质条件:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio34">
                    <el-radio :label="1" style="width:100%;">A 坚硬土或岩石，且无地下水</el-radio>
                    <el-radio
                      :label="2"
                      style="width:100%;margin-top:10px"
                    >B 中硬土或中软土；单位出水量不超过 10L/min· m</el-radio>
                    <el-radio :label="3" style="width:100%;margin-top:10px">C 软弱土；单位出水量大于10L/min· m</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U35交通运输环境:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio35">
                    <el-radio :label="1" style="width:100%;">A 运输路线可事先确定，运输通道畅通、路况良好</el-radio>
                    <el-radio :label="2" style="width:100%;margin-top:10px">B 运输路线可事先确定，路况一般，但险情可控</el-radio>
                    <el-radio :label="3" style="width:100%;margin-top:10px">C 路况较差，运输通道存在不可控险情</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U36临近带电作业:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio36">
                    <el-radio :label="1" style="width:100%;">A 作业地点与带电体的距离大于《安规》表 2 规定的距离</el-radio>
                    <el-radio
                      :label="2"
                      style="width:100%;margin-top:10px"
                    >B 作业地点与带电体的距离大于《安规》表 1 规定的而小于《安规》表 2 规定的距离，且按照规定要求采取完善的安全措施</el-radio>
                    <el-radio
                      :label="3"
                      style="width:100%;margin-top:10px"
                    >C 作业地点与带电体的距离小于相关法规、标准、规程等规范规定的安全距离，未按照规定要求采取安全措施</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U37交叉作业环境:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio37">
                    <el-radio :label="1" style="width:100%;">A 无交叉作业</el-radio>
                    <el-radio :label="2" style="width:100%;margin-top:10px">B 有交叉作业，且事先有制订交叉作业专项作业方案</el-radio>
                    <el-radio
                      :label="3"
                      style="width:100%;margin-top:10px"
                    >C 临时出现交叉作业，未事先制订交叉作业专项作业方案</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="U4管理因素" name="fourth">
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U41安全保证、监督体系:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio41">
                    <el-radio :label="1" style="width:100%;">A 安全保证、监督体系完善，人员到位</el-radio>
                    <el-radio :label="2" style="width:100%;margin-top:10px">B 安全保证、监督体系较为完善，人员基本到位</el-radio>
                    <el-radio :label="3" style="width:100%;margin-top:10px">C 体系不完善，人员未到岗到位</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U42项目安全人员配备:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio42">
                    <el-radio :label="1" style="width:100%;">A 项目部、施工队、作业点按规定要求配置安全员</el-radio>
                    <el-radio
                      :label="2"
                      style="width:100%;margin-top:10px"
                    >B 项目部、施工队按要求配备安全员，作业点未按要求配备安全员</el-radio>
                    <el-radio
                      :label="3"
                      style="width:100%;margin-top:10px"
                    >C 项目部、施工队、作业点两个或两个以上部门未按规定配备安全员</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U43安全管理目标、措施:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio43">
                    <el-radio :label="1" style="width:100%;">A 目标明确，并进行细化分解，措施完善，有针对性和操作性</el-radio>
                    <el-radio :label="2" style="width:100%;margin-top:10px">B 目标未细化，措施针对性、可操作性较差</el-radio>
                    <el-radio :label="3" style="width:100%;margin-top:10px">C 无安全管理目标，或未建立安全管理体系</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U44班前安全活动:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio44">
                    <el-radio :label="1" style="width:100%;">A 按规定实施，内容具有针对性</el-radio>
                    <el-radio :label="2" style="width:100%;margin-top:10px">B 按规定实施，内容针对性较差</el-radio>
                    <el-radio :label="3" style="width:100%;margin-top:10px">C 未按规定实施</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U45安全监督检查、验收:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio45">
                    <el-radio :label="1" style="width:100%;">A 按规定实施，整改闭环，落实到位</el-radio>
                    <el-radio
                      :label="2"
                      style="width:100%;margin-top:10px"
                    >B 按规定进行监督检查，但未对整改项目进行复查落实</el-radio>
                    <el-radio :label="3" style="width:100%;margin-top:10px">C 未按规定进行监督检查和验收</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U46应急救援预案与演练:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio46">
                    <el-radio :label="1" style="width:100%;">A 编制完整的应急预案体系并按规定开展应急演练</el-radio>
                    <el-radio :label="2" style="width:100%;margin-top:10px">B 编制应急预案体系不完整，未按规定开展应急演练</el-radio>
                    <el-radio :label="3" style="width:100%;margin-top:10px">C 未编制应急预案，未开展应急演练</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <div class="title" style="margin-top:10px;margin-left:10px">U47安全教育活动开展情况:</div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="20">
                <div class="bar">
                  <el-radio-group v-model="radio47">
                    <el-radio :label="1" style="width:100%;">A 按规定开展安全教育活动，教育活动具有针对性，记录齐全</el-radio>
                    <el-radio
                      :label="2"
                      style="width:100%;margin-top:10px"
                    >B 按规定开展安全教育活动，但针对性较差，或记录不齐全</el-radio>
                    <el-radio
                      :label="3"
                      style="width:100%;margin-top:10px"
                    >C 按规定开展安全教育活动，但针对性较差，或记录不齐全</el-radio>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="查看结果" name="fifth">
                    <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
            <el-button type="primary">计算动态风险</el-button>
            <el-button type="primary">取消</el-button>
          </div>
          </el-col>
        </el-row>
          </el-tab-pane>
          
        </el-tabs>

      </template>
    </el-card>
  </div>
</template>


<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  data() {
    return {
      radio1: "",
      activeName: "first",
      date1: "",
      date2: "",
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
      constructDeptId: "",
      constructDeptOptions: [],
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
    handleClick(tab, event) {
      console.log(tab, event);
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
