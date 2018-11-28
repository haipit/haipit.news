import Vue from "vue";
import Vuex from "vuex";
import VueResource from "vue-resource";
import VueMatomo from "vue-matomo";
import VueAnalytics from "vue-analytics";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import DateFns from "date-fns";
import Paginate from "vuejs-paginate";
import VueShortkey from "vue-shortkey";

// Main application
import App from "./App.vue";
import store from "./store/store";

// Styles and additional modules
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-animate/dist/vue-animate.css";
import "./assets/scss/theme.scss";

// Pages
import NewsAll from "./components/News.vue";
import About from "./components/About.vue";
// import Search  from "./components/Search.vue";

// Default configs
Vue.prototype.DateFns = DateFns;
Vue.config.productionTip = false;

const routes = [
  {path: "/", redirect: "/news"},
  {path: "/news/:page", component: NewsAll, props: true},
  {path: "/news", component: NewsAll},
  //{path: '/search/:keyword', component: Search, props: true},
  {path: '/about', component: About, props: true},
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueShortkey);
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueMatomo, {
  host:             "https://stat.drteam.rocks",
  siteId:           11,
  router:           router,
  requireConsent:   true,
  trackInitialView: true
});
Vue.use(VueAnalytics, {
  id: "UA-98273338-1"
});

Vue.component("paginate", Paginate);

new Vue({
  store,
  render: h => h(App),
  router: router
}).$mount("#app");
