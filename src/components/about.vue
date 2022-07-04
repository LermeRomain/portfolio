<template name="about">
  <section class="section is-medium has-background-black-bis">
    <a name="about"></a>
    <div class="columns">
      <div class="column">
        <figure class="image is-fullwidth">
          <img class="image" src="../assets/romain.jpg">
        </figure>
      </div>
      <div class="column is-7">
        <h1 class="title is-1">About Me</h1>
        <p class="subtitle is-5">Actuellement en master tech lead chef de projet digital, je suis à la recherche de
          ma prochaine alternance dans le milieu du développement web. Fort de
          plusieurs années dans le milieu du digital et du développement j ai pu me former
          dans des entreprises très différentes allant de la multinationale, à la TPE. Je suis
          donc à la recherche d'une nouvelle opportunité qui me permettra d'apprendre
          encore plus sur ce milieu qui me passionne.</p>

        <!--          <ul>
                    <li @click.prevent="nextStep1(true)"><a>Pictures</a><p v-if="activeStep ==1">azertyuiopiuytrez</p></li>
                    <li @click.prevent="nextStep2(true)"><a>Music</a><p v-if="activeStep ==2">azertyuiopiuytrez</p></li>
                    <li><a>Videos</a></li>
                    <li><a>Documents</a></li>
                  </ul>-->
        <!--            <li class="lst" @click.prevent="nextStep1(true)"><a>Button</a></li>
                    <p v-if="activeStep ==1">azertyuiopiuytrez</p></div>
                  <div class="column step">
                    <li class="lst" @click.prevent="nextStep2(true)"><a>Button</a></li>
                    <p v-if="activeStep ==2">azertyuiopiuytrez</p></div>
                  <div class="column step">
                    <li class="lst" @click.prevent="nextStep3(true)"><a>Button</a></li>
                    <p v-if="activeStep ==3">azertyuiopiuytrez</p>-->


        <ul>
          <div class="column">
            <li @click.prevent="nextStep1(true)">
              <a href="#0">Main skills</a>
              <br>
            </li>
          </div>
          <div class="column">
            <li @click.prevent="nextStep2(true)">
              <a href="#0">Award</a>
              <br>
            </li>
          </div>
          <div class="column">
            <li @click.prevent="nextStep3(true)">
              <a href="#0">Experience</a>
              <br>
            </li>
          </div>
        </ul>
        <ul class="liste" v-if="activeStep ==1">
          <li class="liste1"><span>Framework : </span><span>Symfony</span> et <span>Vuejs</span></li>
          <li class="liste1"><span>Front : HTMl/CSS</span> et <span>Javascript</span></li>
          <li class="liste1"><span>Back : PHP</span></li>
          <li class="liste1"><span>SQL : </span> création et maintance d'une base de donnée complexe</li>
          <li class="liste1"><span>Suite Abode</span></li>
          <li class="liste1"><span>Wordpress : </span>Création et maintenance d'un site <span>E-commerce / Landing Page / Portfolio</span>
          </li>
        </ul>
        <ul class="liste" v-if="activeStep ==2">
          <li class="liste1"><span>Mastere : </span><span>Tech lead / Chef de projet</span> Digital Campus</li>
          <li class="liste1"><span>Bachelor : </span><span>Chef de projet digital</span> options développement web</li>
          <li class="liste1"><span>BTS : </span>Services informatique aux Organisations options SlAM</li>
        </ul>
        <ul class="liste" v-if="activeStep ==3">
          <li class="liste1"><span>Développeur web / Webmaster :</span> Khadi & Co, Paris</li>
          <li class="liste1"><span>Webmaster :</span> Abil intérim, Paris</li>
          <li class="liste1"><span>Développeur :</span> Inspection générale du Crédit Agricole, Montrouge</li>
        </ul>
        <div class="columns">
        <div class="column"></div>
        <a class="column link" href="https://drive.google.com/file/d/1Jsb51TsvYqjAbWM851-qmmaBN6o48ziN/view" target="_blank">CV</a>
        <div class="column"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "about",
  data() {
    return {
      count: 1,
      activeStep: 1,
    };
  },
  methods: {
    nextStep1() {
      this.activeStep = 1;
    },
    nextStep2() {
      this.activeStep = 2;
    },
    nextStep3() {
      this.activeStep = 3;
    },
  }
}

</script>

<style scoped>

h1 {
  color: white;
  text-align: left;
}

p {
  font-weight: 300;
  font-size: 23px;
  color: white;
  text-align: left;
}


ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  margin: 0 2rem;
}

/* Underline styles */
a {
  display: block;
  position: relative;
  padding: 0.2em 0;
  font-size: 20px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: white;
  margin: 0 1rem 0 1rem;
}

a:hover {
  color: #f9004d;
}

/* Fade in */
a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: #f9004d;
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}

a:focus::after {
  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
}

.image {
  border-radius: 15px;
}

.liste {
  display: block;
  color: white;
  text-align: left;
}

.liste1 {
  list-style: inside;
}

span {
  font-weight: 700;
}

.link{
  margin-top: 3rem;
}

</style>