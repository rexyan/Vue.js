import Vue from 'Vue'
import Vuex from 'Vuex'
import actions from './action'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  test_value: 'this is test value'
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
