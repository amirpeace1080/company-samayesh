import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Promise from "core-js/features/promise";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {},
  mutations: {
    SET_TODO(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    todo({ commit }) {
      return new Promise((resolve) => {
        axios
          .get("https://jsonplaceholder.typicode.com/todos")
          .then((resp) => {
            commit("SET_TODO", resp.data);
            resolve;
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
  },
  modules: {},
});
