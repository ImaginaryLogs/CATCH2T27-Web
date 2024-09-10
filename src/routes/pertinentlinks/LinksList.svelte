<script lang="ts">
    import type { PertinentLink } from "./interfaces.js";
    import { getPertinentLinks } from "./load_json.js";
    import Link from "./link.svelte";
    let promise:Promise<PertinentLink[]> = getLinks();

    async function getLinks():Promise<PertinentLink[]> {
        const res = await getPertinentLinks();
        if(!res) return [{
            title:"Not Found",
            body:"This is a body",
            link:"This is a link",
        }]
        else return res;
    }


</script>
<div class="flex flex-col">

    {#await promise}
        <p>
            Loading...
        </p>
    {:then links}
    {#each links as link}
    <li class ="flex flex-col items-center py-2">
        <Link pertinentLinks={link}/>
    </li>
{/each}

{/await}

</div>
