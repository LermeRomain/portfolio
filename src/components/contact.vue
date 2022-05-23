<template>
  <section class="section is-medium has-background-dark">
    <div class="columns">
      <div class="column">
        <h1 class="title">Contact Me.</h1>
        <h2 class="subtitle">Si vous souhaitez me contacter, n'hésitez pas à envoyer un mail, je vous répondrais le plus
          rapidement possible. </h2>
        <form ref="form" @submit.prevent="sendEmail">
          <input class="input" type="text" name="user_name" placeholder="Nom">
          <input class="input" type="email" name="from_name" placeholder="Mail">
          <textarea class="textarea is-medium" name="message" placeholder="Message"></textarea>
          <input class="button" type="submit" value="Send">
        </form>
      </div>
      <div class="column">

      </div>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_2ucop3u', 'template_kdfmy2e', this.$refs.form, 'W2QhU2Glyo98vZH4I')
          .then((result) => {
            console.log('SUCCESS!', result.text);
            return alert('message envoyé avec succés');
          }, (error) => {
            console.log('FAILED...', error.text);
          });
    }
  }
}
</script>

<style scoped>

.title {
  font-size: 60px;
  color: white;
  font-weight: 600;
  text-align: left;
  margin-bottom: 3em;
}

.subtitle {
  font-size: 18px;
  color: white;
  font-weight: 300;
  text-align: left;
}

.input {
  margin: 0 0 2rem 0;
  border: 2px grey solid;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  color: white;
  font-size: 20px;
  font-weight: 700;
}


.input::placeholder {
  color: grey;
  font-size: 24px;
  font-weight: 700;
}

.input:hover {
  border-color: #f9004d;
}

input:focus {
  border: solid 2px #f9004d;
}

.textarea {
  margin: 0 0 2rem 0;
  border: 2px grey solid;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  color: white;
  font-size: 20px;
  font-weight: 700;
}

textarea:focus {
  border: solid 2px #f9004d;
  outline: none;
}


.textarea::placeholder {
  color: grey;
  font-size: 24px;
  font-weight: 700;
}

.textarea:hover {
  border-color: #f9004d;
}

.button {
  border: 2px solid #f9004d;
  background: #f9004d;
  color: #fff;
  display: flex;
  font-size: 24px;
  font-weight: 700;
}

.button:hover {
  border: 2px solid #f9004d;
  color: #f9004d;
  background: transparent;
  transition: 300ms;
  transform: scale(1.1);
}
</style>