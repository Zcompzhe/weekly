<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="searchTable" label-position="left" ref="searchTable" :rules="searchTableRule" label-width="110px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="督查日期" prop="inspectStartDate" placeholder="周报开始日期">
                <el-date-picker v-model="searchTable.inspectStartDate" type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:0px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6" style="margin-left:-52px">
            <div class="bar">
              <el-form-item label="~" prop="inspectEndDate" placeholder="周报开始日期" label-width="5px">
                <el-date-picker v-model="searchTable.inspectEndDate" type="date" placeholder="选择日期时间" style="min-width:200px;margin-left:2px"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6" style="margin-left:-122px">
            <div class="bar">
              <el-form-item label="项目名称" prop="projectId" placeholder="项目名称">
                <el-select v-model="searchTable.projectId" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in searchTable.options.projectIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6" style="margin-left:-12px">
            <div class="bar">
              <el-form-item label="是否设置责任人" prop="hasSetResponsible" placeholder="项目名称">
                <el-select v-model="searchTable.hasSetResponsible" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in searchTable.options.hasSetResponsibleOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="2" style="margin-top:-20px">
            <div class="bar">
              <el-button type="primary" style="margin-right: 20px" @click="searchResponsibleSet(1)">搜索</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-table :data="responsible.tableData" max-height="400" border style="width: 100%; margin-top: 20px">
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="110" prop="inspectDate" label="督查时间" align="center"></el-table-column>
        <el-table-column width="550" prop="projectName" label="检查项目" align="center"></el-table-column>
        <el-table-column prop="problemContent" label="存在问题" align="center"></el-table-column>
        <el-table-column width="180" prop="hasSetResponsibleStr" label="是否设置责任人" align="center"></el-table-column>
        <el-table-column width="100" label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="setPerson(scope.row)">设置责任人</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pagination.currentPage" :page-sizes="pagination.pageSizes" :page-size="pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total"></el-pagination>
      </div>

      <el-form :model="setResponsibility" :rules="setResponsibilityRule" ref="setResponsibility" label-width="120px" class="demo-ruleForm" v-if="setResponsibilityFlag">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="主要责任单位" prop="responsibleCompany" placeholder="请选择项目名称">
                <el-select v-model="setResponsibility.responsibleCompany" clearable placeholder="请选择" style="min-width:200px" @change="responsibleCompanyChange">
                  <el-option v-for="item in setResponsibility.options.responsibleCompanyOptions" :key="item.index" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="bar">
              <el-form-item label="责任人" prop="responsiblePerson" placeholder="请选择项目名称">
                <el-select v-model="setResponsibility.responsiblePerson" multiple clearable placeholder="请选择" style="min-width:600px">
                  <el-option v-for="item in setResponsibility.options.responsiblePersonOptions" :key="item.index" :label="item.name" :value="item.name"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="2" style="margin-top:-23px;margin-left:150px">
            <el-button type="primary" @click="saveSetResponsibility">保存</el-button>
          </el-col>
        </el-row>
      </el-form>
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
      //设置责任人数据
      setResponsibilityFlag: false,
      updateResponsibilityFlag: false,
      updateTable: [],
      setResponsibility: {
        problemResponsibleSetId: "",
        responsibleCompany: "",
        responsiblePerson: [],
        options: {
          responsibleCompanyOptions: [],
          responsiblePersonOptions: [],
        }
      },
      setResponsibilityRule: {
        responsibleCompany: [
          { required: true, message: "请选择责任单位", trigger: "change" }
        ],
        responsiblePerson: [
          { required: true, message: "请选择责任人", trigger: "change" }
        ],
      },
      //搜索条件数据
      searchTable: {
        inspectStartDate: "",
        inspectEndDate: "",
        projectId: "",
        hasSetResponsible: "",
        options: {
          projectIdOptions: {},
          hasSetResponsibleOptions: [
            {
              value: true,
              name: "是"
            },
            {
              value: false,
              name: "否"
            }
          ]
        }
      },
      searchTableRule: {
      },
      //表格数据控制
      responsible: {
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
    //空搜索获取信息
    let startDate = new Date();
    let endDate = api.getThisWeekStartTwo(startDate);
    this.searchTable.inspectStartDate = new Date(api.changeDate(startDate));
    this.searchTable.inspectEndDate = new Date(endDate);
    this.searchResponsibleSet(1);

    //获取项目列表
    getApi.getAllProjectName().then(response => {
      this.searchTable.options.projectIdOptions = response;
    });
    //获取责任单位
    getApi.getAllResponsibleCompany().then(response => {
      this.setResponsibility.options.responsibleCompanyOptions = response;
    });

  },
  methods: {
    //提交责任人
    saveSetResponsibility() {
      this.$refs["setResponsibility"].validate(valid => {
        if (valid) {
          let list = [];
          if (!this.updateResponsibilityFlag) {
            this.setResponsibility.responsiblePerson.forEach(ele => {
              list.push({
                problemResponsibleSetId: this.setResponsibility.problemResponsibleSetId,
                responsibleCompany: this.setResponsibility.responsibleCompany,
                responsiblePerson: ele
              });
            })
            addApi.addProblemResponsiblePerson(list).then(response => {
              this.searchResponsibleSet(this.pagination.currentPage);
              this.setResponsibilityFlag = false;
            })
          } else {
            this.updateTable.forEach(ele => {
              //先看删除的
              if (!this.setResponsibility.responsiblePerson.includes(ele.responsiblePerson)) {
                list.push({
                  problemResponsibleSetId: this.setResponsibility.problemResponsibleSetId,
                  responsibleCompany: this.setResponsibility.responsibleCompany,
                  responsiblePerson: ele.responsiblePerson,
                  id: ele.id,
                  listUpdateOperation: "删除"
                });
              }
            })
            //再看添加的
            this.setResponsibility.responsiblePerson.forEach(ele => {
              let flag = 0;
              this.updateTable.forEach(element => {
                if (element.responsiblePerson === ele) {
                  flag = 1;
                }
              })
              if (flag === 0) {
                list.push({
                  problemResponsibleSetId: this.setResponsibility.problemResponsibleSetId,
                  responsibleCompany: this.setResponsibility.responsibleCompany,
                  responsiblePerson: ele,
                  listUpdateOperation: "添加"
                });
              }
            })
            if (list.length === 0) {
              this.$message({
                type: "error",
                message: "请至少修改一个信息！"
              });
              return;
            }
            updateApi.updateProblemResponsiblePerson(list).then(response => {
              this.searchResponsibleSet(this.pagination.currentPage);
              this.setResponsibilityFlag = false;
              this.updateResponsibilityFlag = false;
            })
          }
        }
      });
    },
    //责任单位变化
    responsibleCompanyChange() {
      this.setResponsibility.responsiblePerson = "";
      this.setResponsibility.options.responsiblePersonOptions = [];
      if (this.setResponsibility.responsibleCompany != "") {
        //获取项目列表
        getApi.getResponsiblePersonByResponsibleCompany(this.setResponsibility.responsibleCompany).then(response => {
          this.setResponsibility.options.responsiblePersonOptions = response;
        });
      }
    },
    //设置责任人
    setPerson(row) {
      this.setResponsibilityFlag = true;
      this.setResponsibility.problemResponsibleSetId = row.id;
      getApi.getProblemResponsiblePersonByProblemResponsibleSetId(row.id).then(response => {
        if (response.length > 0) {
          this.updateResponsibilityFlag = true;
          this.setResponsibility.responsibleCompany = response[0].responsibleCompany;
          this.responsibleCompanyChange();
          this.setResponsibility.responsiblePerson = [];
          this.updateTable = response;
          response.forEach(ele => {
            this.setResponsibility.responsiblePerson.push(ele.responsiblePerson);
          })
        }
        else {
          this.updateResponsibilityFlag = false;
          this.setResponsibility.responsibleCompany = "";
          this.setResponsibility.responsiblePerson = [];
        }
      })
    },
    //搜索
    searchResponsibleSet(num) {
      if ((this.searchTable.inspectEndDate === null && this.searchTable.inspectStartDate != null) || (this.searchTable.inspectEndDate != null && this.searchTable.inspectStartDate === null)) {
        this.$message({
          type: "error",
          message: "督查起止日期必须均填写或均不填写！"
        });
        return;
      }
      let list = {
        inspectEndDate: this.searchTable.inspectEndDate === null ? undefined : api.changeDate(this.searchTable.inspectEndDate),
        inspectStartDate: this.searchTable.inspectStartDate === null ? undefined : api.changeDate(this.searchTable.inspectStartDate),
        projectId: this.searchTable.projectId === "" ? undefined : this.searchTable.projectId,
        pageNumber: num - 1,
        numberOfPage: this.pagination.pageNumber,
        hasSetResponsible: this.searchTable.hasSetResponsible === "" ? undefined : this.searchTable.hasSetResponsible
      }
      searchApi.getProblemResponsibleSetShowRespByCondition(list).then(response => {
        this.responsible.tableData = response.returnList[0];
        this.pagination.total = response.totalNumber;
        this.pagination.currentPage = num;
        this.responsible.tableData.forEach(ele => {
          if (ele.hasSetResponsible)
            ele.hasSetResponsibleStr = "是";
          else if (!ele.hasSetResponsible)
            ele.hasSetResponsibleStr = "否";
        })
      })
    },
    //页码操控部分
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.searchResponsibleSet(1);
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val;
      this.searchResponsibleSet(val);
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
