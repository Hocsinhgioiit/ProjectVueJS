<template>
    <header>
        <div class="container-form">
                <div class="user-info">
                    <h1 class="title-infor">Xin chào bạn </h1>
                    <h2 class="user-name">{{ username }}</h2>
                    <img class="user-infor--img" :src="avatarUrl" alt="Avatar" />
                </div>
        <button @click="handleLogout" class="btn-exit">Thoát</button>
        </div> 
        <nav class="nav-header">
            <img class="img-header" :src="image" alt="">
            <img class="logo-header" :src="logo" alt=""> 
            <form class="form-search--container">
                <h1 class="title-search">TÌM KIẾM NỘI DUNG</h1>
                <div class="form-search">
                    <div class="input-search">
                        <h2 class="title-content">Nhập thông tin cần tìm</h2>
                        <input class="ip-search" type="text" placeholder="Tên người dùng,số điện thoại hoặc email">
                    </div>
                   
                    <button class="btn-search">Tìm</button>
                </div>  
            </form>   
            <div class="form-container--body">
            <div></div>
            <div class="regiter-sucess">          
                <h1 class="title-register--sucess">BẠN ĐÃ ĐĂNG NHẬP THÀNH CÔNG</h1>
                <h4 class="title-content-register">Chào mừng {{  }} đã quay trở lại hệ thống</h4>
            </div>
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
        </nav>
    </header>
    <div class="body-container">

    </div>
    <div>
       <footer-form v-if="!isLoggedIn"/>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import RegisterForm from './RegisterForm.vue';
import FooterForm from './FooterForm.vue'

export default defineComponent({
    components: { RegisterForm, FooterForm },
    name: 'Header',
    setup() {
        const router = useRouter();
        const image = ref('./public/bg.svg');
        const logo = ref('./public/logoheader.png');
        const isLoggedIn = ref(false);
        const username = ref('');
        const avatarUrl = ref('./public/avatar.png');
        const iconbox = ref('./public/iconbox.png')
        const clockbox = ref('./public/clockbox.png')
        const carbox  = ref('./public/carbox.png')
        const fresbox = ref('./public/freshbox.png')
        const internationbox = ref('./public/internationbox.png')
        const storedUsername = sessionStorage.getItem('username');
        if (storedUsername) {
            username.value = storedUsername;
        }
        const handleLogout = () => {
            sessionStorage.removeItem('username');
            router.push('/'); 
        };
        return {
            image,
            logo,
            isLoggedIn,
            username,
            avatarUrl,
            iconbox,
            clockbox,
            carbox,
            fresbox,
            internationbox,
            username,
            handleLogout,
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
    top: -8%;
    left: 0%;
    width: 271px;
    height: 271px;
}
.container-form{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 748px;
    height: 199px;
    position: absolute;
    top: 20%;
    right: 0%;

}
.user-info{
    position: absolute;
    right: -10%;
    top: -46%;
    z-index: 10;
}
.user-infor--img{
    width: 102px;
    height: 107px;
    top: 94px;
    left: 1267px;
}
.title-infor{
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
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
.form-search--container{
    position: absolute;
    width: 701px;
    height: 161px;
    top: 71px;
    left: 446.01px;
    border-radius: 4px;
}
.form-search{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 701px;
    height: 123px;
    gap: 16px;

}
.input-search{
    width: 558px;
    height: 67px;
    margin-bottom: 50px;
}
.title-search{
    color: #fff;
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    text-align: left;

}
.title-content{
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    text-align: left;

}
.ip-search{
    width: 558px;
    height: 44px;
    padding: 0 12 0 12;
    border-radius: 4;
    border: 1;
    border: solid 1px #A0ABBB;
    border-radius: 4px;
}
.btn-search{
    margin-top: 16px;
    width: 66px;
    height: 43px;
    background-color: #FDBA4D;
    color: #fff;
    border: solid 1px #FDBA4D;
    border-radius: 4px;
}
.form-container--body{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1,280px;
    height:  445px;
    gap: 130px;

}
.register-success{
    width: 798px;
    height: 71px;
    gap: 52px;
    border-radius: 4   ;
    background-color: #c51111;
}
.title-register--sucess{
    font-family: Inter;
    font-size: 25px;
    font-weight: 600;
    letter-spacing: 0em;
    text-align: center;
    color: #DCA245;
}
.title-content-register{
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
}
.title-form-service{
    font-family: Inter;
    font-size: 19px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: -0.02em;
    text-align: left;

}
.btn-exit{
    position: absolute;
    right: -8.5%;
    top: 60%;
    z-index: 10;
    width: 82px;
    height: 43px;
    background: #FDBA4D;
    border: solid #FDBA4D 1px;
    border-radius: 4px;
    color: #fff;
}
.user-name{
    color: #fff;
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;

}
</style>