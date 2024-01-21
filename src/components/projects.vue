<template>
  <section class="section is-medium has-background-dark">
    <div class="column is-three-fifths is-offset-one-fifth">
      <h1 class="title">My projects</h1>
      <h2 class="subtitle">Une petite liste des différents projets auxquels j'ai participé.</h2>
    </div>

    <div class="columns columns0">
      <div class="column bg-img1">
        <div class="card-image">
          <h4>Development</h4>
          <h3>Residor</h3>
          <button class="button"><a href="http://residor-paris.com/">Go in</a></button>
        </div>
      </div>
<div class="column bg-img1">
        <div class="card-image">
          <h4>Development</h4>
          <h3>Openflats</h3>
          <button class="button"><a href="https://openflats.fr/">Go in</a></button>
        </div>
      </div>
      <div class="column bg-img1">
        <div class="card-image">
          <h4>E-Commerce</h4>
          <h3>Khadi&Co</h3>
          <button class="button"><a href="https://khadiandco.com/fr/">Go in</a></button>
        </div>
      </div>
      <div class="column bg-img1">
        <div class="card-image">
          <h4>Development</h4>
          <h3>Groupe Bakjy</h3>
          <button class="button"><a href="https://www.bakjy.com/">Go in</a></button>
        </div>
      </div>
<div class="column bg-img1">
        <div class="card-image">
          <h4>Development</h4>
          <h3>Bakjy Skills</h3>
          <button class="button"><a href="https://bakjyskills.fr/">Go in</a></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "projects",
}
</script>

<style scoped>

a{
  color: white;
}

a:hover{
  color: white;
  transform: scale(1.1);
  transition-duration: 300ms;
}

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

h3 {
  font-size: 24px;
  color: white;
  font-weight: 700;
}

h4 {
  font-size: 18px;
  color: white;
  font-weight: 300;
  opacity: 75%;
}

.columns1{
  margin-top: 2rem;

}
.column{
  margin: 0 1rem 0 1rem;
  height: 20rem;
}

.button{
  background: none;
  color: white;
  border: white 2px solid;
}

.button:hover{
  color: white;
  border: white 2px solid;
}

.bg-img1 {
  background-image: url(../assets/background-assets/back-btn.jpg) ;
  background-position: center center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size:  cover;
  border-radius: 10px;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
