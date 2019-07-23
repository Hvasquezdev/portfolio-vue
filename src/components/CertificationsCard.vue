<template>
  <div class="card">
    <div class="card-image">
      <figure class="image" :class="{ 'pt-20': loadingImage }">
        <lazy-image :lazySrc="certification.img" :alt="certification.name" @loadingImage="isLoadingImage" v-show="!loadingImage" />
        <spinner-component v-if="loadingImage" />
      </figure>
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-6">
            {{ certification.name }}
          </p>
          <p class="subtitle is-7">
            <strong>Code: </strong> {{ certification.code }}
          </p>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a 
        class="card-footer-item has-text-success" 
        :href="certification.link" 
        target="_blank"
      >
        <strong>Certification link</strong>
        <span class="icon is-small">
          <i class="fas fa-certificate"></i>
        </span>
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    certification: Object
  },
  components: {
    lazyImage: () => import('@/components/LazyImage.vue'),
    SpinnerComponent: () => import('@/components/SpinnerComponent.vue')
  },
  data() {
    return {
      loadingImage: true,
    }
  },
  methods: {
    isLoadingImage(value) {
      this.loadingImage = value;
    }
  }
}
</script>

<style lang="scss" scoped>
.pt-20 {
  padding-top: 20px;
}
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
