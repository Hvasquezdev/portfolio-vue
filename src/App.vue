<template>
  <div id="app">
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  components: {
    FooterComponent
  }
}
</script>


<style lang="scss">
@import url(https://use.fontawesome.com/releases/v5.6.3/css/all.css);
@import "~bulma/bulma.sass";
@import "./assets/css/animations.css";
</style>
