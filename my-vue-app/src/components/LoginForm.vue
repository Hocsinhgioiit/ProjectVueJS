<template>
    <form class="form-container" @submit.prevent="submitForm">
        <label for="username">Tên người dùng:</label>
        <input type="text" id="username" v-model="username" required>

        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" v-model="password" required>

        <button class="btn-login" type="submit">Đăng nhập</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
           
        };
    },
    methods: {
        submitForm() {
            const users = JSON.parse(sessionStorage.getItem("users"));
           console.log(users);
           const userRegisted=users.find((el)=>el.username===this.username)
           if(userRegisted){
            if(userRegisted.password===this.password){
                alert("đăng nhap thanh cong")
                this.username = '';
                this.password = ''; 
                this.$router.push('/home');
                sessionStorage.setItem('loggedIn', true);
               
            }else{
                alert("sai mat khau")
            }
           }else{
            alert("username k dung")
           }
            
          
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

.btn-login {
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
