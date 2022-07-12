import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefinitionView from '../views/DefinitionView.vue'
import AdminView from '../views/AdminView.vue'
import EditView from '../views/EditView.vue'
import LoginView from '../views/LoginView.vue'
import { validateLogin } from '@/services/auth'
import HelpIndexView from '../views/helppage/IndexView.vue'
import HelpMeaningView from '../views/helppage/MeaningView.vue'
import HelpAttractionView from '../views/helppage/AttractionView.vue'

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
    component: LoginView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpIndexView
  },
  {
    path: '/help/meaning',
    name: 'helpMeaning',
    component: HelpMeaningView
  },
  {
    path: '/help/attraction',
    name: 'typesOfAttraction',
    component: HelpAttractionView
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
