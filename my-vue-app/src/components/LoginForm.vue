<template>
    <form class="form-container" @submit.prevent="submitForm">
       <div class="form-user">
        <label for="usernamelogin">Tài khoản</label>
        <br>
        <input class="ip-user" type="text" id="usernamelogin" v-model="username" required placeholder="Tài khoản...">
       </div>

      <div class="form-pwd">
        <label  for="password">Mật khẩu</label>
        <br>
        <input class="ip-password" :type="showPassword ? 'text' : 'password'" id="passwordlogin" v-model="password" required placeholder="Nhập mật khẩu">
        <span class="toggle-password" @click="togglePasswordVisibility">
            <img  class="icon-pw" :src="showPassword ? iconOn : iconOff" alt="">
        </span>
        
      </div>
        <div >
        <button class="btn-login" type="submit">Đăng nhập</button>
        </div>
    
    </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
export default {
    name:'Login',
    setup() {
        const username = ref('');
        const password = ref('');
        const showPassword = ref(false);
        const router = useRouter();
        const iconOff = ref('./public/seepw.png')
        const iconOn = ref('./public/seeon.png')
        const togglePasswordVisibility = () => {
        showPassword.value = !showPassword.value;
        };
        const submitForm = async () => {
            try {
                const response = await axios.post('https://dev-fe-exam.viajsc.com/ExamUser/login', {
                    username: username.value,
                    password: password.value
                })
                if (response.data.success) {
                    alert('Đăng nhập thành công');
                    sessionStorage.setItem('username', username.value);
                    username.value = '';
                    password.value = '';
                    sessionStorage.setItem('loggedIn', true);
                    router.push('/home');
                } else {
                    alert('Đăng nhập không thành công: ' + response.data.message);
                }
            } catch (error) {
                console.error('Lỗi khi gửi yêu cầu:', error);
                alert('Đã xảy ra lỗi trong quá trình xác thực!');
            }
        };

        return {
            username,
            password,
            iconOn,
            iconOff,
            showPassword,
            togglePasswordVisibility,
            submitForm
        };
    }
};
</script>

<style scoped>
    .form-container{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form-user{
        height: 44px;
        margin-left: 20px;
        color: #191D23;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 20px;
    }
    .form-pwd{
        position: relative;
        display: inline block;
        height: 44px;
        margin-left: 20px;
        color: #191D23;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 20px;
    }
    input::placeholder{
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        color: #A0ABBB;
        text-indent: 10px;

    }
    .ip-user{
        text-indent: 10px;
        font-size: 16px;
        width: 290px;
        height: 44px;
        border: solid 1px #ccc;
        border-radius: 4px;
    }
    .ip-password{
        text-indent: 10px;
        font-size: 16px;
        width: 250px;
        height: 44px;
        border: solid 1px #ccc;
        border-radius: 4px;
    }
    .icon-pw{
        position: absolute;
        top: 100%;
        right: 10px; 
        transform: translateY(-50%);
        cursor: pointer;
    }
    .btn-login{
        margin-left: 10px;
        width: 120px;
        height: 50px;
        margin-top: 22px;
        color: #fff;
        background-color: #FDBA4D;
        border-radius:4px ;
        border: solid 1px #FDBA4D;
        font-size: 16px;
        font-weight: 600;
    }

</style>