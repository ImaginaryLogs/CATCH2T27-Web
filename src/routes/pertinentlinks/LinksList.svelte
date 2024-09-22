<script lang="ts">
    import type { PertinentLink, PertinentModule } from "./interfaces.js";
    import { getPertinentLinks, getPertinentModules } from "./load_json.js";
    import Link from "./link.svelte";
    import LinkModule from "./link_module.svelte";
    let promise:Promise<PertinentModule[]> = getModules();

    async function getLinks():Promise<PertinentLink[]> {
        const res = await getPertinentLinks();
        if(!res) return [{
            title:"Not Found",
            body:"This is a body",
            link:"This is a link",
        }]
        else return res;
    }

    async function getModules():Promise<PertinentModule[]> {
        const res = await getPertinentModules();
        if(!res) return [{
            title:"Not Found",
            body:"This is a body",
            link_set:[
                {
                    title: "Not found",
                    body: "body",
                    link: "This is a link"
                }
            ],
        }]
        else return res;
    }


</script>
<div class="flex flex-col">

    {#await promise}
        <p>
            Loading...
        </p>
    {:then link_sets}
    {#each link_sets as link_set}
        <li class ="flex flex-col items-start py-3">
            <LinkModule PertinentModules={link_set}/>
        </li>
        <hr/>
    {/each}

{/await}

</div>
