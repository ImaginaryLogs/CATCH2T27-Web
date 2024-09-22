<!--
    Pertinent Links
    This should contain all of the useful links that website can route toString.
-->

<script lang="ts">
  import LinksList from "./LinksList.svelte";
  const date_updated: string = "Sept 22, 2024";

</script>
<div id="links-background-component" class="flex flex-col bg-dark-purple w-full h-full min-h-screen">
    <p class="text-white text-lg font-head self-center mt-4">Pertinent Links</p>
    <p class="text-white font-subhead self-center">Updated as of {date_updated}</p>
    <br>
    <div id="links-body-component" class="flex self-center bg-white rounded-3xl px-60 p-5">
        <LinksList/>
    </div>
</div>

