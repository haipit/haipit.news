<template>
    <div class="list-group pt-1">
        <!--<a v-for="item in sources" v-bind:href="item.url" class="list-group-item" target="_blank">-->
            <!--<b>{{ item.title }}</b>&nbsp;- {{ item.description }}-->
        <!--</a>-->
    </div>
</template>

<script>
    export default {
        name: "Source",
        props: {
            item: Object,
        },
    }
</script>
