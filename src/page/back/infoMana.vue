<template>
  <el-card class="box-card">
    <el-tabs v-model="viewname" class="cardTab">
      <el-tab-pane label="建设管理单位" name="one" class="tabPane">
        <el-container class="paneContainer">
          <el-header clas="containerHeader">
            <el-row :gutter="20">
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleNewInfoClickOne()">新增信息</el-button>
                </div>
              </el-col>
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleDeleteInfoClickOne()">删除信息</el-button>
                </div>
              </el-col>
            </el-row>
          </el-header>

          <el-main clas="containerMain">
            <el-table ref="multipleTable" :data="tableDataOne" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChangeOne">
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column type="index" label="序号" align="center" width="50"></el-table-column>
              <el-table-column prop="name" label="所属建管单位" align="center"></el-table-column>
              <el-table-column width="100" label="操作" align="center">
                <template slot-scope="scope">
                  <el-button type="text" @click="deleteOneLineOne(scope.row)">删除</el-button>
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
                  <el-button type="primary" @click="handleNewInfoClickTwo()">新增信息</el-button>
                </div>
              </el-col>
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleDeleteInfoClickTwo()">删除信息</el-button>
                </div>
              </el-col>
            </el-row>
          </el-header>

          <el-main clas="containerMain">
            <el-table ref="multipleTable" :data="tableDataTwo" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChangeTwo">
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column type="index" label="序号" align="center" width="50"></el-table-column>
              <el-table-column prop="name" label="监理单位" align="center"></el-table-column>
              <el-table-column width="100" label="操作" align="center">
                <template slot-scope="scope">
                  <el-button type="text" @click="deleteOneLineTwo(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="施工单位" name="three" class="tabPane">
        <el-container class="paneContainer">
          <el-header clas="containerHeader">
            <el-row :gutter="20">
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleNewInfoClickThree()">新增信息</el-button>
                </div>
              </el-col>
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleDeleteInfoClickThree()">删除信息</el-button>
                </div>
              </el-col>
            </el-row>
          </el-header>

          <el-main clas="containerMain">
            <el-table ref="multipleTable" :data="tableDataThree" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChangeThree">
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column type="index" label="序号" align="center" width="50"></el-table-column>
              <el-table-column prop="name" label="施工项目部" align="center"></el-table-column>
              <el-table-column width="100" label="操作" align="center">
                <template slot-scope="scope">
                  <el-button type="text" @click="deleteOneLineThree(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <el-dialog :modal="false" title="添加信息" :visible.sync="addFlagOne" width="600px">
      <el-form :model="addFormOne" label-position="left" ref="addFormOne" :rules="addFormRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="条目名称" prop="addName" placeholder="条目名称">
                <el-input v-model="addFormOne.addName" clearable :rows="1" placeholder="请输入" style="min-width:400px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"></el-col>
          <el-col :span="4">
            <el-button type="primary" @click="submitAddOne">确定</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="cancelAdd">取消</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
    <el-dialog :modal="false" title="添加信息" :visible.sync="addFlagTwo" width="600px">
      <el-form :model="addFormTwo" label-position="left" ref="addFormTwo" :rules="addFormRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="条目名称" prop="addName" placeholder="条目名称">
                <el-input v-model="addFormTwo.addName" clearable :rows="1" placeholder="请输入" style="min-width:400px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"></el-col>
          <el-col :span="4">
            <el-button type="primary" @click="submitAddTwo">确定</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="cancelAdd">取消</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
    <el-dialog :modal="false" title="添加信息" :visible.sync="addFlagThree" width="600px">
      <el-form :model="addFormThree" label-position="left" ref="addFormThree" :rules="addFormRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="条目名称" prop="addName" placeholder="条目名称">
                <el-input v-model="addFormThree.addName" clearable :rows="1" placeholder="请输入" style="min-width:400px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"></el-col>
          <el-col :span="4">
            <el-button type="primary" @click="submitAddThree">确定</el-button>
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
      //控制间隔
      num: 0,
      //添加弹窗
      addFlagOne: false,
      addFlagTwo: false,
      addFlagThree: false,
      addFormOne: {
        addName: "",
      },
      addFormTwo: {
        addName: "",
      },
      addFormThree: {
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
      tableDataOne: [],
      tableDataTwo: [],
      tableDataThree: [],
      multiSelectionOne: [],
      multiSelectionTwo: [],
      multiSelectionThree: [],
    };
  },
  created: function () {
    getApi.getAllAdministrativeDeptName().then(response => {
      this.tableDataOne = response;
      this.multiSelectionOne = [];
    })
    getApi.getAllSupervisionDeptName().then(response => {
      this.tableDataTwo = response;
      this.multiSelectionTwo = [];
    })
    getApi.getAllConstructDeptName().then(response => {
      this.tableDataThree = response;
      this.multiSelectionThree = [];
    })
  },
  methods: {
    //提交新增表格
    submitAddOne() {
      this.$refs["addFormOne"].validate(valid => {
        if (valid) {
          addApi.addAdministrativeDept(this.addFormOne.addName).then(response => {
            this.addFlagOne = false;
            this.viewChange();
          })
        }
      });
    },
    submitAddTwo() {
      this.$refs["addFormTwo"].validate(valid => {
        if (valid) {
          addApi.addSupervisionDept(this.addFormTwo.addName).then(response => {
            this.addFlagTwo = false;
            this.viewChange();
          })
        }
      });
    },
    submitAddThree() {
      this.$refs["addFormThree"].validate(valid => {
        if (valid) {
          addApi.addConstructDept(this.addFormThree.addName).then(response => {
            this.addFlagThree = false;
            this.viewChange();
          })
        }
      });
    },
    //视图切换
    viewChange() {
      if (this.viewname === "one") {
        getApi.getAllAdministrativeDeptName().then(response => {
          this.tableDataOne = response;
          this.multiSelectionOne = [];
        })
      } else if (this.viewname === "two") {
        getApi.getAllSupervisionDeptName().then(response => {
          this.tableDataTwo = response;
          this.multiSelectionTwo = [];
        })
      } else if (this.viewname === "three") {
        getApi.getAllConstructDeptName().then(response => {
          this.tableDataThree = response;
          this.multiSelectionThree = [];
        })
      }

    },
    //新增信息
    handleNewInfoClickOne() {
      this.addFlagOne = true;
      this.addFormOne.addName = "";
    },
    handleNewInfoClickTwo() {
      this.addFlagTwo = true;
      this.addFormTwo.addName = "";
    },
    handleNewInfoClickThree() {
      this.addFlagThree = true;
      this.addFormThree.addName = "";
    },
    //取消新增
    cancelAdd() {
      this.addFlagOne = false;
      this.addFlagTwo = false;
      this.addFlagThree = false;
    },
    //表格删除单条
    deleteOneLineOne(row) {
      this.$confirm("确认删除该条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteApi.deleteAdministrativeDeptById(row.id).then(response => {
            this.viewChange();
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    deleteOneLineTwo(row) {
      this.$confirm("确认删除该条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteApi.deleteSupervisionDeptById(row.id).then(response => {
            this.viewChange();
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    deleteOneLineThree(row) {
      this.$confirm("确认删除该条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteApi.deleteConstructDeptById(row.id).then(response => {
            this.viewChange();
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    //选中全删除
    handleDeleteInfoClickOne() {
      this.$confirm("确认删除所有选中条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.multiSelectionOne.forEach(row => {
            deleteApi.deleteAdministrativeDeptById(row.id).then(res => {
              this.viewChange();
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
    handleDeleteInfoClickTwo() {
      this.$confirm("确认删除所有选中条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.multiSelectionTwo.forEach(row => {
            deleteApi.deleteSupervisionDeptById(row.id).then(res => {
              this.viewChange();
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
    handleDeleteInfoClickThree() {
      this.$confirm("确认删除所有选中条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.multiSelectionThree.forEach(row => {
            deleteApi.deleteConstructDeptById(row.id).then(res => {
              this.viewChange();
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

    //列表选中
    handleSelectionChangeOne(val) {
      this.multiSelectionOne = val;
    },
    handleSelectionChangeTwo(val) {
      this.multiSelectionTwo = val;
    },
    handleSelectionChangeThree(val) {
      this.multiSelectionThree = val;
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

