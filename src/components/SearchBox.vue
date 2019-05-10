<template>
  <form-group>
    <label for="search">Search</label>
    <input name="search"
      class="form-control"
      id="search"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      v-on:keydown.enter.prevent.stop
      type="text"/>
  </form-group>
</template>

<script>
import FormGroup from '@/components/FormGroup.vue'
export default {
  name: 'search-box',
  props: ['value'],
  components: {
    FormGroup
  }
}
</script>

<style>

</style>
