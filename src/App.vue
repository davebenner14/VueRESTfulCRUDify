<template>
  <div id="app">
    <div id="intro">
      <h1 class="title">VueRESTfulCRUD</h1>
      <p class="description">
        This website serves as a mock database system, providing a variety of
        functions to interact with the data. With the interface provided, you
        can create, edit, and delete entries as you need. Additionally, there is
        a search bar available, allowing you to easily locate specific entries
        within the database.
      </p>
    </div>
    <DataForm />
    <DataList />
  </div>
</template>

<script>
import DataForm from "./components/DataForm.vue";
import DataList from "./components/DataList.vue";

export default {
  name: "App",
  components: {
    DataForm,
    DataList,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}

#intro {
  margin-bottom: 30px;
}

.title {
  font-size: 2.5em;
  font-weight: bold;
  color: #4267b2;
  margin-bottom: 20px;
}

.description {
  font-size: 1.2em;
  color: #1c1e21;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  text-align: justify;
}
</style>
