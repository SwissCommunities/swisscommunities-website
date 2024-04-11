<script lang="ts" setup>

import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
</script>

<template>
    <header>
        <TheHeader/>
    </header>

    <main>
        <slot/>
    </main>

    <footer>
        <TheFooter/>
    </footer>
</template>

<style scoped>

</style>
