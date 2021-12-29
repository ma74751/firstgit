<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="username">
      <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="身份" prop="id">
      <el-input v-model.number="ruleForm.id"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
    <router-view></router-view>
  </el-form>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
  data () {
    var checkid = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('身份id不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          callback()
        }
      }, 100)
    }
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        password: '',
        id: ''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        id: [
          { validator: checkid, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      console.log(this.ruleForm.id)
      axios({
        url: 'http://www.qhdlink-student.top/student/login.php',
        method: 'post',
        data: qs.stringify({username: this.ruleForm.username, userpwd: this.ruleForm.password, userclass: 71, type: 3})
      }).then((res) => {
        console.log(res.data)
        if (res.data === 'ok') {
          localStorage.username3 = this.ruleForm.username
          this.$router.push({
            path: '/index',
            query: {
              username: this.ruleForm.username
            }
          })
        } else {
          alert('账号密码错误')
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
