<script setup lang="ts">
import "~/assets/css/app.scss";
</script>

<template>
    <NuxtRouteAnnouncer />
    <div>
        <NuxtHeader />
        <main>
            <NuxtPage />
        </main>
        <NuxtFooter />
    </div>
</template>

<style scoped lang="scss">
main {
    min-height: 100vh;
}
</style>
