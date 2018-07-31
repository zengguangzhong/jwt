<template>
  <div class="Order">
   Order {{username}}
  </div>
</template>

<script>
import axios from './axios'
export default {
  data(){
    return  {username:''}
  },
  mounted(){
    axios.get('/order').then(res=>{ // 401?
      this.username = res.data.user.username
    },err=>{
      console.log(err);
    })
  }
}
</script>
