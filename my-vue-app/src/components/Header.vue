<template>
    <header>
        <nav class="nav-header">
               <img class="img-header" :src="image" alt="">
                <img class="logo-header" :src="logo" alt=""> 
                <div class="container-form">
                    <h1 class="title-header">ĐĂNG NHẬP NGAY!</h1>
                    <div class="content-form">
                        <login-form class="form-registor"/>   
                    </div>
                    <div class=""></div>
                    <a @click="showPasswordResetForm" class="forget-pwd" href="#">Quên mật khẩu</a>
                    <request-change-password :visible="showPasswordReset" @close="closePasswordResetForm" :showOtpForm="toggleOtpForm"/>
                    <div v-if="showOtpForm" class="overlay"></div>
                    <otp-form class="otp-form--code" v-if="showOtpForm" />
                    <change-password v-if="showChangeForm"/>
                </div>    
                
        </nav>
    </header>
    <div>
        <RegisterForm/>
    </div>
    <div>
       <footer-form/>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import RegisterForm from './RegisterForm.vue';
import LoginForm from './LoginForm.vue';
import FooterForm from './FooterForm.vue'
import RequestChangePassword from './RequestChangePassword.vue';
import OtpForm from './OtpForm.vue';
import ChangePassword from './ChangePassword.vue';
export default defineComponent({
    components: { RegisterForm, LoginForm, FooterForm, RequestChangePassword, OtpForm, ChangePassword },
    name: 'Header',
    props: {
        showOtpForm: {
            type: Boolean,
            default: false
        },
        showChangeForm: {
            type: Function,
            required: true
        },
        },
    setup() {
        
        const route = useRoute();
        const image = ref('./public/bg.svg');
        const logo = ref('./public/logoheader.png')
        const resetEmail = ref('');
        const showPasswordReset = ref(false);
        const showOtpForm = ref(false);
        const showChangeForm = ref(false)
        const toggleOtpForm = () => {
            showOtpForm.value = !showOtpForm.value;
        };
        const showPasswordResetForm = () => {
            showPasswordReset.value = true;
        };
        
        const closePasswordResetForm = () => {
            showPasswordReset.value = false;
        };
       
        
        
        return {
            route,
            image,
            logo,
            resetEmail,
            showPasswordReset,
            showOtpForm,
            showChangeForm,
            showPasswordResetForm,
            closePasswordResetForm,
            toggleOtpForm,
        };
        
        
    },
   
});
</script>

<style scoped>
.nav-header{
    position: relative;
}
.img-header{
    width: 1440px;
    height: 430px;
}
.logo-header{
    position: absolute;
    top: -20%;
    left: 0%;
    width: 271px;
    height: 271px;
}
.container-form{
    display: block;
    justify-content: center;
    align-items: center;
    width: 748px;
    height: 199px;
    position: absolute;
    top: 20%;
    right: 0%;

}
.title-header{
    font-family:sans-serif;
    color: #fff;
    font-size: 18px;
    margin-top: -2px;
}
.content-form{
    display: flex;
    width: 748px;
    height: 123px;
    background: #fff;
}
.forget-pwd{
    position: absolute;
    bottom: 0%;
    right: 0%;
    text-decoration: none;
    color: #fff;
}
.otp-form--code{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    }
</style>