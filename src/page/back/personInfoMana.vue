<template>
  <el-card class="box-card">
    <el-row :gutter="20">
      <el-col :span="3">
        <div>
          <el-button type="primary" @click="handleNewInfoClick()">新增人员信息</el-button>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <el-button type="primary" @click="handleDeleteInfoClick()">删除人员信息</el-button>
        </div>
      </el-col>
    </el-row>
    <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" label="序号" align="center" width="50"></el-table-column>
      <el-table-column prop="name" label="姓名" align="center"></el-table-column>
      <el-table-column prop="name" label="工号" align="center"></el-table-column>
      <el-table-column prop="name" label="联系方式" align="center"></el-table-column>
      <el-table-column prop="name" label="是否在岗" align="center"></el-table-column>
      <el-table-column width="100" label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="deleteOneLine(scope.row)">修改信息</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :modal="false" title="添加信息" :visible.sync="addFlag" width="600px">
      <el-form :model="addForm" label-position="left" ref="addForm" :rules="addFormRule" label-width="120px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="姓名" prop="name" placeholder="条目名称">
                <el-input v-model="addForm.name" clearable :rows="1" placeholder="请选择" style="min-width:400px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="工号" prop="staffNumber" placeholder="条目名称">
                <el-input v-model="addForm.staffNumber" clearable :rows="1" placeholder="请选择" style="min-width:400px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="联系方式" prop="phoneNumber" placeholder="条目名称">
                <el-input v-model="addForm.phoneNumber" clearable :rows="1" placeholder="请选择" style="min-width:400px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="是否在岗" prop="onTheJob" placeholder="条目名称">
                <el-select v-model="addForm.onTheJob" clearable placeholder="请选择" style="min-width:200px">
                  <el-option v-for="item in addForm.options.onTheJobOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
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
        name: "",
        staffNumber: "",
        phoneNumber: "",
        onTheJob: "",
        options: {
          onTheJobOptions: [
            {
              value: true,
              name: "是"
            },
            {
              value: false,
              name: "否"
            }
          ],
        }
      },
      addFormRule: {
        name: [
          { required: true, message: "请输入新增人员姓名！", trigger: "change" }
        ],
        staffNumber: [
          { required: true, message: "请输入新增人员工号！", trigger: "change" }
        ],
        phoneNumber: [
          { required: true, message: "请输入新增人员联系方式！", trigger: "change" }
        ],
        onTheJob: [
          { required: true, message: "请选择人员是否在岗！", trigger: "change" }
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
    this.searchPerson();
  },
  methods: {
    //获取人员信息
    //todo:接口尚未完成
    searchPerson() {
      getApi.getAllStaffName().then(res => {
        console.log(res)
      })
    },
    //提交新增表格
    submitAdd() {
      this.$refs["addForm"].validate(valid => {
        if (valid) {
          if (this.viewname === "one")
            addApi.addAdministrativeDept(this.addForm.addName).then(response => {
              this.addFlag = false;
              this.viewChange();
            })
        }
      });
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
    //选中全删除
    handleDeleteInfoClick() {
      this.$confirm("确认删除所有选中条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.multiSelection.forEach(row => {
            deleteApi.deleteAdministrativeDeptById(row.id)
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

