<script>
  import VisionMission from "./VisionMission.svelte";
</script>

<!--
      About Us
      For now, it should just contain general information of the organization.
  -->

<div id="aboutus-component">
  <div id="whoweare" class="">
    <h1>Who we are</h1>
    <img
      src="/images/aboutus/white-20.png"
      alt="catch2t27logo"
      class="self-center"
    />
  </div>

  <div id="aboutus-details">
    <div id="aboutus" class="flex flex-auto">
      <p id="aboutus-body">
        Computer Batch 2027 (CATCH2T27) is the representative body of ID123
        undergraduate students of the College of Computer Studies.
      </p>
    </div>

    <div id="mission-vision">
      <VisionMission
        title="Mission"
        img="images/aboutus/mission.png"
        bodyText="To ignite curiosity, inspire innovation, and empower CCS 123 students to excel in coding and computer education. Fostering a passion for lifelong learning in the dynamic realm of technology"
      />

      <VisionMission
        title="Vision"
        img="images/aboutus/vision.png"
        bodyText="A batch that persistently innovates through curiosity and passion for computer education"
      />
    </div>
  </div>
</div>

<style>
  #aboutus-component {
    @apply flex flex-col items-center justify-center p-12 bg-gray-300 md:items-start gap-x-12 md:flex-row;
  }

  #whoweare {
    @apply flex flex-col md:max-w-screen-sm gap-4;
  }
  #aboutus-details {
    @apply flex flex-col items-stretch gap-4 md:w-1/2 md:max-w-screen-sm;
  }

  #mission-vision {
    @apply flex flex-row items-start gap-6 p-6 rounded-lg md:flex-col mission-vision-text bg-purple;
  }

  h1 {
    @apply self-center text-4xl font-bold font-head;
  }

  p {
    @apply font-body;
  }

  .mission-vision-text > * {
    @apply w-1/3 md:w-full;
  }
</style>
