<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogFormVisible" >
      <el-form :model="form">
        <el-form-item label="id" :label-width="formLabelWidth">
          <el-input v-model="form.id" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="生日" :label-width="formLabelWidth">
          <el-input v-model="form.birthday" autocomplete="off"></el-input>
        </el-form-item> -->
        <el-row>
          <el-col :style="{'textAlign':'center'}" :offset="2" :span="10">
            <span class="demonstration">生日&nbsp;</span>
            <el-date-picker value-format="yyyy-MM-dd"
              v-model="form.birthday"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancle">取 消</el-button>
        <el-button type="primary" @click="enter">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import moment from 'moment'
export default{
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        id: '',
        age: '',
        birthday: ''
      },
      formLabelWidth: '120px',
      titleTrue: true,
      ind: ''
    }
  },
  created () {
    console.log(moment())
  },
  computed: {
    title () {
      if (this.titleTrue) {
        return '添加页面'
      } else {
        return '修改页面'
      }
    }
  },
  methods: {
    ...mapMutations([
      'addData',
      'changeData'
    ]),
    cancle () {
      console.log('调用cancle')
      this.dialogFormVisible = false
      this.form = {
        name: '',
        id: '',
        age: '',
        birthday: ''
      }
      setTimeout(() => {
        this.titleTrue = true
      }, 200)
    },
    enter () {
      console.log('触发enter')
      if (this.titleTrue) {
        this.addData(this.form)
      } else {
        let arr = [this.ind, this.form]
        this.changeData(arr)
      }
      this.dialogFormVisible = false
      this.form = {
        name: '',
        id: '',
        age: '',
        birthday: ''
      }
      this.titleTrue = true
    }
  }
}
</script>

<style scoped>

</style>
