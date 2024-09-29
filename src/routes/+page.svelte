<!--
    Home Page
    This should contain all the necessary info a student should know immediately such as important payments, confirmation, and secular/academic events.
-->

<script>
  import Announcement from "$lib/components/Announcement.svelte";
  import Hero from "$lib/components/hero.svelte";
  import CommunityLinkHub from "./CommunityLinkHub.svelte";

  const hero_link = "src/lib/assets/images/CATCH2T27_small.jpg";
</script>


<Hero 
    introTitle={"De La Salle University\nCollege of Computer Studies\nID123 Batch Student Government"}
    welcomeTitle={"Welcome to\nCATCH2T27"}
    eventTitle="Welcome ID123" 
    eventImgSrc="https://placehold.co/250"
/>
<!--  -->

<div id="community-link-hub" class="p-5">
  <CommunityLinkHub />
</div>

<Announcement
  title="CATCH2T27"
  bodyText={"CATCH 2T27 is dedicated to stimulating curiosity, encouraging innovation, and enabling CCS 123 students to excel in coding and computer education. By fostering a love for continuous learning and development, CATCH 2T27 aims to equip students with the capabilities to lead and succeed in the ever-changing landscape of technology."}
  imgLink={hero_link}
  buttonLink="https://www.youtube.com/watch?v=xvFZjo5PgG0"
/>

<style>
  #community-link-hub {
    background: url("$lib/assets/images/stripeBackground.png") left top repeat;
    background-size: 50px;
  }
  
</style>
