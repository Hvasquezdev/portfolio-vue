<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="project.imgComp" :alt="project.name">
      </figure>
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">
            {{ project.name }}
          </p>
          <div class="tags">
            <span 
              class="tag is-warning" 
              v-for="(tech, index) in project.tech" 
              :key="index"
            >
              {{ tech }}
            </span>
          </div>
          <p class="content">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a 
        :class="{ 'disabledButton has-text-warning': !project.github }"
        class="card-footer-item has-text-success" 
        :href="project.github || '#'"
        target="_blank"
      >
        <strong v-if="project.github">Github repo</strong>
        <strong v-if="!project.github">Uploading project to github</strong>
        <span class="icon is-small">
          <i class="fab fa-github"></i>
        </span>
      </a>
      <a 
        v-if="project.link"
        class="card-footer-item has-text-success" 
        :href="project.link"
        target="_blank"
      >
        <strong>Project link</strong>
        <span class="icon is-small">
          <i class="fas fa-external-link-alt"></i>
        </span>
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['project'],
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

  .disabledButton {
    pointer-events: none;
    cursor: no-drop;
    text-decoration: none;
    filter: blur(.5px);
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
