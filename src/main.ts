import Vue                    from "vue";
import Vuex                   from "vuex";
import VueResource            from "vue-resource";
import VueMatomo              from "vue-matomo";
import VueAnalytics           from "vue-analytics";
import VueRouter              from "vue-router";
import VueContentPlaceholders from 'vue-content-placeholders'
import BootstrapVue           from "bootstrap-vue";
import Paginate               from "vuejs-paginate";
import VueShortkey            from "vue-shortkey";
import moment                 from 'moment'

// Main application
import App               from "./App.vue";
import store             from "./store/store";
import interceptorsSetup from './interceptors';

interceptorsSetup();

// Styles and additional modules
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-animate/dist/vue-animate.css";
import "./assets/scss/theme.scss";

// Pages
import NewsAll from "./components/News.vue";
import About   from "./components/About.vue";
// import Search  from "./components/Search.vue";

const routes = [
  {path: "/", redirect: "/news"},
  //{path: "/news/:page", component: NewsAll, props: true},
  {
    name:      'news',
    path:      '/news',
    component: NewsAll,
    props:     (route) => ({
      page:      route.query.page,
      source_id: route.query.source_id,
      query:     route.query.query
    })
  },
  //{path: '/search/:keyword', component: Search, props: true},
  {path: '/about', component: About, props: true},
];

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
});

// Default configs
Vue.config.productionTip = false;

// Add date format filter
Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(value * 1000).format('YYYY/MM/DD HH:mm:ss')
  }
});

Vue.use(VueContentPlaceholders);
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
