<template>
  <div>
    <div v-for="item in dataList" :key="item.id">
      <p>{{ item.name }}</p>
      <button @click="deleteItem(item.id)">Delete</button>
      <button @click="editItem(item)">Edit</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DataList",
  computed: {
    ...mapGetters(["dataList"]),
  },
  methods: {
    ...mapActions(["deleteData", "fetchData"]),
    deleteItem(id) {
      this.deleteData(id);
    },
    editItem(item) {
      this.$emit("edit-item", item);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
