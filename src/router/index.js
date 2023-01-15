import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../components/Home.vue'

const routes = [
  {
    path: '/ALoveWebsite/',
    name: 'Home',
    //component: 'Home'
    component: () => import('../components/Home.vue'),
  },
  {
    path: '/ALoveWebsite/fun',
    name: 'Fun',
    component: () => import('../components/Fun.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router