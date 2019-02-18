<template>
  <div class="column is-12">
    <div class="blog-card alt is-width-100 about-card">
      <div class="meta">
        <div class="photo" v-bind:style="{backgroundImage: 'url(' + cardData.img + ')', backgroundPosition: 'top'}"></div>
      </div>
      <div class="description">
        <h2 class="has-text-weight-bold">{{ cardData.name }}</h2>
        <p>
          {{ cardData.descrip }} <br /> <br />
          <strong>Technologies:</strong> {{ cardData.tech }}
        </p>
        <button @click="toggleModal" class="button is-warning is-outlined">Open</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['imgComp' ,'img', 'name', 'technologies', 'description'],
  data() {
    return {
      cardData: {
        img: this.imgComp,
        name: this.name,
        tech: this.technologies,
        descrip: this.description
      }
    }
  },
  methods: {
    toggleModal() {
      this.$store.dispatch('toggleModal', this.cardData);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/card.scss';
.card {
  &:hover {
    cursor: pointer;
  }
}
</style>
