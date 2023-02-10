import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import HomeView from "@/views/HomeView";
import Register from "@/components/Register";
import Products from "@/components/Products";

const routes = [
    {path: '/', name: 'home', component: HomeView},
    {path: '/login', name: 'login', component: Login},
    {path: '/register', name:'register', component: Register},
    {path: '/products', name:'products', component: Products}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router