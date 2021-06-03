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
                项目图表展示
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
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
    getApi.getProjectInfoDisplay().then((response) => {
      console.log(this.optionA.series[0].data)
      this.optionA.series[0].data = response.admin;
      this.optionB.series[0].data = response.supervision;
      var myChartA = this.$echarts.init(document.getElementById("mainLeft"), "shine");
      myChartA.setOption(this.optionA);

      var myChartB = this.$echarts.init(document.getElementById("mainRight"));
      myChartB.setOption(this.optionB);
    });
  },

  methods: {},
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