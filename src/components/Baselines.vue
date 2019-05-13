<template>

<fieldset class="legend-brdr-bttm">
    <legend>Baselines</legend>
    <div class="radio">
      <label for="none">
        <input id="none" type="radio" value="none" name="subSet" v-model="selected">
        None
      </label>
    </div>
    <div class="radio">
      <label for="pbmm">
        <input id="pbmm" type="radio" value="pbmm" name="subSet" v-model="selected">
        PBMM
      </label>
    </div>
    <div class="radio">
      <label for="min">
        <input id="min" type="radio" value="min" name="subSet" v-model="selected">
        Minimum
      </label>
    </div>
  </fieldset>

</template>

<script>

export default {
  name: 'baselines',
  computed: {
    selected: {
      get () {
        return this.$store.state.baseline
      },
      set (value) {
        console.log(value)
        this.$store.commit('changeSelection', value)
      }
    }
  }
}
</script>

<style>

</style>
