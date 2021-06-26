<template>
  <el-container class="home">
    <!-- 头部 -->
    <el-header>图书馆</el-header>

    <el-container>
      <!-- 左侧边栏 -->
      <el-aside width="200px">
        <!-- 侧边栏菜单区 -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#7a7e80"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>功能</span>
            </template>
            <el-menu-item index="1-1" @click="user">用户列表</el-menu-item>
            <el-menu-item index="1-2" @click="book">图书列表</el-menu-item>
            <el-menu-item index="1-3" @click="jiey">借阅记录</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧边栏 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    user () {
      this.$router.push('/home/user')
    },
    book () {
      this.$router.push('/home/book')
    },
    jiey () {
      this.$router.push('/home/jiey')
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #95e0f7;
  color: #ffffff;
  font-size: 20px;
  display: flex;
  align-items: center;
}
.el-aside {
  background-color: #7a7e80;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #e1e3e4;
}
.home {
  height: 100%;
}
</style>
