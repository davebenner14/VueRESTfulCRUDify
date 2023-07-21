<template>
  <modal name="showForm" :height="100" class="modal">
    <h2>Show Item</h2>

    <div class="item-data" v-if="item">
      <p><strong>ID:</strong> {{ item.id }}</p>
      <p><strong>Name:</strong> {{ item.name }}</p>
    </div>

    <div class="buttons">
      <button type="button" @click="$modal.hide('showForm')">Close</button>
    </div>
  </modal>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({ id: "", name: "" }),
    },
  },
  watch: {
    item(newVal, oldVal) {
      console.log("item prop changed");
      console.log("Old:", oldVal);
      console.log("New:", newVal);
    },
  },
};
</script>

<style scoped>
.item-data p {
  margin: 0 0 10px;
}
</style>
