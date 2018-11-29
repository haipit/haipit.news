import Vue   from "vue";
import Vuex  from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state:     {
    APP_ID:    null,
    APP_KEY:   null,
    API_TOKEN: null,
    API:       "https://api.haipit.news/api/v2",
    user:      [],
    news:      [],
    content:   [],
    sources:   [],
    timer:     null,
  },
  mutations: {
    ADD_NEWS(state, news) {
      state.news.push(news);
    },
    ADD_SOURCE(state, source) {
      state.sources.push(source);
    },
    SET_USER(state, coins) {
      state.user = coins;
    },
    SET_CONTENT(state, coins) {
      state.content = coins;
    },
    SET_NEWS(state, coins) {
      state.news = coins;
    },
    SET_SOURCES(state, sources) {
      state.sources = sources;
    }
  },
  actions:   {
    scrollToTop() {
      scrollTo({
        top:      0,
        behavior: "smooth"
      });
    },
    async refreshPages({commit}, slug) {
      const {data} = await axios.get(`/pages/slug/${slug}`);
      commit("SET_CONTENT", data);
    },
    async refreshNews({commit}, page = 1) {
      const {data} = await axios.get(`/news?page=${page}`);
      commit("SET_NEWS", data);
    },
    async refreshSources({commit}, page = 1) {
      const {data} = await axios.get(`/sources?page=${page}`);
      commit("SET_SOURCES", data);
    }
  }
});
