import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

function isExactMatchOnName (term, collection) {
  return (term.length === 2 &&
          objectHasProperties(collection))
}

function isWorthSearching (term) {
  return (term === '' ||
          term === 1)
}

function objectHasProperties (obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return true
    }
  }
  return false
}

function matchKeys (val, key, term) {
  return key.toLowerCase().includes(term)
}

function matchValue (val, key, term) {
  return val.name.toLowerCase().includes(term) ||
        val.description.toLowerCase().includes(term)
}

export default new Vuex.Store({
  state: {
    searchTerm: '',
    name: '',
    controls: {},
    pbmm: {},
    minimum: {}
  },
  getters: {
    filteredList (state) {
      if (isWorthSearching(state.searchTerm)) {
        return state.controls
      }

      const filterByKeys = _.pickBy(state.controls, (val, key) => matchKeys(val, key, state.searchTerm))

      if (isExactMatchOnName(state.searchTerm, filterByKeys)) {
        return filterByKeys
      }

      const filteredControls = _.pickBy(state.controls, (val, key) => matchValue(val, key, state.searchTerm))
      const mergedResults = _.merge(filterByKeys, filteredControls)
      return mergedResults
    }
  },
  mutations: {
    storeControls (state, value) {
      state.name = value.name

      delete value.name
      delete value['Family-Control ID Enhancement']

      state.controls = value

      Object.freeze(state.controls)
    },
    storePBMM (state, value) {
      state.pbmm = value.standards.ITSG_33a
    },
    storeMinimum (state, value) {
      state.minimum = value.standards.ITSG_33a
    },
    search (state, value) {
      state.searchTerm = value.toLowerCase()
    }

  },
  actions: {

  }
})
