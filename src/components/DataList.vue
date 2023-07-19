<template>
  <table>
    <thead>
      <tr>
        <th>Actions</th>
        <th>Name</th>
        <th>Description</th>
        <th>Active</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in dataList" :key="item.id">
        <td>
          <button @click="editItem(item)">Edit</button>
          <button @click="deleteItem(item)">Delete</button>
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
        <td>
          <input type="checkbox" :checked="item.active" disabled />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import "./DataList.css";
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
