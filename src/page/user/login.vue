<style lang="less" scoped>
.login-container {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background-color: #141a48;
  background-image: url(../../assets/login-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
#loginThree {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -230px 0 0 -180px;
  width: 310px;
  height: 240px;
  padding: 25px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  .login-logo {
    text-align: center;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    margin-bottom: 24px;
    img {
      width: 40px;
      margin-right: 8px;
    }
    span {
      vertical-align: text-bottom;
      font-size: 16px;
      text-transform: uppercase;
      display: inline-block;
    }
  }
  .login-account {
    color: #999;
    text-align: center;
    margin-top: -15px;
    span {
      font-size: 12px;
      &:first-child {
        margin-right: 16px;
      }
    }
  }
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>
<template>
  <div class="login-container">
    <transition name="form-fade" mode="in-out">
      <div class="login-form" v-show="showLogin">
        <div class="login-logo">
          <img src="../../images/logo.png"> <span>element</span>
        </div>
        <el-form :model="formLogin" :rules="rulesLogin" ref="formLogin">
          <el-form-item prop="username">
            <el-input type="text" v-model="formLogin.username" auto-complete="off" @keyup.enter.native="submitForm"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="formLogin.password" auto-complete="off" @keyup.enter.native="submitForm"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">登录</el-button>
            <el-button @click="resetForm">重置</el-button>
            <el-button @click="findUserName">查找用户名</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>
    <div id="loginThree"></div>
    <el-card class="box-card">
      <el-dialog :modal="false" title="查找用户名" :visible.sync="findFlag" width="600px">
        <el-form :model="findForm" label-position="left" ref="findForm" :rules="findFormRule" label-width="120px" class="demo-ruleForm">
          <el-row :gutter="20">
            <el-col :span="15">
              <div class="bar">
                <el-form-item label="姓名" prop="name" placeholder="条目名称">
                  <el-input v-model="findForm.name" clearable :rows="1" placeholder="请选择" style="min-width:400px"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="15">
              <div class="bar">
                <el-form-item label="部门" prop="deptId" placeholder="条目名称">
                  <el-select v-model="findForm.deptId" placeholder="请选择" style="min-width:400px">
                    <el-option v-for="item in findForm.options.deptIdOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="15">
              <div class="bar">
                <el-form-item label="手机号" prop="phoneNumber" placeholder="条目名称">
                  <el-input v-model="findForm.phoneNumber" clearable :rows="1" placeholder="请选择" style="min-width:400px"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="bar">
                <el-form-item label="用户名" prop="username" placeholder="条目名称">
                  <el-input v-model="findForm.username" disabled :rows="1" placeholder="请选择" style="min-width:400px"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"></el-col>
            <el-col :span="5" style="margin-left:34%">
              <el-button type="primary" @click="submitFindUsername">查询</el-button>
            </el-col>
            <el-col :span="5">
              <el-button type="primary" @click="cancelFind">取消</el-button>
            </el-col>
          </el-row>
        </el-form>

      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import THREE from '../../libs/three/three'
import { login } from '@/api/login-out'
import * as getApi from "@/api/getApi.js";
import * as userApi from "@/api/userApi.js";
export default {
  data() {
    return {
      findFlag: false,
      findForm: {
        deptId: "",
        name: "",
        username: "",
        phoneNumber: "",
        options: {
          deptIdOptions: [],
        }
      },
      findFormRule: {
        name: [
          { required: true, message: '请输入姓名！', trigger: 'change' }
        ],
        deptId: [
          { required: true, message: '请选择部门！', trigger: 'change' }
        ],
        phoneNumber: [
          { required: true, message: '请输入电话号码！', trigger: 'change' }
        ],
      },
      formLogin: {
        username: '',
        password: ''
      },
      rulesLogin: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      showLogin: false
    };
  },
  created() {
    userApi.getAllSGCCDept().then(response => {
      this.findForm.options.deptIdOptions = response.returnList[0];
    });
  },
  mounted() {
    const that = this;
    that.showLogin = true;
    that.init3D();
  },
  methods: {
    submitFindUsername() {
      this.$refs["findForm"].validate(valid => {
        if (valid) {
          userApi.findUsername({
            name: this.findForm.name,
            deptId: this.findForm.deptId,
            phoneNumber: this.findForm.phoneNumber,
          }).then(response => {
            if (response.returnBackCode > 0)
              this.findForm.username = response.username;
            else {
              this.$message.error(response.returnBackInfo);
            }
          })
        }
      });
    },

    findUserName() {
      this.findFlag = true;
      this.findForm.name = "";
      this.findForm.username = "";
      this.findForm.phoneNumber = "";
      this.findForm.deptId = "";
    },
    cancelFind() {
      this.findFlag = false;
    },
    submitForm(name) {
      const that = this;
      that.$refs.formLogin.validate((valid) => {
        if (valid) that.goLogin(); // 验证通过，前去登录
      });
    },
    resetForm() { // 重置表单
      const that = this;
      this.$refs.formLogin.resetFields();
    },
    goLogin() { // 登录
      const that = this;
      const formLogin = that.formLogin;
      const params = {
        username: formLogin.username,
        password: formLogin.password
      }
      login(params).then(response => {
        sessionStorage.setItem('token', response.data)
        sessionStorage.setItem('token-expired', new Date().getTime())
        this.$router.push({ name: 'Quick' })
      }).catch(error => {
        console.log(error)
        that.$message.error('用户名或密码错误！');
      })
    },
    init3D() { // 初始化3D动画
      var SCREEN_WIDTH = window.innerWidth;
      var SCREEN_HEIGHT = window.innerHeight;
      var SEPARATION = 90;
      var AMOUNTX = 50;
      var AMOUNTY = 50;
      var container;
      var particles, particle;
      var count;
      var camera;
      var scene;
      var renderer;
      var mouseX = 0;
      var mouseY = 0;
      var windowHalfX = window.innerWidth / 2;
      var windowHalfY = window.innerHeight / 2;
      init();
      this.interval = setInterval(loop, 1000 / 60);
      function init() {
        container = document.createElement('div');
        container.style.position = 'relative';
        container.style.top = '200px';
        document.getElementById('loginThree').appendChild(container);
        camera = new THREE.Camera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000);
        camera.position.z = 1000;
        scene = new THREE.Scene();
        renderer = new THREE.CanvasRenderer();
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        particles = new Array();
        var i = 0;
        var material = new THREE.ParticleCircleMaterial(0x097bdb, 1);
        for (var ix = 0; ix < AMOUNTX; ix++) {
          for (var iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[i++] = new THREE.Particle(material);
            particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
            particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
            scene.add(particle);
          }
        }
        count = 0;
        container.appendChild(renderer.domElement);
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        document.addEventListener('touchmove', onDocumentTouchMove, false);
      }
      function onDocumentMouseMove(event) {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
      }
      function onDocumentTouchMove(event) {
        if (event.touches.length == 1) {
          event.preventDefault();
          mouseX = event.touches[0].pageX - windowHalfX;
          mouseY = event.touches[0].pageY - windowHalfY;
        }
      }
      function loop() {
        camera.position.x += (mouseX - camera.position.x) * .05;
        camera.position.y = 364;
        var i = 0;
        for (var ix = 0; ix < AMOUNTX; ix++) {
          for (var iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[i++];
            particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
            particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;
          }
        }
        renderer.render(scene, camera);
        count += 0.1;
      }
    }
  },
  beforeDestroy() {
    const that = this
    if (that.interval) clearInterval(that.interval);
  }
}
</script>


