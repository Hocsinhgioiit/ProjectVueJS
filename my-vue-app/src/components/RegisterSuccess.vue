<template>
    <form class="form-container--success register-success-modal" @click.sel f="closeModal">
        <div class="form-content--success">
            <div class="img-success">
                <img  :src="iconRegisterSucess">
            </div>
            
            <h1 class="form-content--title">ĐĂNG KÝ THÀNH CÔNG</h1>
            <span class="form-content--para">Để sử dụng dịch vụ thu hộ,<br>bạn có muốn Ký kết hợp đồng điện tử ngay ?</span>
            <div class="btn-success">
                <button @click="goToLginPage" class="btn-login">Đăng nhập</button>
                <button class="btn-contract">Ký kết hợp đồng</button>
            </div>
        </div>
    </form>
  
    
</template>
<script>
    import { defineComponent, ref } from 'vue';
    export default defineComponent({
        props: {
        showModal: {
        type: Boolean,
        required: true
        }
        },
        setup(props, { emit }) {
        const iconRegisterSucess = ref('./public/registersucess.svg')
        const closeModal = () => {
        emit('closeModal');
        };
        const goToLginPage  = () =>{
            route.push('/');
        }
        return {
            goToLginPage,
            iconRegisterSucess,
            closeModal,
        };
  }
});
</script>
<style>
    .form-container--success{
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
    .img-success{
       margin-left: 120px;
    }
    .form-content--title{
        font-family: Inter;
        font-size: 28px;
        font-weight: 600;
        line-height: 34px;
        letter-spacing: -0.02em;
        text-align: left;
        color: #10B981;
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
    .btn-success{
        width: 305px;
        height:43px;
        gap: 24px;
        margin-top: 20px;
    }
    .btn-login{
        width: 120px;
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
    .btn-contract{
        color: #fff;
        width: 161px;
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
    .register-success-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
    }
</style>
