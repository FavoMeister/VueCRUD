import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/cursos',
      name: 'cursos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CursosView.vue')
    },
    {
      path: '/agregar-editar-curso/:id',
      name: 'agregar-editar-curso',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CursoView.vue')
    },
    /* {
      path: '/cursos/:id/eliminar',
      name: 'curso-eliminar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CursoEliminarView.vue')
    },
    {
      path: '/categorias',
      name: 'categorias',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CategoriasView.vue')
    },
    {
      path: '/agregar-editar-categoria/:id',
      name: 'agregar-editar-categoria',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CategoriaView.vue')
    },
    {
      path: '/categorias/:id/eliminar',
      name: 'categoria-eliminar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CategoriaEliminarView.vue')
    } */
  ],
})

export default router
