<style scoped lang="less">
.console-topbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  clear: both;
  height: 100px;
  font-size: 12px;
  width: 100%;
  .el-col {
    background: #005f61;
    height: 100px;
    color: #fff;
    font-size: 14px;
    line-height: 50px;
    .topbar-home {
      position: relative;
      display: block;
      width: 100%;
      background: #005f61;
      font-size: 28px;
      color: #fff;
      text-align: center;
      height: 100px;
      line-height: 50px;
      overflow: hidden;
      float: left;
      &:before {
        content: "";
        position: absolute;
        width: 300px;
        height: 120px;
        left: 6px;
        top: -11px;
        display: inline-block;
        background: url(../../images/logo.jpg) no-repeat center center;
        background-size: cover;
      }
    }
    .topbar-home-link {
      display: inline-block;
      height: 50px;
      box-sizing: border-box;
      padding: 0 20px;
      color: #fff;
      font-size: 14px;
      line-height: 50px;
      border-right: 1px solid #008fbf;
    }
    .topbar-info {
      float: right;
      width: 100px;
      line-height: 50px;
      padding: 0 10px;
      height: 50px;
      display: block;
      z-index: 2;
      background: #005f61;
      color: #fff;
      font-size: 14px;
      border-left: 1px solid #005f61;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      .user-name {
        display: block;
        width: 100%;
        color: #fff;
        font-size: 14px;
      }
      .el-dropdown-menu {
        padding: 0 !important;
        .el-dropdown-menu__item {
          padding: 0 10px;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
<template>
  <el-row class="console-topbar" type="flex">
    <el-col :xs="12" :sm="12" :md="12" :lg="12">
      <a class="topbar-home" target="_blank" href="http://www.sgcc.com.cn"></a>
      <a href="http://www.sgcc.com.cn" target="_self" class="topbar-home-link">
        <span>管理控制台</span>
      </a>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="12" style="">
      <el-dropdown trigger="click" class="topbar-info" @command="handleCommand">
        <a href="javascript:void(0)" class="user-name">
          {{userName}}<i class="el-icon-caret-bottom el-icon--right"></i>
        </a>
        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>重置密码</el-dropdown-item> -->
          <el-dropdown-item command="signOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>
<script>
import { Row, Col, Dropdown, Icon, DropdownMenu, DropdownItem } from 'element-ui';
import * as searchApi from "@/api/searchApi.js";
export default {
  components: {
    ElRow: Row,
    ElCol: Col,
    ElDropdown: Dropdown,
    ElDropdownMenu: DropdownMenu,
    ElDropdownItem: DropdownItem,
    Icon: Icon
  },
  data() {
    return {
      userName: "",

    }
  },
  mounted() {
    searchApi.me().then(response => {
      this.userName=response.username;
    })
  },
  methods: {

    // 点击菜单项触发的事件回调
    handleCommand(command) {
      const that = this;
      if (command == "signOut") {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("token-expired");
        that.$router.push("/login");
      }
    }
  }
}
</script>
