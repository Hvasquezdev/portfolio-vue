<template>
  <div class="column is-3 is-12-touch">
    <div class="about-card">
      <div class="columns is-multiline">
        <div class="column is-12-desktop is-6-tablet">
          <h5 class="title is-5">About Me</h5>
          <p>
            Hi, I'm a Front-end developer with Vue.Js, Bulma Css. Interested in everything related to programming, 
            web development and Game development. Currently studying my junior year in the informatic engineering career, 
            and learning and improving day by day my knowledge as a Front-end developer.
          </p>
          <ul>
            <li>
              <span class="icon">
                <i class="fa fa-map-marker-alt"></i>
              </span>
              Venezuela
            </li>
            <li>
              <span class="icon">
                <i class="fas fa-language"></i>
              </span>
              Español
            </li>
            <li>
              <span class="icon">
                <i class="fas fa-language"></i>
              </span>
              English - <span class="has-text-success has-text-weight-normal">Learning</span>
            </li>
            <li>
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
              Hvasquezdev@gmail.com
            </li>
          </ul>
        </div>

        <div class="column is-12-desktop is-6-tablet skills">
          <h5 class="title is-5">My Skills</h5>
          <ul>
            <li>
              <span class="icon">
                <i class="fab fa-html5"></i>
              </span>
              HTML5 - <span class="has-text-success has-text-weight-normal">80%</span>
            </li>
            <li>
              <span class="icon">
                <i class="fab fa-css3-alt"></i>
              </span>
              CSS 3 - <span class="has-text-success has-text-weight-normal">75%</span>
            </li>
            <li>
              <span class="icon">
                <i class="fab fa-css3-alt"></i>
              </span>
              Bulma.Css - <span class="has-text-success has-text-weight-normal">79%</span>
            </li>
            <li>
              <span class="icon">
                <i class="fab fa-js-square"></i>
              </span>
              JavaScript - <span class="has-text-success has-text-weight-normal">80%</span>
            </li>
            <li>
              <span class="icon">
                <i class="fab fa-vuejs"></i>
              </span>
              Vue.Js - <span class="has-text-success has-text-weight-normal">80%</span>
            </li>
            <li>
              <span class="icon">
                <i class="fab fa-node-js"></i>
              </span>
              Node.Js - <span class="has-text-success has-text-weight-normal">65%</span>
            </li>
            <li>
              <span class="icon">
                <i class="fab fa-react"></i>                
              </span>
              React.Js - <span class="has-text-success has-text-weight-normal">Learning</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "AboutComponent"
};
</script>


<style lang="scss" scoped>
.about-card {
  font-size: 15px;
  font-weight: 300;

  .title {
    text-transform: uppercase;
    // font-size: 14px;
    font-weight: 500;
    padding: 8px 0;
    border-bottom: 3px solid hsl(141, 71%, 48%);
    border-radius: 3px;
    color: #424242;
    margin-bottom: 15px;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    margin-bottom: 20px;
  }

  ul li {
    a {
      color: #424242;

      &:hover {
        color: hsl(141, 71%, 48%);
      }
    }
    &:hover {
      color: hsl(141, 71%, 48%);
    }
  }
}

@media screen and (max-width: 1087px) {
  .skills {
    .title,
    ul li {
      text-align: right;
    }
  }
}
</style>