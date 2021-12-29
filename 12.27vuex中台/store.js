import Vue from 'vue'
import Vuex from 'vuex'
import data from './data.js'
import moment from 'moment'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    data1: data.data
  },
  mutations: {
    changeMsg (state, text) {
      console.log(state)
    },
    delData (state, text){
      state.data1.splice(text, 1)
    },
    addData(state,text){
      state.data1.splice(text.id-1,0,text)
    },
    changeData(state,text){
      state.data1.splice(text[0],1,text[1])
    }
  },
  actions: {
    asyncChangeMsg (context, a) {
      setTimeout(() => {
        context.commit('changeMsg', a)
      }, 1000)
    }
  },
  getters: {
    getPrice (state) {
      return state.num * state.price
    }
  }
})

export default store
