<div class="banner">
  <div class="banner-stars">
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
    <img
      src="/images/logo-main-20.png"
      alt="catch2t27logo"
      class="banner-logo"
    />
  </div>
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
    background: linear-gradient(
      245.94deg,
      #050441 -1.5%,
      #371457 33%,
      #723671 66%,
      #958d8d 110%
    );
  }

  .banner-stars {
    /* 64px came from the navbar measurement */
    @apply flex flex-col items-center justify-center w-full h-[calc(100vh-64px)] overflow-hidden text-white bg-repeat animate-pan-down-right;
    @apply md:flex-row md:justify-between md:items-stretch;

    background-image: url("images/hero0.png");
    background-size: 10rem;
  }

  .banner-text {
    @apply flex flex-col justify-end items-start p-8;
  }

  .banner-title {
    @apply flex flex-col items-center;
  }

  .banner-logo {
    @apply self-center object-contain h-1/2 md:h-auto md:max-w-none md:max-h-full;
  }
</style>
