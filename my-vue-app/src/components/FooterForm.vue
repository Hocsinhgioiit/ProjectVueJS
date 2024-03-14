<template>
    <form class="footer-form">
        <div class="footer-form--client">
            <h1 class="footer-form--title">KHÁCH HÀNG TIÊU BIỂU</h1>
            <div class="footer-form--social" >
                <i  class="icon-angle fa-solid fa-angle-left"></i>
                <img style="width: 149.34px;height: 45px" class="footer-form--icon" :src="tiktok">
                <img style="width: 131.97px;height: 45px" class="footer-form--icon" :src="upos">
                <img style="width: 152px;height: 70px" class="footer-form--icon" :src="shoppe">
                <img style="width: 152.24px;height: 39px" class="footer-form--icon" :src="oppo">
                <img style="width: 111.34px;height: 45px" class="footer-form--icon" :src="tiki">
                <img style="width: 134.64px;height: 80px" class="footer-form--icon" :src="mobileWorld">
                <i class="icon-angle fa-solid fa-angle-right"></i>
            </div>
        </div>
        <div class="footer-form--information">
            <div class="footer-form--infor">
                <img style="width: 158.98px;height: 52.8px" :src="logoFooter" >
                <div class="text-contact">
                    <h2 class="text-contact--title">CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN <br> ỨNG DỤNG THÔNG MINH VIỆT</h2>
                    <h4 class="text-contact--content">Mã Số Thuế: 0106494214</h4>
                    <h4 class="text-contact--content">Ngày Hoạt Động: 27/03/2014</h4>
                    <h4 class="text-contact--content">Sở Kế Hoạch và Đầu Tư Thành Phố Hà Nội</h4>
                    <div>
                        <img :src="icfacebook">
                        <img :src="icig">
                        <img :src="ictiktok">
                        <img :src="icytb">
                        <img :src="iczalo">
                    </div>
                </div>
                
            </div>
            <div class="form-container--contact">
                <div class="footer-form--contact">
                <h2 class="footer-form--contac-title">LIÊN HỆ</h2>
                <a href="" class="footer-form--contact-content"><img class="icon-contact"  :src="icemail">contact@viajsc.com</a>
                <h4 class="footer-form--contact-content"><img class="icon-contact" :src="icphone">1900 9999</h4>
                <h4 class="footer-form--contact-content"><img class="icon-contact" :src="iclocal">16,Ngõ 204,Trần Duy Hưng,Trung Hòa,Cầu Giấy,Hà Nội</h4>
                <img style="width: 91px;height: 34px" :src="notify">
            </div>
            <div class="footer-form--dowload">
                <h1 class="footer-form--dowload-title">TẢI ỨNG DỤNG</h1>
                <div class="footer-form--download-app">
                    <img style="width: 80px;height: 80px" :src="qrCode">
                    <div class="footer-download--app">
                    <img style="width: 108.54px;height: 30.7px" :src="appStore">
                    <br>
                    <img style="width: 108.54px;height: 30.7px" :src="googlePlay">
                    </div>
                </div>
            </div>
            </div>
            <div></div>
        </div>
        <div class="footer-end">
            <h1 class="footer-end--title">CHÍNH SÁCH BẢO MẬT</h1>
            <h2 class="footer-end--content">Copyright © 2021 VIA JSC. All rights reserved.</h2>
        </div>
    </form>
</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    name:'Footer',
    setup() {
        const router = useRouter();
        const tiktok = ref('./public/tiktok.png')
        const upos = ref('./public/upos.png')
        const shoppe = ref('./public/shoppe.png')
        const oppo = ref('./public/oppo.png')
        const tiki = ref('./public/tiki.png')
        const mobileWorld = ref('./public/thegioididong.png')
        const logoFooter = ref('./public/logofooter.png')
        const notify = ref('./public/notify.png')
        const qrCode = ref('/public/qr.jpg')
        const appStore = ref('./public/appstore.png')
        const googlePlay = ref('./public/ggplay.png')
        const icfacebook = ref('./public/facebook.svg')
        const icig = ref('./public/ig.svg')
        const ictiktok = ref('./public/tiktok.svg')
        const icytb = ref('./public/ytb.svg')
        const iczalo = ref('./public/zalo.svg')
        const icemail = ref('/public/email.svg')
        const icphone = ref('/public/phone.svg')
        const iclocal = ref('/public/local.svg')
        const submitForm = () => {
            
          
        };

        return {
            router,
            tiktok,
            tiki,
            upos,
            shoppe,
            oppo,
            mobileWorld,
            logoFooter,
            notify,
            qrCode,
            appStore,
            googlePlay,
            icfacebook,
            icig,
            ictiktok,
            icytb,
            iczalo,
            icemail,
            icphone,
            iclocal,
            submitForm
        };
    }
};
</script>
<style>
.footer-form{
    width: 1440px;
    height: 538.8px;
    background-color: #D29B42;

}
.footer-form--client{
    background: #F7F8F9;
    height: 234px;

}
.footer-form--title{
    padding-top: 20px;
    color: #DCA245;
    font-family: Inter;
    font-size: 28px;
    font-weight: 600;
    line-height: 34px;
    letter-spacing: -0.02em;
    text-align: center;

}
i.icon-angle{
    margin : 0 50px 0 50px;
}
.footer-form--social{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer-form--icon{
    width: 130px;
    height: 80px;
}
.footer-form--information{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
}
.footer-form--infor{
    width:  482px;
    height: 208.8px;
    gap: 16px;
    margin-left: 100px;

}
.text-contact{
    width: 320px;
    height: 94px;
    gap: 4px;

}
.text-contact--title{
    color: #fff;
    font-family: Inter;
    font-size: 13px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.08em;
    text-align: left;

}
.text-contact--content{
    font-family: Inter;
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    line-height: 2px;
    letter-spacing: 0.02em;
    text-align: left;
}
.form-container--contact{
    margin-top: 20px;
    display: flex;
}
.footer-form--contact{
    width: 375px;
}
.footer-form--contac-title{
    color: #fff;
    font-family: Inter;
    font-size: 13px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.08em;
    text-align: left;

}
.icon-contact{
    width: 13.33px;
    height: 10.67px;
    top: 2.67px;
    left: 1.33px;
    align-items: center;
    margin: -2px;
    margin-right: 5px;
}
.footer-form--contact-content{
    text-decoration: none;
    color: #fff;
    font-family: Inter;
    font-size: 13px;
    font-weight: 600;
    line-height: 2px;
    letter-spacing: 0.02em;
    text-align: left;
}
.footer-form--dowload{
    margin-left: 20px;
}
.footer-form--dowload-title{
    color: #fff;
    font-family: Inter;
    font-size: 13px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.08em;
    text-align: left;
    
}
.footer-form--download-app{
    display: flex;
   
}
.footer-download--app{
    margin-left: 20px;
}
.footer-end{
    width: 1440px;
    height: 76px;
    top: 1541px;
    background-color:#D29B42 ;
    padding: 16px, 444px, 16px, 444px;
    gap: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
.footer-end--title{
    color: #fff;
    font-family: Inter;
    font-size: 13px;
    font-weight: 600;
    line-height: 0px;
    letter-spacing: 0.08em;
    text-align: left;

}
.footer-end--content{
    font-family: Inter;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.02em;
    text-align: left;
    color: #fff;
}
</style>
