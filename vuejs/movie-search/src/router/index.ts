import { def } from '@vue/shared'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MoviePage from '../views/MoviePage.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    { path: '/:id', name: 'movie', component: MoviePage },
  ],
})

export default router
