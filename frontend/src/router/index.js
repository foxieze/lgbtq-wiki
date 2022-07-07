import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefinitionView from '../views/DefinitionView.vue'
import AdminView from '../views/AdminView.vue'
import EditView from '../views/EditView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Simple LGBT Dictionary",
      content: "A simple, searchable dictionary for commonly used LGBTQIA+ terms"
    }
  },
  {
    path: '/word/:wordslug',
    name: 'definition',
    component: DefinitionView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/admin/edit/:wordslug',
    name: 'editWord',
    component: EditView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
