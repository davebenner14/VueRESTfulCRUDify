<template>
  <div></div>
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
      formData: { ...this.editItemData },
    };
  },
  methods: {
    ...mapActions(["addData", "editData"]),
    submitForm() {
      if (Object.keys(this.formData).length) {
        this.editData(this.formData);
      } else {
        this.addData(this.formData);
      }
      this.formData = {};
    },
  },
  watch: {
    editItemData: {
      handler(newVal) {
        this.formData = { ...newVal };
      },
      deep: true,
    },
  },
};
</script>
