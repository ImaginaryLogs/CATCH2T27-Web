<script lang="ts">
  import "../app.css";

  import Footer from "$components/footer.svelte";
  import Navbar from "$components/navbar.svelte";
</script>

<Navbar />
<main class="pt-16">
  <slot />
</main>
<Footer />
