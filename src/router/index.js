import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue';
// import UserList from '../views/userList';
// import UserProfile from '../views/userProfile';
// import LoginView from '../views/loginView';
// import RegisterView from '../views/registerView';
// import NotFound from '../views/notfoundView';
import TempHomeView from '../tviews/TempHomeView';
import TempUserList from '../tviews/TempUserList';
import TempUserProfile from '../tviews/TempUserProfile';
import TempNotFound from '../tviews/TempNotFound';
import TempLoginView from '../tviews/TempLoginView';
import TempRegisterView from '../tviews/TempRegisterView';

const routes = [
  {
    path:'/',
    name:'home',
    component:TempHomeView,  
  },
  {
    path:'/TempUserList',
    name:'TempUserList',
    component:TempUserList,
  },
  {
    path:'/TempUserProfile/:userId/',
    name:'TempUserProfile',
    component:TempUserProfile,
  },
  {
    path: '/TempNotFound/',
    name: '404',
    component: TempNotFound,
  },
  {
    path: '/TempLoginView',
    name: 'TempLoginView',
    component:TempLoginView,
  },
  {
    path: '/TempRegisterView',
    name:'TempRegisterView',
    component:TempRegisterView,
  },
  {
    path:'/:catchAll(.*)',
    redirect:"/404/",
  },
]

// const routes = [
//   {
//     path: '/myspace/',
//     name: 'home', 
//     component: HomeView
//   },
//   {
//     path: '/myspace/userlist/',
//     name: 'userlist',
//     component: UserList
//   },
//   {
//     path: '/myspace/userprofile/:userId/',
//     name: 'userprofile',
//     component: UserProfile
//   },
//   {
//     path: '/myspace/login/',
//     name: 'login',
//     component: LoginView
//   },
//   {
//     path: '/myspace/register/',
//     name: 'register',
//     component: RegisterView
//   },
//   {
//     path: '/myspace/404/',
//     name: '404',
//     component: NotFound
//   },
//   {
//     path:'/myspace/:catchAll(.*)',
//     redirect:"/myspace/404/",
//   }
// ]
  
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
