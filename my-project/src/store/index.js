import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './action'
import * as getters from './getter'

Vue.use(Vuex)
const store = new Vuex.Store({
  actions,
  getters,
  module: {

  }
})

export default store