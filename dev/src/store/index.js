import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import {
	authenticate
} from '@/store/authenticate';

export const store = new Vuex.Store({
	modules: {
		authenticate
	}
});
