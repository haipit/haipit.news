<template>
  <div class="list-group-item block-item news p-4">
    <div class="card-title">

      <p class="text-muted float-md-right small">
        {{ item.timestamp | formatDate }} {{ item.timestamp | formatTime }}
      </p>

      <h5 class="news-link">
        <a target="_blank" class="word-wrap last" v-bind:href="item.link" @click="stat(item.id)">
          {{ item.title }}
        </a>
      </h5>
    </div>
    <div class="card-text hidden-md-down">
        <span class="text-success word-wrap">
          {{ item.link }}
        </span>
    </div>
    <div class="card-text news-text" v-if="item.description" v-html="item.description"></div>
    <div class="card-text">
      <table class="table table-sm table-borderless m-0 w-auto">
        <tr>
          <td class="pr-2">
            <span class="text-muted">
              <i class="fa fa-fw fa-eye"></i>&nbsp;{{ item.clicks_count }}
            </span>
          </td>
          <td class="pl-2">
            <span @click="clickCallback(item.source_id)">
              {{ item.source.title }}
            </span>
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

    clickCallback = source_id => {
      this.$store.commit('SET_PAGE', 1);
      this.$store.commit('SET_SOURCE_ID', source_id);
      this.$store.dispatch("refreshNews");
    };
  }
</script>
