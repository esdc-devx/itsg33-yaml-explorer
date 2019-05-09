<template>
 <div>
    <div v-for="(control, name) in value"
      :key="name" >
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3> {{ name }} | {{ control.name }} </h3>  </div>
        <div class="panel-body">
          <p> {{ control.description }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style>

</style>
