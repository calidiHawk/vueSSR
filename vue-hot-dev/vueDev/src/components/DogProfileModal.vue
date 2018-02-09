<template>
  <div class="body">
      <modal name="dog-profile"
         classes="cute-dog-profile-photo"
         transition="scale"
         @opened="opened">
      <div slot="top-right" class="ct-top-right">
        X
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
      var tl = new TimelineLite();
      // // TweenLite.to('.dog', 1, {rotation:"25rad", scale:1, x:0, y:0, ease: SlowMo.ease.config(1) });
      tl.add( TweenLite.fromTo('.dog', 5, {scale:5, transformOrigin:"50% 50% 100px"}, {scale:1, transformOrigin:"50% 50% 100px"}) );

    }
    //   onClick:function(){
    //   TweenMax.to('.body', 2, {rotation:360, transformOrigin:"50% 50% 100px"});
    // }
  }
}
</script>
<style lang="scss">
  .cute-dog-profile-photo {
    background-color: transparent;

    img {
      width: 100%;
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
