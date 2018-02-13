<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-2-example
      </h1>












      <div id="box">
        <div class="boxSmall"></div>
        <div class="boxSmall boxTiny"></div>
      </div>





      <svg x="0px" y="0px" width="570px" height="150px" viewBox="0 0 570 150" xml:space="preserve">
        <circle class="circle-1" fill="none" cx="71.5" cy="77.5" r="51.5" stroke="#88CE02" stroke-width="4"/>
      </svg>


      <button v-on:click="anim_svg">Animate</button>










hehrhehreh





      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'




import TweenMax from 'gsap'
import DrawSVGPlugin from "gsap/DrawSVGPlugin"






export default {







  methods: {
    anim_svg: function (event) {
      var box = document.getElementById("box");
      TweenLite.to(box, 0.7, {left: 0, x: 0});

      TweenLite.fromTo(".circle-1", 1, {drawSVG:"0 5%"}, {drawSVG:"9% 100%"});
    }
  },







  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}









#box {
  background-color: #88ce02;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  z-index: 1;
}
 
.boxSmall {
  position: absolute;
  background-color: #70a40b;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 25px;
  height: 75px;
  z-index: 2;
}
 
.boxTiny {
  background-color: #577a14;
  height: 50px;
  bottom: 0;
  right: 0;
  left: auto;
  z-index: 3;
}

</style>
