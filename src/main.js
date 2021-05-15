import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.config.globalProperties.$filters = {
  currencyUSD(value) {
    return `${value}`;
  },
  date(value) {
    var utcSeconds = value;
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    var dateString = d;
    dateString = new Date(dateString).toUTCString();
    dateString = dateString
      .split(" ")
      .slice(0, 5)
      .join(" ");
    return `${dateString}`;
  }
};

app.mount("#app");

router.beforeEach((to, from, next) => {
  if (to.name === "about") {
    var r = confirm("Essa página foi interceptada na guarda!");
    if (r == true) {
      next();
    } else {
      next({ name: "home", params: { slug: "home" } });
    }
  } else {
    next();
  }
});

