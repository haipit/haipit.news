<template>
    <div class="row blocks">
        <post v-for="item in news.data" v-bind:item="item"/>
        <!--<div class="col-12" v-show="news.data.length() > 0">-->
        <!--<h2>No results were found. Try changing the keyword!</h2>-->
        <!--</div>-->
        <nav class="navbar fixed-bottom">
            <div class="container">
                <div class="col-12 pt-4 text-xs-center">
                    <paginate
                            v-model="page"
                            :page-count="news.per_page || 0"
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
    import Post                               from "./layout/Post.vue"
    import {mapState, mapActions, mapGetters} from "vuex";

    export default {
        name:       'News',
        data() {
            return {
                currentPage: 1,
                found:       false
            };
        },
        props:      {
            page: Number,
        },
        methods:    {
            changePage:    function (moveTo) {
                let page = this.currentPage;
                switch (moveTo) {
                    case 0:
                        if (page > 1) page = page - 1;
                        break;
                    case 1:
                        page = page + 1;
                        break;
                }
                this.clickCallback(page);
            },
            clickCallback: function (pageNum) {
                this.page = pageNum;
                this.currentPage = pageNum;
                this.scrollToTop();
                this.getNews(pageNum);
            },
            ...mapActions([
                'scrollToTop',

            ]),
            ...mapGetters([
                'getNews',
            ])
        },
        mounted() {
            //console.log(this.news);
        },
        components: {
            Post
        },
        computed:   {
            ...mapState([
                'news',
                'sources'
            ]),
        }

    }
</script>
