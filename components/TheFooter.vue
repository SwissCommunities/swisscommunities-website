<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer>
        <div class="social">
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="https://discord.gg/tkxNt6YMBb">
                            <Icon name="logos:discord-icon"/>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://www.twitch.tv/swisscommunities">
                            <Icon name="logos:twitch"/>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://www.tiktok.com/@swisscommunities">
                            <Icon name="logos:tiktok-icon"/>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://youtube.com/@SwissCommunities">
                            <Icon name="logos:youtube-icon"/>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="copy">
            <span>&copy; 2024</span>
            <span v-if="currentYear !== 2024">&nbsp;- {{ currentYear }}</span>
            <span>&nbsp;SwissCommunities</span>
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
        flex-direction: row;
        margin: 0 0 2em;

        li {
          margin: 0 1em;

          @media screen and (max-width: 660px) {
            margin: 0 .75em;
          }

          a {
            font-size: 4rem;

            @media screen and (max-width: 660px) {
              font-size: 3rem;
            }

            svg, img {
              height: 1em;
              color: black;
              transition: filter 300ms ease-in-out;

              @media screen and (pointer: fine) {
                filter: grayscale(1);
              }

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
