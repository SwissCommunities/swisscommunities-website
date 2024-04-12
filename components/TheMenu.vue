<script lang="ts" setup>
type Link = {
	name: string,
	href: string,
	children?: Link[]
}

const links: Link[] = [{
	name: 'Accueil',
	href: '/'
}]

const isUserOnMobile = computed(() => useWindowSize().width.value <= 1080);
const isMenuDeployed = ref(false);
</script>

<template>
    <ClientOnly>
        <nav v-if="!isUserOnMobile" class="desktop">
            <ul>
                <li v-for="link in links" :key="link.href">
                    <NuxtLink
                            :to="link.href"
                    >
                        {{ link.name }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
        <template v-else>
            <button class="mobile-burger"
                    @click.prevent="isMenuDeployed = !isMenuDeployed">
                <svg height="40" viewBox="0 0 50 40">
                    <line v-for="i in Array(3)" :key="i" :class="isMenuDeployed ? 'cross' : 'bars'" x1="10" x2="40"
                          y1="20" y2="20"/>
                </svg>
            </button>

            <Teleport to="body">
                <Transition name="overlay">
                    <div v-if="isMenuDeployed" class="overlay"/>
                </Transition>

                <Transition name="sidebar">
                    <nav v-if="isMenuDeployed" class="mobile">
                        <ul>
                            <li v-for="link in links">
                                <NuxtLink :to="link.href" @click="isMenuDeployed = false">{{ link.name }}</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </Transition>
            </Teleport>
        </template>
    </ClientOnly>
</template>

<style lang="scss" scoped>
nav.desktop {
  ul {
    flex-direction: row;

    li {
      a {
        font-size: 1.25rem;
        font-weight: bold;

      }
    }
  }
}

@keyframes menu-bar-1-in {
  from {
    transform: translateY(-10px);
  }

  50% {
    transform: translateY(0) rotate(0deg);
  }

  to {
    transform: rotate(45deg);
  }
}

@keyframes menu-bar-1-out {
  from {
    transform: rotate(45deg);
  }

  50% {
    transform: translateY(0) rotate(0deg);
  }

  to {
    transform: translateY(-10px);
  }
}

@keyframes menu-bar-2-in {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  to {
    opacity: 0;
  }
}

@keyframes menu-bar-2-out {
  from {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes menu-bar-3-in {
  from {
    transform: translateY(10px);
  }

  50% {
    transform: translateY(0) rotate(0deg);
  }

  to {
    transform: rotate(-45deg);
  }

}

@keyframes menu-bar-3-out {
  from {
    transform: rotate(-45deg);
  }

  50% {
    transform: translateY(0) rotate(0deg);
  }

  to {
    transform: translateY(10px);
  }

}

button.mobile-burger {
  background-color: transparent;
  border: none;

  svg {
    line {
      stroke: var(--foreground);
      stroke-width: 3;
      stroke-linecap: round;
      transform-origin: center;

      @for $i from 1 through 3 {
        &:nth-child(#{$i}) {
          &.bars {
            animation: menu-bar-#{$i}-out 500ms ease both;
          }

          &.cross {
            animation: menu-bar-#{$i}-in 500ms ease both;
          }
        }
      }
    }
  }
}

.overlay {
  top: 6em;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;

  background-color: rgba(0, 0, 0, 0.5);

  &.overlay-enter-active,
  &.overlay-leave-active {
    transition: all 0.3s ease-in-out;
  }

  &.overlay-enter-from,
  &.overlay-leave-to {
    opacity: 0;
  }
}

nav.mobile {
  right: 0;
  position: fixed;
  top: 6em;
  bottom: 0;
  min-width: 40vw;
  padding: 2em;
  width: fit-content;
  background-color: var(--background);
  box-shadow: inset 0 10px 5px -10px black;

  &.sidebar-enter-active,
  &.sidebar-leave-active {
    transition: all 0.3s ease-in-out;
  }

  &.sidebar-enter-from,
  &.sidebar-leave-to {
    right: -100vw;
  }

  ul {
    li {
      font-size: 1.4rem;

      a {
        font-weight: 600;
      }
    }
  }
}
</style>
