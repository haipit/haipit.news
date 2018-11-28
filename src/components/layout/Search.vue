<template>
  <form class="form-inline ml-lg-1 my-lg-0" @submit.prevent="letsFind()">
    <div class="input-group">
      <input
        class="form-control"
        type="text"
        ref="my_search"
        placeholder="Search"
        aria-label="Search"
      >
      <div class="input-group-append">
        <button class="btn btn-success bg-green light my-lg-0" type="submit">
          <span class="fa fa-search text-white"></span>
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
// import {serverBus} from '../../main';
//
// export default {
//     name: 'Search',
//     methods: {
//         letsFind() {
//             let keywords = this.$refs.my_search.value;
//             this.$router.push('/search/' + keywords);
//             this.$router.go(0);
//         }
//     },
//     created() {
//         // Using the service bus
//         serverBus.$on('searchKeyword', (text) => {
//             this.$refs.my_search.value = text;
//         });
//     }
// }
</script>
