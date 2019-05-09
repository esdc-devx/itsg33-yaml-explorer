<template>
  <div id="app">
    <HelloWorld v-bind:msg="name" />
    <form role="form">
      <SearchBox v-model="search" />
    </form>
    <div v-for="(control, name) in filteredList"
      :key="name" >
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3> {{ name }} {{ control.name }} </h3>
        </div>
        <div class="panel-body">
          <p> {{ control.description }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import fetchYaml from './fetchYaml.js'
import SearchBox from './components/SearchBox.vue'
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
    HelloWorld,
    SearchBox
  },
  created: function () {
    fetchYaml('https://raw.githubusercontent.com/cds-snc/ITSG-33-definitions/master/ITSG-33a.yaml').then(data => {
      this.name = data.name
      delete data.name
      this.controls = data
    })
  }
}
</script>
