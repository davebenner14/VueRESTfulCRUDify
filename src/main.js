import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css"; // import Material Design Icons
import VModal from "vue-js-modal";

Vue.use(Vuetify, {
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
});
Vue.use(VModal, { dialog: true });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
