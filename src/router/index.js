import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/job/Jobs.vue'
import jobDetails from '../views/job/jobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path:'/jobs',
    name:'Job',
    component:Jobs
  },
  {
    path:'/job/:id',
    name:'jobDetails',
    component:jobDetails,
    props:true
  },
  {
    path:'/all-job',
    redirect:"/jobs"
  },
  {
    path:'/:catchAll(.*)',
    name:"NotFound",
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
