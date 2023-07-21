<template>
  <table>
    <thead>
      <tr>
        <th>
          <input
            type="checkbox"
            :checked="selectAll"
            @change="updateSelectAll"
          />
        </th>
        <th>Actions</th>
        <th>Name</th>
        <th>Description</th>
        <th>Active</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in pagedDataList" :key="item.id">
        <td>
          <input
            type="checkbox"
            :checked="selectedItems.includes(item.id)"
            @change="updateSelectedItems(item.id)"
          />
        </td>
        <td>
          <i
            class="material-icons lightblue"
            @click="$emit('add-item')"
            title="Add"
            >add_circle</i
          >
          <i
            class="material-icons orange600"
            @click="$emit('edit-item', item)"
            title="Edit"
            >edit</i
          >
          <i
            class="material-icons red600"
            @click="$emit('delete-item', item)"
            title="Delete"
            >delete</i
          >
          <i
            class="material-icons green600"
            @click="$emit('show-form', item)"
            title="Show"
            >sms</i
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
</template>

<script>
export default {
  props: {
    pagedDataList: {
      type: Array,
      default: () => [],
    },
    selectAll: {
      type: Boolean,
      default: false,
    },
    selectedItems: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    updateSelectAll(e) {
      this.$emit("update:selectAll", e.target.checked);
    },
    updateSelectedItems(id) {
      if (this.selectedItems.includes(id)) {
        const updatedItems = this.selectedItems.filter((item) => item !== id);
        this.$emit("update:selectedItems", updatedItems);
      } else {
        this.$emit("update:selectedItems", [...this.selectedItems, id]);
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
  color: #add8e6;
}
.material-icons.green600 {
  color: #4caf50;
}
.icon-container {
  display: flex;
  justify-content: space-between;
}
input[type="checkbox"] {
  transform: scale(1.5);
}
</style>
