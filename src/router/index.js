import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/ALoveWebsite/',
    name: 'Home',
    //component: 'Home'
    component: () => import('../views/Home.vue'),
    meta: { title: 'A Love Website - Acceuil' }, // <- I would to use this one
  },
  {
    path: '/ALoveWebsite/fun',
    name: 'Fun',
    component: () => import('../views/Fun.vue'),
    meta: { title: 'A Love Website - Fun' },
  },
  {
    path: '/ALoveWebsite/chatgpt',
    name: 'chatgpt',
    component: () => import('../views/ChatGPT.vue'),
    meta: { title: 'A Love Website - ChatGPT'}
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router