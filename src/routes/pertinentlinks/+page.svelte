<!--
    Pertinent Links
    This should contain all of the useful links that website can route toString.
-->

<script>
  import Navbar from "$components/navbar.svelte";
  import LinksList from "./LinksList.svelte";


</script>
<div id="links-background-component" class="flex flex-col bg-dark-purple w-fit h-fit">
    <p class="text-white font-head self-center">Pertinent Links</p>
    <p class="text-white font-subhead self-center">Updated as of </p>
    <div id="links-body-component" class="flex bg-white rounded-md">
        <LinksList/>
    </div>
</div>

