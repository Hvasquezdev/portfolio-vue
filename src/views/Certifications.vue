<template>
  <section class="section" id="about-section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-2">
          <router-link to="/" tag="button" class="button is-warning is-outlined is-medium">
            <span class="icon">
              <i class="fas fa-caret-square-left"></i>
            </span>
            <span>Home</span>
          </router-link>
        </div>

        <div class="column is-10">
          <h1 class="title has-text-centered is-uppercase has-text-weight-bold">
            My Certifications
          </h1>
        </div>

        <div class="column is-12" v-for="(item, index) in Certifications" :key="index">
          <div class="blog-card certifi-card is-width-100" :class="{'alt': !((index + 1) % 2)}">
            <div class="meta">
              <div class="photo" v-bind:style="{backgroundImage: 'url(' + item.img + ')'}"></div>
            </div>
            <div class="description">
              <h2 class="has-text-weight-bold">{{ item.name }}</h2>
              <p>
                <strong>Verification code:</strong> {{ item.code }}
              </p>
              <a :href="item.link" class="button is-warning is-outlined" target="_blank">Certification Link</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import BoxComponent from '@/components/BoxComponent.vue'
import Certifications from '@/constants/certifications.js'
export default {
  components: {
    BoxComponent
  },
  data() {
    return {
      Certifications
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/card.scss';
</style>
