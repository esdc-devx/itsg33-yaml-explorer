<template>
  <div id="app">
    <h1>{{ name }}</h1>
    <div class="alert alert-info">
      <p>
        <a href="https://github.com/esdc-devx/itsg33-yaml-explorer">Link to this project on GitHub</a>
      </p>
      </div>
    <form role="form">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <SearchBox v-model="search" />
          </div>
          <div class="col-md-6">
            <baselines/>
          </div>
        </div>
      </div>
    </form>
    <p>Results found: {{ $store.getters.found }}</p>
    <SearchResults v-model="$store.getters.filteredList" />
  </div>
</template>

<script>
import fetchYaml from './fetchYaml.js'
import SearchBox from './components/SearchBox.vue'
import SearchResults from './components/SearchResults.vue'
import Baselines from './components/Baselines.vue'

export default {
  name: 'app',
  data: function () {
    return {
      controls: {},
      name: ''
    }
  },
  computed: {
    search: {
      get () {
        return this.$store.state.searchTerm
      },
      set (value) {
        this.$store.commit('search', value)
      }
    },
    found: function () {
      return 10
    }
  },
  components: {
    Baselines,
    SearchBox,
    SearchResults
  },
  created: function () {
    fetchYaml('https://raw.githubusercontent.com/cds-snc/ITSG-33-definitions/master/ITSG-33a.yaml').then(data => {
      this.$store.commit('storeControls', data)
    })
    fetchYaml('https://raw.githubusercontent.com/cds-snc/ITSG-33-baselines/master/PBMM.yaml').then(data => {
      this.$store.commit('storePBMM', data)
    })
    fetchYaml('https://raw.githubusercontent.com/cds-snc/ITSG-33-baselines/master/minimum-per-release.yaml').then(data => {
      this.$store.commit('storeMinimum', data)
    })
  }
}
</script>
