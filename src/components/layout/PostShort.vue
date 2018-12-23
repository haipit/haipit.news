<template>
  <div class="list-group-item block-item pl-3 pr-3">
    <div class="card-text" style="margin-bottom: 0">
      <small class="news-link">
        <a target="_blank" class="word-wrap last" v-bind:href="item.link" @click="stat(item.id)">
          {{ item.title }}
        </a>
      </small>
    </div>
    <div class="card-text">
      <table class="table table-sm table-borderless m-0">
        <tr>
          <td class="pr-2 pl-0">
            <small class="text-muted">
              <i class="fa fa-fw fa-eye"></i>&nbsp;{{ item.clicks_count }}
            </small>
          </td>
          <td class="pl-2 text-right">
            <!--<small @click="clickCallback(item.source_id)">-->
              <!--{{ item.source.title }}-->
            <!--</small>-->
            <small class="text-muted" title="Время публикации новости">
              {{ item.timestamp | formatDate }} {{ item.timestamp | formatTime }}
            </small>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style>
  .word-wrap {
    word-wrap: break-word;
  }
  .nav-tabs {
    border: none;
  }
</style>

<script lang="ts">
  import Vue       from "vue";
  import Component from "vue-class-component";

  @Component({
    props: {
      item: Object
    }
  })
  export default class Post extends Vue {
    stat = news_id => {
      this.$store.dispatch("stat", news_id);
    };

    clickCallback = pageNum => {
      this.$store.commit('SET_PAGE', pageNum);
      this.$store.dispatch("scrollToTop");
      this.$store.dispatch("refreshNews");
    };
  }
</script>
