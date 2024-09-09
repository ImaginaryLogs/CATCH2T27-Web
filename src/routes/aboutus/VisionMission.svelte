<script lang="ts">
  export let title: string; // Required
  export let img: string = "";
  export let bodyText: string;
  

  $: titleLowerCase = title.toLocaleLowerCase();
</script>

<div id="{titleLowerCase}-component" class="mission-vision-component">
  <img
    id="{titleLowerCase}-image"
    src={img}
    alt="{titleLowerCase}img"
    class="hidden md:block"
  />
  <div id="{titleLowerCase}-text" class="mission-vision-text">
    <h2 id="{titleLowerCase}-head" class="text-lg font-subtitle-bold">
      {title}:
    </h2>
    <img
      id="{titleLowerCase}-image"
      src={img}
      alt="{titleLowerCase}img"
      class="block md:hidden"
    />
    <p id="{titleLowerCase}-body">
      {bodyText}
    </p>
  </div>
</div>

<style>
  h2 {
    @apply text-2xl font-subtitle-bold text-white;
  }

  p {
    @apply font-body text-white;
  }

  .mission-vision-component {
    @apply flex flex-col md:flex-row items-center justify-center gap-4 w-1/2 md:w-full;
  }

  .mission-vision-component img {
    @apply object-contain max-w-32 md:max-w-16;
  }

  .mission-vision-text {
    @apply flex flex-col items-center md:items-start justify-center gap-2;
  }
</style>
