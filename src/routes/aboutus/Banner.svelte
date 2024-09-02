<div class="banner">
  <div class="banner-text">
    <div class="banner-subtitle">
      <h3>Sparking Curiosity.</h3>
      <h3>Inspiring Innovation.</h3>
      <h3>Empowering Students.</h3>
    </div>
    <div class="banner-title">
      <h1>Catch2T27</h1>
      <h2>Batch Student Government for CCS123</h2>
    </div>
  </div>
  <img src="/images/logo-main-20.png" alt="catch2t27logo" class="banner-logo" />
</div>

<style>
  h1 {
    @apply text-6xl md:text-8xl font-head;
  }
  h2,
  h3 {
    @apply text-xl md:text-2xl font-subhead;
  }

  .banner {
    /* 72px came from the navbar measurement */
    @apply relative bg-cover bg-center h-[calc(100vh-72px)] flex flex-col items-center justify-center text-white;
    @apply sm:justify-between sm:items-stretch sm:flex-row;

    background: linear-gradient(
      245.94deg,
      #050441 -1.5%,
      #371457 33%,
      #723671 66%,
      #958d8d 110%
    );
  }

  .banner-text {
    @apply flex flex-col justify-end items-start p-8;
  }

  .banner-title {
    @apply flex flex-col items-center;
  }

  .banner-logo {
    @apply self-center object-contain max-w-64 md:max-w-none max-h-svh;
  }
</style>
