<template>
  <div class="list-group pt-1">
    <!--<a v-for="item in sources" v-bind:href="item.url" class="list-group-item" target="_blank">-->
    <!--<b>{{ item.title }}</b>&nbsp;- {{ item.description }}-->
    <!--</a>-->
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    item: Object
  }
})
export default class Source extends Vue {}
</script>
