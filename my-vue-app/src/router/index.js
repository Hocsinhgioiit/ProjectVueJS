import { createRouter, createWebHistory } from 'vue-router';
import login from "../components/LoginForm.vue";
import register from "../components/RegisterForm.vue";
import home from "../components/Home.vue";


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
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: { requiresAuth: true }

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