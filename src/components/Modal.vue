<template>
  <div class="container">
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <p class="mt-4"> {{ items?.package?.name }}</p>
          <p class="mt-2"><b>Author:</b> {{ items?.package?.author?.name }}</p>
          <p><b>Date:</b> {{ items?.package?.date }}</p>
          <p><b>Description:</b>{{ items?.package?.description }}</p>
          <p><b>Publisher: </b> {{ items?.package?.publisher?.username }} - {{ items?.package?.publisher?.email}}</p>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Object,
        required: true
      }
    },
  }

</script>

<style lang="scss" scoped>

</style>