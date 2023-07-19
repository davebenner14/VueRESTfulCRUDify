import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [
      // initial data here
    ],
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
    ADD_DATA(state, dataItem) {
      state.data.push(dataItem);
    },
    EDIT_DATA(state, dataItem) {
      const index = state.data.findIndex((item) => item.id === dataItem.id);
      if (index !== -1) {
        state.data.splice(index, 1, dataItem);
      }
    },
    DELETE_DATA(state, dataItem) {
      const index = state.data.findIndex((item) => item.id === dataItem.id);
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },
  },
  actions: {
    addData({ commit }, dataItem) {
      commit("ADD_DATA", dataItem);
    },
    editData({ commit }, dataItem) {
      commit("EDIT_DATA", dataItem);
    },
    deleteData({ commit }, dataItem) {
      commit("DELETE_DATA", dataItem);
    },
  },
});
