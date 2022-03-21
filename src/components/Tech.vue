<template name="tech">
  <div class="has-background-success">
    <a name="tech"></a>
    <section class="section is-medium">
      <div class="columns">
        <div class="column is-5">
          <a href="https://associ.fr/" target="_blank">
            <div class="card">
              <div class="card-image">
<!--                <figure class="is-align-items-center">
                    <img src="../assets/associ.png">
                </figure>-->
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="../assets/logo.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Associ</p>
                  </div>
                </div>

                <div class="content">
                  Création d'une plateforme pour informer, aider et accompagner les jeunes qui souhaitent se lancer dans
                  la création d'une association.
                  <a href="#">#Vuejs</a>
                  <br>
                  <time datetime="2016-1-1">15:23 PM - 17 Juin 2021</time>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="column">
        </div>
        <div class="column is-5">
          <a href="https://khadiandco.com/" target="_blank">
            <div class="card">
              <div class="card-image">
<!--                <figure class="is-align-items-center">
                  <img src="../assets/khadi.png">
                </figure>-->
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="../assets/wordpress.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Khadi&Co</p>
                  </div>
                </div>

                <div class="content">
                  Avec le confinement il a fallu s'adapter et donc créer une boutique e-commerce pour continuer à faire
                  vivre l'entreprise et satisfaire les clients.
                  <a href="#">#Wordpress</a> <a href="#">#e-commerce</a>
                  <br>
                  <time datetime="2016-1-1">17:46 PM - 15 Sept 2021</time>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="columns">
        <div class="column is-5">
          <a href="https://github.com/LermeRomain/facebook" target="_blank">
            <div class="card">
              <div class="card-image">
<!--                <figure class="is-align-items-center">
                  <img src="../assets/fakebook.png">
                </figure>-->
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="../assets/symfony_black.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Fakebook</p>
                  </div>
                </div>

                <div class="content">
                  Le but était de créer un réseau social permettant de poster, modifier son profil et voir le profil
                  des autres utilisateurs ayant un compte.
                  <a href="#">#Symfony</a> <a href="#">#PHP</a>
                  <br>
                  <time datetime="2016-1-1">11:09 AM - 25 Nov 2021</time>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="column"></div>
        <div class="column is-5">
          <div class="card">
            <div class="card-image">
<!--              <figure class="image is-5by3">

              </figure>-->
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <div class="load">
                      <hr/>
                      <hr/>
                      <hr/>
                      <hr/>
                    </div>
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Moteur E-commerce</p>
                  <p class="subtitle is-6">On going</p>
                </div>
              </div>

              <div class="content">
                Créer un moteur de e-commerce, donc pouvoir ajouter retirer et modifier des articles, ainsi que de les
                vendre et de gérer les transactions.
                <a href="#">#Symfony</a> <a href="#">#e-commerce</a>
                <br>
                <time datetime="2016-1-1">14:10 PM - 14 Mars 2022</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Tech"
}
</script>

<style scoped>


h2 {
  background: white;
}


body {
  background: white;
}

.card{
  border-radius: 20px;
}


.load {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*change these sizes to fit into your project*/
  width: 50px;
  height: 50px;
}

.load hr {
  border: 0;
  margin: 0;
  width: 40%;
  height: 40%;
  position: absolute;
  border-radius: 50%;
  animation: spin 2s ease infinite
}

.load :first-child {
  background: #19A68C;
  animation-delay: -1.5s
}

.load :nth-child(2) {
  background: black;
  animation-delay: -1s
}

.load :nth-child(3) {
  background: #19A68C;
  animation-delay: -0.5s
}

.load :last-child {
  background: black
}

@keyframes spin {
  0%, 100% {
    transform: translate(0)
  }
  25% {
    transform: translate(160%)
  }
  50% {
    transform: translate(160%, 160%)
  }
  75% {
    transform: translate(0, 160%)
  }
}
</style>