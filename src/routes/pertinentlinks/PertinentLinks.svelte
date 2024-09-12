<script lang="ts">
    import type { PertinentLink } from "./interfaces.js";
    let links: Promise<PertinentLink[]> = getPertinentLinks();

    async function getPertinentLinks() {
        const res = await fetch("./misc/pertinentlinks.json");
        const obj = res.json();

        if (res.ok) {
            return obj;
        } else {
            throw new Error("Failed to fetch pertinent links");
        }
    }
</script>

{#await links}
    <h1>Loading pertinent links</h1>
{:then links}
    {#each links as link}
        <a class="pertinent-link" href={link.link} target="_blank">
            <span class="link-title">{link.title}</span>
            <p class="link-description">{link.body}</p>
        </a>
    {/each}
{:catch}
    <h1>Pertinent Links Could not be Retrieved</h1>
{/await}

<style>
    .pertinent-link {
        @apply flex flex-col items-center justify-center md:w-5/12 p-2;
        /* @apply border border-black rounded-2xl hover:bg-purple transition-all; */
    }
    
    /* .pertinent-link:hover > * {
        @apply text-white;
    } */

    .link-title {
        @apply text-xl font-head text-purple;
    }

    .link-description {
        @apply text-xs font-body italic;
    }
</style>
