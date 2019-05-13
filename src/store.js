import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)
function getControlsFromBaseline (bl) {
  return Object.keys(bl.standards['ITSG-33a'])
}
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
    baseline: 'none',
    searchTerm: '',
    name: '',
    controls: {},
    pbmm: {},
    minimum: {}
  },
  getters: {
    found (state, getters) {
      return Object.keys(getters.filteredList).length
    },
    baselineControls (state) {
      switch (state.baseline) {
        case 'none':
          return state.controls
        case 'pbmm':
          return _.pick(state.controls, state.pbmm)
        case 'min':
          return _.pick(state.controls, state.minimum)
      }
    },
    filteredList (state, getters) {
      const ctls = getters.baselineControls
      if (isWorthSearching(state.searchTerm)) {
        return ctls
      }

      const filterByKeys = _.pickBy(ctls, (val, key) => matchKeys(val, key, state.searchTerm))

      if (isExactMatchOnName(state.searchTerm, filterByKeys)) {
        return filterByKeys
      }

      const filteredControls = _.pickBy(ctls, (val, key) => matchValue(val, key, state.searchTerm))
      const mergedResults = _.merge(filterByKeys, filteredControls)
      return mergedResults
    }
  },
  mutations: {
    changeSelection (state, value) {
      state.baseline = value
    },
    storeControls (state, value) {
      state.name = value.name

      delete value.name
      delete value['Family-Control ID Enhancement']

      state.controls = _.mapValues(value, (x) => _.mapValues(x, y => y.replace(/\n/g, '<br />')))

      Object.freeze(state.controls)
    },
    storePBMM (state, value) {
      state.pbmm = getControlsFromBaseline(value)
    },
    storeMinimum (state, value) {
      state.minimum = getControlsFromBaseline(value)
    },
    search (state, value) {
      state.searchTerm = value.toLowerCase()
    }

  },
  actions: {

  }
})
