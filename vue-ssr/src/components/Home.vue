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


    <div>
        {{ homeText }}
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
                homeText: 'Home Component',
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
    }
  }
    };
</script>
