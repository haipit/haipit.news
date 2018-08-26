import Vue from 'vue';
import VueResource from 'vue-resource';
import VueMatomo from 'vue-matomo';
import VueAnalytics from 'vue-analytics';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import DateFns from 'date-fns';
import Paginate from 'vuejs-paginate';
import VueShortkey from 'vue-shortkey';

// Main application
import App from './App.vue';

// Styles and additional modules
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-animate/dist/vue-animate.css';
import './assets/scss/theme.scss';

// Bus for messaging between components
export const serverBus = new Vue();

// Pages
import NewsAll from "./components/news/All.vue";
import About from "./components/About.vue";
import Search from "./components/news/Search.vue";

// Default configs
Vue.prototype.API = 'https://api.haipit.news/v1';
Vue.prototype.DateFns = DateFns;
Vue.config.productionTip = false;

Vue.prototype.scrollToTop = function () {
    scrollTo({top: 0, behavior: "smooth"});
};

const routes = [
    {path: '/', redirect: '/news'},
    {path: '/news/:page', component: NewsAll, props: true},
    {path: '/news', component: NewsAll},
    {path: '/about', component: About},
    {path: '/search/:keyword', component: Search, props: true},
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

Vue
    .use(VueRouter)
    .use(VueShortkey)
    .use(BootstrapVue)
    .use(VueResource)
    .use(VueMatomo, {
        host: 'https://stat.drteam.rocks',
        siteId: 11,
        router: router,
        requireConsent: true,
        trackInitialView: true
    })
    .use(VueAnalytics, {
        id: 'UA-98273338-1'
    });

Vue.component('paginate', Paginate);

new Vue({
    render: h => h(App), router: router
}).$mount('#app');
