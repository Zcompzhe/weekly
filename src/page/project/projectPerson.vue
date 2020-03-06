<template>
  <div class="body">
      <el-card class="box-card">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="bar">
              <div class="title" style="margin-left:49%;font-size:18px">所属建管单位责任人信息</div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="项目经理" prop="projectManager" placeholder="请选择项目经理">
                <el-select
                  v-model="ruleForm.projectManager"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in projectManagerOptions"
                    :key="item.name"
                    :label="item.name"
                    :value="item.name"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="安全专职" prop="safetyStaff" placeholder="请选择安全专职">
                <el-select
                  v-model="ruleForm.safetyStaff"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in safetyStaffOptions"
                    :key="item.name"
                    :label="item.name"
                    :value="item.name"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="质量专职" prop="qualityStaff" placeholder="请选择质量专职">
                <el-select
                  v-model="ruleForm.qualityStaff"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in qualityStaffOptions"
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
          <el-col :span="20">
            <div class="bar">
              <div class="title" style="margin-left:49%;font-size:18px">监理单位责任人信息</div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="总监/总监代表" prop="chiefInspector" placeholder="请选择总监/总监代表">
                <el-select
                  v-model="ruleForm.chiefInspector"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in chiefInspectorOptions"
                    :key="item.name"
                    :label="item.name"
                    :value="item.name"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="专业监理" prop="professionalSupervisor" placeholder="请选择专业监理">
                <el-select
                  v-model="ruleForm.professionalSupervisor"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in professionalSupervisorOptions"
                    :key="item.name"
                    :label="item.name"
                    :value="item.name"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="bar">
              <el-form-item label="安全监理" prop="safetySupervisor" placeholder="请选择安全监理">
                <el-select
                  v-model="ruleForm.safetySupervisor"
                  clearable
                  placeholder="请选择"
                  style="min-width:200px"
                >
                  <el-option
                    v-for="item in safetySupervisorOptions"
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
          <el-col :span="20">
            <div class="Mbutton">
              <el-col :span="6">
                <el-button type="primary" @click="addProject">确认添加</el-button>
              </el-col>
              <el-col :span="6">
                <el-button type="primary" @click="goback">取消</el-button>
              </el-col>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { POINT_CONVERSION_COMPRESSED } from "constants";
export default {
  data() {
    return {
        ruleForm:[],
        rules:[],
    };
  },

  created() {
  },

  methods: {
    // 改变日期格式
    changeDate(date) {
      if (!date) {
        return undefined;
      } else {
        // var date = new Date(date);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        var d = date.getDate();
        d = d < 10 ? "0" + d : d;
        return y + "-" + m + "-" + d;
      }
    },
    goback() {
      this.$router.push({
        path: `/project/projectInfoMana`,
        query: {}
      });
    },
    
    
  }
};
</script>

<style lang="less" scoped>
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