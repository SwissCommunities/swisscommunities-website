<template>
    <header>
        <div class="title">
            <NuxtLink to="/">SwissCommunities</NuxtLink>
        </div>

        <div>
            <NuxtMenu />
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: $primary-color;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    position: fixed;
    top: 0;
    width: 100vw;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
    height: 5rem;

    > div.title {
        font-size: 1.5rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;

        a {
            color: white;
            text-decoration: none;
        }
    }
}
</style>
