<template>
  <div>
      <modal name="dog-profile"
         classes="cute-dog-profile-photo"
         transition="scale"
         @opened="opened"
         @before-close="beforeClose">
      <div slot="top-right" class="ct-top-right" @closed="closed">
        HIDE THE DOGGY
      </div>
      <div class="dog">
        <img src="/static/batman.png"/>
      </div>
      </modal>
    </div>
</template>
<script>
export default {
  name: 'InputFocusModal',
  methods: {

    opened (event) {
      TweenLite.to('.dog', 1, {rotation:"25rad", scale:1, x:0, y:0, ease: SlowMo.ease.config(1) });
    },
    beforeClose (event) {
      // transition: ease-out
      TweenLite.to('.dog', 1, {rotation:"25rad", scale:2, x:0, y:0, ease: SlowMo.ease.config(1), delay: 2});
    },
    closed (event) {
      TweenLite.to('.dog', 1, {rotation:"15rad", scale:2, x:0, y:0, ease: SlowMo.ease.config(1), delay:4});
    }
  }
}
</script>
<style lang="scss">
  .cute-dog-profile-photo {
    background-color: transparent;
    // border: 1px;
    // box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.4);
    // border: 1px solid rgba(255, 255, 255, 0.65);

    img {
      width: 260px;
      height: 260px;
    }
  }

  .ct-top-right {
    cursor: pointer;
    padding-top: 20px;
    padding-right: 30px;
    font-weight: 600;
    color: white;
    text-shadow: 0 0px 20px black;
  }

  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.5s;
  }

  .scale-enter,
  .scale-leave-active {
    opacity: 0;
    transform: scale(0.3) translateY(24px);
  }
</style>
