<template>
  <div class="body">
    <el-card class="box-card">
      <!-- <el-row :gutter="20">
          <el-col :span="20"> 
            <div class="bar">
              <div class="title" style="margin-left:54%;font-size:24px">添加项目信息</div>
            </div>
          </el-col>
        </el-row> -->
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="bar">
            <div id="title">
              <p
                id="tableTitle"
                style="min-width: 1000px; font-size: 28px; margin-left: 620px"
              >
                作业图表展示
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-form
        :model="searchInfo"
        label-position="left"
        ref="searchInfoRef"
        :rules="searchInfoRule"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="bar">
              <el-form-item
                label="作业开始日期"
                prop="workStartTime"
                placeholder="作业开始日期"
              >
                <el-date-picker
                  v-model="searchInfo.workStartTime"
                  type="date"
                  placeholder="选择日期时间"
                  style="min-width: 200px; margin-left: 2px"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item
                label="作业结束日期"
                prop="workEndTime"
                placeholder="作业结束日期"
              >
                <el-date-picker
                  v-model="searchInfo.workEndTime"
                  type="date"
                  placeholder="选择日期时间"
                  style="min-width: 200px; margin-left: 2px"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
                    <el-col :span="6">
                <el-button type="primary" @click="getChart">查询</el-button>
              </el-col>
        </el-row>

      </el-form>
      <el-row :gutter="20">
        <el-col :span="10">
          <div id="mainLeft" style="width: 600px; height: 400px"></div>
        </el-col>
        <el-col :span="10">
          <div id="mainRight" style="width: 600px; height: 400px"></div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { POINT_CONVERSION_COMPRESSED } from "constants";
import * as api from "@/api/date.js";
import * as getApi from "@/api/getApi.js";
import * as addApi from "@/api/addApi.js";
import * as dataApi from "@/api/dataChange.js";
export default {
  data() {
    return {
      searchInfo: {
        workStartTime: "",
        workEndTime: "",
      },
      searchInfoRule: {},
      optionA: {
        title: {
          text: "公司建设管理项目",

          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "项目数量",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      optionB: {
        title: {
          text: "公司监理管理项目",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "项目数量",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },

  mounted() {
    this.getChart();
  },

  methods: {
    getChart() {
      let list = {
        workStartTime: this.searchInfo.workStartTime=="" || this.searchInfo.workStartTime== undefined ? undefined : this.searchInfo.workStartTime,
        workEndTime: this.searchInfo.workEndTime=="" || this.searchInfo.workEndTime== undefined ? undefined : this.searchInfo.workEndTime,
      };
      getApi.getWorkInfoDisplay(list).then((response) => {
        console.log(this.optionA.series[0].data);
        this.optionA.series[0].data = response.admin;
        this.optionB.series[0].data = response.supervision;
        var myChartA = this.$echarts.init(document.getElementById("mainLeft"));
        myChartA.setOption(this.optionA);

        var myChartB = this.$echarts.init(document.getElementById("mainRight"));
        myChartB.setOption(this.optionB);
      });
    },
  },
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