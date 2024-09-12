<!--Navigation bar for all the webpages-->
<script lang="ts">
  import { page } from "$app/stores";

  // NOTE: navbarLinks still contain the img property, as the svgPath is simply a provision for future replacement
  const navbarLinks = [
    {
      name: "News",
      id: "pertinentlinks",
      svgPath:
        "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z",
    },
    {
      name: "Archives",
      id: "archivespage",
      svgPath:
        "m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z",
    },
    {
      name: "Calendar",
      id: "calendar",
      svgPath:
        "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z",
    },
    {
      name: "About Us",
      id: "aboutus",
      svgPath:
        "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
    },
  ];

  // State variables that basically just detects whether
  // either the dropdown or its trigger button is hovered over

  $: activePageStyles = (id: string) => {
    return $page.url.pathname === `/${id}` ? "border-b-purple border-b-2" : "";
  };
</script>

<div id="nav-bar">
  <div id="catchlogo" class="flex flex-row justify-between">
    <a href="/" id="home" class="flex flex-row items-stretch">
      <img src="/images/colored-20.png" alt="catch2t27img" class="size-16" />
    </a>
  </div>

  <!-- svelte-ignore a11y-no-static-element-interactionspermalink -->
  <!-- Ignore whatever svelte is throwing here lmao -->
  <div id="data-component">
    {#each navbarLinks as { name, id, svgPath }}
      <a href="/{id}" {id} class="navbar-link">
        <div class={activePageStyles(id)}>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d={svgPath}
            />
          </svg>
          <p class="hidden font-head md:block">{name}</p>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  #nav-bar {
    @apply flex flex-row items-stretch justify-between md:flex-row fixed left-0 top-0 w-full bg-white z-50;
  }

  #data-component {
    @apply flex flex-row;
    /* Desktop styles */
    @apply md:flex-row items-stretch hover:flex;
  }

  .navbar-link {
    @apply flex flex-row items-center justify-center px-4;
    @apply text-black hover:text-white hover:bg-purple hover:fill-white transition-all duration-150;
  }

  .navbar-link > div {
    @apply flex flex-row items-center justify-center gap-4 py-2;
  }
</style>
