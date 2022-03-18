<template>
  <div class="has-background-success">
    <section class="section is-small">
      <div class="columns">
        <div class="column is-5">
          <a href="https://associ.fr/" target="_blank">
            <div class="card">
              <div class="card-image">
                <figure class="image is-5by3">
                  <div class="load">
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                  </div>
                </figure>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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
                <figure class="image is-5by3">
                  <div class="load">
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                  </div>
                </figure>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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
                <figure class="image is-5by3">
                  <div class="load">
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                  </div>
                </figure>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="column"></div>
        <div class="column is-5">
          <div class="card">
            <div class="card-image">
              <figure class="image is-5by3">
                <div class="load">
                  <hr/>
                  <hr/>
                  <hr/>
                  <hr/>
                </div>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/symfony_black.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Moteur E-commerce</p>
                  <p class="subtitle is-6">On going</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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
  background: #ECF0F1;
}

.card{
  border-radius: 50px;
}

.card-image{
  border-radius: 50px;
}

img{
  border-radius: 50px;
}

.figure{
  border: 50px;
}

.load {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*change these sizes to fit into your project*/
  width: 100px;
  height: 100px;
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