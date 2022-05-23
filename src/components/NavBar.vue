<template>
  <nav class="navbar is-fixed-top has-background-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://romainlerme.fr">
        <img src="../assets/lettre-r.png" alt="button Homepage">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

<!--      <div class="navbar-item">
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              <router-link to="/Documentions" class="item">Documentions</router-link>
            </a>
          </div>
        </div>
      </div>-->
    </div>


    <div class="navbar-end">
      <div class="navbar-menu">
        <div class="column">
          <div class="content has-text-centered">
            <a class="fa-solid fa-envelope fa-2x" href="mailto:romainlerme@hotmail.fr"></a>
            <a class="fa-brands fa-github fa-2x" href="https://github.com/LermeRomain" target="_blank"></a>
            <a class="fa-brands fa-linkedin fa-2x" href="https://www.linkedin.com/in/romain-lerme-a43297171/"
               target="_blank"></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar-item {
  font-size: 20px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: bold;
  opacity: 100%;
}

.navbar-item:hover {
  color: #f9004d;
}

/* Fade in */
.navbar-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.2em;
  background-color: #f9004d;
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}

.navbar-item a:hover::after,
.navbar-item a:focus::after {
  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
}

li {
  margin-left: 1rem;
  margin-right: 1rem;
}

.fa-2x {
  color: white;
  margin: 0rem 1rem 0rem 1rem;
}

.fa-2x:hover {
  text-decoration: none;
  transform: scale(1.1);
  transition: 350ms;
}

.item{
  color: white;
}

</style>
