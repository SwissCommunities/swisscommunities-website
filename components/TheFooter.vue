<script lang="ts" setup>
import DiscordIcon from "~/assets/images/discord.svg"

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer>
        <div class="social">
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="https://discord.gg/tkxNt6YMBb">
                            <DiscordIcon class="discord"/>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
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

  .social {
    nav {
      margin-bottom: 1em;

      ul {
        li {
          a {
            font-size: 4rem;

            svg, img {
              height: 1em;
              color: black;
              transition: filter 300ms ease-in-out;
              filter: grayscale(1);

              &:hover {
                filter: none;
              }

              @media screen and (prefers-color-scheme: dark) {
              }
            }
          }
        }
      }
    }
  }
}
</style>
