import { createStore } from 'vuex'
import ModuleUser from './user'

export default createStore({
  state: {                 //定义变量信息，比如定义一个对象user
  },
  getters: {              //如果要获取state中的变量信息，并且信息是需要经过计算才能获取的，就需要使用gatters
  },
  mutations: {          // 可以修改state中的变量信息 比如 state.user = {},这种操作 ，虽然和actions相似，但是不能进行异步操作，所以适合少量修改
  },
  actions: {             //定义state里面的各种操作，比如获取更新state中user信息。
  },
  modules: {               // 当state中定义过多时，不方便浏览使用，就可以用modules模块化  
    user:ModuleUser,
  }
});

