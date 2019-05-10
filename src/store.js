import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchTerm: ''
  },
  mutations: {
    search (state, value) {
      state.searchTerm = value
    }

  },
  actions: {

  }
})
