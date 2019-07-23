<template>
  <div class="hero is-dark is-medium">
    <div class="hero-body">
      <div class="container has-text-centered">

        <h1 class="title name">
          Hector Vasquez
        </h1>
        <div class="job">
          Front-End Developer
        </div>
        <hr class="hr">
        <div class="description">
          Hi, i'm 21 years old and my technologies are JavaScript ES6, Vue.Js, Bulma.Css and many more from the JavaScript ecosystem.
        </div>
        <div class="contact">

          <div class="buttons">
            <a href="mailto:hvasquezdev@gmail.com" class="button is-warning is-outlined is-medium">
              <span>Send email</span>
              <span class="tooltip-text">Hvasquezdev@gmail.com</span>
              <span class="icon is-small">
                <i class="fas fa-mail-bulk"></i>
              </span>
            </a>
            
            <router-link to="/certifications" tag="button" class="button is-warning is-outlined is-medium">
              <span>Certifications</span>
              <span class="icon is-small">
                <i class="fas fa-certificate"></i>
              </span>
            </router-link>
          </div>
        </div>
        <ul class="social">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/HecTorVasquez97">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Hvasquezdev">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hector-vasquez-dev/">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>

      </div>

      <a target="_blank" href="https://drive.google.com/open?id=1pUgAciv_zAiu7AdDPbflKmah0HnxmWK2" class="cv-link" id="aDown">
        <i class="fas fa-file-alt"></i>
        C.V
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
.job {
  font-family: "Montserrat", "Quicksand", sans-serif;
  letter-spacing: .3em;
  text-transform: uppercase;
}

.social a {
  transform-origin: center;
  transition-duration: .2s;
  color: #fff;
  opacity: .5;
}

.social {
  display: flex;
  margin-top: 1.5rem;
  justify-content: center;
}

/** 
 * Specific styles
*/
.hero-body {
  justify-content: center;
  padding-top: 80px !important;
  padding-bottom: 80px !important;

  .about {
    min-width: 26rem;
    text-align: center;
  }

  .name {
    font-size: 2.25rem;
    line-height: 1.125;
    margin-bottom: .5rem;
  }

  .job {
    color: #fedd56;
    font-size: .75rem;
  }

  .hr {
    background-color: #fedd56;
    border: none;
    content: "";
    height: 1px;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    transform-origin: center left;
  }

  .description {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .contact {
    display: inline-block;
    margin-top: 1.5rem;
    vertical-align: top;
  }

  .button {
    color: #fff !important;

    &:hover {
      color: hsl(0, 0%, 21%) !important;
    }
  }

  .button .tooltip-text {
    background-color: #fedd56;
    border-radius: 3px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    bottom: 120%;
    color: hsl(0, 0%, 21%);
    font-size: 16px !important;
    letter-spacing: 0;
    left: 50%;
    transition: opacity 0.3s;
    margin-left: -110px;
    opacity: 0;
    padding: 6px 0;
    position: absolute;
    text-transform: none;
    text-align: center;
    visibility: hidden;
    width: 220px;
  }

  .button .tooltip-text::after{
    content: " ";
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #fedd56 transparent transparent transparent;
  }

  .button:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }

  .social {
    li {
      height: 2rem;
      margin-right: 0.5rem;
      text-align: center;
      width: 2rem;
    }

    a {
      align-items: center;
      display: flex;
      font-size: 1.5rem;
      height: 2rem;
      justify-content: center;
      opacity: .5;
      transition-property: opacity, transform;
      user-select: none;
      width: 2rem;
      will-change: opacity, transform;

      &:hover {
        opacity: 1;
        transform: scale(1.25);
      }

      &:active {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }

  .cv-link {
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #fff;

    i {
      cursor: pointer;
      font-size: 2rem;
      opacity: .7;
      padding: 5px 5px 0 5px;
      transition-duration: .3s;
      transition-property: opacity, transform;
      user-select: none;
      will-change: opacity, transform;

      &:hover {
        opacity: 1;
        transform: scale(1.25);
      }

      &:active {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }
}
</style>
