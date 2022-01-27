<template>
  <nav class="navbar is-fixed-top has-background-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end has">
        <a class="navbar-item has-text-white has-background-black">
          Home
        </a>

        <a class="navbar-item has-text-white has-background-black">
          Documentation
        </a>
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
.navbar-item{
  font-size: 20px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: bold;
}

.navbar-end a:after {
  content: "";
  position: absolute;
  width: 0%;
  height: 1px;
  display: block;
  transition: all 0.3s ease;
  bottom: 25%;
}
.navbar-end a:hover::after {
  width: 2rem;
  height: 3px;
  background-color: #3cae85;
}

</style>
