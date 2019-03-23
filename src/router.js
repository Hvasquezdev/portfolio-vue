import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import ('@/views/Home.vue');
const Certifications = () => import ('@/views/Certifications.vue');

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/certifications',
      name: 'certifications',
      component: Certifications
    }
  ]
})
