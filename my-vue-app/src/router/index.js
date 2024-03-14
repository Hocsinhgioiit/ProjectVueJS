import { createRouter, createWebHistory } from 'vue-router';
import login from "../components/LoginForm.vue";
import register from "../components/RegisterForm.vue";
import home from "../components/Home.vue";
import header from "../components/Header.vue"
import success from "../components/RegisterSuccess.vue"
import failure from "../components/RegisterFailure.vue"
import request from "../components/RequestChangePassword.vue"
import otp from "../components/OtpForm.vue"
import change from '../components/ChangePassword.vue';
const routes = [

    {
        path: '/',
        name: 'header',
        component: header
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: { requiresAuth: true }

    },
    {
        path: '/success',
        name: 'success',
        component: success,

    },
    {
        path: '/failure',
        name: 'failure',
        component: failure,

    },
    {
        path: '/request',
        name: 'request',
        component: request,

    },
    {
        path: '/otp',
        name: 'otp',
        component: otp,
    },
    {
        path: '/change',
        name: 'change',
        component: change,
    }


];



const router = createRouter({
    history: createWebHistory(),
    routes
});


router.beforeEach((to, from, next) => {
    // Kiểm tra xem route yêu cầu đăng nhập hay không
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Kiểm tra trạng thái đăng nhập ở đây, ví dụ: từ sessionStorage
        const loggedIn = sessionStorage.getItem('loggedIn');
        if (!loggedIn) {
            // Nếu không đăng nhập, chuyển hướng đến trang đăng nhập
            next('/login');
        } else {
            // Nếu đã đăng nhập, cho phép truy cập route
            next();
        }
    } else {
        // Nếu route không yêu cầu đăng nhập, cho phép truy cập
        next();
    }
});

export default router;