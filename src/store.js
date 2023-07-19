import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataList: [],
  },
  mutations: {
    SET_DATA(state, data) {
      state.dataList = data;
    },
    ADD_DATA(state, data) {
      state.dataList.push(data);
    },
    UPDATE_DATA(state, updatedData) {
      const index = state.dataList.findIndex(
        (data) => data.id === updatedData.id
      );
      if (index !== -1) {
        state.dataList.splice(index, 1, updatedData);
      }
    },
    DELETE_DATA(state, dataId) {
      state.dataList = state.dataList.filter((data) => data.id !== dataId);
    },
  },
  actions: {
    async fetchData({ commit }) {
      const response = await axios.get("/api/data");
      commit("SET_DATA", response.data);
    },
    async addData({ commit }, data) {
      const response = await axios.post("/api/data", data);
      commit("ADD_DATA", response.data);
    },
    async updateData({ commit }, updatedData) {
      const response = await axios.put(
        `/api/data/${updatedData.id}`,
        updatedData
      );
      commit("UPDATE_DATA", response.data);
    },
    async deleteData({ commit }, id) {
      await axios.delete(`/api/data/${id}`);
      commit("DELETE_DATA", id);
    },
  },
  getters: {
    dataList: (state) => state.dataList,
    filteredData: (state) => (searchTerm) => {
      if (!searchTerm) {
        return state.dataList;
      }
      return state.dataList.filter((data) =>
        data.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
  },
});
