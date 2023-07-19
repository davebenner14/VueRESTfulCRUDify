<template>
  <div>
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
            <i class="material-icons orange600" @click="editItem(item)">edit</i>
            <i class="material-icons red600" @click="deleteItem(item)"
              >delete</i
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

    <modal name="editForm" :height="300" class="modal">
      <h2>Task</h2>

      <form @submit.prevent="submitForm" class="form">
        <label class="label">
          Name:
          <textarea
            v-model="formData.name"
            class="input-name"
            rows="1"
          ></textarea>
        </label>

        <label class="label">
          Description:
          <textarea
            v-model="formData.description"
            class="input-description"
          ></textarea>
        </label>

        <div class="buttons">
          <button type="button" @click="$modal.hide('editForm')">Close</button>
          <button type="submit">Modify</button>
        </div>
      </form>
    </modal>
  </div>
</template>

<script>
import "./DataList.css";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DataList",
  data() {
    return {
      formData: {},
    };
  },
  computed: {
    ...mapGetters(["dataList"]),
  },
  methods: {
    ...mapActions(["deleteData", "editData"]),
    deleteItem(item) {
      this.deleteData(item);
    },
    editItem(item) {
      this.formData = { ...item };
      this.$modal.show("editForm");
    },
    submitForm() {
      this.editData(this.formData);
      this.$modal.hide("editForm");
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
</style>
