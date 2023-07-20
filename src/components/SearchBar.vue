<template>
  <div class="search-bar">
    <input v-model="searchTerm" type="text" placeholder="Search" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchTerm: "",
    };
  },
  watch: {
    searchTerm() {
      this.$emit("search", this.searchTerm);
    },
  },
};
</script>

<style scoped>
.search-bar {
  padding: 20px;
  margin-bottom: 10px;
}
</style>
