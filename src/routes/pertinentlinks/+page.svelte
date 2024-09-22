<!--
    Pertinent Links
    This should contain all of the useful links that website can route toString.
-->

<script>
  import LinksList from "./LinksList.svelte";


</script>
<div id="links-background-component" class="flex flex-col bg-dark-purple w-full h-full min-h-screen">
    <p class="text-white text-lg font-head self-center mt-4">Pertinent Links</p>
    <p class="text-white font-subhead self-center">Updated as of </p>
    <div id="links-body-component" class="flex self-center bg-white rounded-3xl px-96">
        <LinksList/>
    </div>
</div>

