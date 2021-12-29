<template>
  <div>
    <el-row class="row1">
      <el-col :span="18" class="col1">{{username==='yx71'?'欢迎'+username+'老师登录':'欢迎'+username+'同学登录'}}</el-col>
      <el-col :span="6" :style="{'height':'60px','lineHeight':'60px'}">
        <el-dropdown placement="top">
          <span class="el-dropdown-link">
            <el-button icon="el-icon-user" class="b1" type="primary"></el-button>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item >个人中心</el-dropdown-item>
            <el-dropdown-item >关于我们</el-dropdown-item>
            <el-dropdown-item >意见反馈</el-dropdown-item>
            <el-dropdown-item @click.native="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3" :offset="2" >
        <asidee/>
      </el-col>
      <el-col :span="17" >
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import asidee from './aside.vue'
export default{
  data () {
    return {

    }
  },
  computed: {
    username () {
      return localStorage.username3
    }
  },
  methods: {
    loginout () {
      localStorage.clear()
      this.$router.push({
        path: '/login'
      })
    }
  },
  components: {
    asidee
  }
}
</script>

<style scoped>
div .b1{
  width: 40px;
  height: 40px;
  border-radius: 20px ;
  font-size: 25px;
  text-align: center;
  padding: 0;
}
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .row1{
    border-bottom: 2px solid black;
  }
  .col1{
    font:  bold 24px 宋体;
    line-height: 60px;
  }
</style>
