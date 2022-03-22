<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link href="~bulma-timeline/dist/css/bulma-timeline.min.css" rel="stylesheet">
    <Welcome/>
    <Tech/>
    <formulaire />
    <parcour/>
  </div>

</template>

<script>
import Welcome from "./components/Welcome.vue";
import Tech from "@/components/Tech";
import Parcour from "@/components/parcour";
import Formulaire from "@/components/formulaire";

export default {
  name: 'App',
  components: {
    Formulaire,
    Parcour,
    Tech,
    Welcome,
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
