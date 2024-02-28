<template>
    <form class="form-container" @submit.prevent="submitForm">
        <label for="username">Tên người dùng:</label>
        <input type="text" id="username" v-model="username" required>

        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" v-model="password" required>

        <label for="corfirmPassword">Nhập lại mật khẩu:</label>
        <input type="password" id="conrfirmpassword" v-model="confirmPassword" required>

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>

        <button class="btn-register" type="submit">Đăng nhập</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            email: "",
            confirmPassword: ""
        };
    },
    methods: {
        submitForm() {
            const Username = sessionStorage.getItem("username");
            const Password = sessionStorage.getItem("password");
            if (this.username === Username && this.password === Password) {
               alert("Đăng nhập thành công")
            } else {
               alert("Tài khoản hoặc mật khẩu không chính xác")
            }
            this.username = '';
            this.password = ''; 
        }
    }
};
</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: max-content;
    height: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-image: url('/bg.jpg');
}

h1 {
    text-align: center;
}

label {
    font-weight: 500;
}

input {
    display: block;
    width: 450px;
    margin: 10px 0 10px 0;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.btn-register {
    width: 200px;
    margin: 10px 0 10px 0;
    padding: 10px;
    background-color: #14e069;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-left: 130px;
}
</style>
