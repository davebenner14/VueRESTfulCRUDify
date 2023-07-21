<template>
  <modal name="editForm" :height="300" class="modal">
    <h2>Task</h2>

    <form @submit.prevent="submitForm" class="form">
      <label class="label">
        Name:
        <textarea
          v-model="localFormData.name"
          class="input-name"
          rows="1"
        ></textarea>
      </label>

      <label class="label">
        Description:
        <textarea
          v-model="localFormData.description"
          class="input-description"
        ></textarea>
      </label>

      <div class="buttons">
        <button type="button" @click="$modal.hide('editForm')">Close</button>
        <button type="submit">Modify</button>
      </div>
    </form>
  </modal>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["formData"],
  data() {
    return {
      localFormData: { ...this.formData },
    };
  },
  methods: {
    ...mapActions(["editData"]),
    submitForm() {
      this.editData(this.localFormData);
      this.$emit("update:formData", this.localFormData);
      this.$modal.hide("editForm");
    },
  },
  watch: {
    formData: {
      handler(newValue) {
        this.localFormData = { ...newValue };
      },
      deep: true,
    },
  },
};
</script>
