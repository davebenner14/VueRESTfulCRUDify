<template>
  <div>
    <div v-for="item in dataList" :key="item.id">
      <p>{{ item.name }}</p>
      <button @click="deleteItem(item)">Delete</button>
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
    ...mapActions(["deleteData"]),
    deleteItem(item) {
      this.deleteData(item);
    },
    editItem(item) {
      this.$emit("edit-item", item);
    },
  },
};
</script>
