import Vue from "vue";
import Vuex from "vuex";
import { data } from "./Data"; // Import the data from Data.js

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: data, // Initialize the state with the imported data
    nextId: data.length + 1, // For generating unique ids for new tasks
  },
  getters: {
    dataList: (state) => state.data,
  },
  mutations: {
    ADD_DATA(state, dataItem) {
      state.data.unshift(dataItem); // Add the new data at the front of the array
      state.nextId++; // Increase nextId after adding a new task
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
    addData({ commit, state }, dataItem) {
      const fullDataItem = {
        id: state.nextId,
        ...dataItem,
        active: true,
      };
      commit("ADD_DATA", fullDataItem);
    },
    editData({ commit }, dataItem) {
      commit("EDIT_DATA", dataItem);
    },
    deleteData({ commit }, dataItem) {
      commit("DELETE_DATA", dataItem);
    },
  },
});
