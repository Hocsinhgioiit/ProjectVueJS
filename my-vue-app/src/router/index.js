import { createRouter, createWebHistory } from 'vue-router';
import login from "../components/LoginForm.vue";
import register from "../components/RegisterForm.vue";


const routes = [

    {
        path: '/',
        name: 'register',
        component: register
    }, ,
    {
        path: '/login',
        name: 'login',
        component: login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;