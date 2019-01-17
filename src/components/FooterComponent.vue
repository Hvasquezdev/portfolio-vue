<template>
  <footer class="footer has-background-dark">
    <p class="footer-social">
      <a href="https://twitter.com/HecTorVasquez97" class="icon has-text-white" target="blank">
        <i class="fab fa-twitter-square"></i>
      </a>

      <a href="https://github.com/Hvasquezdev" class="icon has-text-white" target="blank">
        <i class="fab fa-github-square"></i>
      </a>

      <a href="https://www.linkedin.com/in/hector-vasquez-dev/" class="icon has-text-white" target="blank">
        <i class="fab fa-linkedin"></i>
      </a>

    </p>
    <div class="copyright has-text-centered has-text-white">Handcrafted by <span class="icon has-white-text" style="vertical-align:middle;"><i class="far fa-copyright"></i></span>Hector Vasquez</div>
    <div class="made-by-bulma has-text-centered">
      <a href="https://bulma.io">
        <img src="https://bulma.io/images/made-with-bulma--semiwhite.png" alt="Made with Bulma" width="256" height="48">
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>


<style lang="scss" scoped>
footer {
  position: relative;
  text-align: center;
  font-size: 90%;
  font-weight: 400;
  letter-spacing: 1px;
  background-image: linear-gradient(141deg,#1f191a 0,#363636 71%,#46403f 100%);
  padding-bottom: 48px;

  .copyright {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .footer-social {
    font-size: 30px;
  }

  .footer-social a.icon {
    margin: 0 10px !important;
  }

  .footer-social a:hover {
    color: black;
  }
}
</style>
