import axios from "axios";

export const packages = {
  namespaced: true,
  state: {
    package: [],
    total: 0
  },
  mutations: {
    SET_PACKAGES(state,  payload) {
      state.package = payload
    },
    SET_TOTAL(state, payload) {
      state.total = payload
    }
  },
  actions: {
    async FETCH_PACKAGES({ commit }, {from, text}) {
      try {
        const res = await axios.get(`https://registry.npmjs.org/-/v1/search?size=10&from=${from}&text=${text}`);
        console.log('data', res.data);
        commit("SET_PACKAGES", res.data.objects)
        commit("SET_TOTAL", res.data.total)
        
      } catch (error) {
        console.error(error); 
      }
    },

  },
  getters: {
    GET_PACKAGES: (state) => state.package,
    GET_TOTAL: (state) => state.total
  } 
};