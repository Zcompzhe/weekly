<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="userInfo" label-position="left" ref="userInfo" :rules="userInfoRule" label-width="140px" class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="姓名" prop="name" placeholder="周报开始日期">
                <el-input v-model="userInfo.name" disabled :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="用户名" prop="username" placeholder="周报开始日期">
                <el-input v-model="userInfo.username" disabled :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="联系方式" prop="phoneNumber" placeholder="项目名称">
                <el-input v-model="userInfo.phoneNumber" disabled :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>

        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="部门" prop="deptName" placeholder="项目名称">
                <el-input v-model="userInfo.deptName" disabled :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="职务" prop="positionName" placeholder="项目名称">
                <el-input v-model="userInfo.positionName" disabled :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="bar">
              <el-form-item label="是否在岗" prop="onTheJobStr" placeholder="项目名称">
                <el-input v-model="userInfo.onTheJobStr" disabled :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
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
              <el-button type="primary" style="margin-right: 20px" @click="updateInfoPanelOpen()">修改信息</el-button>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="bar">
              <el-button type="primary" style="margin-right: 20px" @click="updatePassword()">修改密码</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <el-dialog :modal="false" title="修改信息" :visible.sync="updateInfoFlag" width="1400px">
        <el-form :model="updateInfo" label-position="left" ref="updateInfo" :rules="updateInfoRule" label-width="100px" class="demo-ruleForm">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="bar">
                <el-form-item label="姓名" prop="name" placeholder="周报开始日期">
                  <el-input v-model="updateInfo.name" disabled :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
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
                <el-form-item label="部门" prop="deptName" placeholder="项目名称">
                  <el-input v-model="updateInfo.deptName" disabled :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="bar">
                <el-form-item label="职务" prop="positionName" placeholder="项目名称">
                  <el-input v-model="updateInfo.positionName" disabled :rows="1" placeholder="请选择" style="min-width:300px"></el-input>
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

      <el-dialog :modal="false" title="修改密码" :visible.sync="updatePasswordFlag" width="600px">
        <el-form :model="updatePSW" label-position="left" ref="updatePSW" :rules="updatePSWRule" label-width="100px" class="demo-ruleForm">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="bar">
                <el-form-item label="新密码" prop="passwordOne" placeholder="周报开始日期">
                  <el-input v-model="updatePSW.passwordOne" clearable :rows="1" show-password style="min-width:300px"></el-input>
                </el-form-item>
              </div>
            </el-col>

          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="bar">
                <el-form-item label="密码确认" prop="passwordTwo" placeholder="项目名称">
                  <el-input v-model="updatePSW.passwordTwo" clearable :rows="1" show-password style="min-width:300px"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-bottom:10px">
            <el-col :span="5">
              <div class="bar">
              </div>
            </el-col>
            <el-col :span="6">
              <div class="bar">
                <el-button type="primary" style="margin-right: 20px" @click="submitUpdatePWD()">确认修改</el-button>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="bar">
                <el-button type="primary" style="margin-right: 20px" @click="cancelUpdatePSW()">取消修改</el-button>
              </div>
            </el-col>
          </el-row>
        </el-form>
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
        deptName: "",
        positionName: "",
        onTheJob: "",


        options: {
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
        deptName: [
          { required: true, message: '请选择部门信息', trigger: 'change' }
        ],
        positionName: [
          { required: true, message: '请选择职位', trigger: 'change' }
        ],
        onTheJob: [
          { required: true, message: '请选择是否在岗', trigger: 'change' }
        ],
      },
      //修改密码
      updatePasswordFlag: false,
      updatePSW: {
        id: "",
        passwordOne: "",
        passwordTwo: "",
      },
      updatePSWRule: {
        passwordOne: [
          { required: true, message: '请输入新密码！', trigger: 'change' }
        ],
        passwordTwo: [
          {
            required: true,
            trigger: "change",
            validator: (rule, value, callback) => {
              if (value != "" && value != null) {
                if (
                  this.updatePSW.passwordOne != value
                ) {
                  callback(new Error("两次输入的密码不一样，请重新输入！"));
                } else {
                  callback();
                }
              } else {
                callback(new Error("请输入确认密码！"));
              }
            }
          }
        ],
      },
      //个人信息
      userInfo: {
      },
      userInfoRule: {},
    };
  },

  created: function () {
    this.searchMe();
  },
  methods: {
    //获取自身信息
    searchMe() {
      searchApi.me().then(response => {
        this.userInfo = response;
        this.meTable = response;
        if (this.userInfo.onTheJob === false) this.userInfo.onTheJobStr = "否";
        else if (this.userInfo.onTheJob === true) this.userInfo.onTheJobStr = "是";
      })
    },
    //修改信息窗口打开
    updateInfoPanelOpen() {
      this.updateInfo.id = this.userInfo.id;
      this.updateInfo.name = this.userInfo.name;
      this.updateInfo.username = this.userInfo.username;
      this.updateInfo.phoneNumber = this.userInfo.phoneNumber;
      this.updateInfo.positionName = this.userInfo.positionName;
      this.updateInfo.deptName = this.userInfo.deptName;
      this.updateInfo.onTheJob = this.userInfo.onTheJob;
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
          }).then(response => {
            this.updateInfoFlag = false;
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
              this.searchMe();
              if (this.updateInfo.username != this.meTable.username) {
                const that = this;
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("token-expired");
                that.$router.push("/login");
              }

            }
          })
        }
      });
    },
    //修改密码
    updatePassword() {
      this.updatePSW.id = this.userInfo.id;
      this.updatePSW.passwordOne = "";
      this.updatePSW.passwordTwo = "";
      this.updatePasswordFlag = true;
    },
    cancelUpdatePSW() {
      this.updatePasswordFlag = false;
    },
    //确认修改信息
    submitUpdatePWD() {
      this.$refs["updatePSW"].validate(valid => {
        if (valid) {
          userApi.updateSGCCStaff({
            id: this.updatePSW.id,
            password: this.updatePSW.passwordOne,
          })
            .then(response => {
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
              this.searchMe();
              this.updatePasswordFlag = false;
            })

        }
      });
    },
  }
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
