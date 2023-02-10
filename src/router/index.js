import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import HomeView from "@/views/HomeView";
import Register from "@/components/Register";

const routes = [
    {path: '/', name: 'home', component: HomeView},
    {path: '/login', name: 'login', component: Login},
    {path: '/register', name:'register', component: Register},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router