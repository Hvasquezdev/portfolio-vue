<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="img" :alt="name">
      </figure>
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">
            {{ name }}
          </p>
          <div class="tags">
            <span 
              class="tag is-warning" 
              v-for="(tech, index) in technologies" 
              :key="index"
            >
              {{ tech }}
            </span>
          </div>
          <p class="content">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a 
        class="card-footer-item has-text-success" 
        :href="github"
        target="_blank"
      >
        <strong>Github repo</strong>
        <span class="icon is-small">
          <i class="fab fa-github"></i>
        </span>
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['img', 'name', 'technologies', 'description', 'github'],
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 4px;
  overflow: hidden;
  transition: all .3s;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  .media {
    .media-left {
      .image {
        border-radius: 4px;
        overflow: hidden;
      }
    }
  }
  .card-footer-item {
    cursor: pointer;
    &:hover {
      background-color: hsl(0, 0%, 96%);
    }
    .icon {
      margin-left: 5px;
    }
  }
}
</style>
