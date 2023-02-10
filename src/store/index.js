import { createStore } from 'vuex'
import { loginRequest } from "../../utils/api"

export default createStore({
  state: {
    token: localStorage.getItem('myAppToken') || '',
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    isLoggedIn: (state) => !!state.token,
  },
  mutations: {
    AUTH_SUCCESS: (state, token) => {
      state.token = token;
    },
    AUTH_ERROR: (state) => {
      state.token = '';
    },
    logout: (state) => {
      state.token = ''
    }
  },
  actions: {
    AUTH_REQUEST: ({commit}, inputData) => {
      return new Promise((resolve, reject) => {
        loginRequest(inputData)
            .then((token) => {
              commit('AUTH_SUCCESS', token);
              localStorage.setItem('myAppToken', token);
              resolve();
            })
            .catch(() => {
              commit('AUTH_ERROR');
              localStorage.removeItem('myAppToken')
              reject();
            });
      });
    },
    logout({commit}) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('myAppToken')
        resolve()
      })
    }
  },
  modules: {
  }
})
