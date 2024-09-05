<script lang="ts">
  // IDK why my intellisense formatting the array like this
  // deal with it 🔥🔥🔥
  const socials = [
    {
      img: "fb_logo.png",
      name: "Facebook",
      link: "https://www.facebook.com/CATCH2T27",
    },
    { img: "mail_logo.png", name: "Email", link: "mailto:catch2t27@gmail.com" },
  ];
</script>

<div class="footer">
  <!-- Contacts -->
  <div>
    <h1 class="text-2xl text-center font-head">Contact us!</h1>
    <div class="flex flex-col gap-2 p-2 w-fit">
      {#each socials as { img, name, link }}
        <a
          class="flex items-center gap-4"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="size-8" src={"images/" + img} alt={name} />
          <span>{name}</span>
        </a>
      {/each}
    </div>
  </div>
  <!-- CATCH2T27 Logo and Credits -->
  <div>
    <img
      class="w-24 h-auto"
      src="images/common/catch2t27_logo_white.png"
      alt="CATCH2T27 Logo"
    />
    <p class="text-xs italic">
      Developed by the CATCH2T27 <br /> Web-Development Team
    </p>
  </div>
</div>

<style lang="postcss">
  /* Footer container */

  div.footer {
    @apply flex flex-col items-center justify-center p-4 bg-black md:flex-row gap-x-2;
  }

  div.footer > div {
    @apply flex flex-col gap-2 p-2 w-full h-full items-center md:!w-fit;
  }

  /* fonts */

  h1 {
    @apply text-center font-head text-white;
  }

  p,
  a,
  span {
    @apply text-center font-body text-white;
  }
</style>
