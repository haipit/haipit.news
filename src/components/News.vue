<template>
  <div class="row blocks">
    <div class="col-12" v-show="show">
      <div class="list-group">
        <div class="list-group-item block-item news p-4 news-placeholder" v-for="i in 10">
          <content-placeholders>
            <content-placeholders-heading/>
            <content-placeholders-text :lines="3"/>
          </content-placeholders>
        </div>
      </div>
    </div>
    <div class="col-12" v-show="!show">
      <div class="list-group">
        <post transition="fade" v-for="item in news.data" v-bind:item="item" :key="item.id"/>
      </div>
    </div>
    <nav class="navbar fixed-bottom">
      <div class="container">
        <div class="col-12 pt-4 text-xs-center">
          <paginate
            v-model="page"
            :page-count="news.last_page || 0"
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
    <input type="hidden" v-shortkey="['ctrl', 'arrowleft']" @shortkey="changePage(0)">
    <input type="hidden" v-shortkey="['ctrl', 'arrowright']" @shortkey="changePage(1)">
  </div>
</template>

<style>
  .news-placeholder {
    padding-bottom: 1rem !important;
  }
</style>

<script lang="ts">
  import Post      from "./layout/Post.vue";
  import Vue       from "vue";
  import Component from "vue-class-component";

  @Component({
    components: {
      Post
    },
    props:      {
      page: Number
    }
  })
  export default class News extends Vue {
    page: number;
    currentPage: number;

    // computed
    static get data() {
      return {
        currentPage: 1,
        found:       false
      };
    }

    get show() {
      return this.news.length < 1;
    }

    get news() {
      return this.$store.state.news;
    }

    changePage = moveTo => {
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
    };

    clickCallback = pageNum => {
      this.page        = pageNum;
      this.currentPage = pageNum;

      this.$store.dispatch("scrollToTop");
      this.$store.dispatch("refreshNews", pageNum);
    };
  }
</script>
