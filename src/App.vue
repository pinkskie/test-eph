<template>
  <div>
    <Navbar v-model:input="searchValue"/>
    <PackageItem class="mt-3" :items="packages"/>
    <div class="d-flex gap-3 justify-content-center my-3">
      <MyButton @btnAction="decrement">Prev</MyButton>
      <MyButton @btnAction="increment">Next</MyButton>
    </div>
    <b class="d-block"> Current page: {{ from / 10 + 1}}</b>
    <b> Total pages: {{ Math.ceil(total / 10) }}</b>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import PackageItem from './components/PackageItem.vue'
import MyButton from './components/MyButton.vue'
import { mapGetters } from 'vuex';


export default {
  data() {
    return {
      searchValue: 'vue',
      from: 0,
    }
  },
  components: {
    Navbar,
    Footer,
    PackageItem,
    MyButton
  },
  computed: {
    ...mapGetters({
      packages: 'packages/GET_PACKAGES',
      total: 'packages/GET_TOTAL'
    })
  },
  watch: {
    searchValue() {
      this.search()
    },
    from() {
      this.search()
    },
  },
  mounted() {
    this.search()
  },
  methods: {
    search() {
      this.$store.dispatch('packages/FETCH_PACKAGES', {from: this.from, text: this.searchValue})
    },
    increment() {
      if (this.total > this.from + 10) {
        this.from += 10
      }
    },
    decrement() {
      if (this.from - 10 >= 0) {
        this.from -= 10
      }
    }

  }
}
</script>
<style lang="scss">

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
