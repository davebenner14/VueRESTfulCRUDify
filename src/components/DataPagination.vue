<template>
  <div>
    Rows per page:
    <select v-model="localItemsPerPage" @change="updateItemsPerPage">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
    </select>
    <div>
      Records {{ startRecord }} - {{ endRecord }} from {{ totalRecords }} Page:
      {{ localCurrentPage }}
    </div>
    <div>
      <button @click="goToFirstPage">|&lt;</button>
      <button @click="goToPreviousPage">&lt;</button>
      <button @click="goToNextPage">&gt;</button>
      <button @click="goToLastPage">&gt;|</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    itemsPerPage: Number,
    totalRecords: Number,
  },
  data() {
    return {
      localCurrentPage: this.currentPage,
      localItemsPerPage: this.itemsPerPage,
    };
  },
  computed: {
    totalPageCount() {
      return Math.ceil(this.totalRecords / this.localItemsPerPage);
    },
    startRecord() {
      return (this.localCurrentPage - 1) * this.localItemsPerPage + 1;
    },
    endRecord() {
      return Math.min(
        this.localCurrentPage * this.localItemsPerPage,
        this.totalRecords
      );
    },
  },
  methods: {
    updateItemsPerPage() {
      this.$emit("update:itemsPerPage", this.localItemsPerPage);
    },
    goToFirstPage() {
      this.localCurrentPage = 1;
      this.$emit("update:currentPage", this.localCurrentPage);
    },
    goToPreviousPage() {
      if (this.localCurrentPage > 1) {
        this.localCurrentPage--;
        this.$emit("update:currentPage", this.localCurrentPage);
      }
    },
    goToNextPage() {
      if (this.localCurrentPage < this.totalPageCount) {
        this.localCurrentPage++;
        this.$emit("update:currentPage", this.localCurrentPage);
      }
    },
    goToLastPage() {
      this.localCurrentPage = this.totalPageCount;
      this.$emit("update:currentPage", this.localCurrentPage);
    },
  },
  watch: {
    currentPage(newPage) {
      this.localCurrentPage = newPage;
    },
    itemsPerPage(newCount) {
      this.localItemsPerPage = newCount;
    },
  },
};
</script>
