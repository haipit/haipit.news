<template>
  <div id="app">
    <navbar/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-8 col-lg-9">
          <router-view></router-view>
        </div>
        <div class="d-none d-md-block col-md-4 col-lg-3">
          <h5 class="mb-3 text-muted">Самое популярное</h5>
          <popular/>
        </div>
      </div>
    </div>
    <bottom/>
  </div>
</template>

<style>
  body {
    background-color: #f5f5f5 !important;
    padding-top: 90px;
  }
</style>

<script lang="ts">
  import Navbar    from "./components/layout/Navbar.vue";
  import Bottom    from "./components/layout/Bottom.vue";
  import Popular   from "./components/layout/Popular.vue";
  import Vue       from "vue";
  import Component from "vue-class-component";

  @Component({
    components: {Navbar, Bottom, Popular},
  })
  export default class App extends Vue {
    mounted() {
      this.$store.dispatch("scrollToTop");
      this.$store.dispatch("refreshNews");
      this.$store.dispatch("refreshSources");
      this.$store.dispatch("refreshPopWeek");
      this.$store.dispatch("refreshPopMonth");

      // Periodically pull news from  backend
      setInterval(function () {
        this.$store.dispatch("refreshNews");
        this.$store.dispatch("refreshPopWeek");
        this.$store.dispatch("refreshPopMonth");
      }.bind(this), 60000);
    };
  }
</script>
