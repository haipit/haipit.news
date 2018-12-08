<template>
  <div>
    <div class="card w-100">
      <div class="card-block p-4 block-item">
        <div class="row">
          <div class="col-12">
            <h3 v-html="content.title"></h3>
          </div>
          <div class="col-12">
            <div class="description" v-html="content.description"></div>
          </div>
        </div>
        <div class="row" id="sources">
          <div class="col-12">
            <h3>Источники новостей</h3>
          </div>

          <div class="col-4 d-flex align-items-stretch" v-for="item in sources.data">
            <div class="card w-100 mb-4">
              <div class="card-body">
                <h5>
                  <a v-bind:href="item.link" target="_blank">
                    {{ item.title }}
                  </a>
                </h5>
                {{ item.description }}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  @Component({
    props: {
      slug: String
    },
  })
  export default class About extends Vue {
    slug: string;

    // computed
    get data() {
      return {
        currentPage: 1,
        found:       false
      };
    }

    get sources() {
      return this.$store.state.sources;
    }

    get content() {
      return this.$store.state.content;
    }

    mounted() {
      this.$store.dispatch("refreshPages", 'about');
    }
  }
</script>
