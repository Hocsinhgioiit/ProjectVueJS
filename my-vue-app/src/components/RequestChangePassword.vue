<template>
    <div v-if="visible" class="password-reset-form password-reset-overlay">
    <form class="form-request password-request ">
        <div class="form-request--heading">
            <h1 class="title-request">YÊU CẦU THAY ĐỔI MẬT KHẨU</h1>
            <img class="title-request--img" :src="icClose" @click="closeForm">
        </div>
        <div class="form-request--content">
            <h2 class="ip-title">Tài khoản</h2>
            <input class="ip-request" v-model="userName" type="text" placeholder="Nhập email hoặc số điện thoại">
            <span class="content-request">Bạn vui lòng kiểm tra hòm thư đến mục tin nhắn <br>trên điện thoại để lấy mã OTP</span>
            <div class="btn-request--container">
                <button class="btn-request" @click="submitRequest">Gửi yêu cầu</button>
            </div>
        </div>
    </form>
    <request-change-password :visible="showPasswordReset" @close="closePasswordResetForm" @show-otp="showOtpForm" :user-name="userName"/>
    </div>
    
</template>
<script>
    import { defineComponent, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios';
    import OtpForm from './OtpForm.vue';
    export default defineComponent({
        name:'request',
        props: {
            visible: {
            type: Boolean,
            default: false
            },
            onClose: {
            type: Function,
            required: true
            },
            showOtpForm: {
            type: Function,
            required: true
            },
           
        },
        setup(props) {
            const resetPassword = () => {
            };
            const closeForm = () => {
            props.onClose();
            };
            const userName = ref('');  
            const icClose = ref('./public/close.svg')
            const submitRequest = async (e) => {
                e.preventDefault()
            try {
                const response = await axios.get('https://dev-fe-exam.viajsc.com/ExamUser/get-otp-change-password', {
                    params: {
                        userName: userName.value
                    }
                });
                    
                if (response.data.errorCode === 200) {
                    sessionStorage.setItem('userName', userName.value);
                    props.showOtpForm();
                    props.onClose();
                   
                    
                } else {
                    console.error('Không thể lấy username từ API.');
                }
            } catch (error) {
                console.error('Đã xảy ra lỗi khi gửi yêu cầu lấy username:', error);
            }
        };
        return {
            icClose,
            userName,
            submitRequest,
            resetPassword,
            closeForm,

        };
        
        },
        methods: {
        showOtpForm() {
            this.showOtpForm = true;
        }
        }
});
</script>
<style>
    .form-request{
        width:  560px;
        height:  340px;
        border-radius: 4px;
        background-color: #ffffff;
    }
    .form-request--heading{
        display: flex;
        justify-content: space-between;
    }
    .title-request{
        font-size: 19px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: -0.02em;
        text-align: left;
        margin-left: 24px;
        margin-top: 24px;
    }
    .title-request--img{
        width: 24px;
        height: 24px;
        margin-right: 24px;
        margin-top: 24px;
    }
    .password-request {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
    }
    .form-request--content{
        width: 560px;
        height: 244px;
    }
    .ip-title{
        margin-left: 24px;
        margin-top: 24px;
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;

    }
    .ip-request{
        width: 512px;
        height: 44px;
        padding: 0px, 12px, 0px, 12px;
        border-radius: 4px;
        border: 1px;
        margin-left: 24px;
        text-indent: 10px;
        border: solid 1px #ccc;
    }
    .content-request{
        display: block;
        font-family: Inter;
        font-size: 16px;    
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
        margin-top: 15px;
    }
    .btn-request--container{
        display: flex;
        justify-content: center;
    }
    .btn-request{
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
        width: 128px;
        height: 43px;
        background: #FDBA4D;
        border: 1px solid #FDBA4D;
        border-radius: 4px;
        color: #fff;
        margin-top: 24px;
    }
    .password-reset-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Màu overlay */
    display: flex;
    justify-content: center;
    align-items: center;
    }
</style>