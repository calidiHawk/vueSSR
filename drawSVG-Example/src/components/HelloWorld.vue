<template>
  <div class="hello">

    <button v-on:click="anim_box">Animate</button>



    <svg x="0px" y="0px" width="570px" height="150px" viewBox="0 0 570 150" xml:space="preserve">
      <circle class="circle-1" fill="none" cx="71.5" cy="77.5" r="51.5" stroke="#88CE02" stroke-width="4"/>
    </svg>




    <div id="box">
      <div class="boxSmall"></div>
      <div class="boxSmall boxTiny"></div>
    </div>
    

    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',  
  methods: {
    anim_box: function (event) {

      var box = document.getElementById("box");
      TweenLite.to(box, 0.7, {left: 0, x: 0});

      TweenLite.fromTo(".circle-1", 1, {drawSVG:"0 5%"}, {drawSVG:"9% 100%"});


     // alert('Ok Here');
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}





html, body {
  height: 100%;
}
body {
  background-color: #262626;
  font-family: 'Open Sans', sans-serif;
  overflow: hidden;
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
