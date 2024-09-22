<script lang=ts>
    import type { PertinentLink } from "./interfaces.js";
    export let pertinentLinks: PertinentLink
</script>

<div class="flex flex-col ">
    <a href={pertinentLinks.link} class="font-subtitle text-xl text-purple" target="_blank">{pertinentLinks.title}</a>
    <p class=" text-base font-body">{pertinentLinks.body}</p>

</div>