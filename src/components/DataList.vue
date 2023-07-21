<template>
  <div>
    <SearchBar @search="performSearch" />

    <DataTable
      :pagedDataList="pagedDataList"
      :selectAll="selectAll"
      :selectedItems="selectedItems"
      @update:selectAll="selectAll = $event"
      @update:selectedItems="selectedItems = $event"
      @edit-item="editItem"
      @delete-item="deleteItem"
      @add-item="addItem"
      @show-form="showForm"
    />

    <DataPagination
      :currentPage.sync="currentPage"
      :itemsPerPage.sync="itemsPerPage"
      :totalRecords="totalRecords"
    />

    <EditForm :formData="formData" />
    <AddForm />
    <ShowForm :item="selectedItem" />
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import DataTable from "./DataTable.vue";
import EditForm from "./EditForm.vue";
import AddForm from "./AddForm.vue";
import ShowForm from "./ShowForm.vue";
import DataPagination from "./DataPagination.vue";
import "./DataList.css";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    SearchBar,
    DataTable,
    EditForm,
    AddForm,
    ShowForm,
    DataPagination,
  },
  name: "DataList",
  data() {
    return {
      searchTerm: "",
      formData: {},
      selectedItem: null,
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
    showForm(item) {
      this.selectedItem = item;
      this.$modal.show("showForm");
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
