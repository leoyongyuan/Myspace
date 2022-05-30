<template>
  <!-- <NavBar /> 
  <router-view :key="$route.fullPath" /> -->
    <TempNavBar />
  <router-view :key="$route.fullPath"/>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap/dist/js/bootstrap'; 
  // import NavBar from './components/NavBar';
  import TempNavBar from './tcomponents/TempNavBar.vue';
  export default {
    name:"App",
    components: {
    // NavBar,
    TempNavBar,
  }
  }
</script>

<style>
</style>
