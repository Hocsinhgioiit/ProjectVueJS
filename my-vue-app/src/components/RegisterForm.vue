<template>
    <div class="form-container">
        <form class="form-register" @submit.prevent="submitForm">
            <h1 class="title-register">ĐĂNG KÝ TÀI KHOẢN</h1>
            <div class="row-1">
                <div class="ip-username">
                        <label class="title-username" for="userName">Tài Khoản</label>
                        <br>
                        <input class="input-username" type="text" id="" v-model="userName" required placeholder="Nhập tên tài khoản...">
                </div>
                <div class="ip-store">
                        <label class="title-store" for="shopName">Tên cửa hàng</label>
                        <br>
                        <input class="input-store" type="text" id="" v-model="shopName" required placeholder="Nhập tên cửa hàng... ">
                </div>
                <div class="ip-phone">
                    <label class="title-phone" for="phone">Số điện thoại<span style="color: red;">*</span></label>
                    <br>
                    <input class="input-phone" type="tel" id="" v-model="phoneNumber" required placeholder="Nhập số điện thoại">
                </div>
                <div class="ip-email">
                        <label class="title-email" for="email">Email</label>
                        <br>
                        <input class="input-email" type="email" id="" v-model="email" required placeholder="Nhập email...">
                </div>
            </div>
            <div class="row-2">
                <div class="ip-password">
                    <label class="title-password" for="password">Mật khẩu<span style="color: red;">*</span></label>
                    <br>
                    <input class="input-password" :type="showPassword ? 'text' : 'password'" id="password" v-model="password" required placeholder="Nhập mật khẩu...">
                    <span class="toggle-password" @click="togglePasswordVisibility">
                        <img  class="icon-pw" :src="showPassword ? iconOn : iconOff" alt="">
                    </span>
                </div>
                <div class="">
                        <label class="title-confirmpw" for="confirmPassword">Xác nhận mật khẩu<span style="color: red;">*</span></label>
                        <br>
                        <input class="input-confirmpw" :type="showConfirmPassword ? 'text' : 'password'" id="confirmPassword" v-model="confirmPassword" required placeholder="Xác minh mật khẩu...">
                         <span class="toggle-password" @click="toggleConfirmPasswordVisibility ">
                        <img  class="icon-pw" :src="showConfirmPassword ? iconOn : iconOff" alt="">
                    </span>
                </div>
            </div>
            <div class="row-3">
                  <div class="ip-address">
                    <label class="title-address" for="address">Địa chỉ</label>
                    <br>
                    <input class="input-address" type="text" id="address" v-model="address" required placeholder="Nhập số nhà,tòa nhà,tên đường...">
                </div>
            </div>
            <div class="row-4">
                  <div class="ip-ward">
                    <label class="title-ward" for="ward">Phường/Xá</label>
                    <br>
                    <input class="input-ward" type="text" id="ward" v-model="wards" required placeholder="Chọn Phường/Xã">
                    <i class="icon-down fa-solid fa-angle-down"></i>
                </div>
                 <div class="ip-district">
                    <label class="title-district" for="district">Quận/Huyện</label>
                    <br>
                    <input class="input-district" type="text" id="district" v-model="district" required placeholder="Chọn Quận/Huyện">
                    <i class="icon-down fa-solid fa-angle-down"></i>
                </div>
                <div class="ip-city">
                    <label class="title-city" for="province">Thành Phố</label>
                    <br>
                    <input class="input-city" type="text" id="province" v-model="province" required placeholder="Chọn Thành Phố">
                    <i class="icon-down fa-solid fa-angle-down"></i>
                </div>
            </div>
            <div class="footer-register">
                <div class="footer-register--text">
                        <input type="checkbox" name="" v-model="checkbox" id="">
                        <span class="text-footer"> Tôi đã đọc và đồng ý với <a class="policy-footer" href="">Chính sách và bảo mật thông tin</a></span>
                </div>
                    
                <div class="button-register">
                        <button class="btn-register" type="submit">Đăng ký ngay</button>
                </div>
                
            </div>
        </form>
        <div class="form-service">
            <h1 class="title-form-service">DỊCH VỤ CỦA CHÚNG TÔI</h1>
            <div class="form-service-img">
                <div class="form-service-row1">
                    <img class="img-service" style="width: 140px;height: 99px;" :src="iconbox" alt="">
                    <img class="img-service" style="width: 140px;height: 99px;" :src="clockbox" alt="">
                </div>
                <div class="form-service-row1">
                    <img class="img-service" style="width: 140px;height: 99px;" :src="carbox" alt="">
                    <img class="img-service" style="width: 140px;height: 99px;" :src="fresbox" alt="">
                </div>
                <div class="form-service-row1">
                    <img class="img-service" style="width: 304px;height: 104px;" :src="internationbox" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="overlay" v-if="showRegisterSuccessModal" @click="closeRegisterSuccessModal"></div>
    <div class="register-success-modal " v-if="showRegisterSuccessModal">
      <register-success  />
    </div>
    <div class="overlay" v-if="showRegisterFailureModal" @click="closeRegisterFailureModal"></div>
    <div class="register-failure-modal " v-if="showRegisterFailureModal">
      <register-failure @closeModal="closeRegisterFailureModal"/>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import RegisterSuccess from './RegisterSuccess.vue';
import RegisterFailure from './RegisterFailure.vue';

export default {
  components: { RegisterSuccess, RegisterFailure },
    name:'Register',
    setup() {
        const shopName =  ref('');
        const userName = ref('');
        const password = ref('');
        const phoneNumber = ref('')
        const email = ref('');
        const address = ref('');
        const district = ref('');
        const wards = ref('');
        const province = ref('');
        const iconbox = ref('./public/iconbox.png')
        const clockbox = ref('./public/clockbox.png')
        const carbox  = ref('./public/carbox.png')
        const fresbox = ref('./public/freshbox.png')
        const internationbox = ref('./public/internationbox.png')
        const confirmPassword = ref('');
        const router = useRouter();
        const checkbox = ref(false)
        const iconOff = ref('./public/seepw.png')
        const iconOn = ref('./public/seeon.png')
        const showPassword = ref(false);
        const showConfirmPassword = ref(false);
        const showRegisterSuccessModal = ref(false);
        const showRegisterFailureModal = ref(false);
        const togglePasswordVisibility = () => {
        showPassword.value = !showPassword.value;
        };
        const toggleConfirmPasswordVisibility = () => {
        showConfirmPassword.value = !showConfirmPassword.value;
        };
        const closeRegisterSuccessModal = () => {
        showRegisterSuccessModal.value = false;
        };
        const closeRegisterFailureModal = () => {
        showRegisterFailureModal.value = false;
        };
        const submitForm = async () => {
            try {
                if (!/^[a-zA-Z0-9]{5,15}$/.test(userName.value)) {
                alert("Tên người dùng gồm 5-15 ký tự. Không chứa ký tự đặc biệt!");
                return;
                }   
                if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}/.test(password.value)) {
                alert("Mật khẩu phải chứa ít nhất 1 số, 1 chữ in hoa, 1 ký tự đặc biệt, 1 chữ thường và dài hơn 6 ký tự!");
                return;
                }
                if (!/^\S+@\S+\.\S+$/.test(email.value)) {
                alert("Email không hợp lệ!");
                return;
                }
                if (password.value !== confirmPassword.value) {
                alert("Mật khẩu không khớp!");
                return;
                }
                if (!address.value.trim()) {
                alert("Vui lòng nhập địa chỉ!");
                return;
                }
                if (address.value.length < 5) {
                alert("Địa chỉ phải có ít nhất 5 ký tự!");
                return;
                }
                const phoneNumberRegex = /(09|03|07|08|05)[0-9]{8}/;
                if (!phoneNumberRegex.test(phoneNumber.value)) {
                alert("Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại hợp lệ của viễn thông Việt Nam.");
                return;
                }

                const response = await axios.post('https://dev-fe-exam.viajsc.com/ExamUser/register-user', {
                    username: userName.value,
                    shopName: shopName.value,
                    password: password.value,
                    phoneNumber: phoneNumber.value,
                    password: password.value,
                    confirmPassword: confirmPassword.value,
                    email: email.value,
                    address: address.value,
                    wards: wards.value,
                    district: district.value,
                    province: province.value,
                    acceptTerm: checkbox.value
                });
                if (response?.data.success) {
                    showRegisterSuccessModal.value = true;
                } 
                else {
                    showRegisterFailureModal.value = true;
                }
                
            } catch (error) {
                showRegisterFailureModal.value = true;
            }


            const userData = {
                username: userName.value,
                password: password.value
            };
            
        };

        

        const phoneInput = ref(null);

        return {
            userName,
            shopName,
            password,
            phoneNumber,
            email,
            confirmPassword,
            checkbox,
            address,
            district,
            wards,
            province,
            iconbox,
            clockbox,
            carbox,
            fresbox,
            internationbox,
           
            phoneInput,
            iconOff,
            iconOn,
            showPassword,
            showConfirmPassword,
            togglePasswordVisibility,
            toggleConfirmPasswordVisibility,
            showRegisterSuccessModal,
            showRegisterFailureModal,
            closeRegisterSuccessModal,
            closeRegisterFailureModal,
            submitForm
        };
    }
};
</script>

<style scoped>
.form-container{
    display: flex;
    justify-content: space-between;
    }
   .form-register{
    width: 798px;
    height: 478px;
    margin-left: 50px;
  
   }
   .title-register{
    font-family: Inter;
    font-size: 25px;
    font-weight: 600;
    letter-spacing: 0em;
    text-align: center;
    color: #DCA245;
}
   .row-1 , .row-2, .row-3 , .row-4{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
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
   .ip-store,.ip-phone,.ip-email{
    font-family: Inter;
    font-size: 16px;    
    font-weight: 400;
    letter-spacing: 0em;
    
   }
    .input-store,.input-username,.input-phone,.input-email{
    height: 44px;
    width: 180px;
    border: solid 1px #A0ABBB;
    border-radius: 4px;
    text-indent: 10px;
   }
   .ip-password,.ip-confirmpw{
    font-family: Inter;
    font-size: 16px;    
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
   }
   .input-password,.input-confirmpw{
    height: 44px;
    width: 350px;
    border: solid 1px #A0ABBB;
    border-radius: 4px;
    text-indent: 10px;
   }
   .ip-address{
    font-family: Inter;
    font-size: 16px;    
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
   }
   .input-address{
    height: 44px;
    width: 792px;
    border: solid 1px #A0ABBB;
    border-radius: 4px;
    text-indent: 10px;
   }
   .ip-ward,.ip-district,.ip-city{
    font-family: Inter;
    font-size: 16px;    
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
   }
    .icon-down{
        position: absolute;
        transform: translate(-30px);
        margin-top: 18px;
    }
    .input-ward,.input-district,.input-city{
    height: 44px;
    width: 250px;
    border: solid 1px #A0ABBB;
    border-radius: 4px;
    text-indent: 10px;
    }
    .footer-register{
        display: flex;
        margin-top: 20px;
        align-items: center;
        justify-content: space-between;
    }
    .footer-register--text{
        display: flex;
    }
    .check-box{
        margin:4px 20px 0 0;
        color: #ECAD48;
    }
    .policy-footer{
        text-decoration: none;
        color:  #FDBF58;
    }
    .btn-register{
        width:  141px;
        height: 43px;
        padding: 12px, 18px, 12px, 18px;
        border-radius: 4px;
        gap: 8px;
        background-color: #FDBA4D;
        color: #fff;
        border: 1px solid #FDBA4D;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;

    }
    .form-service{
        display: block;
        align-items: center;
        width: 352px;
        height: 445px;
        background: #F7F8F9;
        margin-top: 40px;
    }
    .form-service-img{
        display: block;
        text-align: center;
    }
    .title-form-service{
        font-family: Inter;
        font-size: 19px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: -0.02em;
        text-align: center;
    }
     .icon-pw{
        position: absolute;
        transform: translate(-32px);
        margin-top: 12px;
    }
    .form-service-row1{
        display: flex;
        justify-content: center;
    }
    .img-service{
        margin: 10px;
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