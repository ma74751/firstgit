import Vue from 'vue'
import Router from 'vue-router'
import home from './home.vue'
import login from './login.vue'
import index from './index.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: index,
      children:[{
        path:'home',
        name:'Home',
        component: home
      }]
    },{
      path:'/login',
      name: 'Login',
      component: login
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log('跳转之前执行')
  // console.log(localStorage.username2)
  if(to.path === '/'){
    next('/index')
  }
  if (localStorage.username3) {
    if (to.path === '/login') {
      alert('不可以重复登录')
      next(from.path)
    } else {
      // console.log(789)
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
