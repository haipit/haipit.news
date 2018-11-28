<template>
  <div id="app">
    <navbar/>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footer/>
  </div>
</template>

<style>
body {
  background-color: #f5f5f5 !important;
  padding-top: 90px;
  padding-bottom: 40px;
}
</style>

<script>
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import { mapActions } from "vuex";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {
    Navbar,
    Footer
  },
  methods: {
    ...mapActions(["refreshNews", "refreshSources"])
  }
})
export default class App extends Vue {
  propMessage = "";

  mounted() {
    this.refreshNews();
    this.refreshSources();
  }
}
</script>
