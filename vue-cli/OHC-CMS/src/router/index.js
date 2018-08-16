import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import ArticleList from '@/components/ArticleList'
import VuexTest from '@/page/vuex-test/VuexTest'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/al',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/vuex_test',
      name: 'VuexTest',
      component: VuexTest
    }
  ]
})
