<template>
  <div class="login">
    用户名 <input type="text" v-model="user.username"> <br>
    密码 <input type="text" v-model="user.password"> <br>
    <button @click="reg">注册</button>
    <button @click="login">登录</button>
  </div>
</template>
<script>
import axios from "./axios";
export default {
  data() {
    return { user: { username: "", password: "" } };
  },
  methods: {

    reg(){
      axios.post("/reg",this.user).then(
        res => {
          // localStorage.setItem('token',res.data.token);
          // this.$router.push('/order');
        },
        res => {
          alert(res);
        }
      );
    },
    login() {
      axios.post("/login",this.user).then(
        res => {
          localStorage.setItem('token',res.data.token);
          this.$router.push('/order');
        },
        res => {
          alert(res);
        }
      );
    }
  }
};
</script>
