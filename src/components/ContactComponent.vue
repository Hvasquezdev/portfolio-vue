<template>
  <section class="section has-background-light">
    <div class="container">
      <div class="section-title has-text-centered">
        <span class="icon">
          <i class="far fa-envelope is-size-1 has-text-info"></i>
        </span>
        <h2 class="subtitle is-4">Contact with me</h2>
        <p>
          Tell me how I can help you and I'll be happy to answer you
        </p>
      </div>
      <hr class="contact-divider">

      <div class="notification is-warning">
        <p>
          The form doesn't work for now
        </p>
      </div>

      <div class="contact-form">
        <div class="field is-grouped">
          <div class="control is-expanded has-icons-left has-icons-right">
            <label class="label">Name</label>
            <div class="control">
              <input class="input is-medium is-rounded" type="text" placeholder="Name">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-asterisk"></i>
              </span>
            </div>
          </div>

          <div class="control is-expanded has-icons-left has-icons-right">
            <label class="label">Subject</label>
            <div class="control">
              <input class="input is-medium is-rounded" type="text" placeholder="Subject">
              <span class="icon is-small is-left">
                <i class="fas fa-sticky-note"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-asterisk"></i>
              </span>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-medium is-rounded" type="email" placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-asterisk"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea is-medium" placeholder="Tell me how i can help you"></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-success is-medium">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactComponent'
}
</script>


<style lang="scss" scoped>
.section {
  border-top: 1px solid hsla(48, 99%, 67%, 0.637);
  padding-bottom: 98px;
  position: relative;
  background: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
  background-size: 28px 28px;

  .section-title {
    h2 {
      margin-top: 15px;
      
    }
    p {
      color: hsla(0, 0%, 29%, 0.616);
    }
  }

  .contact-divider {
    background-color: hsla(48, 99%, 67%, 0.637);
  }
}
</style>
