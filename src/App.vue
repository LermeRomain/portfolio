<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <NavBar/>
    <Welcome/>
    <Tech/>
    <test/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Welcome from "./components/Welcome.vue";
import Tech from "@/components/Tech";
import Test from "@/components/test";


export default {
  name: 'App',
  components: {
    Test,
    Tech,
    Welcome,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
