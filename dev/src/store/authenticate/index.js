import axios from 'axios';

export const authenticate = {
  namespaced: true,
  state: {
    profile: {
      _id: ''
    }
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
      this.dispatch('authenticate/fetchProfile');
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
          localStorage.removeItem('access_token');
          commit('setProfile', {
            _id: ''
          });
        }
      }
    }
  },
  getters: {
    getProfile(state) {
      return state.profile;
    }
  }
};
