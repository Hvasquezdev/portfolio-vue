<template>
  <div class="modal" :class="{'is-active': activeModal}">
    <div class="modal-background"></div>
    <div class="modal-card" style="width: 90% !important;">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ data.name }}</p>
        <button class="delete" aria-label="close" @click="toggleModal"></button>
      </header>
      <section class="modal-card-body">
        <!-- <div class="image">
          <img :src="data.img" :alt="data.name">
        </div>
        <p class="subtitle mt is-6 has-text-dark has-text-weight-semibold">{{ data.tech }}</p>
        <p class="content">
          {{ data.descrip }}
        </p> -->
        <h2 class="subtitle">
          In development
        </h2>
      </section>
      <footer class="modal-card-foot is-rigth">
        <button class="button is-warning is-fullwidth" @click="toggleModal">Close</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ModalComponent',
  methods: {
    toggleModal() {
      this.$store.dispatch('toggleModal');
    }
  },
  computed: {
    ...mapGetters({
      'activeModal': 'getModalState',
      'data': 'getCardData'
    })
  }
}
</script>

<style lang="scss" scoped>
.mt {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
