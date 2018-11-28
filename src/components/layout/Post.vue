<template>
  <transition name="fade">
    <div class="col-12">
      <div class="card">
        <div class="card-block p-4 block-item">
          <div class="card-title">
            <h5 class="news-link">
              <a
                target="_blank"
                class="last"
                v-bind:href="decodeURIComponent(item.link)"
                @click="stat(item.id)"
              >{{ item.title }}</a>
            </h5>
          </div>
          <div class="card-text hidden-md-down">
            <span class="text-success">{{ decodeURIComponent(item.link) }}</span>
          </div>
          <div
            class="card-text news-text"
            v-if="item.description"
            v-html="decodeHtml(item.description)"
          ></div>
          <div class="card-text">
            <table class="table table-sm table-bordered">
              <tr>
                <td>
                  <span class="text-muted">
                    <i class="fa fa-fw fa-eye"></i>
                    &nbsp;{{ item.clicks_count }}
                  </span>
                </td>
                <td>
                  <router-link :to="{path: `/news?src=${item.source.id}`}">{{ item.source.title }}</router-link>
                </td>
                <td>
                  <span
                    class="text-muted float-md-right"
                  >{{ DateFns.format(parseInt(item.timestamp) * 1000, 'YYYY/MM/DD HH:mm:ss') }}</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    item: Object
  }
})
export default class Post extends Vue {
  //   stat = id => {
  //     console.log(`${this.API}/stats ` + id);
  //     this.$http.post(`${this.API}/stats`, { id });
  //   };

  decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
}
</script>
