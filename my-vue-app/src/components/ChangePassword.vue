<template>
    <div  v-if="visible" class="form-setting--pw">
    <form class="form-request password-request ">
        <div class="form-request--heading">
            <h1 class="title-request">THIẾT LẬP MẬT KHẨU MỚI</h1>
            <img class="title-request--img" :src="icClose" @click="closeForm">
        </div>
        <div class="form-request--content">
            <h2 class="ip-title">Mật khẩu mới</h2>
            <input class="ip-pw--new" v-model="userName" type="password" placeholder="Nhập mật khẩu...">
            <h2 class="ip-title">Nhập lại mật khẩu mới</h2>
            <input class="ip-cf--pw" v-model="userName" type="password" placeholder="Nhập mật khẩu...">
        </div>
        <div class="btn-login--container">
             <button class="btn-login--setting">Đăng nhập</button>
        </div>
       
    </form>
    </div>
</template>
<script>
    import { defineComponent, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios';
    export default defineComponent({
    name:'change',
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        onClose: {
            type: Function,
            required: true
        },
    },
    setup(props) {
        const icClose = ref('./public/close.svg')
        const showOTPForm = ref(false);
        const sendChange = () => {
            showOTPForm.value = true;
        };
        return {
            icClose,
            showOTPForm,
            sendChange
        };
        
    },
    });
</script>
<style>
    .form-request--heading{
        background-color: #ccc;
    }
    .ip-pw--new{
        width: 512px;
        height: 44px;
        padding: 0px, 12px, 0px, 12px;
        border-radius: 4px;
        border: 1px;
        margin-left: 24px;
        text-indent: 10px;
        border: solid 1px #ccc;
    }
    .ip-cf--pw{
        width: 512px;
        height: 44px;
        padding: 0px, 12px, 0px, 12px;
        border-radius: 4px;
        border: 1px;
        margin-left: 24px;
        text-indent: 10px;
        border: solid 1px #ccc;
    }
    .btn-login--container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn-login--setting{
        width: 120px;
        height: 43px;
        background-color: #FDBA4D;
        border-radius: 4px;
        border: 1px solid #FDBA4D;
        color: #fff;
    }
</style>