import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    crypto: {},
    fiat: {},
    loading: false
  },
  mutations: {
    SET_CRYPTO (state, crypto) {
      state.crypto = crypto
    },
    SET_FIAT (state, fiat) {
      state.fiat = fiat
    },
    SET_LOADING (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    loadCrypto ({ commit }) {
      commit('SET_LOADING', true);

      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(r => r.data)
        .then(crypto => {
          commit('SET_CRYPTO', crypto);
          commit('SET_LOADING', false);
        })
    },
    loadFiat ({ commit }) {
      commit('SET_LOADING', true);

      axios
        .get('https://openexchangerates.org/api/latest.json?app_id=b8bedd7066cf46dd952512d8d6df0242')
        .then(r => r.data)
        .then(fiat => {
          commit('SET_FIAT', fiat);
          commit('SET_LOADING', false);
        })
    }
  }
})
