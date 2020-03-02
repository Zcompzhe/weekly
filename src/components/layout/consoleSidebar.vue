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
  width: 180px;
  .sidebar-content {
    width: 200px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background: #293038;
    .sidebar-fold {
      height: 30px;
      width: 140px;
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
      <el-submenu index="project">
        <template slot="title">
          <i class="el-icon-message"></i>
          工程项目数据管理
        </template>

        <el-menu-item index="/project/projectInfoMana">
          <i class="el-icon-document"></i>项目信息管理
        </el-menu-item>
        <el-menu-item index="/weekly/weeklyDataManage">
          <i class="el-icon-document"></i>周报数据管理
        </el-menu-item>
      </el-submenu>

      <el-submenu index="supervision">
        <template slot="title">
          <i class="el-icon-message"></i>
          督查方案规划
        </template>

        <el-menu-item index="/supervision/supervisionMana">
          <i class="el-icon-document"></i>安全督查队督查方案管理
        </el-menu-item>
        <el-menu-item index="/supervision/supervisionResult">
          <i class="el-icon-document"></i>督查结果管理
        </el-menu-item>
      </el-submenu>

      <el-submenu index="rectificationFeedback">
        <template slot="title">
          <i class="el-icon-message"></i>
          督查整改反馈
        </template>

        <el-menu-item index="/rectification/rectificationFeedback">
          <i class="el-icon-document"></i>整改反馈通知
        </el-menu-item>

      </el-submenu>

      <el-submenu index="risk">
        <template slot="title">
          <i class="el-icon-message"></i>
          工程风险管理
        </template>

        <el-menu-item index="/risk/externalRiskMana">
          <i class="el-icon-document"></i>工程外部风险管理
        </el-menu-item>
      </el-submenu>
      <el-submenu index="approve">
        <template slot="title">
          <i class="el-icon-message"></i>
          周报信息核准
        </template>
        <el-menu-item index="/weeklyCheck/weeklyApproved">
          <i class="el-icon-document"></i>周报信息准确度管理
        </el-menu-item>
        <el-menu-item index="/weeklyCheck/dayWorkCheck">
          <i class="el-icon-document"></i>当日作业进度核准
        </el-menu-item>
      </el-submenu>

      <el-submenu index="safetyResponsibility">
        <template slot="title">
          <i class="el-icon-message"></i>
          安全责任量化考核
        </template>

        <el-menu-item index="/safetyResponsibility/personCharge">
          <i class="el-icon-document"></i>问题责任人设置
        </el-menu-item>
        <el-menu-item index="/safetyResponsibility/quantitative">
          <i class="el-icon-document"></i>量化考核排名
        </el-menu-item>
      </el-submenu>
      <el-submenu index="back">
        <template slot="title">
          <i class="el-icon-message"></i>
          基本信息管理
        </template>

        <el-menu-item index="/back/infoMana">
          <i class="el-icon-document"></i>单位/部门信息管理
        </el-menu-item>
      </el-submenu>
      <el-submenu index="personMana" v-if="false">
        <template slot="title">
          <i class="el-icon-message"></i>
          人员信息管理
        </template>

        <el-menu-item index="/back/personInfoMana">
          <i class="el-icon-document"></i>人员信息管理
        </el-menu-item>
      </el-submenu>

      <el-submenu index="exception">
        <template slot="title">
          <i class="el-icon-message"></i>
          系统运行状态
        </template>

        <el-menu-item index="/exception/exception">
          <i class="el-icon-document"></i>系统当前运行状态
        </el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>
<script>
export default {
  components: {},
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
