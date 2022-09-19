<template>
  <section class="section is-medium has-background-black">
    <div class="column is-three-fifths is-offset-one-fifth">
      <h1 class="title">My Awesome Service</h1>
      <h2 class="subtitle"></h2>
    </div>

    <div class="columns">
      <div class="column">
          <a class="box">
            <h3>Création de site web</h3>
          </a>
      </div>
      <div class="column">
        <a class="box">
          <h3>Création de site E-Commerce</h3>
        </a>
      </div>
      <div class="column">
        <a class="box">
          <h3>Création de Portfolio</h3>
        </a>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <a class="box">
          <h3>Optimisation SEO</h3>
        </a>
      </div>
      <div class="column">
        <a class="box">
          <h3>Optimisation de base de données</h3>
        </a>
      </div>
      <div class="column">
        <a class="box">
          <h3>Montage d'ordinateur</h3>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "service"
}
</script>

<style scoped>

.title {
  font-size: 60px;
  color: white;
  font-weight: 600;
}

.subtitle {
  font-size: 18px;
  color: white;
  font-weight: 300;
}

h3{
  font-size: 24px;
  color: white;
  font-weight: 700;
}

h4{
  font-size: 18px;
  color: white;
  font-weight: 300;
  opacity: 75%;
}

.box{
  background-color:hsl(0, 0%, 21%);
  color: white;
  border:0;
  outline:none;
  box-shadow:none;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}

.box:hover {
  color: white;
  transform: scale(1.01);
  transition: 300ms;
  background: linear-gradient(90deg,#f61b10,#ef0963);
  border:0;
  outline:none;
  box-shadow:none;
}
</style>