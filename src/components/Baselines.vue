<template>

<fieldset class="legend-brdr-bttm">
    <legend>Baselines</legend>
    <div class="radio">
      <label for="none">
        <input id="none" type="radio" name="subSet" v-model="selected">
        None
      </label>
    </div>
    <div class="radio">
      <label for="pbmm">
        <input id="pbmm" type="radio" name="subSet" v-model="selected">
        PBMM
      </label>
    </div>
    <div class="radio">
      <label for="min">
        <input id="min" type="radio" name="subSet" v-model="selected">
        Minimum
      </label>
    </div>
  </fieldset>

</template>

<script>

export default {
  name: 'baselines',
  props: ['value'],
  data: function () {
    return {
      selected: ''
    }
  }
}
</script>

<style>

</style>
