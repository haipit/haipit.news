<template>
  <div class="list-group-item block-item news p-4">
    <div class="card-title">
      <h5 class="news-link">
        <a target="_blank" class="last" v-bind:href="item.link" @click="stat(item.id)">
          {{ item.title }}
        </a>
      </h5>
    </div>
    <div class="card-text hidden-md-down">
        <span class="text-success">
          {{ item.link }}
        </span>
    </div>
    <div class="card-text news-text" v-if="item.description" v-html="item.description"></div>
    <div class="card-text">
      <table class="table table-sm table-bordered m-0 w-auto">
        <tr>
          <td>
            <span class="text-muted">
              <i class="fa fa-fw fa-eye"></i>&nbsp;{{ item.clicks_count }}
            </span>
          </td>
          <td>
            <router-link :to="{path: `/news?src=${item.source.id}`}">
              {{ item.source.title }}
            </router-link>
          </td>
          <td>
            <span class="text-muted float-md-right">
              {{ item.timestamp | formatDate }}
            </span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue       from "vue";
  import Component from "vue-class-component";

  @Component({
    props: {
      item: Object
    }
  })
  export default class Post extends Vue {
    stat = id => {
      const {API} = this.$store.state;
      this.$http.post(`${API}/stats/${id}`);
    };
  }
</script>
