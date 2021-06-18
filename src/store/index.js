import Vue from 'vue';
import Vuex from 'vuex';

import furniture from './modules/furniture';
import products from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { furniture, products },
});
