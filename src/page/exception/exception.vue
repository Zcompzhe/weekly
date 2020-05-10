<template>
  <div class="body">
    <el-card class="box-card">
      <el-form :model="searchTable" label-position="left" ref="searchTable" :rules="searchTableRule" label-width="140px" class="demo-ruleForm">
        <el-row :gutter="20" style="margin-top:20px;margin-bottom:-10px">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="当前日期" prop="currentDate" placeholder="周报开始日期">
                <el-input v-model="searchTable.currentDate" disabled :rows="1" placeholder="暂无信息" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="当前运行状态" prop="runState" placeholder="项目名称">
                <el-input v-model="searchTable.runState" disabled :rows="1" placeholder="暂无信息" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="今日最高异常等级" prop="maxExceptionLevel" placeholder="是否核准">
                <el-input v-model="searchTable.maxExceptionLevel" disabled :rows="1" placeholder="暂无信息" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top:20px;margin-bottom:-10px">
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="今日待处理异常个数" prop="todayUntreatedExceptionCount" placeholder="周报开始日期">
                <el-input v-model="searchTable.todayUntreatedExceptionCount" disabled :rows="1" placeholder="暂无信息" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <el-form-item label="历史待处理异常个数" prop="historicalUntreatedExceptionCount" placeholder="项目名称">
                <el-input v-model="searchTable.historicalUntreatedExceptionCount" disabled :rows="1" placeholder="暂无信息" style="min-width:300px"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <el-card class="box-card">
      <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
        <el-col :span="10">
          <div class="bar">
            <div id="title">
              <p id="tableTitle" style="min-width:1000px;font-size:24px;margin-left:580px;margin-top:20px;">历史未处理异常信息</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-table :data="tableData" max-height="800" border style="width: 100%; margin-top: 20px">
        <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="200" prop="exceptionLevel" label="异常等级" align="center"></el-table-column>
        <el-table-column width="200" prop="createTime" label="出现时间" align="center"></el-table-column>
        <el-table-column prop="title" label="异常信息" align="center"></el-table-column>
        <el-table-column width="200" prop="hasDealStr" label="是否处理" align="center"></el-table-column>
        <el-table-column width="200" prop="suggestion" label="处理建议" align="center"></el-table-column>
        <el-table-column width="250" label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="detailException(scope.row)">查看详情</el-button>
            <el-button type="text" @click="completeException(scope.row)">完成处理</el-button>
          </template>
        </el-table-column>

      </el-table>
      <el-dialog title="详细信息" :visible.sync="detailPanelFlag" width="1400px" :modal="false">
        <el-row :gutter="20" style="margin-top: 10px; margin-bottom: 5px;">
          <el-col :span="8">
            <div class="bar">
              <div class="title">异常等级</div>
              <el-input disabled v-model="exceptionDetail.exceptionLevel" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">出现时间</div>
              <el-input disabled v-model="exceptionDetail.createTime" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="bar">
              <div class="title">异常信息</div>
              <el-input disabled v-model="exceptionDetail.title" disabled style="min-width:200px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 30px; margin-bottom: 5px;margin-left:-18px">
          <el-col :span="20">
            <div class="bar">
              <div class="title">异常详情</div>
              <el-input disabled type="textarea" :rows="4" placeholder="暂无信息" v-model="exceptionDetail.detailDescription" style="margin-left: 26px;width:1000px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 30px; margin-bottom: 5px;margin-left:-18px">
          <el-col :span="20">
            <div class="bar">
              <div class="title">处理建议</div>
              <el-input disabled type="textarea" :rows="4" placeholder="暂无信息" v-model="exceptionDetail.suggestion" style="margin-left: 26px;width:1000px"></el-input>
            </div>
          </el-col>
        </el-row>
      </el-dialog>
    </el-card>

  </div>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
import * as api from "@/api/date.js";
import * as getApi from "@/api/getApi.js";
import * as addApi from "@/api/addApi.js";
import * as updateApi from "@/api/updateApi.js";
import * as searchApi from "@/api/searchApi.js";
export default {
  data() {
    return {
      //表格数据
      tableData: [],
      //详情信息
      detailPanelFlag: false,
      exceptionDetail: {

      },
      //搜索数据
      searchTable: {
        historicalUntreatedExceptionCount: "",
        maxExceptionLevel: "",
        todayUntreatedExceptionCount: "",
        runState: "",
        currentDate: "",
      },
      searchTableRule: {},
    };
  },
  created: function () {
    this.getInfo();
  },
  methods: {
    detailException(row) {
      this.detailPanelFlag = true;
      this.exceptionDetail = row;
    },
    getInfo() {
      //获取今日异常信息
      getApi.getTodayExceptionInfoStatistics().then(res => {
        this.searchTable.historicalUntreatedExceptionCount = res.historicalUntreatedExceptionCount;
        this.searchTable.maxExceptionLevel = res.maxExceptionLevel;
        this.searchTable.todayUntreatedExceptionCount = res.todayUntreatedExceptionCount;
        this.searchTable.runState = res.runState;
        this.searchTable.currentDate = res.currentDate;
        this.tableData = res.exceptionInfoShowResps;
        this.tableData.forEach(ele => {
          if (ele.hasDeal) ele.hasDealStr = "是";
          else if (!ele.hasDeal) ele.hasDealStr = "否"
        })
      })
    },
    //完成处理
    completeException(row) {
      this.$confirm("是否确认完成该异常处理！", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let list = {
            id: row.id,
            hasDeal: true
          }
          updateApi.updateExceptionInfo(list).then(res => {
            this.getInfo();
          })

        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作！"
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
