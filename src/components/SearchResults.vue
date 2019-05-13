<template>
 <div>
    <div v-for="(control, name) in value"
      :key="name" class="wb-txthl">
      <div class="panel panel-primary" >
        <div class="panel-heading">
          <h3> <span v-html="$options.filters.highlight(name, searchTerm)"></span> |
               <span v-html="$options.filters.highlight(control.name, searchTerm)"></span></h3>  </div>
        <div class="panel-body">
          <p>
            <span v-html="$options.filters.highlight(control.description, searchTerm)" ></span>
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    searchTerm: function () {
      return this.$store.state.searchTerm
    }
  },
  filters: {
    highlight: function (value, searchTerm) {
      if (searchTerm.length <= 1) {
        return value
      }
      const re = new RegExp(searchTerm, 'ig')
      return value.replace(re, '<mark class="txthl">$&</mark>')
    }
  }

}
</script>

<style>

</style>
