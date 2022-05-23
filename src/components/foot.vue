<template>
  <div class="is-small has-background-black-bis">
    <div class="columns">
      <div class="column">
        <div class="content">
            <h1 class="title">Romain Lermé</h1>
        </div>
      </div>
      <div class="column">
        <div class="content has-text-centered">
          <a class="fa-solid fa-envelope fa-2x" href="mailto:romainlerme@hotmail.fr"></a>
          <a class="fa-brands fa-github fa-2x" href="https://github.com/LermeRomain" target="_blank"></a>
          <a class="fa-brands fa-linkedin fa-2x" href="https://www.linkedin.com/in/romain-lerme-a43297171/"
             target="_blank"></a>
        </div>
      </div>
      <div class="column">
        <div class="content has-text-centered">
          <p>Copyright © 2022 Romain-Lermé. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "foot"
}
</script>

<style scoped>

.title{
  color: white;
  display: inline-block;
  align-content: center;
}

a{
  border: 2px solid grey;
  padding: 1rem;
  border-radius: 50px;
  margin: 0 1rem 0 1rem;
  color: white;
  background-color: black;
}

a:hover{
  transform: scale(1.1);
  transition: 300ms;
  background-color: #f9004d;
  color: white;
}

p{
  color: grey;
}

</style>