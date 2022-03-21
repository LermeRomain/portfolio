<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link href="~bulma-timeline/dist/css/bulma-timeline.min.css" rel="stylesheet">
    <NavBar/>
    <Welcome/>
    <Tech/>
    <parcour/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Welcome from "./components/Welcome.vue";
import Tech from "@/components/Tech";
import Parcour from "@/components/parcour";

export default {
  name: 'App',
  components: {
    Parcour,
    Tech,
    Welcome,
    NavBar,
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
