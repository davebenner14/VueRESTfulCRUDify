<template>
  <div class="search-bar">
    <div class="input-wrapper">
      <input v-model="searchTerm" type="text" placeholder="Search" />
      <i class="material-icons theme--light">search</i>
    </div>
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-wrapper {
  position: relative;
  flex-grow: 1;
  padding-left: 10px;
  max-width: 300px; /* Adjust this value to your liking */
}

.input-wrapper input {
  width: 100%;
  border: none;
  outline: none;
  font-family: Roboto, sans-serif;
  line-height: 1.5;
  overflow-wrap: break-word;
  white-space: normal;
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  letter-spacing: normal;
  text-align: left;
  box-sizing: inherit;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  min-width: 0;
  padding-top: 12px;
  align-items: flex-start;
  cursor: text;
}

.input-wrapper::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background-color: grey;
  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.input-wrapper:focus-within::before {
  background-color: rgb(230, 127, 230);
}

.material-icons {
  position: absolute;
  right: 5px;
  bottom: 5px;
}
</style>
