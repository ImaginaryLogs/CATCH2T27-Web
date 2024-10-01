<script lang="ts">
    import type { PertinentLink, PertinentModule } from "./interfaces.js";
    import data from "$lib/assets/data/sample.json"
    import Link from "./link.svelte";
    import LinkModule from "./link_module.svelte";
    let promise:Promise<PertinentModule[]> = getModules();

    async function getModules():Promise<PertinentModule[]> {

        if(!data) return [{
            title:"Not Found",
            body:"Find the JSON file",
            link_set:[
                {
                    title: "Not found",
                    body: "Example body",
                    link: "This is a link"
                }
            ],
        }]
        else return data;
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
