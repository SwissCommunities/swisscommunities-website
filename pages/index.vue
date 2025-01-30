<script setup lang="ts">
import { useAxios } from "@vueuse/integrations/useAxios";

const { data, isFinished } = useAxios(
    "https://discord.com/api/guilds/1133502459902427196/widget.json",
);

watch([isFinished], () => {
    console.log(data);
});
</script>

<template>
    <div>
        <section class="hero">
            <h1>Bienvenue sur SwissCommunitites&nbsp;!</h1>
        </section>

        <section>
            <div class="content">
                <h2>Qui sommes nous?</h2>

                <div class="lg:grid grid-cols-[2fr_1fr] gap-10">
                    <div>
                        <p>
                            SwissCommunities est un petit groupe de personnes,
                            principalement de nationalité suisse, qui a pour
                            objectif d'organiser des activités et des événements
                            amusants. Actuellement, nous nous réunissons
                            principalement sur un serveur Discord où nous
                            partageons des moments conviviaux, des discussions
                            intéressantes et des projets communs.
                        </p>

                        <p>
                            Notre communauté est ouverte à tous ceux qui
                            souhaitent découvrir la culture suisse, échanger des
                            idées et participer à des activités variées.
                            Rejoignez-nous pour vivre des expériences uniques et
                            enrichissantes au sein de SwissCommunities !
                        </p>
                    </div>
                    <div class="flex flex-col items-center lg:items-end gap-2">
                        <img
                            class="my-5"
                            src="~/assets/img/swisscommunities.svg"
                            alt="SwissCommunitites"
                        />
                        <div
                            class="rounded-full ring-1 p-3 ring-secondary bg-secondary text-white text-xs"
                        >
                            {{ data?.presence_count }} membres en ligne
                        </div>
                        <a
                            href="https://discord.gg/6ZXKUSGcKw"
                            class="rounded-full ring-1 p-4 ring-primary bg-primary text-white shadow-md hover:shadow-lg transition-all font-bold no-underline"
                        >
                            Rejoindre le discord &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
