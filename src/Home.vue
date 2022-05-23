<template>

  <section id="content">
    <Hero />
    <about />
    <service />
    <projects />
    <contact />
    <router-view></router-view>
  </section>

</template>

<script>
import About from "@/components/about";
import Hero from "@/components/Hero";
import Service from "@/components/service";
import Projects from "@/components/projects";
import Contact from "@/components/contact";


export default {
  name: 'App',
  components:{
    Contact,
    Projects,
    Service,
    Hero,
    About,
  }
}
</script>



<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  list-style: none;
  text-decoration: none;
  scroll-behavior: smooth;
  font-family: 'Ubuntu', sans-serif;
}
#content{
  overflow-x: hidden;
}

</style>
