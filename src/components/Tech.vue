<template name="tech">
  <div class="has-background">
    <a name="tech"></a>
    <section class="section is-medium">
      <h1 class="title">Mes projets</h1>
      <div class="columns">
        <div class="column is-3">
          <a href="https://associ.fr/" target="_blank">
            <div class="card">
              <div class="card-image">
                <figure class="is-align-items-center">
                  <img src="../assets/associ.png">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-left">Associ</p>
                  </div>
                </div>

                <div class="content has-text-left">
                  Création d'une plateforme pour informer, aider et accompagner les jeunes novices qui souhaitent se lancer dans
                  la création d'une association.<br><br>
                  <a href="#">#Vuejs</a>
                  <br>
                  <br>
                  <time datetime="2016-1-1">15:23 PM - 17 Juin 2021</time>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="column">
        </div>
        <div class="column is-3">
          <a href="https://khadiandco.com/" target="_blank">
            <div class="card">
              <div class="card-image">
                <figure class="is-align-items-center">
                  <img src="../assets/khadi.png">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-left">Khadi&Co</p>
                  </div>
                </div>

                <div class="content has-text-left">
                  Avec le confinement il a fallu s'adapter et donc créer une boutique e-commerce pour continuer à faire
                  vivre l'entreprise et satisfaire les clients.<br><br>
                  <a href="#">#Wordpress</a> <a href="#">#e-commerce</a>
                  <br>
                  <br>
                  <time datetime="2016-1-1">17:46 PM - 15 Sept 2021</time>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="column is-3">
          <a href="https://github.com/LermeRomain/facebook" target="_blank">
            <div class="card">
              <div class="card-image">
                <figure class="is-align-items-center">
                  <img src="../assets/fakebook.png">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-left">Fakebook</p>
                  </div>
                </div>

                <div class="content has-text-left">
                  Le but était de créer un réseau social permettant de poster, modifier son profil et voir le profil
                  des autres utilisateurs ayant un compte.<br><br>
                  <a href="#">#Symfony</a> <a href="#">#PHP</a>
                  <br>
                  <br>
                  <time datetime="2016-1-1">11:09 AM - 25 Nov 2021</time>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="column"></div>
        <div class="column is-3">
          <div class="card">
            <div class="card-image">
              <figure class="is-align-items-center">
                <img src="../assets/ongoing.jpg">
              </figure>
            </div>
            <div class="card-content ongoing">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4 has-text-left">Moteur E-commerce</p>
                </div>
              </div>

              <div class="content has-text-left">
                Créer un moteur de e-commerce, donc pouvoir ajouter retirer et modifier des articles, ainsi que de les
                vendre et de gérer les transactions.<br><br>
                <a href="#">#Symfony</a> <a href="#">#e-commerce</a>
                <br><br>
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


.has-background{
  background-color: #fafafa;
}

h1 {
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 700;
  color: black;
}

h2 {
  background: white;
}


body {
  background: white;
}

.card {
  margin-top: 5rem;
}

.card:hover{
  transform: scale(1.05);
  transition-duration: 350ms;
}

.ongoing{
  background-color: #fafafa;
}
</style>