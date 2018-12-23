<template>
  <div>

    <b-tabs>
      <b-tab title="Неделя" active>
        <div class="list-group">
          <post-short v-for="item in popular.week.data" v-bind:item="item" :key="item.id"/>
        </div>
      </b-tab>
      <b-tab title="Месяц">
        <div class="list-group">
          <post-short v-for="item in popular.month.data" v-bind:item="item" :key="item.id"/>
        </div>
      </b-tab>
    </b-tabs>

  </div>
</template>

<script lang="ts">
  import PostShort from "../layout/PostShort.vue";
  import Vue       from "vue";
  import Component from "vue-class-component";

  @Component({
    components: {
      PostShort
    }
  })
  export default class Popular extends Vue {
    get popular() {
      return this.$store.state.popular;
    }
  }
</script>
