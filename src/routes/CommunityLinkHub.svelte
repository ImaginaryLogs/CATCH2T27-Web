<div class="flex flex-col font-body gap-3 min-h-screen">
  <h2 class="text-4xl font-bold">Community Link Hub</h2>
  <p class="text-2xl">
    Organizations and other ID123s churn out useful articles for you to use
  </p>
  <div class="flex flex-col ml-8 gap-3">
    <h3 class="font-bold text-4xl">Organizations:</h3>
    <!-- NOTE: Could possibly turn into a component, can be easily done via Svelte extension -->
    <div class="flex flex-row gap-2">
      <!-- Logo -->
      <img
        src="https://placehold.co/150"
        alt="CATCH2T27 Logo"
        class="h-[150px]"
      />
      <div class="flex flex-col gap-1">
        <h4 class="text-4xl font-bold">CATCH2T27 Links:</h4>
        <p class="text-2xl">Remember to do your PHEX and Drug-testing</p>
        <div class="flex flex-row gap-10 justify-around ml-5">
          <!-- copied from navbar -->
          <a href="/pertinentlinks" id="pertinentlinks">
            <div
              id="pertinentlinks-component"
              class="flex flex-auto flex-col items-center"
            >
              <p class="font-head">News</p>
              <img
                src="/images/nav/icon-newspaper0.svg"
                alt="infoimg"
                class="size-8"
              />
            </div>
          </a>

          <a href="/archivespage" id="archivespage">
            <div
              id="archivespage-component"
              class="flex flex-auto flex-col items-center"
            >
              <p class="font-head">Archives</p>
              <img
                src="/images/nav/icon-boxes0.svg"
                alt="archivesimg"
                class="size-8"
              />
            </div>
          </a>

          <a href="/calendar" id="calendar">
            <div id="calendar-component" class="flex flex-col items-center">
              <p class="font-head">Calendar</p>
              <img
                src="/images/nav/icon-calendar0.svg"
                alt="calendarimg"
                class="size-8"
              />
            </div>
          </a>

          <a href="/aboutus" id="aboutus">
            <div id="aboutus-component" class="flex flex-col items-center">
              <p class="font-head">About Us</p>
              <img
                src="/images/nav/icon-info0.svg"
                alt="aboutusimg"
                class="size-8"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
