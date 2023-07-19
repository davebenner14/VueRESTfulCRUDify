<template>
  <div>
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
