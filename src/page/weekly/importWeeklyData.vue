<template>
  <div class="body">
    <el-card class="box-card">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20" style="margin-top:5px;">
          <el-col :span="8">
            <el-form-item label="周报开始时间" prop="weeklyStartTime" placeholder="请选择周报开始时间">
              <el-date-picker
                v-model="ruleForm.weeklyStartTime"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
                style="min-width:260px"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="当前周次" prop="weekCount" placeholder="请选择当前周次">
              <el-select
                v-model="ruleForm.weekCount"
                clearable
                placeholder="请选择"
                style="min-width:240px"
              >
                <el-option
                  v-for="item in weekCountOptions"
                  :key="item.weekCount"
                  :label="item.weekCount"
                  :value="item.weekCount"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 30px; margin-bottom: 5px;">
          <el-col :span="8">
            <el-form-item label="月报开始时间" prop="monthlyStartTime" placeholder="请选择月报开始时间">
              <el-date-picker
                v-model="ruleForm.monthlyStartTime"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
                style="min-width:260px"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-upload
              style="display: inline; margin-left: 10px;margin-right: 10px;"
              action="#"
              ref="fileupload"
              :show-file-list="false"
              :http-request="upLoadChange"
              :before-upload="beforeUpload"
            >
              <el-button type="primary">
                上传文件
                <i class="el-icon-upload el-icon--right"></i>
              </el-button>
            </el-upload>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 30px; margin-bottom: 5px;">
          <div class="label" align="center" style="margin: 0 0 5px 0;font-size:16px">文件导入的数据</div>
          <br />
          <el-table
            :data="ruleForm.tableData"
            max-height="400"
            border
            :stripe="true"
            :highlight-current-row="true"
          >
            <el-table-column type="selection" width="50" align="center"></el-table-column>
            
            <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
            <el-table-column width="300" prop="projectId" label="项目名称" align="center"></el-table-column>
            <el-table-column width="300" prop="adminId" label="建设管理单位" align="center"></el-table-column>
            <el-table-column width="300" prop="supervisionId" label="监理单位" align="center"></el-table-column>
            <el-table-column width="300" prop="constructDept" label="施工单位" align="center"></el-table-column>
            <el-table-column
              width="300"
              prop="constructDeptEnterprise"
              label="施工单位是否为系统内集体企业"
              align="center"
            ></el-table-column>
            <el-table-column width="300" prop="projectLocation" label="项目地点" align="center"></el-table-column>
            <el-table-column width="300" prop="detailedAddress" label="详细地址" align="center"></el-table-column>
            <el-table-column width="300" prop="actualStartTime" label="实际开工时间" align="center"></el-table-column>
            <el-table-column width="300" prop="planCompletionTime" label="计划竣工时间" align="center"></el-table-column>
            <el-table-column width="300" prop="projectScale" label="项目规模" align="center"></el-table-column>
            <el-table-column width="300" prop="currentProgress" label="当前总体施工进度" align="center"></el-table-column>
            <el-table-column
              width="300"
              prop="currentWorkerNum"
              label="当前施工单位一线自有作业人员数"
              align="center"
            ></el-table-column>
            <el-table-column
              width="300"
              prop="currentSubcontractorNum"
              label="当前分包人员数"
              align="center"
            ></el-table-column>
            <el-table-column width="300" prop="hasWorkNextWeek" label="下周是否有作业" align="center"></el-table-column>
            <el-table-column
              width="300"
              prop="workContentNextWeek"
              label="下周主要施工作业内容"
              align="center"
            ></el-table-column>
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
            <!-- <el-table-column width="300" prop="inherentRisk" label="固有风险" align="center"></el-table-column>
            <el-table-column width="300" prop="dynamicRisk" label="动态风险" align="center"></el-table-column>-->

            <!-- 下面两个没有 -->
            <!-- <el-table-column width="300" prop="index" label="本月该项目是否安排督查" align="center"></el-table-column>
            <el-table-column width="300" prop="index" label="下周作业是否安排督查" align="center"></el-table-column>-->
          </el-table>
        </el-row>
        <el-row style="margin: 50px 0 10px 0">
          <el-col :span="3" :offset="10">
            <el-button type="primary" @click="submitForm">导入</el-button>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" @click="goback">取消</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import XLSX from "xlsx";
export default {
  data() {
    return {
       pickerOptions: {
          // disabledDate(time) {
          //   return time.getTime() > Date.now();
          // },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
      rules: {
        customerName: [
          { required: true, message: "请选择客户名称", trigger: "change" }
        ],
        brandName: [
          { required: true, message: "请选择品牌", trigger: "change" }
        ],
        clothingType: [
          { required: true, message: "请选择服装层次", trigger: "change" }
        ]
      },
      ruleForm: {
        weeklyStartTime: "",
        monthlyStartTime: "",
        weekCount: "",

        tableData: []
      },
      weekCountOptions: [
        {
          weekCount: 1
        },
        {
          weekCount: 2
        },
        {
          weekCount: 3
        },
        {
          weekCount: 4
        }
      ],
      fileList: []
    };
  },

  methods: {
    goback(){
        this.$router.push({
        path: `/weekly/weeklyDataManage`,
        query: {
        }
      });
    },
    submitForm(){
      console.log("321321312")
    },
    ////////////// methods for xls /////////////
    readExcel(file) {
      // 解析Excel
      const that = this;
      return new Promise(function(resolve, reject) {
        const reader = new FileReader();
        reader.onload = e => {
          try {
            // 以二进制流方式读取得到整份excel表格对象
            var data = e.target.result,
              workbook = XLSX.read(data, { type: "binary" });
          } catch (e) {
            reject("读取出错，错误为", e.message);
          }
          var fromTo = ""; // excel中表格的表格范围
          let sheetData = []; //读取的数据，不含表头
          let locations = []; // A1,B1,C1,A2,B3,C3...
          // 遍历每张表读取
          for (var sheet in workbook.Sheets) {
            if (workbook.Sheets.hasOwnProperty(sheet)) {
              let sheetInfos = workbook.Sheets[sheet];
              console.log("当前表格的内容(sheetInfos): ", sheetInfos);
              fromTo = sheetInfos["!ref"]; // 如A1:B5
              console.log("当前表格的范围(fromTo):" + fromTo);
              locations = that.getLocationsKeys(fromTo);
              console.log("locations:" + locations);
              var colMax = locations[0];
              console.log("当前表格的最大列数为: ", colMax);
              let rowData = {
                // 每一行的数据
                projectId: "",
                adminId: "",
                supervisionId: "",
                constructDept: "",
                constructDeptEnterprise: "",
                projectLocation: "",
                detailedAddress: "",
                actualStartTime: "",
                planCompletionTime: "",
                projectScale: "",
                currentProgress: "",
                currentWorkerNum: "",
                currentSubcontractorNum: "",
                hasWorkNextWeek: "",
                workContentNextWeek: "",
                hasTowerErectionNextWeek: "",
                hasThirdLevelPlusWork: "",
                contactPerson: "",
                isMajorProject: "",
                isSupervisedByProvincialCompany: "",
                note: "",
                actualState: "",
                controlledState: ""
              };
              for (let i = 1 + colMax; i < locations.length; i++) {
                //遍历行数×列数内所有的单元格
                var value = "";
                try {
                  value = sheetInfos[locations[i]].v;
                  console.log(locations[i] + "对应的单元格的value: ", value);
                } catch (e) {
                  value = "";
                  console.log(locations[i] + "对应的单元格的值缺失");
                }
                if (i % colMax === 1) {
                  // 第一列
                  rowData.projectId = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 2) {
                  // 第二列为rangeAmount
                  rowData.adminId = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 3) {
                  // 第二列为rangeAmount
                  rowData.supervisionId = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 4) {
                  // 第二列为rangeAmount
                  rowData.constructDept = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 5) {
                  // 第二列为rangeAmount
                  rowData.constructDeptEnterprise = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 6) {
                  // 第二列为rangeAmount
                  rowData.projectLocation = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 7) {
                  // 第二列为rangeAmount
                  rowData.detailedAddress = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 8) {
                  // 第二列为rangeAmount
                  rowData.actualStartTime = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 9) {
                  // 第二列为rangeAmount
                  rowData.planCompletionTime = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 10) {
                  // 第二列为rangeAmount
                  rowData.projectScale = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 11) {
                  // 第二列为rangeAmount
                  rowData.currentProgress = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 12) {
                  // 第二列为rangeAmount
                  rowData.currentWorkerNum = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 13) {
                  // 第二列为rangeAmount
                  rowData.currentSubcontractorNum = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 14) {
                  // 第二列为rangeAmount
                  rowData.hasWorkNextWeek = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 15) {
                  // 第二列为rangeAmount
                  rowData.workContentNextWeek = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 16) {
                  // 第二列为rangeAmount
                  rowData.hasTowerErectionNextWeek = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 17) {
                  // 第二列为rangeAmount
                  rowData.hasThirdLevelPlusWork = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 18) {
                  // 第二列为rangeAmount
                  rowData.contactPerson = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 19) {
                  // 第二列为rangeAmount
                  rowData.isMajorProject = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 20) {
                  // 第二列为rangeAmount
                  rowData.isSupervisedByProvincialCompany = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 21) {
                  // 第二列为rangeAmount
                  rowData.note = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 22) {
                  // 第二列为rangeAmount
                  rowData.actualState = value;
                  console.log("value: ", value);
                }
                if (i % colMax === 0) {
                  // 第三列为rangeNote 同时为最后一列
                  rowData.controlledState = value;
                  
                  sheetData.push(rowData);
                  rowData = {
                    //到了最后一列将行数据清空
                    projectId: "",
                    adminId: "",
                    supervisionId: "",
                    constructDept: "",
                    constructDeptEnterprise: "",
                    projectLocation: "",
                    detailedAddress: "",
                    actualStartTime: "",
                    planCompletionTime: "",
                    projectScale: "",
                    currentProgress: "",
                    currentWorkerNum: "",
                    currentSubcontractorNum: "",
                    hasWorkNextWeek: "",
                    workContentNextWeek: "",
                    hasTowerErectionNextWeek: "",
                    hasThirdLevelPlusWork: "",
                    contactPerson: "",
                    isMajorProject: "",
                    isSupervisedByProvincialCompany: "",
                    note: "",
                    actualState: "",
                    controlledState: ""
                  };
                }
              }
              resolve(true);
              console.log("sheetData", sheetData);
      
              that.ruleForm.tableData = sheetData;

            }
            console.log("完成了一张表格数据的读取");
          }
        };
        reader.readAsBinaryString(file);
      });
    },

    beforeUpload(file) {
      const that = this;
      return new Promise(function(resolve, reject) {
        that.readExcel(file).then(
          result => {
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
              that.$message.error("文件大小不能超过2MB!");
            }
            if (isLt2M && result) {
              resolve("校验成功!");
            } else {
              reject(false);
            }
          },
          error => {
            that.$message.error(error);
            reject(false);
          }
        );
      });
    },
    upLoadChange(content) {
      this.$message.success("文件上传成功!");
    },
    getLocationsKeys(range) {
      // A1:B5输出 A1,B1...
      console.log("range:",range)

      let sv = range.split(":");
      console.log("sv", sv);
      let startString = sv[0];
      let endString = sv[1];

      let start = startString.substring(0, 1); // 字符'A'
      console.log("表格的起始列值为: ", start);
      let end = endString.substring(0, 1);
      console.log("表格的结束列值为: ", end);
      console.log("endString:",endString)

      let rowMax = parseInt(endString.substring(1, endString.length)); // 获得最大的行数
      console.log("表格里面最大的行值为: ", rowMax);

      let total = 0;
      for (let i = 0; i < end.length; i++) {
        total +=
          Math.pow(26, end.length - 1 - i) *
          (end.charCodeAt(i) - "A".charCodeAt(0) + 1);
        console.log("total: ", total);
      }
      let result = [];
      result.push(total);
      for (let rowNum = 1; rowNum <= rowMax; rowNum++) {
        for (let index = 0; index < total; index++) {
          result.push(this.getCharByNum(index) + rowNum.toString());
        }
      }
      return result;
    },
    getCharByNum(index) {
      let a = parseInt(index / 26); // 整除
      let b = index % 26; // 余数
      let returnChar = String.fromCharCode(b + 65); // 最后一个字符
      while (a > 0) {
        b = a % 26;
        a = parseInt(a / 26);
        // 从后生成字符，向前推进
        returnChar = String.fromCharCode(b + 65 - 1) + returnChar;
      }
      return returnChar;
    },
    ////////////// methods for xls /////////////
    // 保存按钮点击
    submitForm(formName) {
      const that = this;
      var RangeListAdd = [];
      // this.ruleForm.tableData.forEach(element => {
      //   RangeListAdd.push({
      //     name: element.rangeName,
      //     customerId: this.ruleForm.customerName,
      //     brandId: this.ruleForm.brandName,
      //     clothingLevelId: this.ruleForm.clothingType,
      //     note: element.rangeNote
      //   });
      // });
    },
    // 取消按钮点击
    cancel() {
      const that = this;
      console.log("取消按钮点击");
      that.$router.push({
        name: `rangeManagement`
      });
    },
    // 浏览按钮点击
    findFile() {
      const that = this;
      console.log("浏览按钮点击");
    }
  }
};
</script>


<style lang="less" scoped>
.box-card {
    width:1400px;
  margin: 20px 50px;
  padding: 0 20px;
  .inputBox {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    .label {
      font-size: 14px;
      min-width: 75px;
      text-align: center;
    }
    .el-input {
      width: 300px;
      min-width: 75px;
    }
    .el-select {
      width: 300px;
      min-width: 75px;
    }
  }
  .block {
    padding: 30px 0;
    text-align: center;
  }
}
</style>