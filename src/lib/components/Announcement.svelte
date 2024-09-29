<script lang="ts">
  export let title: string; // Required
  export let bodyText: string = ""; // by default there is no body text
  export let imgLink: string = ""; // by default there is no photo
  export let buttonLink: string = "#"; // by default the button does nothing
  export let buttonText: string = "Learn More"; // we can also customize the text in the button

  // conditional classes here
  $: hasImg = imgLink !== "" && imgLink !== undefined;
  //Fetches the JSON data from sample.json
  
</script>

<div
  class="flex flex-col-reverse items-center justify-center gap-12 p-12 bg-white md:flex-row min-h-screen"
>
  <div class="flex flex-col items-center gap-4 md:max-w-screen-md">
    <h1 class="w-full text-4xl text-center font-head md:text-left">{title}</h1>
    <!-- Image for Mobile -->
    {#if hasImg}
      <img
        class="block object-contain max-h-48 md:hidden"
        src={imgLink}
        alt={title}
      />
    {/if}
    <!-- Body Text -->
    <div class="flex flex-col gap-4">
      {#each bodyText.split("\n") as line}
        <p>{line}</p>
      {/each}
    </div>
    <!-- Spacer to force button to be bellow -->
    {#if hasImg}
      <div class="grow"></div>
    {/if}
    <!-- External link -->
    {#if buttonLink !== "#"}
      <a
        class="announce-button"
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </a>
    {/if}
  </div>
  {#if hasImg}
    <img
      class="hidden object-contain max-h-64 max-w-1/3 md:block"
      src={imgLink}
      alt={title}
    />
  {/if}
</div>

<style>
  * {
    @apply text-black;
  }

  .announce-button {
    @apply px-4 py-2 font-bold !text-white bg-green-500 rounded-xl w-fit hover:bg-green-700;
    @apply transition-colors duration-150;
  }

  h1 {
    @apply text-4xl font-head;
  }

  p {
    @apply font-body;
  }
</style>
