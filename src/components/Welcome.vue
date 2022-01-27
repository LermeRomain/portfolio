<template>
  <div class="has-background-black">
    <section class="section is-large">
      <h1 class="subtitle has-text-white"><span>Romain</span> Lerme</h1>
      <h2 class="subtitle has-text-white">
          <!--          <vue-typer
                        :text='["Dévelopeur web","Webmaster","Jeune","Ambitieux","Curieux"]'
                        :repeat='Infinity'
                        :shuffle='true'
                        initial-action='typing'
                        :pre-type-delay='70'
                        :type-delay='70'
                        :pre-erase-delay='2000'
                        :erase-delay='250'
                        erase-style='select-all'
                        :erase-on-complete='false'
                        caret-animation='expand'
                    ></vue-typer>-->
            <h3>Coding is
              <span class="typed-text">{{ typeValue }}</span>
              <span class="cursor" :class="{'typing': typeStatus}"></span>
            </h3>
        <p>Je suis actuellement en Master 1 spécialité dévelopement web</p>
      </h2>
    </section>
  </div>
</template>

<script>
import {setTimeout} from 'timers';

export default {
  name: "Welcome",

  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['fun', 'awesome', 'a journey', 'life'],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus)
          this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus)
          this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  }
}

</script>

<style scoped>

h1 {
  text-transform: uppercase;
  font-size: 5rem;
  font-weight: 700;
}

h2 {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  color: #90acd1;
  letter-spacing: 4px;
}

h3 {
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 700;
  color: white;
  letter-spacing: 4px;
  padding-bottom: 3%;
}

img {
  width: 62%;
  border-radius: 20%;
}

span {
  color: #3cae85;
}
</style>