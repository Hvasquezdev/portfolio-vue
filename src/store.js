import Vue from 'vue'
import Vuex from 'vuex'

import projects from './constants/projects'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: false,
    cardData: {},
    projects
  },
  getters: {
    getModalState: (state) => state.modal,
    getCardData: (state) => state.cardData,
    getProjects: (state) => state.projects
  },
  mutations: {
    toggleModal(state, cardData) {
      state.modal = !state.modal;
      if(cardData) {
        state.cardData = cardData;
      } else {
        state.cardData = {};
      }
    }
  },
  actions: {
    toggleModal({commit}, cardData) {
      commit('toggleModal', cardData);
    }
  }
})
