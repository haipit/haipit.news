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
  import Navbar    from "./components/layout/Navbar.vue";
  import Footer    from "./components/layout/Footer.vue";
  import Vue       from "vue";
  import Component from "vue-class-component";

  @Component({
    components: {
      Navbar,
      Footer
    },
  })
  export default class App extends Vue {
    mounted() {
      this.$store.dispatch("scrollToTop");
      this.$store.dispatch("refreshNews");
      this.$store.dispatch("refreshSources");

      // Periodically pull news from  backend
      setInterval(function () {
        this.$store.dispatch("refreshNews");
      }.bind(this), 60000);
    };
  }
</script>
