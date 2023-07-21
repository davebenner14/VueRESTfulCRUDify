<template>
  <modal name="addForm" :height="300" class="modal">
    <h2>New Task</h2>

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
        <button type="button" @click="$modal.hide('addForm')">Close</button>
        <button type="submit" class="submit-button">Submit</button>
      </div>
    </form>
  </modal>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      localFormData: {
        name: "",
        description: "",
      },
    };
  },
  methods: {
    ...mapActions(["addData"]),
    async submitForm() {
      await this.addData(this.localFormData);

      this.localFormData = {
        name: "",
        description: "",
      };

      this.$modal.hide("addForm");
    },
  },
};
</script>
