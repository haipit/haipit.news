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
          <div class="pull-left">
            <h2 v-if="source !== undefined" @click="noSource"><span class="badge badge-secondary shadow">{{ source.title }}</span></h2>
          </div>
          <paginate
            v-show="!show"
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
    }
  })
  export default class News extends Vue {
    // computed
    static get data() {
      return {
        currentPage: 1,
        found:       false
      };
    }

    get source() {
      //return (this.sources.length > 1) ? this.sources.data.findIndex(x => x.id === this.source_id) : [];
      let idx = this.sources.data.findIndex(x => x.id === this.source_id);
      return this.sources.data[idx];
    }

    get source_id() {
      return this.$store.state.source_id;
    }

    get page() {
      return this.$store.state.page;
    }

    get show() {
      return this.news.length < 1;
    }

    get news() {
      return this.$store.state.news;
    }

    get sources() {
      return this.$store.state.sources;
    }

    changePage = moveTo => {
      let page = this.page;

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

    noSource = () => {
      this.$store.commit('SET_SOURCE_ID', null);
      this.$store.commit('SET_PAGE', 1);
      this.$store.dispatch("refreshNews");
    };

    clickCallback = pageNum => {
      this.$store.commit('SET_PAGE', pageNum);
      this.$store.dispatch("scrollToTop");
      this.$store.dispatch("refreshNews");
    };
  }
</script>
