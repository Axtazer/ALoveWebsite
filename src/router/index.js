import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    //component: 'Home'
    component: () => import('../views/Home.vue'),
    meta: { title: 'A Love Website - Acceuil' }, // <- I would to use this one
  },
  {
    path: '/fun',
    name: 'Fun',
    component: () => import('../views/Fun.vue'),
    meta: { title: 'A Love Website - Fun' },
  },
  {
    path: '/chatgpt',
    name: 'chatgpt',
    component: () => import('../views/ChatGPT.vue'),
    meta: { title: 'A Love Website - ChatGPT'},
  },
  {
  path: '/gallery',
  name: 'Gallery',
  component: () => import('../views/Gallery.vue'),
  meta: { title: 'A Love Website - Gallery'},
  },
  {
    path: '/amour',
    name: 'Amour',
    component: () => import('../views/Amour.vue'),
    meta: { title: "A Love Website - Je t'aime"},
    },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router