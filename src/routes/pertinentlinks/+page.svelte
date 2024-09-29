<!--
    Pertinent Links
    This should contain all of the useful links that website can route toString.
-->

<script lang="ts">
  import LinksList from "./LinksList.svelte";
  const date_updated: string = "Sept 22, 2024";

</script>

<div class=" bg-dark-purple min-w-full w-full min-h-screen">   
    <div class="bg-repeat overflow-hidden bg1 w-full min-h-screen animate-pan-down-right">
        <div class="bg-repeat overflow-hidden bg2 w-full min-h-screen">
            <div id="links-background-component" class="flex flex-col w-full h-full min-h-screen p-5">
                <p class="text-white text-4xl font-head self-center mt-4">Pertinent Links</p>
                <p class="text-white font-xl self-center">Updated as of {date_updated}</p>
                <br>
                <div id="links-body-component" class="flex self-center bg-white rounded-3xl px-5 p-5">
                    <LinksList/>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .bg1 {
        background-image: url("$lib/assets/images/StripeBG2.png");
        
    }
    .bg2 {
        background: linear-gradient(rgb(32, 13, 50), transparent);
    }
</style>