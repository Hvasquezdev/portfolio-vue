<template>
  <div id="app">
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>


<style lang="scss">
@import url(https://use.fontawesome.com/releases/v5.6.3/css/all.css);
@import url(https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css);
@import "./assets/css/animations.css";
</style>
