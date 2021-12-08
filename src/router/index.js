import { createRouter, createWebHistory } from 'vue-router'
import Exemple from "../pages/Exemple/Exemple"
import Employe from "../components/Employe/ListeEmploye"

const routes = [
  {
    path: '/',
    name: 'Exemple',
    component: Exemple
  },
  {
    path: '/employe',
    name: 'employe',
    component: Employe
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
