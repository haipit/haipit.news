<template>
  <b-navbar toggleable="lg" type="light" variant="white" fixed="top" class="navbar-main">
    <div class="container-fluid">
      <b-navbar-brand href="/" left>
        <img
          src="@/assets/img/logo-text-sm.png"
          class="d-inline-block align-top"
          style="height: 42px;"
        >
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">Новости</b-nav-item>
          <b-nav-item to="/about">О проекте</b-nav-item>
          <b-nav-item target="_blank" href="https://modern.haipit.news">Осторожно, модерн!</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item target="_blank" href="https://discord.gg/J3v93FV">Discord</b-nav-item>
          <b-nav-item target="_blank" href="https://github.com/haipit">GitHub</b-nav-item>
          <b-nav-item target="_blank" href="https://api.haipit.news/api/documentation">API Docs</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    </div>
  </b-navbar>
</template>

<script lang="ts">
// import Search from "./Search.vue";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {
    // Search
  }
})
export default class Navbar extends Vue {}
</script>
