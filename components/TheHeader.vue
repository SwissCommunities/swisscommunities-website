<script lang="ts" setup>
type Link = {
	name: string,
	href: string,
	children?: Link[]
}

const links: Link[] = [{
	name: 'Accueil',
	url: '/'
}]
</script>

<template>
    <header>
        <NuxtLink to="/">
            <NuxtImg
                    class="icon"
                    height="50"
                    src="/images/ch.png"
            />
        </NuxtLink>
        <h1>Swiss Communities</h1>
        <nav>
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
    </header>
</template>

<style lang="scss" scoped>
header {
  height: 6em;
  box-shadow: 0 0 5px black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  align-items: center;
  padding: 1em 1.25em;
  background-color: var(--background);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-items: center;

  :first-child {
    justify-self: start;
  }

  :last-child {
    justify-self: end;
  }

  img.icon {
    border-radius: var(--sm-br);
  }

  h1 {
    margin: 0;
  }

  nav {
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
}
</style>
