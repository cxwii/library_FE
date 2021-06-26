<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>用户</span>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="userName"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data: function () {
    return {
      tableData: [],
      page: {
        pageNum: 1,
        pageSize: 10
      }
    }
  },
  created () {
    this.csh()
    setTimeout(this.shuchu, '2000')
  },
  methods: {
    async csh () {
      const { data: res } = await this.$http.post('queryUserList', this.page)
      this.tableData = res.data.rows
    },
    shuchu () {
      for (var i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].sex === 0) {
          this.tableData[i].sex = '男'
        } else {
          this.tableData[i].sex = '女'
        }
        console.log('object :>> ', this.tableData[i].sex)
      }
    }
  }
}
</script>

<style>
</style>
