<template>
  <button @click="$emit('btnAction')" type="button" class="btn btn-primary"> 
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
</script>
