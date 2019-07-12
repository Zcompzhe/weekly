<template>
  <el-card class="box-card">
    <el-tabs v-model="viewname" class="cardTab">
      <el-tab-pane label="监理单位信息管理" name="first" class="tabPane">
        <el-container class="paneContainer">
          <el-header clas="containerHeader">
            <el-row :gutter="20">
              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleNewInfoClick()">新增信息</el-button>
                </div>
              </el-col>

              <!-- <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleEditInfoClick()">编辑信息</el-button>
                </div>
              </el-col>-->

              <el-col :span="2">
                <div>
                  <el-button type="primary" @click="handleDeleteInfoClick()">删除信息</el-button>
                </div>
              </el-col>

              <el-col :span="6">
                <div class="containerHeaderDiv2">
                  <el-button type="primary" @click="handleSearchClick(false)">搜索</el-button>
                  <el-input v-model="adminName" class="nameInput" placeholder="请输入建设管理单位"></el-input>
                  <span class="inputTag">建设管理单位</span>
                </div>
              </el-col>
            </el-row>
            <hr />
          </el-header>

          <el-main clas="containerMain">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column type="index" label="序号" align="center" width="50"></el-table-column>
              <el-table-column prop="name" label="建设管理单位" align="center" width="300"></el-table-column>

              <el-table-column width="100" label="操作" align="center">
                <template slot-scope="scope">
                  <el-button type="text" @click="modifyAdminInfo(scope.row)">修改</el-button>
                  <el-button type="text" @click="deleteAdminInfo(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-tab-pane>
    </el-tabs>

    <el-dialog :modal="false" title="添加监理单位信息" :visible.sync="addAdminInfo" width="30%">
      <el-row :gutter="10">
        <el-col :span="8">
          <div class="bar">
            <div class="title">建设管理单位</div>
            <el-input
              v-model="addAdminName"
              class="nameInput"
              placeholder="请输入建设管理单位"
              style="min-width:260px"
            ></el-input>
          </div>
        </el-col>
      </el-row>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addAdminInfo = false">取 消</el-button>
        <el-button type="primary" @click="addAdmin">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog :modal="false" title="修改监理单位信息" :visible.sync="updateAdminInfo" width="30%">
      <el-row :gutter="10">
        <el-col :span="8">
          <div class="bar">
            <div class="title">建设管理单位</div>
            <el-input
              v-model="updateAdminName"
              class="nameInput"
              placeholder="请输入建设管理单位"
              style="min-width:260px"
            ></el-input>
          </div>
        </el-col>
      </el-row>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updateAdminInfo = false">取 消</el-button>
        <el-button type="primary" @click="updateAdmin">确 定</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
import { error } from "util";
export default {
  data() {
    return {
      adminName: "",
      updateAdminName: "",
      addAdminName: "",
      addAdminInfo: false,
      updateAdminInfo: false,
      deptToCascaderProps: {
        value: "name",
        label: "name",
        children: "children"
      },
      viewname: "first",
      searchInput: "",
      tableData: [],
      selectionData: [],
      multipleSelection: [],

      newCardShowFlag: false,
      editCardShowFlag: false
    };
  },
  created: function() {
    console.log("进入客户管理");
    //获取部门信息
    this.$axios
      .get(`${window.$config.HOST2}/getDeptTree`)
      .then(response => {
        this.selectionData = response.data;
      })
      .catch(error => {
        this.$message.error("部门信息加载失败!");
        console.log("部门信息加载失败!");
      });
    //加载默认客户信息
    this.$axios
      .get(`${window.$config.HOST}/baseInfoManagement/getCustomer`, {
        params: { name: undefined }
      })
      .then(response => {
        this.tableData = response.data;
      })
      .catch(error => {
        this.$message.error("加载失败");
      });
  },
  methods: {
    deleteAdminInfo(row) {
      this.$axios
        .delete(`${window.$config.HOST}/baseInfoManagement/deleteCustomer`, {
          params: { id: row.id }
        })
        .then(response => {
          if (response.data < 0) {
            this.$message.error(element.name + "删除失败");
            console.log(element.name + "删除失败");
          } else {
            console.log(element.name + "删除成功");
            this.$message({
              type: "success",
              message: element.name + "删除成功"
            });
            var i = this.tableData.indexOf(element);
            this.tableData.splice(i, 1);
          }
        })
        .catch(error => {
          this.$message.error(element.name + "删除失败");
          console.log(element.name + "删除失败");
        });
    },
    handleDeleteInfoClick() {
      if (this.multipleSelection.length === 0) {
        this.$message({
          message: "至少选择一条监理单位删除",
          type: "warning"
        });
        return;
      } else {
        this.multipleSelection.forEach(element => {
          this.$axios
            .delete(
              `${window.$config.HOST}/baseInfoManagement/deleteCustomer`,
              {
                params: { id: element.id }
              }
            )
            .then(response => {
              if (response.data < 0) {
                this.$message.error(element.name + "删除失败");
                console.log(element.name + "删除失败");
              } else {
                console.log(element.name + "删除成功");
                this.$message({
                  type: "success",
                  message: element.name + "删除成功"
                });
                var i = this.tableData.indexOf(element);
                this.tableData.splice(i, 1);
              }
            })
            .catch(error => {
              this.$message.error(element.name + "删除失败");
              console.log(element.name + "删除失败");
            });
        });
      }

      // this.tableData = this.multipleSelection;
    },

    updateAdmin() {
      if (this.updateAdminName === "") {
        this.$message({
          message: "请输入建设管理单位！",
          type: "warning"
        });
        return;
      }

      this.$axios
        .get(`${window.$config.HOST}/baseInfoManagement/updateAdmin`, {
          params: {
            name: this.updateAdminName
          }
        })
        .then(response => {
          if (response.data.returnBackCode > 0) {
            (this.updateAdminName = ""),
              (this.updateAdminInfo = false),
              this.$message({
                message: "修改成功！",
                type: "success"
              });
          }
        })
        .catch(error => {
          this.$message.error("发生未知的错误");
        });
    },
    addAdmin() {
      if (this.addAdminName === "") {
        this.$message({
          message: "请输入建设管理单位！",
          type: "warning"
        });
        return;
      }

      this.$axios
        .get(`${window.$config.HOST}/baseInfoManagement/addAdmin`, {
          params: {
            name: this.addAdminName
          }
        })
        .then(response => {
          if (response.data.returnBackCode > 0) {
            (this.addAdminName = ""),
              (this.addAdminInfo = false),
              this.$message({
                message: "添加成功！",
                type: "success"
              });
          }
        })
        .catch(error => {
          this.$message.error("发生未知的错误");
        });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSearchClick(allFlag) {
      this.$axios
        .get(`${window.$config.HOST}/baseInfoManagement/getCustomer`, {
          params: {
            name: this.adminName
          }
        })
        .then(response => {
          this.tableData = response.data;
        })
        .catch(error => {
          this.$message.error("加载失败");
        });
    },
    handleNewInfoClick() {
      this.addAdminInfo = true;
    },
    modifyAdminInfo(row) {
      (this.updateAdminInfo = true), (this.updateAdminName = row.name);
    }
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

