<template>

  <div class="hello">

    <demo-dog-profile-modal />

    <button
      class="btn green"
      @click="$modal.show('dog-profile')">
      Demo: Dog Profile photo
    </button>

    <modal name="hello-world">
      hello, world
    </modal>

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
    <div id="container">
      <div class="square"></div>
      <button
      @click="onClick">Click</button>
    </div>

    <div id="container2">
      <div class="cat"><img src="/static/cat.png" /></div>
      <button
      @click="onClick2">Click</button>
    </div>
  </div>
</template>

<script>
import DemoDogProfileModal  from './DogProfileModal.vue'

export default {
  name: 'HelloWorld',
  components: {
    DemoDogProfileModal
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      resizable: false,
      adaptive: false,
      draggable: false,
      canBeShown: false
    }
  },
  created () {
    setInterval(() => {
      this.canBeShown = !this.canBeShown
    }, 5000)
  },
  methods: {
    show(resizable, adaptive, draggable) {
      this.resizable = resizable
      this.adaptive = adaptive
      this.draggable = draggable
      /*
        $nextTick is required because the data model with new
        "resizable, adaptive, draggable" values is not updated yet.. eh
      */
      this.$nextTick(() => {
        this.$modal.show('example-modal')
      })
    },

    conditionalShow () {
      this.$modal.show('conditional-modal', { show: this.canBeShown })
    },


    showBasicDialog () {
      this.$modal.show('dialog', {
        text: 'I am a tiny dialog box.<br/>And I render <b>HTML!</b>'
      })
    },

    showTitleDialog () {
      this.$modal.show('dialog', {
        title: 'Information',
        text: 'Check out, I have a title 😎'
      })
    },

    showButtonsDialog () {
      this.$modal.show('dialog', {
        title: 'Buttons example',
        text: 'You can add an arbitrary number of buttons.',
        buttons: [
          {
            title: 'C💩NCEL',
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: 'LIKE',
            default: true,
            handler: () => {
              alert('LIKE LIKE LIKE')
            }
          },
          {
            title: 'REPOST',
            handler: () => {
              alert('REPOST REPOST REPOST')
            }
          }
        ]
      })
    },

    dialogEvent (eventName) {
      console.log('Dialog event: ' + eventName)
    },
    onClick:function(){
      TweenMax.from('.square',1,{x:500});
      // TweenLite.to('.square', 1, {css:{scaleX:0.5, rotation:30}, ease:Power3.easeOut});
    },
    onClick2:function(){
      // TweenMax.from('.cat',1,{x:500});
      // TweenLite.to('.cat', 2, {rotationZ:"13rad", skewZ:"1deg", z:-100});
      TweenLite.to('.cat', 2, {rotation:"13rad", scale:1.2, x:10, y:0, z:-200, ease: Back.easeOut.config(15)});
    }
  },
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
.square{
  background-color:red;
  width: 100px;
  height: 100px;
  margin: 20px;
}
</style>
