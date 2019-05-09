<template>
  <div id="app">
    <h1>{{ name }}</h1>
    <form role="form">
      <SearchBox v-model="search" />
    </form>
    <SearchResults v-model="filteredList" />
  </div>
</template>

<script>
import fetchYaml from './fetchYaml.js'
import SearchBox from './components/SearchBox.vue'
import SearchResults from './components/SearchResults.vue'
import _ from 'lodash'

export default {
  name: 'app',
  data: function () {
    return {
      controls: {},
      search: '',
      name: ''
    }
  },
  computed: {
    filteredList: function () {
      if (this.search === '' || this.search.length === 1) {
        return this.controls
      }
      const searchString = this.search.toLowerCase()

      const keys = Object.keys(this.controls)
      const filteredKeys = keys.filter(value => value.toLowerCase().includes(searchString))
      const filterListByKeys = _.pick(this.controls, filteredKeys)

      if (searchString.length <= 3 && filteredKeys.length > 0) {
        return filterListByKeys
      }

      const filteredObj = _.pickBy(this.controls, val => {
        return val.name.toLowerCase().includes(searchString) || val.description.toLowerCase().includes(searchString)
      })

      return _.merge(filteredObj, filterListByKeys)
    }
  },
  components: {
    SearchBox,
    SearchResults
  },
  created: function () {
    fetchYaml('https://raw.githubusercontent.com/cds-snc/ITSG-33-definitions/master/ITSG-33a.yaml').then(data => {
      this.name = data.name
      delete data.name
      // Remove the empty control
      delete data['Family-Control ID Enhancement']
      this.controls = data
    })
  }
}
</script>
