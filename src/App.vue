<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <navbar/>
    <router-view></router-view>
    <foot />
  </div>

</template>

<script>
import Navbar from "@/components/NavBar";
import Foot from "@/components/foot";

export default {
  name: 'App',
  components: {
    Foot,
    Navbar,
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

html {
  scroll-behavior: smooth;
}
</style>
