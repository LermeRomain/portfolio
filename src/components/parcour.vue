<template>
  <div class="has-background-success">
    <div class="columns">
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"><div class="content has-text-centered">
        <a class="fa-solid fa-envelope fa-3x" href="mailto:romainlerme@hotmail.fr"></a>
        <a class="fa-brands fa-github fa-3x" href="https://github.com/LermeRomain" target="_blank"></a>
        <a class="fa-brands fa-linkedin fa-3x" href="https://www.linkedin.com/in/romain-lerme-a43297171/" target="_blank"></a>
      </div></div>
    </div>
  </div>
</template>

<script>


export default {
  name: "parcour",
}
</script>

<style scoped>

.column {
  padding-top: 2rem;
}

a{
  margin: 2rem;
  color: white;
}

a:hover{
  color: white;
  transform: scale(1.1);
  transition: 350ms;
}

</style>