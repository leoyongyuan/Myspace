<template>
<TempContentBase>
    <div class="row justify-content-md-center">
      <div class="col-3">
           <form @submit.prevent="login">
            <div class="mb-3">
              <label for="username" class="form-label">用户名</label>
              <input v-model="username" type="text" class="form-control" id="username" >
            </div> 
            <div class="mb-3">
              <label for="password" class="form-label">密码</label>
              <input v-model="password" type="password" class="form-control" id="password">
            </div>
            <div class="error-message">{{error_meassage}}</div>
            <button  type="submit" class="btn btn-primary">登录</button>
          </form>
      </div>
    </div>
</TempContentBase>
</template>

<script>
import TempContentBase from '../tcomponents/TempContentBase';
import { useStore } from 'vuex';
import { ref } from 'vue';
import router from '@/router/index';

export default {
    name:"TempLoginView",
    components:{
        TempContentBase,
    },
    
    setup(){
        const store = useStore();

        let username = ref('');
        let password = ref('');
        let error_meassage = ref('');


        const login = () => {
            error_meassage.value = '';
            
            store.dispatch('login',{
                username:username.value,
                password:password.value,
                success(){
                    router.push({name:'TempUserList'});                        //用router调转页面
                },
                error(){
                    error_meassage.value = "用户名或密码错误";
                },
            });
        };

        return{
            username,
            password,
            login,
            error_meassage,
        };
    }
};
</script>

<style scoped>
button{
  width: 100%;
}  

.error-message {
  color:red;
}
</style>