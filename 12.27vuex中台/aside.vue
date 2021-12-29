<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>学生页面</span>
        </template>
          <el-menu-item index="1-1" @click="student">学生信息</el-menu-item>
          <el-menu-item index="1-2">暂无</el-menu-item>
          <el-menu-item index="1-3">暂无</el-menu-item>
      </el-submenu>
      <el-menu-item index="2" :disabled="!isTeacher" @click="student">
        <el-tooltip class="item" effect="dark" content="仅教师可以查看" placement="top-start" :disabled="isTeacher">
          <div>
            <i class="el-icon-menu"></i>
            <span slot="title" >教师页面</span>
          </div>
        </el-tooltip>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-tooltip class="item" effect="dark" content="暂无数据" placement="top-start">
          <div>
            <i class="el-icon-document"></i>
            <span slot="title">暂无数据</span>
          </div>
        </el-tooltip>
      </el-menu-item>
      <el-menu-item index="4" disabled>
        <i class="el-icon-setting"></i>
        <span slot="title">暂无数据</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default{
  data () {
    return {}
  },
  methods: {
    student () {
      this.$router.push({
        path: '/index/home'
      })
    }
  },
  computed: {
    isTeacher () {
      if (localStorage.username3 === 'yx71') {
        return true
      } else {
        return false
      }
    }
  }

}
</script>

<style scoped>

</style>
