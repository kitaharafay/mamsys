import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'
import Archive from '../views/archive'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'index',
    component: Layout,
    children: [{
      path: '/archive',
      name: 'archive',
      component: Archive
    }]
  }]
})
