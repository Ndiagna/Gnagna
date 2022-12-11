import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/MyHome.vue'
import Cv from '../views/MyCv.vue'
import Project from '../views/MyProject.vue'
import Contact from '../views/MyContact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cv',
    name: 'Cv',
    component: Cv
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
