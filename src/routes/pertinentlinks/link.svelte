<script lang=ts>
    import type { PertinentLink } from "./interfaces.js";
    export let pertinentLinks: PertinentLink
</script>

<div class="flex flex-col">
    <a href={pertinentLinks.link} class="font-subtitle text-lg text-purple">{pertinentLinks.title}</a>
    <p class="text-sm font-body">{pertinentLinks.body}</p>

</div>