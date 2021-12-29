<template>
<div>
  <el-table
    :data="data.slice((currpage-1)*pagesize,currpage*pagesize)"
    style="width: 100%" stripe>
    <el-table-column
      label="ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      label="年龄"
      prop="age">
    </el-table-column>
    <el-table-column
      label="出生年月"
      prop="birthday">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-tooltip class="item" effect="dark" content="仅教师可以操作" placement="top-start" :disabled="isTeacher">
          <span>
        <el-button @click="changeAdd" :disabled="!isTeacher">添加</el-button></span>
        </el-tooltip>
        <add/>
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-tooltip class="item" effect="dark" content="仅教师可操作" placement="top-start" :disabled="isTeacher">
          <span>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)" :disabled="!isTeacher">Edit</el-button></span>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="仅教师可操作" placement="top-start" :disabled="isTeacher">
        <template>
          <el-popconfirm title="确定删除吗？" @confirm="del()">
            <el-button slot="reference"
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)" :disabled="!isTeacher">Delete</el-button>
          </el-popconfirm>
        </template>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
  <el-pagination @current-change="dd" :current-page="currpage"
    :page-size="5"
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
</div>
</template>

<script >
import {mapMutations, mapState} from 'vuex'
import add from './add.vue'
export default{
  data () {
    return {
      search: '',
      delInd: '',
      data: [],
      currpage: 1,
      pagesize: 5
    }
  },
  computed: {
    ...mapState([
      'data1'
    ]),
    isTeacher () {
      if (localStorage.username3 === 'yx71') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    ...mapMutations([
      'changeMsg',
      'delData'
    ]),
    handleEdit (index, row) {
      console.log(index, row)
      this.$children[0].$children[5].$children[1].dialogFormVisible = true
      this.$children[0].$children[5].$children[1].form = row
      this.$children[0].$children[5].$children[1].titleTrue = false
      this.$children[0].$children[5].$children[1].ind = index + (this.currpage - 1) * this.pagesize
    },
    handleDelete (index, row) {
      console.log(index, row)
      this.delInd = index + (this.currpage - 1) * this.pagesize
    },
    del () {
      this.delData(this.delInd)
    },
    changeAdd () {
      this.$children[0].$children[5].$children[1].dialogFormVisible = true
      let a = () => {
        let id = this.data1.length + 1
        for (let i in this.data1) {
          if (parseInt(this.data1[i].id) !== (i * 1 + 1) * 1) {
            id = i * 1 + 1
            break
          }
        }
        console.log(id)
        return id
      }
      this.$children[0].$children[5].$children[1].form.id = a()
    },
    dd (a) {
      this.currpage = a
    }
  },
  watch: {
    search () {
      let a = [...this.data1]
      this.data = a.filter(data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase()))
      this.currpage = 1
    }
  },
  components: {
    add
  },
  created () {
    this.data = this.data1
  }
}
</script>

<style scoped>

</style>
