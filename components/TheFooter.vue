<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer>
        <!-- TODO: Social links -->
        <div class="copy">
            <span>&copy; 2024</span>
            <span v-if="currentYear !== 2024">&nbsp;- {{ currentYear }}</span>
            <span>&nbsp;<NuxtLink href="https://drafolin.ch">Dråfølin</NuxtLink></span>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4em;
}
</style>
