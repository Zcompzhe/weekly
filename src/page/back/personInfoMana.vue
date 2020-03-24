<template>
  <el-card class="box-card">
    <el-form :model="searchTable" label-position="left" ref="searchTable" :rules="searchTableRule" label-width="100px" class="demo-ruleForm">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <el-form-item label="部门" prop="deptId" placeholder="周报开始日期">
              <el-select v-model="searchTable.deptId" clearable placeholder="请选择" style="min-width:350px">
                <el-option v-for="item in searchTable.options.deptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <el-form-item label="是否在岗" prop="onTheJob" placeholder="项目名称">
              <el-select v-model="searchTable.onTheJob" clearable placeholder="请选择" style="min-width:350px">
                <el-option v-for="item in searchTable.options.onTheJobOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="3">
          <div>
            <el-button type="primary" style="margin-bottom:20px" @click="searchAllStaff(1)">搜索</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <hr>
    <br><br>

    <el-row :gutter="20">
      <el-col :span="3">
        <div>
          <el-button type="primary" style="margin-bottom:20px" @click="addInfoPanel(1)">新增人员信息</el-button>
        </div>
      </el-col>
    </el-row>

    <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%">

      <el-table-column type="index" label="序号" align="center" width="50"></el-table-column>
      <el-table-column prop="name" label="姓名" align="center"></el-table-column>
      <el-table-column prop="deptName" label="部门" align="center"></el-table-column>
      <el-table-column prop="positionName" label="职务" align="center"></el-table-column>
      <el-table-column prop="username" label="用户名" align="center"></el-table-column>
      <el-table-column prop="phoneNumber" label="联系方式" align="center"></el-table-column>
      <el-table-column prop="onTheJobStr" label="是否在岗" align="center"></el-table-column>
      <el-table-column width="250" label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="updateInfoPanel(scope.row)">修改信息</el-button>
          <el-button type="text" @click="initPSW(scope.row)">重置密码</el-button>
          <el-button type="text" @click="deleteUserInfo(scope.row)">删除信息</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pagination.currentPage" :page-sizes="pagination.pageSizes" :page-size="pagination.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total"></el-pagination>
    </div>

    <el-dialog :modal="false" title="修改人员信息" :visible.sync="updateInfoFlag" width="1400px">
      <el-form :model="updateInfo" label-position="left" ref="updateInfo" :rules="updateInfoRule" label-width="100px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="姓名" prop="name" placeholder="周报开始日期">
                <el-input v-model="updateInfo.name" clearable :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="用户名" prop="username" placeholder="周报开始日期">
                <el-input v-model="updateInfo.username" clearable :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="联系方式" prop="phoneNumber" placeholder="项目名称">
                <el-input v-model="updateInfo.phoneNumber" clearable :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>

        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="部门" prop="deptId" placeholder="项目名称">
                <el-select v-model="updateInfo.deptId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in updateInfo.options.deptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="职务" prop="positionId" placeholder="项目名称">

                <el-select v-model="updateInfo.positionId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in updateInfo.options.positionIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="是否在岗" prop="onTheJob" placeholder="项目名称">
                <el-select v-model="updateInfo.onTheJob" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in updateInfo.options.onTheJobOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-bottom:10px">
          <el-col :span="8">
            <div class="bar">

            </div>
          </el-col>
          <el-col :span="4">
            <div class="bar">
              <el-button type="primary" style="margin-right: 20px" @click="submitUpdateInfo()">确认修改</el-button>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="bar">
              <el-button type="primary" style="margin-right: 20px" @click="cancelUpdateInfo()">取消修改</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog :modal="false" title="新增人员信息" :visible.sync="addInfoFlag" width="1400px">
      <el-form :model="addInfo" label-position="left" ref="addInfo" :rules="addInfoRule" label-width="100px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="姓名" prop="name" placeholder="周报开始日期">
                <el-input v-model="addInfo.name" clearable :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="用户名" prop="username" placeholder="周报开始日期">
                <el-input v-model="addInfo.username" clearable :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="联系方式" prop="phoneNumber" placeholder="项目名称">
                <el-input v-model="addInfo.phoneNumber" clearable :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>

        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="部门" prop="deptId" placeholder="项目名称">
                <el-select v-model="addInfo.deptId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in addInfo.options.deptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="职务" prop="positionId" placeholder="项目名称">

                <el-select v-model="addInfo.positionId" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in addInfo.options.positionIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="是否在岗" prop="onTheJob" placeholder="项目名称">
                <el-select v-model="addInfo.onTheJob" clearable placeholder="请选择" style="min-width:300px">
                  <el-option v-for="item in addInfo.options.onTheJobOptions" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-bottom:10px">
          <el-col :span="8">
            <div class="bar">

            </div>
          </el-col>
          <el-col :span="4">
            <div class="bar">
              <el-button type="primary" style="margin-right: 20px" @click="submitaddInfo()">确认新增</el-button>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="bar">
              <el-button type="primary" style="margin-right: 20px" @click="canceladdInfo()">取消添加</el-button>
            </div>
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
import * as userApi from "@/api/userApi.js";
export default {
  data() {
    return {
      meTable: {},
      //修改信息控制
      updateInfoFlag: false,
      updateInfo: {
        id: "",
        name: "",
        username: "",
        phoneNumber: "",
        deptId: "",
        positionId: "",
        onTheJob: "",


        options: {
          deptIdOptions: [],
          positionIdOptions: [],
          onTheJobOptions: [
            {
              value: true,
              name: "是"
            }, {
              value: false,
              name: "否"
            },
          ]
        }
      },
      updateInfoRule: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'change' }
        ],
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' }
        ],
        phoneNumber: [
          { required: true, message: '请输入手机号码', trigger: 'change' }
        ],
        deptId: [
          { required: true, message: '请选择部门信息', trigger: 'change' }
        ],
        positionId: [
          { required: true, message: '请选择职位', trigger: 'change' }
        ],
        onTheJob: [
          { required: true, message: '请选择是否在岗', trigger: 'change' }
        ],
      },
      //添加信息控制
      addInfoFlag: false,
      addInfo: {
        id: "",
        name: "",
        username: "",
        phoneNumber: "",
        deptId: "",
        positionId: "",
        onTheJob: "",


        options: {
          deptIdOptions: [],
          positionIdOptions: [],
          onTheJobOptions: [
            {
              value: true,
              name: "是"
            }, {
              value: false,
              name: "否"
            },
          ]
        }
      },
      addInfoRule: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'change' }
        ],
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' }
        ],
        phoneNumber: [
          { required: true, message: '请输入手机号码', trigger: 'change' }
        ],
        deptId: [
          { required: true, message: '请选择部门信息', trigger: 'change' }
        ],
        positionId: [
          { required: true, message: '请选择职位', trigger: 'change' }
        ],
        onTheJob: [
          { required: true, message: '请选择是否在岗', trigger: 'change' }
        ],
      },
      //搜索条件
      searchTable: {
        onTheJob: "",
        deptId: "",
        options: {
          deptIdOptions: [],
          onTheJobOptions: [
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

      searchTableRule: {},
      //页码部分
      pagination: {
        currentPage: 1,
        pageSizes: [10, 25, 50, 100],
        pageSize: 10,
        total: 0
      },
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

      //页面表格显示 
      tableData: [],
      multiSelection: [],
    };
  },
  created: function () {
    userApi.getAllSGCCDept().then(response => {
      this.searchTable.options.deptIdOptions = response.returnList[0];
      this.updateInfo.options.deptIdOptions = response.returnList[0];
      this.addInfo.options.deptIdOptions = response.returnList[0];
    });
    userApi.getAllSGCCPosition().then(response => {
      this.updateInfo.options.positionIdOptions = response.returnList[0];
      this.addInfo.options.positionIdOptions = response.returnList[0];
    });
    this.searchAllStaff(1);
  },
  methods: {
    //根据条件搜索人员
    searchAllStaff(pageNum) {
      let list = {
        deptId: this.searchTable.deptId === "" || this.searchTable.deptId === null ? undefined : this.searchTable.deptId,
        onTheJob: this.searchTable.onTheJob === "" || this.searchTable.onTheJob === null ? undefined : this.searchTable.onTheJob,
        pageNumber: pageNum - 1,
        numberOfPage: this.pagination.pageSize
      };
      userApi.getStaffInfoByCondition(list).then(response => {
        if (response.returnBackCode < 0) {
          this.$message({
            type: "error",
            message: response.returnBackInfo
          });
        } else {
          this.$message({
            type: "success",
            message: response.returnBackInfo
          });
        }
        this.tableData = response.returnList[0];
        this.tableData.forEach(ele => {
          if (ele.onTheJob === true) ele.onTheJobStr = "是";
          else if (ele.onTheJob === false) ele.onTheJobStr = "否";
        })
        this.pagination.total = response.totalNumber;
      })
    },
    //页码操控部分
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.searchAllStaff(1);
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val;
      this.searchAllStaff(val);
    },
    //删除用户信息
    deleteUserInfo(row) {
      this.$confirm("确认删除该条目？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          userApi.deleteSGCCStaffById(row.id).then(response => {
            if (response.returnBackCode < 0) {
              this.$message({
                type: "error",
                message: response.returnBackInfo
              });
            } else {
              this.$message({
                type: "success",
                message: response.returnBackInfo
              });
            }
            this.searchAllStaff(this.pagination.currentPage);
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //修改行信息
    updateInfoPanel(row) {
      this.meTable = row;
      this.updateInfo.id = row.id;
      this.updateInfo.name = row.name;
      this.updateInfo.username = row.username;
      this.updateInfo.phoneNumber = row.phoneNumber;
      this.updateInfo.positionId = row.positionId;
      this.updateInfo.deptId = row.deptId;
      this.updateInfo.onTheJob = row.onTheJob;
      this.updateInfoFlag = true;
    },
    cancelUpdateInfo() {
      this.updateInfoFlag = false;
    },
    //确认修改信息
    submitUpdateInfo() {
      this.$refs["updateInfo"].validate(valid => {
        if (valid) {

          userApi.updateSGCCStaff({
            id: this.updateInfo.id,
            phoneNumber: this.updateInfo.phoneNumber === this.meTable.phoneNumber ? undefined : this.updateInfo.phoneNumber,
            username: this.updateInfo.username === this.meTable.username ? undefined : this.updateInfo.username,
            onTheJob: this.updateInfo.onTheJob === this.meTable.onTheJob ? undefined : this.updateInfo.onTheJob,

            name: this.updateInfo.name === this.meTable.name ? undefined : this.updateInfo.name,
            deptId: this.updateInfo.deptId === this.meTable.deptId ? undefined : this.updateInfo.deptId,
            positionId: this.updateInfo.positionId === this.meTable.positionId ? undefined : this.updateInfo.positionId,
          }).then(response => {
            if (response.returnBackCode < 0) {
              this.$message({
                type: "error",
                message: response.returnBackInfo
              });
            } else {
              this.$message({
                type: "success",
                message: response.returnBackInfo
              });
            }
            this.searchAllStaff(this.pagination.currentPage);
            this.updateInfoFlag = false;
          })
        }
      });
    },

    //添加信息
    addInfoPanel(row) {
      this.addInfo.name = "";
      this.addInfo.username = "";
      this.addInfo.phoneNumber = "";
      this.addInfo.positionId = "";
      this.addInfo.deptId = "";
      this.addInfo.onTheJob = "";
      this.addInfoFlag = true;
    },
    canceladdInfo() {
      this.addInfoFlag = false;
    },
    //确认修改信息
    submitaddInfo() {
      this.$refs["addInfo"].validate(valid => {
        if (valid) {
          userApi.addSGCCStaff({
            phoneNumber: this.addInfo.phoneNumber,
            username: this.addInfo.username,
            onTheJob: this.addInfo.onTheJob,
            name: this.addInfo.name,
            deptId: this.addInfo.deptId,
            positionId: this.addInfo.positionId,
          }).then(response => {
            if (response.returnBackCode < 0) {
              this.$message({
                type: "error",
                message: response.returnBackInfo
              });
            } else {
              this.$message({
                type: "success",
                message: response.returnBackInfo
              });
            }
            this.searchAllStaff(this.pagination.currentPage);
            this.addInfoFlag = false;
          })
        }
      });
    },
    //重置密码
    initPSW(row) {
      this.$confirm("是否确认重置密码？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          userApi.initUserPassById(row.id).then(response => {
            if (response.returnBackCode < 0) {
              this.$message({
                type: "error",
                message: response.returnBackInfo
              });
            } else {
              this.$message({
                type: "success",
                message: response.returnBackInfo
              });
            }
            this.searchAllStaff(this.pagination.currentPage);
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
  }
};
</script>

<style lang="less" scoped>
.block {
  padding: 30px 0;
  text-align: center;
}
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

