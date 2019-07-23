<template>
  <div class="home">
    <div id="wallpaper" class="wallpaper" data-image="img/background-min.jpg"></div>
    <HeaderComponent />
    <section class="section about">
      <div class="container">
        <div class="columns is-multiline">
          <AboutComponent />          
          <div class="column is-12-touch">
            <div class="tabs is-centered is-boxed">
              <ul>
                <li class="is-active">
                  <a class="has-text-success">
                    <span class="icon is-small"><i class="fab fa-chrome" aria-hidden="true"></i></span>
                    <span>Projects</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="columns is-multiline">
              <div class="column is-6" v-for="(project, index) in projects" :key="index">
                <CardComponent
                  :project="project"
                  :img="project.imgComp"
                  :name="project.name"
                  :technologies="project.tech"
                  :description="project.description"
                  :github="project.github"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ModalComponent />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    HeaderComponent: () => import('@/components/HeaderComponent.vue'),
    AboutComponent: () => import('@/components/AboutComponent.vue'),
    CardComponent: () => import('@/components/CardComponent.vue'),
    ModalComponent: () => import('@/components/ModalComponent.vue')
  },
  data() {
    return {
      imgLoaded: false
    }
  },
  mounted() {
    this.loadImage('wallpaper');
  
    setTimeout(() => { // add pulse class on the cv-down icon
      document.getElementById('aDown').className += ' pulse-down';
    }, 2000);
  },
  methods: {
    loadImage: (id) => {
      let element = document.getElementById(id);
      let imageToLoad;
      if (element.dataset.image) {
        imageToLoad = element.dataset.image;
      } else if (typeof element.currentSrc === 'undefined') {
        imageToLoad = element.src;
      } else {
        imageToLoad = element.currentSrc;
      }
      if (imageToLoad) {
        let img = new Image();
        img.src = imageToLoad;
        img.onload = () => element.className += ' is-loaded';
      }
    }
  },
  computed: {
    ...mapGetters({
      'projects': 'getProjects'
    })
  }
}
</script>

<style lang="scss" scoped>
.about {
  position: relative;
  background: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
  background-size: 28px 28px;
}

.wallpaper {
  display: block;
  min-height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

/* Specific Styles */

.wallpaper {
  background-image: url("../assets/background-min.jpg") !important;
  background-position: center;
  background-size: cover;
  opacity: .2;
  position: fixed;
}
</style>
