<script lang="ts">
  import "../app.css";

  import Footer from "$components/footer.svelte";
  import Navbar from "$components/navbar.svelte";
  import WIPNotice from "$components/workInProgress.svelte";

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
