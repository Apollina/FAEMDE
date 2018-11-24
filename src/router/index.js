import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/dashboard/Home'
import AboutUs from '@/components/dashboard/AboutUs'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
})
