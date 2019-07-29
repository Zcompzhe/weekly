<template>
  <div class="body">
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">所属单位类型</div>
            <el-select v-model="companyType" clearable placeholder="请选择" style="min-width:200px">
              <el-option
                v-for="item in companyOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">单位名称</div>
            <el-select v-model="companyName" clearable placeholder="请选择" style="min-width:200px">
              <el-option
                v-for="item in companyNameOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">职务</div>
            <el-select v-model="position" clearable placeholder="请选择" style="min-width:200px">
              <el-option
                v-for="item in positionOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </el-col>

        <el-col :span="2">
          <div class="bar">
            <el-button type="primary">搜索</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="3">
          <el-button type = "primary" @click="addPerson">新增人员信息</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type = "primary">删除人员信息</el-button>
        </el-col>
      </el-row>
      <el-table
        :data="tableData"
        max-height="400"
        border
        @selection-change="isChanged"
        :stripe="true"
        :highlight-current-row="true"
        style="width: 100%; margin-top: 20px"
        id="out-table"
      >
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column width="100" type="index" label="序号" align="center"></el-table-column>
        <el-table-column width="300" prop="name" label="姓名" align="center"></el-table-column>
        <el-table-column width="300" prop="name" label="所属单位类型" align="center"></el-table-column>
        <el-table-column width="300" prop="name" label="单位名称" align="center"></el-table-column>
        <el-table-column width="300" prop="name" label="职务" align="center"></el-table-column>
        <el-table-column width="300" prop="name" label="联系方式" align="center"></el-table-column>
        <el-table-column width="300" label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click>查看详情</el-button>
            <el-button type="text" @click>修改信息</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  data() {
    return {
      companyType: "",
      companyOptions: [
        {
          id: 1,
          name: "建管单位"
        },
        {
          id: 2,
          name: "监理单位"
        }
      ],
      companyName: "",
      companyNameOptions: [
        {
          id: 1,
          name: "第一家单位"
        },
        {
          id: 2,
          name: "第二家单位"
        }
      ],
      position: "",
      positionOptions: [
        {
          id: 1,
          name: "一线"
        },
        {
          id: 2,
          name: "二线"
        }
      ],
      anyChanged:[],
      tableData:[
        {
          name:"第一个",
        },
        {
          name:"第二个"
        },
        {
          name:"在这里"
        }
      ],
    };
  },

  created(){

    //获取空搜索集
    this.$axios
      .get(`${window.$config.HOST}/baseInfoManagement/getPersonInfoList`)
      .then(response => {
        this.tableData = response.data
      })
      .catch(error => {
        this.$message({
          message: "获取项目信息失败！",
          type: "error"
        });
      });
  },

  methods: {
    exportExcel() {
      /* generate workbook object from table */
      var wb = XLSX.utils.table_to_book(document.querySelector("#out-table"));
      /* get binary string as output */
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          "周报信息.xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    },
    ischanged(val){
      this.anyChanged=val;
    },
    addPerson(){
      this.$router.push({
        path: `/back/addPerson`,
        query: {}
      });
    },

  }
};
</script>

<style lang="less" scoped>
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
