import axios from 'axios';

export const state = () => ({
  all: []
});

export const mutations = {
  async setWebinars(state, items) {
    state.all = items;
  }
};

export const actions = {
  async loadWebinars({ commit, state }) {
    if (!Object.keys(state.all).length) {
      const { data } = await axios.get('https://taak-website.firebaseio.com/webinars.json');
      commit('setWebinars', data)
    }
  }
};
