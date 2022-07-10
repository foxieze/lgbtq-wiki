import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefinitionView from '../views/DefinitionView.vue'
import AdminView from '../views/AdminView.vue'
import EditView from '../views/EditView.vue'
import LoginComponent from '../components/Login.vue'
import { validateLogin } from '@/services/auth'

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
    component: AdminView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin/edit/:wordslug',
    name: 'editWord',
    component: EditView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth) {
    validateLogin().then((res) => {
      if (!res) {
        router.push('/login');
      }
    });
  }
});

export default router
