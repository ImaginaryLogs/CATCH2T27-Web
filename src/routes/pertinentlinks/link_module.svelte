<script lang=ts>
    import type { PertinentLink, PertinentModule } from "./interfaces.js";
    import Link from "./link.svelte";
    export let PertinentModules: PertinentModule

    let Link_set: PertinentLink[] = PertinentModules.link_set
</script>

<div class="flex flex-col">
    <p class="font-subtitle text-3xl text-black">{PertinentModules.title}</p>
    <p class="text-sm font-body">{PertinentModules.body}</p>
    <div class="flex flex-col pl-7 gap-3">
        {#each Link_set as ind_link }
            <Link pertinentLinks = {ind_link}/>
        {/each}
    </div>
</div>