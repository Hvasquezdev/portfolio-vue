<template>
  <section class="section" id="about-section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-2">
          <router-link to="/" tag="button" class="button is-warning is-outlined is-medium has-text-dark">
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

        <div class="column is-4-widescreen is-6-tablet is-12-mobile" v-for="(item, index) in Certifications" :key="index">
          <CertificationsCard :certification="item" />
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Certifications from '@/constants/certifications.js'
import CertificationsCard from '@/components/CertificationsCard.vue'

export default {
  components: {
    CertificationsCard
  },
  data() {
    return {
      Certifications
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
  background-size: 28px 28px;
}
</style>
