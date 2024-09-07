<!--
    Pertinent Links
    This should contain all of the useful links that website can route toString.
-->

<script lang="ts">
    import PertinentLinks from "./PertinentLinks.svelte";
    const date = new Date("2024-09-07"); // use ISO-8601 format
    const dateLastUpdate = `${date.getDate()} ${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`;
</script>

<div class="flex justify-center p-4 bg-dark-purple md:p-12">
    <div
        id="links-background-component"
        class="flex flex-col justify-center p-4 bg-white rounded-3xl w-fit gap-y-4"
    >
        <p class="self-center text-3xl font-head">Pertinent Links</p>
        <p class="self-center text-2xl font-subtitle-bold">
            Updated as of {dateLastUpdate}
        </p>
        <div id="links-body-component">
            <PertinentLinks />
        </div>
    </div>
</div>

<style>
    #links-background-component {
        /* @apply flex flex-col justify-center gap-y-4 p-4 w-full  rounded-md bg-white; */
    }

    #links-body-component {
        @apply flex items-stretch flex-wrap justify-center gap-2 w-full;
    }
</style>
