import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import axios from 'axios';
import router from '../routers';

export const store = new Vuex.Store({
	state: {
		profile: null
	},
	mutations: {
		setProfile(state, payload) {
			state.profile = payload;
		}
	},
	actions: {
		async signUp({
			commit
		}, payload) {
			await axios({
				method: 'POST',
				data: payload,
				url: '/user/signup'
			}).catch(err => {
				console.error(err)
			});
		},

		async signIn({
			commit
		}, payload) {
			const res = await axios({
				method: 'POST',
				data: payload,
				url: '/user/signin'
			}).catch(err => {
				console.error(err)
			});
			localStorage.setItem('access_token', res.data.token);
			this.dispatch('fetchProfile');
		},

		async fetchProfile({
			commit
		}) {
			const res = await axios({
				method: 'GET',
				url: '/user/profile',
				headers: {
					'x-access-token': localStorage.getItem('access_token')
				}
			}).catch(err => {
				console.error(err)
			});
			if (res) {
				if (res.status === 200) {
					commit('setProfile', res.data);
					router.push('/profile');
				}
			}
		},

		async logout({
			commit
		}) {
			const res = await axios({
				method: 'GET',
				url: '/user/logout'
			}).catch(err => {
				console.error(err)
			});
			if (res) {
				if (res.status === 200) {
					localStorage.setItem('access_token', res.data.token);
					commit('setProfile', null);
					router.push('/');
				}
			}
		}
	},
	getters: {
		getProfile(state) {
			return state.profile;
		}
	}
});
