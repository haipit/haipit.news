<template>
    <div class="row blocks">
        <post v-for="item in posts" v-bind:item="item"/>
        <div class="col-12" v-show="!found">
            <h2>No results were found. Try changing the keyword!</h2>
        </div>
        <nav class="navbar fixed-bottom">
            <div class="container">
                <div class="col-12 pt-4 text-xs-center">
                    <paginate
                            v-model="page"
                            :page-count="pages"
                            :page-range="3"
                            :margin-pages="2"
                            :click-handler="clickCallback"
                            :prev-text="'<<'"
                            :next-text="'>>'"
                            :container-class="'pagination pull-right shadow'"
                            :page-class="'page-item'"
                            :page-link-class="'page-link'"
                            :prev-link-class="'page-link'"
                            :next-link-class="'page-link'"
                    />
                </div>
            </div>
        </nav>
        <input type="hidden" v-shortkey="['ctrl', 'arrowleft']" @shortkey="changePage(0)"/>
        <input type="hidden" v-shortkey="['ctrl', 'arrowright']" @shortkey="changePage(1)"/>
    </div>
</template>

<script>
    import Post from "./Post.vue"

    export default {
        name: 'News',
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
            page: Number,
        },
        methods: {
            changePage: function (moveTo) {
                let page = this.currentPage;
                switch (moveTo) {
                    case 0:
                        if (page > 1) page = page - 1;
                        break;
                    case 1:
                        //if (page <= 100) page = page + 1;
                        page = page + 1;
                        break;
                }
                this.clickCallback(page);
            },
            getNews: async function () {
                // Renew limit and offset by page number
                this.getLimits();
                const {data} = await this.$http.get(`${this.API}/news?limit=${this.limit}&offset=${this.offset}`);
                this.posts = data.result;
            },
            getLimits: function () {
                this.limit = 30;
                this.offset = (this.page - 1) * this.limit;
            },
            clickCallback: function (pageNum) {
                this.page = pageNum;
                this.currentPage = pageNum;
                this.scrollToTop();
                this.getNews();
            }
        },
        components: {
            Post
        },
        mounted() {
            this.getNews();
        }
    }
</script>
