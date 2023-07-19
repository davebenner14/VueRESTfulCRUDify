<template>
  <div>
    <input v-model="formData.name" type="text" placeholder="Name" />
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DataForm",
  props: {
    editItemData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      formData: this.editItemData,
    };
  },
  methods: {
    ...mapActions(["addData", "updateData"]),
    submitForm() {
      if (this.formData.id) {
        this.updateData(this.formData);
      } else {
        this.addData(this.formData);
      }
      this.formData = {};
    },
  },
  watch: {
    editItemData: {
      handler(newVal) {
        this.formData = newVal;
      },
      deep: true,
    },
  },
};
</script>
