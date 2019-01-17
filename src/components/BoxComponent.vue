<template>
  <div class="box" :class="color">
    <article class="media">
      <div class="media-left">
        <div class="image is-64x64">
          <i :class="img" v-if="name !== 'Bulma.Css'"></i>
          <img :src="img" :alt="name" v-if="name === 'Bulma.Css'">
        </div>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a :href="link" class="has-text-dark"><strong>{{ name }}</strong></a>
            <br>
            {{ description }}
          </p>
        </div>
      </div>
      <div class="media-right">
        <i class="fas fa-star"></i>
        {{ stars }} 
      </div>
    </article>
  </div> 
</template>

<script>
export default {
  name: 'BoxComponent',
  props:['img', 'name', 'link', 'description', 'stars', 'color']
}
</script>

<style lang="scss" scoped>
  .box {
      opacity: .8;
      transition-duration: .2s;
      transform-origin: center;
      transition-property: transform;
      user-select: none;

    .content p {
      color: #7a7a7a !important;
    }

    .media {
      .media-left {
        font-size: 64px;

        .image {
          display: flex;
          justify-content: center;
        }
      }

      .media-right {
        display: flex;
        align-items: center;
        min-height: 70px;
        font-size: 30px;

        i {
          padding-right: 5px;
        }
      }
    }

    &:hover {
      opacity: 1;
      transform: scale(1.02);
    }
  }

  .html {
    color: red;
  }

  .css {
    color: blue;
  }

  .javascript {
    color: orange;
  }

  .vue {
    color: lightseagreen;
  }

  .node {
    color: darkslategrey;
  }
</style>
