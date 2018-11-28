import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
// import store from './store'

axios.interceptors.request.use(request => {
    // const token = store.getters['auth/token'];
    //
    // if (token) {
    //     request.headers.common['Authorization'] = `Bearer ${token}`
    // }

    request.url = `https://api.haipit.news/api/v2/${request.url}`;
    return request
});

export default new Vuex.Store({
    state: {
        news: [],
        sources: [],
    },
    mutations: {
        ADD_NEWS(state, news) {
            state.news.push(news)
        },
        ADD_SOURCE(state, source) {
            state.sources.push(source)
        },
        SET_NEWS(state, coins) {
            state.news = coins
        },
        SET_SOURCES(state, sources) {
            state.sources = sources;
        },
    },
    getters: {
        getNews(state) {
            return state.news;
        },
        getSources(state) {
            return state.sources;
        },
    },
    actions: {
        scrollToTop() {
            scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        async refreshNews({
            commit
        }, page = 1) {
            const {
                data
            } = await axios.get(`news?page=` + page);
            commit('SET_NEWS', data);
        },
        async refreshSources({
            commit
        }, page = 1) {
            const {
                data
            } = await axios.get(`sources?page=${page}`);
            commit('SET_SOURCES', data);
        },
    }
});