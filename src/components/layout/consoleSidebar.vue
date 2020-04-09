<style lang="less">
.console-sidebar {
  .el-submenu__title {
    font-size: 12px;
    height: 46px;
    line-height: 46px;
  }
  .el-submenu {
    background: #37424f;
    border-bottom: 1px solid #414d5c;
  }
  .el-submenu__icon-arrow {
    right: 40px;
    margin-top: -4px;
  }
  .el-icon-message {
    font-size: 12px;
  }
  .el-menu-item {
    font-size: 12px;
    height: 42px;
    line-height: 42px;
    &.is-active {
      border-right: none;
      color: #fff;
      background: #0099cc !important;
      &:hover {
        background: #0099cc !important;
      }
    }
  }
}
</style>
<style scoped lang="less">
.console-sidebar {
  position: fixed;
  top: 100px;
  bottom: 0px;
  background-color: #293038;
  z-index: 102;
  overflow-x: hidden;
  overflow-y: auto;
  height: auto;
  width: 240px;
  .sidebar-content {
    width: 260px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background: #293038;
    .sidebar-fold {
      height: 30px;
      width: 200px;
      background: #394555;
      color: #aeb9c2;
      text-align: left;
      padding: 0 20px;
      line-height: 30px !important;
      user-select: none;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
    }
  }
}
</style>
<template>
  <div class="console-sidebar">
    <el-menu :unique-opened="true" :router="true" :default-active="defaultActive" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" class="sidebar-content">
      <div class="sidebar-fold">版本1.0.0</div>
      <el-menu-item index="/quick">
        <i class="el-icon-message"></i>快速入门
      </el-menu-item>
      <el-submenu index="project" v-if="flag1">
        <template slot="title">
          <i class="el-icon-message"></i>
          工程项目数据管理
        </template>

        <el-menu-item index="/project/projectInfoMana" v-if="flag2">
          <i class="el-icon-document"></i>项目信息管理
        </el-menu-item>
        <el-menu-item index="/weekly/weeklyDataManage" v-if="flag3">
          <i class="el-icon-document"></i>周计划（周报）数据管理
        </el-menu-item>
        <!-- <el-menu-item index="/weekly/exportWeekly">
          <i class="el-icon-document"></i>周计划（周报）数据导出
        </el-menu-item> -->
      </el-submenu>

      <el-submenu index="supervision" v-if="flag4">
        <template slot="title">
          <i class="el-icon-message"></i>
          安监督查管理
        </template>

        <el-menu-item index="/supervision/supervisionMana" v-if="flag5"> 
          <i class="el-icon-document"></i>督查方案设计
        </el-menu-item>
        <el-menu-item index="/supervision/supervisionResult" v-if="flag6">
          <i class="el-icon-document"></i>督查结果管理
        </el-menu-item>
        <el-menu-item index="/rectification/rectificationFeedback" v-if="flag8">
          <i class="el-icon-document"></i>整改情况反馈
        </el-menu-item>
      </el-submenu>

      <!-- <el-submenu index="rectificationFeedback" v-if="flag7">
        <template slot="title">
          <i class="el-icon-message"></i>
          督查整改反馈
        </template>

        <el-menu-item index="/rectification/rectificationFeedback" v-if="flag8">
          <i class="el-icon-document"></i>整改情况反馈
        </el-menu-item>

      </el-submenu> -->

      <el-submenu index="risk" v-if="flag9">
        <template slot="title">
          <i class="el-icon-message"></i>
          工程风险管理
        </template>

        <el-menu-item index="/risk/externalRiskMana" v-if="flag10">
          <i class="el-icon-document"></i>动态风险计算
        </el-menu-item>
      </el-submenu>
      <el-submenu index="approve" v-if="flag11">
        <template slot="title">
          <i class="el-icon-message"></i>
          周计划信息核准
        </template>
        <el-menu-item index="/weeklyCheck/dayWorkCheck" v-if="flag13">
          <i class="el-icon-document"></i>当日作业进度核准
        </el-menu-item>
        <el-menu-item index="/weeklyCheck/weeklyApproved" v-if="flag12">
          <i class="el-icon-document"></i>周计划准确度展示
        </el-menu-item>
      </el-submenu>

      <el-submenu index="safetyResponsibility" v-if="flag14">
        <template slot="title">
          <i class="el-icon-message"></i>
          安全责任量化考核
        </template>

        <el-menu-item index="/safetyResponsibility/personCharge" v-if="flag15">
          <i class="el-icon-document"></i>督查问题定责
        </el-menu-item>
        <el-menu-item index="/safetyResponsibility/quantitative" v-if="flag16">
          <i class="el-icon-document"></i>量化考核排名
        </el-menu-item>
      </el-submenu>
      <el-submenu index="user" v-if="flag17">
        <template slot="title">
          <i class="el-icon-message"></i>
          个人信息管理
        </template>

        <el-menu-item index="/infoMana/userInfo" v-if="flag18">
          <i class="el-icon-document"></i>用户信息
        </el-menu-item>
      </el-submenu>
      <el-submenu index="exception">
        <template slot="title" v-if="flag19">
          <i class="el-icon-message"></i>
          系统运行状态
        </template>

        <el-menu-item index="/exception/exception" v-if="flag20">
          <i class="el-icon-document"></i>系统当前运行状态
        </el-menu-item>
      </el-submenu>

      <el-submenu index="personMana" v-if="flag21">
        <template slot="title">
          <i class="el-icon-message"></i>
          人员信息管理
        </template>

        <el-menu-item index="/back/personInfoMana" v-if="flag22">
          <i class="el-icon-document"></i>公司人员信息管理
        </el-menu-item>
      </el-submenu>

      <el-submenu index="back" v-if="flag23">
        <template slot="title">
          <i class="el-icon-message"></i>
          基本信息管理
        </template>

        <el-menu-item index="/back/infoMana" v-if="flag24">
          <i class="el-icon-document"></i>单位/部门信息管理
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import * as getApi from "@/api/getApi.js";
export default {
  data() {
    return {
      pageList: [],
      //全显示flag
      // flag1:true,
      // flag2:true,
      // flag3:true,
      // flag4:true,
      // flag5:true,
      // flag6:true,
      // flag7:true,
      // flag8:true,
      // flag9:true,
      // flag10:true,
      // flag11:true,
      // flag12:true,
      // flag13:true,
      // flag14:true,
      // flag15:true,
      // flag16:true,
      // flag17:true,
      // flag18:true,
      // flag19:true,
      // flag20:true,
      // flag21:true,
      // flag22:true,
      // flag23:true,
      // flag24:true,
      //权限控制flag
      flag1:false,
      flag2:false,
      flag3:false,
      flag4:false,
      flag5:false,
      flag6:false,
      flag7:false,
      flag8:false,
      flag9:false,
      flag10:false,
      flag11:false,
      flag12:false,
      flag13:false,
      flag14:false,
      flag15:false,
      flag16:false,
      flag17:false,
      flag18:false,
      flag19:false,
      flag20:false,
      flag21:false,
      flag22:false,
      flag23:false,
      flag24:false,
    }
  },
  components: {},
  created() {
    //获得自己的角色信息
    getApi.getCurrentUserFrontControl().then(response => {
      response.forEach(element => {
        this.pageList.push(element.barName);
      });
      if (this.pageList.includes("工程项目数据管理")) {
        this.flag1 = true;
      }
      if (this.pageList.includes("项目信息管理")) {
        this.flag2 = true;
      }
      if (this.pageList.includes("周计划（周报）数据管理")) {
        this.flag3 = true;
      }
      if (this.pageList.includes("安监督查管理")) {
        this.flag4 = true;
      }
      if (this.pageList.includes("督查方案设计")) {
        this.flag5 = true;
      }
      if (this.pageList.includes("督查结果管理")) {
        this.flag6 = true;
      }
      // if (this.pageList.includes("督查整改反馈")) {
      //   this.flag7 = true;
      // }
      if (this.pageList.includes("整改情况反馈")) {
        this.flag8 = true;
      }
      if (this.pageList.includes("工程风险管理")) {
        this.flag9 = true;
      }
      if (this.pageList.includes("动态风险计算")) {
        this.flag10 = true;
      }
      if (this.pageList.includes("周计划信息核准")) {
        this.flag11 = true;
      }
      if (this.pageList.includes("周计划准确度展示")) {
        this.flag12 = true;
      }
      if (this.pageList.includes("当日作业进度核准")) {
        this.flag13 = true;
      }
      if (this.pageList.includes("安全责任量化考核")) {
        this.flag14 = true;
      }
      if (this.pageList.includes("督查问题定责")) {
        this.flag15 = true;
      }
      if (this.pageList.includes("量化考核排名")) {
        this.flag16 = true;
      }
      if (this.pageList.includes("个人信息管理")) {
        this.flag17 = true;
      }
      if (this.pageList.includes("用户信息")) {
        this.flag18 = true;
      }
      if (this.pageList.includes("系统运行状态")) {
        this.flag19 = true;
      }
      if (this.pageList.includes("系统当前运行状态")) {
        this.flag20 = true;
      }
      if (this.pageList.includes("人员信息管理")) {
        this.flag21 = true;
      }
      if (this.pageList.includes("公司人员信息管理")) {
        this.flag22 = true;
      }
      if (this.pageList.includes("基本信息管理")) {
        this.flag23 = true;
      }
      if (this.pageList.includes("单位/部门信息管理")) {
        this.flag24 = true;
      }

    })

  },
  computed: {
    defaultActive: function () {
      const that = this;
      console.log(that);
      console.log(
        (that.$route.meta && that.$route.meta.activePath) || this.$route.path
      );
      return (
        (that.$route.meta && that.$route.meta.activePath) || this.$route.path
      );
    }
  }
};
</script>
