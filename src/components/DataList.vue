<template>
  <div>
    <SearchBar @search="performSearch" />

    <table>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="selectAll" /></th>
          <th>Actions</th>
          <th>Name</th>
          <th>Description</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in pagedDataList" :key="item.id">
          <td>
            <input type="checkbox" v-model="selectedItems" :value="item.id" />
          </td>
          <td class="icon-container">
            <i class="material-icons lightblue" @click="addItem"
              >add_circle_outline</i
            >
            <i class="material-icons orange600" @click="editItem(item)">edit</i>
            <i class="material-icons red600" @click="deleteItem(item)"
              >delete</i
            >
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>
            <input type="checkbox" :checked="item.active" disabled />
          </td>
        </tr>
      </tbody>
    </table>

    <DataPagination
      :currentPage.sync="currentPage"
      :itemsPerPage.sync="itemsPerPage"
      :totalRecords="totalRecords"
    />

    <EditForm :formData="formData" />
    <AddForm />
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import EditForm from "./EditForm.vue";
import AddForm from "./AddForm.vue";
import DataPagination from "./DataPagination.vue";
import "./DataList.css";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    SearchBar,
    EditForm,
    AddForm,
    DataPagination,
  },
  name: "DataList",
  data() {
    return {
      searchTerm: "",
      formData: {},
      selectedItems: [],
      currentPage: 1,
      itemsPerPage: 20,
      selectAll: false,
    };
  },
  computed: {
    ...mapGetters(["dataList"]),
    filteredDataList() {
      if (!this.searchTerm) {
        return this.dataList;
      }
      return this.dataList.filter(
        (item) =>
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
          item.id.toString().includes(this.searchTerm)
      );
    },
    pagedDataList() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredDataList.slice(start, end);
    },
    totalRecords() {
      return this.filteredDataList.length;
    },
  },
  methods: {
    ...mapActions(["deleteData"]),
    performSearch(searchTerm) {
      this.searchTerm = searchTerm;
    },
    deleteItem(item) {
      this.deleteData(item);
    },
    editItem(item) {
      this.formData = { ...item };
      this.$modal.show("editForm");
    },
    addItem() {
      this.$modal.show("addForm");
    },
  },
  watch: {
    selectAll(newValue) {
      this.selectedItems = newValue
        ? this.pagedDataList.map((item) => item.id)
        : [];
    },
    selectedItems(newValue, oldValue) {
      if (newValue.length !== oldValue.length) {
        this.selectAll = newValue.length === this.pagedDataList.length;
      }
    },
  },
};
</script>

<style scoped>
.material-icons {
  cursor: pointer;
  font-size: 24px;
}
.material-icons.orange600 {
  color: #fb8c00;
}
.material-icons.red600 {
  color: #e53935;
}
.material-icons.lightblue {
  color: #add8e6; /* Light blue color */
}
.icon-container {
  display: flex;
  justify-content: space-between;
}
input[type="checkbox"] {
  transform: scale(1.5);
}
</style>
