<script lang="ts">
  import "../app.css";

  import Footer from "$lib/components/footer.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import WIPNotice from "$lib/components/workInProgress.svelte";
  export const prerender = true
  const is_work_in_progress = false;
</script>

<Navbar />
<main class="pt-16">
  {#if !is_work_in_progress}
    <slot />
  {:else}
    <WIPNotice />
  {/if}
</main>
<Footer />
