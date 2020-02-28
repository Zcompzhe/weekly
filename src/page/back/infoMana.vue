<template>
  <el-card class="box-card">
    <el-tabs v-model="viewname" class="cardTab" :tab-click="viewChange()">
      <el-tab-pane label="建设管理单位" name="one" class="tabPane">
        <el-container class="paneContainer">
          <el-header clas="containerHeader">
            <el-row :gutter="20">
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleNewInfoClick()">新增信息</el-button>
                </div>
              </el-col>
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleDeleteInfoClick()">删除信息</el-button>
                </div>
              </el-col>
            </el-row>
          </el-header>

          <el-main clas="containerMain">
            <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column type="index" label="序号" align="center" width="50"></el-table-column>
              <el-table-column prop="name" label="建设管理单位" align="center"></el-table-column>
              <el-table-column width="100" label="操作" align="center">
                <template slot-scope="scope">
                  <el-button type="text" @click="deleteOneLine(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="监理单位" name="two" class="tabPane">
        <el-container class="paneContainer">
          <el-header clas="containerHeader">
            <el-row :gutter="20">
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleNewInfoClick()">新增信息</el-button>
                </div>
              </el-col>
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleDeleteInfoClick()">删除信息</el-button>
                </div>
              </el-col>
            </el-row>
          </el-header>

          <el-main clas="containerMain">
            <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column type="index" label="序号" align="center" width="50"></el-table-column>
              <el-table-column prop="name" label="监理单位" align="center"></el-table-column>
              <el-table-column width="100" label="操作" align="center">
                <template slot-scope="scope">
                  <el-button type="text" @click="deleteOneLine(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="业主项目部" name="three" class="tabPane">
        <el-container class="paneContainer">
          <el-header clas="containerHeader">
            <el-row :gutter="20">
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleNewInfoClick()">新增信息</el-button>
                </div>
              </el-col>
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleDeleteInfoClick()">删除信息</el-button>
                </div>
              </el-col>
            </el-row>
          </el-header>

          <el-main clas="containerMain">
            <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column type="index" label="序号" align="center" width="50"></el-table-column>
              <el-table-column prop="name" label="业主项目部" align="center"></el-table-column>
              <el-table-column width="100" label="操作" align="center">
                <template slot-scope="scope">
                  <el-button type="text" @click="deleteOneLine(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="施工项目部" name="four" class="tabPane">
        <el-container class="paneContainer">
          <el-header clas="containerHeader">
            <el-row :gutter="20">
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleNewInfoClick()">新增信息</el-button>
                </div>
              </el-col>
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleDeleteInfoClick()">删除信息</el-button>
                </div>
              </el-col>
            </el-row>
          </el-header>

          <el-main clas="containerMain">
            <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column type="index" label="序号" align="center" width="50"></el-table-column>
              <el-table-column prop="name" label="施工项目部" align="center"></el-table-column>
              <el-table-column width="100" label="操作" align="center">
                <template slot-scope="scope">
                  <el-button type="text" @click="deleteOneLine(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="监理项目部" name="five" class="tabPane">
        <el-container class="paneContainer">
          <el-header clas="containerHeader">
            <el-row :gutter="20">
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleNewInfoClick()">新增信息</el-button>
                </div>
              </el-col>
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleDeleteInfoClick()">删除信息</el-button>
                </div>
              </el-col>
            </el-row>
          </el-header>

          <el-main clas="containerMain">
            <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column type="index" label="序号" align="center" width="50"></el-table-column>
              <el-table-column prop="name" label="监理项目部" align="center"></el-table-column>
              <el-table-column width="100" label="操作" align="center">
                <template slot-scope="scope">
                  <el-button type="text" @click="deleteOneLine(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <el-dialog :modal="false" title="添加信息" :visible.sync="addFlag" width="600px">
      <el-form :model="addForm" label-position="left" ref="addForm" :rules="addFormRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="条目名称" prop="addName" placeholder="条目名称">
                <el-input v-model="addForm.addName" clearable :rows="1" placeholder="请选择" style="min-width:400px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"></el-col>
          <el-col :span="4">
            <el-button type="primary" @click="submitAdd">确定</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="cancelAdd">取消</el-button>
          </el-col>
        </el-row>
      </el-form>

    </el-dialog>

  </el-card>
</template>

<script>
import { error } from "util";
import * as getApi from "@/api/getApi.js";
import * as deleteApi from "@/api/deleteApi.js";
import * as addApi from "@/api/addApi.js";
export default {
  data() {
    return {
      //添加弹窗
      addFlag: false,
      addForm: {
        addName: "",
      },
      addFormRule: {
        addName: [
          { required: true, message: "请输入新增信息名称！", trigger: "change" }
        ],
      },
      //页面控制
      viewname: "one",
      //页面表格显示 
      tableData: [],
      multiSelection: [],
    };
  },
  created: function () {

  },
  methods: {
    //提交新增表格
    submitAdd() {
      this.$refs["addForm"].validate(valid => {
        if (valid) {
          if (this.viewname === "one")
            addApi.addAdministrativeDept(this.addForm.addName).then(response => {
              this.addFlag = false;
              this.viewChange();
            })
          else if (this.viewname === "two")
            addApi.addSupervisionDept(this.addForm.addName).then(response => {
              this.addFlag = false;
              this.viewChange();
            })
          else if (this.viewname === "three")
            addApi.addOwnerProjectDept(this.addForm.addName).then(response => {
              this.addFlag = false;
              this.viewChange();
            })
          else if (this.viewname === "four")
            addApi.addConstructProjectDept(this.addForm.addName).then(response => {
              this.addFlag = false;
              this.viewChange();
            })
          else if (this.viewname === "five")
            addApi.addAdminProjectDept(this.addForm.addName).then(response => {
              this.addFlag = false;
              this.viewChange();
            })

        }
      });
    },
    //视图切换
    viewChange() {
      if (this.viewname === "one") {
        getApi.getAllAdministrativeDeptName().then(response => {
          this.tableData = response;
          this.multiSelection = [];
        })
      } else if (this.viewname === "two") {
        getApi.getAllSupervisionDeptName().then(response => {
          this.tableData = response;
          this.multiSelection = [];
        })
      } else if (this.viewname === "three") {
        getApi.getAllOwnerProjectDeptName().then(response => {
          this.tableData = response;
          this.multiSelection = [];
        })
      } else if (this.viewname === "four") {
        getApi.getAllConstructProjectDeptName().then(response => {
          this.tableData = response;
          this.multiSelection = [];
        })
      } else if (this.viewname === "five") {
        getApi.getAllAdminProjectDeptName().then(response => {
          this.tableData = response;
          this.multiSelection = [];
        })
      }
    },
    //新增信息
    handleNewInfoClick() {
      this.addFlag = true;
      this.addForm.addName = "";
    },
    //取消新增
    cancelAdd() {
      this.addFlag = false;
    },
    //表格删除单条
    deleteOneLine(row) {
      this.$confirm("确认删除该条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          if (this.viewname === "one") {
            deleteApi.deleteAdministrativeDeptById(row.id).then(response => {
              this.viewChange();
            })
          } else if (this.viewname === "two") {
            deleteApi.deleteSupervisionDeptById(row.id).then(response => {
              this.viewChange();
            })
          } else if (this.viewname === "three") {
            deleteApi.deleteOwnerProjectDeptById(row.id).then(response => {
              this.viewChange();
            })
          } else if (this.viewname === "four") {
            deleteApi.deleteConstructProjectDeptById(row.id).then(response => {
              this.viewChange();
            })
          } else if (this.viewname === "five") {
            deleteApi.deleteAdminProjectDeptById(row.id).then(response => {
              this.viewChange();
            })
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });

    },
    //选中全删除
    handleDeleteInfoClick() {
      this.$confirm("确认删除所有选中条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.multiSelection.forEach(row => {
            if (this.viewname === "one")
              deleteApi.deleteAdministrativeDeptById(row.id)
            else if (this.viewname === "two")
              deleteApi.deleteSupervisionDeptById(row.id)
            else if (this.viewname === "three")
              deleteApi.deleteOwnerProjectDeptById(row.id)
            else if (this.viewname === "four")
              deleteApi.deleteConstructProjectDeptById(row.id)
            else if (this.viewname === "five")
              deleteApi.deleteAdminProjectDeptById(row.id)
          })
          this.viewChange();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });

    },
    //列表选中
    handleSelectionChange(val) {
      this.multiSelection = val;
    },
  }
};
</script>

<style lang="less" scoped>
.box-card {
  min-width: 1500px;
  margin: 20px 50px;
  padding: 0 20px;
}
.add-ruleForm {
  min-width: 250px;
  max-width: 500px;
}
// background: black;
.containerHeaderDiv2 {
  // margin-right: 100px;
  // background: white;
  display: flex;
  flex-direction: row-reverse;
  min-width: 500px;
  .nameInput {
    min-width: 100px;
    max-width: 200px;
  }
  .inputTag {
    font-size: 14px;
    line-height: 40px;
    min-width: 70px;
  }
}

.inputCombine {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  min-width: 250px;
  max-width: 500px;
  .inputTag {
    font-size: 14px;
    line-height: 40px;
    min-width: 90px;
  }
}

.secondButtonDiv {
  margin-top: 20px;
  min-width: 250px;
  max-width: 500px;
  // background: black;
  .save {
    margin-left: 68%;
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

