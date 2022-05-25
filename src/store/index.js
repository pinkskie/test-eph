import { createStore } from 'vuex'
import { packages } from './modules/package.module'

export default createStore({
  modules: {
    packages
  }
})
