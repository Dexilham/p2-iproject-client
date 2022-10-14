import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueDisqus from "vue-disqus";

import "./assets/style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueDisqus, { shortname: "https-masakapanie-web-app" });

app.mount("#app");
