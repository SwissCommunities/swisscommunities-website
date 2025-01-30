<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { Teleport } from "vue";

const breakpoints = useBreakpoints(breakpointsTailwind);

const menuItems = [
    {
        label: "Accueil",
        href: "/",
    },
];

const showDesktopMenu = breakpoints.greater("md");

const menuState = ref<"closed" | "opening" | "opened" | "closing">("closed");
const toggleMenu = (open: boolean | undefined = undefined) => {
    if (menuState.value === "closing" || menuState.value === "opening") {
        return;
    }

    if (menuState.value === "closed" || open === true) {
        menuState.value = "opening";
        setTimeout(() => {
            menuState.value = "opened";
        }, 300);
    } else {
        menuState.value = "closing";
        setTimeout(() => {
            menuState.value = "closed";
        }, 300);
    }
};
</script>

<template>
    <nav v-if="showDesktopMenu">
        <ul>
            <li v-for="item in menuItems">
                <NuxtLink :to="item.href">
                    {{ item.label }}
                </NuxtLink>
            </li>
        </ul>
    </nav>

    <template v-else>
        <div
            @click="() => toggleMenu()"
            :class="{
                burgerMenu: true,
                'burgerMenu-opening': menuState === 'opening',
                'burgerMenu-opened': menuState === 'opened',
                'burgerMenu-closing': menuState === 'closing',
                'burgerMenu-closed': menuState === 'closed',
            }"
        >
            <span></span>
            <span></span>
            <span></span>
        </div>

        <Teleport to="body">
            <div
                :class="{
                    mobileLinks: true,
                    'mobileLinks-opened': menuState === 'opened',
                    'mobileLinks-closed': menuState === 'closed',
                    'mobileLinks-closing': menuState === 'closing',
                    'mobileLinks-opening': menuState === 'opening',
                }"
            >
                <nav>
                    <ul>
                        <li v-for="item in menuItems">
                            <NuxtLink
                                :to="item.href"
                                @click="() => toggleMenu(false)"
                            >
                                {{ item.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </Teleport>
    </template>
</template>

<style scoped lang="scss">
ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin: 0;
}

nav ul {
    display: row;

    li a {
        font-size: 1.25rem;
    }
}

a {
    color: white;
    text-decoration: none;
}

.burgerMenu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    height: 100%;
    position: relative;
    width: 2rem;

    span {
        background-color: white;
        height: 0.25rem;
        width: 100%;
        border-radius: calc(infinity * 1px);
        position: absolute;
        top: 50%;
        left: 0;
    }

    @keyframes bugerMenu-bar-1 {
        0% {
            transform: translateY(-0.75rem);
        }

        50% {
            transform: translateY(0) rotate(0);
        }

        100% {
            transform: translateY(0) rotate(45deg);
        }
    }

    @keyframes bugerMenu-bar-2 {
        0% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 0;
        }
    }

    @keyframes bugerMenu-bar-3 {
        0% {
            transform: translateY(0.75rem);
        }

        50% {
            transform: translateY(0) rotate(0);
        }

        100% {
            transform: translateY(0) rotate(-45deg);
        }
    }

    &.burgerMenu-closed {
        span {
            &:nth-child(1) {
                transform: translateY(-0.75rem);
            }

            &:nth-child(2) {
                opacity: 1;
            }

            &:nth-child(3) {
                transform: translateY(0.75rem);
            }
        }
    }

    &.burgerMenu-opening {
        span {
            @for $i from 1 through 3 {
                &:nth-child(#{$i}) {
                    animation: bugerMenu-bar-#{$i} 0.3s forwards ease-in-out;
                }
            }
        }
    }

    &.burgerMenu-opened {
        span {
            &:nth-child(1) {
                transform: rotate(45deg);
            }

            &:nth-child(2) {
                opacity: 0;
            }

            &:nth-child(3) {
                transform: rotate(-45deg);
            }
        }
    }

    &.burgerMenu-closing {
        span {
            @for $i from 1 through 3 {
                &:nth-child(#{$i}) {
                    animation: bugerMenu-bar-#{$i} 0.3s reverse ease-in-out;
                }
            }
        }
    }
}

.mobileLinks {
    background-color: var(--secondary-background-color);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    transform: translateY(-100%);
    padding: 7rem 2rem;

    nav {
        width: 100%;
        height: 100%;

        ul {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            li {
                width: 100%;
                text-align: center;

                a {
                    display: block;
                    width: 100%;
                    padding: 1rem;
                    color: var(--text);
                    background-color: var(--background-color);
                    border-radius: 4rem;
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                }
            }
        }
    }

    li a {
        font-size: 1.5rem;
    }

    @keyframes mobileLinks {
        0% {
            transform: translateY(-100%);
        }

        100% {
            transform: translateY(0);
        }
    }

    &.mobileLinks-opened {
        transform: translateY(0);
    }

    &.mobileLinks-closed {
        transform: translateY(-100%);
    }

    &.mobileLinks-opening {
        animation: mobileLinks 0.3s forwards ease-in-out;
    }

    &.mobileLinks-closing {
        animation: mobileLinks 0.3s reverse ease-in-out;
    }
}
</style>
