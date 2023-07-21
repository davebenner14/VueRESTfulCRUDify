<template>
  <modal name="showForm" :height="100" class="modal">
    <h2>Show Item</h2>

    <div class="item-data">
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
  props: ["item"],
};
</script>

<style scoped>
.item-data p {
  margin: 0 0 10px;
}
</style>
