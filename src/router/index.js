import { createRouter, createWebHistory } from 'vue-router'
import Exemple from "../pages/Exemple/Exemple"

const routes = [
  {
    path: '/',
    name: 'Exemple',
    component: Exemple
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
