<template>
  <nav class="navbar bg-light mt-4">
    <div class="container-fluid justify-content-center">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" :value="input" @input="$emit('update:input', $event.target.value)" placeholder="Search" aria-label="Search">
      </form>
    </div>
  </nav>
</template>

<script>
  export default {
    props: {
      input: {
        type: String
      }
    },
    emits: ['update:input']
  }
</script>

<style lang="scss" scoped>

</style>