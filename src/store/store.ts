import Vue   from "vue";
import Vuex  from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state:     {
    APP_ID:    1,
    APP_KEY:   "49257275562a38253442cfa33602a78a737d8d81aa5b4ae604f19f9ac9c8faf1",
    API_TOKEN: null,
    API:       "https://api.haipit.news/api/v2",
    //API:       "http://api.haipit.test/api/v2",
    user:      [],
    news:      [],
    content:   [],
    sources:   [],
    page:      1,
    source_id: null,
    query:     null,
    timer:     null,
  },
  mutations: {
    ADD_NEWS(state, news) {
      state.news.push(news);
    },
    ADD_SOURCE(state, source) {
      state.sources.push(source);
    },
    SET_SOURCE_ID(state, coins) {
      state.source_id = coins;
    },
    SET_QUERY(state, coins) {
      state.query = coins;
    },
    SET_PAGE(state, coins) {
      state.page = coins;
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
    async refreshNews({commit}) {
      const {data} = await axios.get(`/news?page=${this.state.page}&source_id=${this.state.source_id}`);
      commit("SET_NEWS", data);
    },
    async refreshSources({commit}, page = 1) {
      const {data} = await axios.get(`/sources?page=${page}`);
      commit("SET_SOURCES", data);
    }
  }
});
