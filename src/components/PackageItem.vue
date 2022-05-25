<template>
  <div>
    <div v-for="item in items" :key="item" class="card text-center mt-3">
      <div class="card-body" data-toggle="modal" data-target="#exampleModal">
        <h5 class="card-title">{{item?.package?.name}}</h5>
        <p class="card-text">{{item?.package?.description}}</p>
        <p class="card-text">{{item?.package?.publisher?.email}}</p>
        <p class="card-text">{{item?.package?.author?.url}}</p>
        <button type="button" class="btn btn-primary"  @click="modal(item)" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Details
        </button>
      <Modal :items="info"/>
      </div>
    </div>
  </div>
  
</template>

<script>
import Modal from './Modal.vue'
export default {
  data() {
    return {
      openModal: false,
      info: null
    }
  },
  components: {Modal  },
  props: {
    items: {
      type: Array,
    }
  },
  methods: {
    modal(item) {
      this.openModal = true
      this.info = item
    }
  },
  mounted() {
    console.log(this.items,'items')
  }
}
</script>

<style lang="scss" scoped>

</style>