<template>
    <form class="form-container--failure register-failure-modal ">
        <div class="form-content--failure">
            <div class="img-failure">
                <img  :src="iconRegisterFailure">
            </div>
            
            <h1 class="form-content--title-failure">ĐĂNG KÝ KHÔNG THÀNH CÔNG</h1>
            <span class="form-content--para">Thông tin bạn đăng ký có thể đã trùng <br>với một tài khoản khác trong hệ thống</span>
            <div class="btn-failure">
                <button @click="skipRegistration"  class="btn-skip"><i class="icon-left fa-solid fa-angle-left"></i>Bỏ qua đăng ký</button>
                <button @click="returnRegistration" class="btn-retry">Thử lại</button>
            </div>
        </div>
    </form>
  
    
</template>
<script>
    import { useRouter } from 'vue-router';
    import { defineComponent, ref } from 'vue';
    export default defineComponent({
        props: {
        showModal: {
        type: Boolean,
        required: true
        }
        },
        setup(props, { emit }) {
        const iconRegisterFailure = ref('./public/registerfailure.svg')
        const closeModal = () => {
        emit('closeModal');
        };
        const skipRegistration = () => {
            emit('closeModal'); 
            reloadPage();
        };
        const returnRegistration = () => {
            emit('closeModal'); 
            reloadPage();
        };
        const reloadPage = () => {
            window.location.reload();
        };
        const icCheck = ref('./public/check.svg')
        return {
            icCheck,
            iconRegisterFailure,
            closeModal,
            skipRegistration,
            returnRegistration,
            reloadPage
        };
  }
});
</script>
<style>
    .form-container--failure{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 560px;
        height: 329px;
        top: 348px;
        left: 440px;
        padding: 0px, 0px, 24px, 0px;
        border-radius: 4px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .img-failure{
       margin-left: 170px;
    }
    .form-content--title-failure{
        font-family: Inter;
        font-size: 28px;
        font-weight: 600;
        line-height: 34px;
        letter-spacing: -0.02em;
        text-align: left;
        color: #DC2626;
    }
    .form-content--para{
        display: block;
        vertical-align: middle;
        font-family: Inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;

    }
    .btn-failure{
        margin-top: 20px;
        height:43px;
        gap: 24px;
        margin-left: 70px;
    }
    .btn-skip{
        width: 167px;
        height: 43px;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
        background-color: #E7EAEE;
        border: 1px solid #E7EAEE;
        border-radius: 4px;
        color: #323A46;
    }
    .icon-left::before{
        margin-right: 10px;
        width: 4px;
        height: 8px;
        top: 4px;
        left: 6px;
        border: 2px;

    }
    .btn-retry{
        color: #fff;
        width: 89px;
        height: 43px;
        background-color: #19B88B;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
        margin-left: 20px;
        border: 1px solid #19B88B;
        border-radius: 4px;
    }
    .register-failure-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
    }
   
</style>
