<template>
    <form v-if="showForm" class="form-otp--container">
        <div class="form-otp--heading">
            <h1 class="title-heading--otp">NHẬP MÃ OTP</h1>
            <img class="title-request--img" :src="icClose" @click="closeFormOtp">
        </div>
           
        <h2 class="title-content--opt">MÃ OTP ĐÃ ĐƯỢC GỬI ĐẾN SỐ ĐIỆN THOẠI/ EMAIL</h2>
        <span class="title-time">Thời gian còn lại: {{ timeLeft }}</span>
        <div class="otp-input-container">
            <input v-model="otpCode1" class="otp-input" type="text" maxlength="1" @input="focusNext($event)">
            <input v-model="otpCode2" class="otp-input" type="text" maxlength="1" @input="focusNext($event)">
            <input v-model="otpCode3" class="otp-input" type="text" maxlength="1" @input="focusNext($event)">
            <input v-model="otpCode4" class="otp-input" type="text" maxlength="1" @input="focusNext($event)">
            <input v-model="otpCode5" class="otp-input" type="text" maxlength="1" @input="focusNext($event)">
            <input v-model="otpCode6" class="otp-input" type="text" maxlength="1" @input="focusNext($event)">
        </div>
        <span class="content-no--otp">Không nhận được mã OTP. <a class="cotent-send--reply" href="">Gửi lại mã</a></span>
        <div class="btn-otp">
            <button class="btn-return"><i class="icon-left fa-solid fa-angle-left"></i>Trở về</button>
            <button class="btn-change-pw" @click="verifyOTP"><i class="icon-check fa-solid fa-check"></i>Thay đổi mật khẩu</button>
        </div>
        <change-password v-if="showChangePasswordForm" @close="closeChangePasswordForm" />
       
    </form>
</template>
<script>
import ChangePassword from './ChangePassword.vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
export default defineComponent({
  components: { ChangePassword },
    name:'otp',
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        onClose: {
            type: Function,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        showChangeForm: {
            type: Function,
            required: true
        },
    },
    setup(props) {
        const router = useRouter()
        const userName = sessionStorage.getItem('userName');
        const emailOrPhoneNumber = ref('');
        const otpCode1 = ref('');
        const otpCode2 = ref('');
        const otpCode3 = ref('');
        const otpCode4 = ref('');
        const otpCode5 = ref('');
        const otpCode6 = ref('');
        const timeLeft = ref('3:00');
        const showOTPForm = ref(false);
        const showForm = ref(true);
        const errorMessage = ref('');
        const sendRequest = () => {
            showOTPForm.value = true;
        };
        const closeFormOtp = () => {
            props.onClose();
        };
        const verifyOTP = async (e) => {
            e.preventDefault();
            try {
                const otpCode = `${otpCode1.value}${otpCode2.value}${otpCode3.value}${otpCode4.value}${otpCode5.value}${otpCode6.value}`;
                const response = await axios.get('https://dev-fe-exam.viajsc.com/ExamUser/validate-otp-change-password', {
                    params: {
                    otpCode: otpCode,
                    userName: userName
                    }
                });
                console.log(response.data);
                if (response.data.errorCode === 200) {
                    showForm.value = false;
                    props.showChangeForm();
                    props.onClose();
                }  else {
                    error.value = 'Mã OTP không hợp lệ. Vui lòng thử lại.';
                }
            } catch (error) {
                console.error('Error verifying OTP:', error);
                errorMessage.value = 'Đã xảy ra lỗi khi xác thực mã OTP. Vui lòng thử lại sau.';
            }
        };

        const countdown = () => {
            let secondsLeft = 180;
            const interval = setInterval(() => {
            const minutes = Math.floor(secondsLeft / 60);
            const seconds = secondsLeft % 60;
                timeLeft.value = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                secondsLeft--;
                if (secondsLeft < 0) {
                    clearInterval(interval);
                    timeLeft.value = '0:00';
                }
            }, 1000);
        };

        countdown();
            const icClose = './public/close.svg';
            const focusNext = (event) => {
            const target = event.target;
            const maxLength = parseInt(target.getAttribute('maxlength'));
            const currentLength = target.value.length;
                
            if (currentLength >= maxLength) {
                const nextInput = target.nextElementSibling;
                if (nextInput) {
                    nextInput.focus();
                }
            }
            };

        
        return {
            icClose,
            emailOrPhoneNumber,
            otpCode1,
            otpCode2,
            otpCode3,
            otpCode4,
            otpCode5,
            otpCode6,
            router,
            showOTPForm,
            sendRequest,
            verifyOTP,
            timeLeft,
            focusNext,
            closeFormOtp,
            errorMessage,
            userName,
            showForm,
        };
        
    },
    methods: {
        showChangePasswordForm() {
            this.$emit('changePasswordClicked');
        }
    }
    
});
</script>
<style>
    .form-otp--container{
        width: 560px;
        height: 444px;
        top: 373px;
        left: 440.01px;
        padding: 0px, 0px, 24px, 0px;
        border-radius: 4px;
        background-color: #ffffff;
    }
    .form-otp--heading{
        display: flex;
        justify-content: space-between;
    }
    .title-heading--otp{
        font-family: Inter;
        font-size: 19px;
        font-weight: 600;
        line-height: 23px;      
        letter-spacing: -0.02em;
        text-align: left;
        margin-top: 24px;
        margin-left: 24px;
    }
    .title-content--opt{
        display: flex;
        justify-content: center;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;      
        letter-spacing: 0em;
        text-align: left;
        color: #10B981;
    }
    .title-time{
        display: flex;
        justify-content: center;
        font-family: Inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: #ECAD48;
    }
    .otp-input-container{
        width: 480px;
        height: 66px;
        gap: 16px;
        display: flex;
        margin-left: 24px;
        margin-top: 32px;
    }
    .otp-input{
        width: 65px;
        height: 66px;
        padding: 16px, 24px, 16px, 24px;
        border-radius: 4px;
        border: solid 2px #E7EAEE; 
        
    }
    .content-no--otp{
        display: flex;
        justify-content: center;
        font-family: Inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        margin-top: 32px;
    }
    .cotent-send--reply{
        text-decoration: none;
        font-family: Inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        margin-left: 6px;
        color: #0d169c;
    }
    .btn-otp{
        display: flex;
        justify-content: center;
        height: 43px;
        gap: 24px;
        margin-top: 32px;
    }
    .btn-return{
        width: 108px;
        height: 43px;
        border: solid 1px #E7EAEE;
        border-radius:4px ;
    }
    .btn-change-pw{
        width: 202px;
        height: 43px;
        color: #fff;
        background: #FDBA4D;
        border: solid 1px #FDBA4D;
        border-radius: 4px;
    }
    .icon-check::before{
        margin-right: 10px;
        border: 2px;
    }
</style>