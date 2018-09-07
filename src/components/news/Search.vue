<template>
    <div class="row blocks">
        <post v-for="item in posts" v-bind:item="item"/>
        <div class="col-12" v-show="!found">
            <h2>No results were found. Try changing the keyword!</h2>
        </div>
    </div>
</template>

<script>
    import {serverBus} from '../../main';
    import Post from "./Post.vue"

    export default {
        name: "Search",
        data() {
            return {
                posts: [],
                found: true,
                // TODO: Alarm crapcode detected
                pages: 100,
                currentPage: 1,
                limit: 30,
                offset: 0
            };
        },
        props: {
            keyword: String,
        },
        methods: {
            getSearch: async function () {
                serverBus.$emit('searchKeyword', this.keyword);
                // Renew limit and offset by page number
                this.getLimits();
                //const {data} = await this.$http.get(`${this.API}/news/search?limit=${this.limit}&offset=${this.offset}`);
                const {data} = await this.$http.get(`${this.API}/news?limit=${this.limit}&offset=${this.offset}`);
                this.posts = data.result;
                if (data.result.length < 1) this.found = false;
            },
            getLimits: function () {
                this.limit = 30;
                this.offset = (this.page - 1) * this.limit;
            },
        },
        components: {
            Post
        },
        created() {
            this.getSearch()
        },
    }
</script>

<style scoped>

</style>
