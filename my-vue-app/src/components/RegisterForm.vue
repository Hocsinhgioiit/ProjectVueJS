<template >
    <div class="form-container">
    <form  @submit.prevent="submitForm">
            <label class="input" for="username">Tên người dùng:</label>
            <input class="input" type="text" id="username" v-model="username" required>

            <label class="input" for="password">Mật khẩu:</label>
            <input class="input" type="password" id="password" v-model="password" required>

            <label class="input" for="corfirmPassword">Nhập lại mật khẩu:</label>
            <input class="input" type="password" id="conrfirmpassword" v-model="confirmPassword" required>

            <label class="input" for="email">Email:</label>
            <input class="input" type="email" id="email" v-model="email" required>

            <button class="btn-register" type="submit">Đăng ký</button>
        </form>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            email:"",
            confirmPassword:""
        };
    },
    methods: {
        submitForm() {
        
            console.log('Đã gửi dữ liệu:', this.username, this.password);
            const userData = {
                username: this.username,
                password: this.password
            };

            if (!/^[a-zA-Z0-9]{5,15}$/.test(userData.username) ){
              alert("Tên người dùng gồm 5-15 ký tự. Không chứa ký tự đặc biệt!")
                return;
            } 

           if (!/\S+@\S+\.\S+/.test(this.email)) {
                alert("email khong hop le")
                return;
            } 
            if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}/.test(userData.password)) {
               alert("Mật khẩu nhiều hơn 6 ký tự. Chứa ít nhất 1 số, 1 chữ in hoa, 1 ký tự đặc biệt, 1 chữ thường")
                return;
            } 


            if (this.password !== this.confirmPassword) {
                alert(" mat khau khong khop")
                return;
            }


            if(!isUserRegistered(userData.username)){
                addUserToStorage(userData);
                this.$router.push('/login');
            }else{
                alert("user đã tồn tại")
            }
           
        }
        
        
    }
};

function addUserToStorage(userData) {

    let users = JSON.parse(sessionStorage.getItem('users')) || [];

    users.push(userData);

    sessionStorage.setItem('users', JSON.stringify(users));
}


function isUserRegistered(username) {
   
    let users = JSON.parse(sessionStorage.getItem('users')) || [];
    return users.some(user => user.username === username);
}
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
  background-image:url('/bg.jpg') ;
}

h1 {
  text-align: center;
}

label {
  font-weight:500;
}

input {
  display: block;
  width: 450px;
  margin: 10px 0 10px 0;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-register{
  width: 200px;
  margin: 10px 0 10px 0;
  padding: 10px;
  background-color: #14e069;
  color: #fff;
  border: none;
  border-radius: 5px;
}
</style>


