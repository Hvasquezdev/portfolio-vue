<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="img" :alt="name">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">{{ name }}</p>
          <p class="subtitle is-6">{{ technologies }}</p>
        </div>
      </div>

      <div class="content">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['img', 'name', 'technologies', 'description']
}
</script>

<style lang="scss" scoped>
.card {
  &:hover {
    cursor: pointer;
  }
}
</style>
