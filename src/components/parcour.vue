<template>
  <div class="has-background">
    <div class="columns">
      <div class="column">
        <a href="https://drive.google.com/file/d/1Ui0QTIbDM1weo0roL2NjBECs2Tzx39Ei/view?usp=sharing" target="_blank"
           class="button is-success is-large is-responsive" name="footer">Télécharger le CV</a>
      </div>
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

.button {
  background: #485fc7;
  color: white;
  border: none;
  border-radius: 50px;
}

.button:hover {
  color: #48c78e;
}

a{
  margin: 2rem;
  color: #48c78e;
}

a:hover{
  color: #48c78e;
}
</style>