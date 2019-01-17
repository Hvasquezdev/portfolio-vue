<template>
  <div class="section">
    <div class="container">
      <div class="title-page has-text-centered">
        <h1 class="title has-text-weight-light is-2">
          I use the top <span class="has-text-weight-bold">technology</span> of the <br/> current web development
        </h1>
      </div>

      <div class="skills-content">
        <div class="columns is-multiline">
          <div class="column is-12" v-for="(skill, index) in skills" :key="index">
            <BoxComponent
              :img="skill.img"
              :name="skill.name"
              :link="skill.link"
              :description="skill.description"
              :stars="skill.stars"
              :color="skill.color"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoxComponent from '@/components/BoxComponent.vue'
export default {
  components: {
    BoxComponent
  },
  data() {
    return {
      skills: [
        {
          img: 'fab fa-html5',
          name: 'HTML5', 
          link: '',
          description: 'HTML5 is the latest evolution of the standard that defines HTML.',
          stars: '8.5',
          color: 'html'
        },

        {
          img: 'fab fa-css3-alt',
          name: 'Css3', 
          link: '',
          description: 'The progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
          stars: '6.5',
          color: 'css'
        },

        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qxW_5PwmdvL7nNLvt1dtTi70MD1Q7ez0wIfXlIYOXsSIGnkb',
          name: 'Bulma.Css', 
          link: '',
          description: 'The progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
          stars: '8.0',
          color: 'bulma'
        },

        {
          img: 'fab fa-js-square',
          name: 'JavaScript-ES6', 
          link: '',
          description: 'Is one of the most important coding languages on the web. It is essentially the main language that makes things happen in web browsers.',
          stars: '7.8',
          color: 'javascript'
        },

        {
          img: 'fab fa-vuejs',
          name: 'Vue.js', 
          link: '',
          description: 'The progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
          stars: '7.5',
          color: 'vue'
        },

        {
          img: 'fab fa-node-js',
          name: 'Node.js', 
          link: '',
          description: 'The progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
          stars: '6.9',
          color: 'node'
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
.section {
  height: 100% !important;
  min-height: 100vh !important;
  background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF) !important;
  background-size: 28px 28px !important;
  padding-top: 100px !important;

  .title-page {
    margin-bottom: 50px;
  }
}
</style>
