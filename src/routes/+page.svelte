<!--
    Home Page
    This should contain all the necessary info a student should know immediately such as important payments, confirmation, and secular/academic events.
-->

<script>
  import Announcement from "$components/Announcement.svelte";
  import CommunityLinkHub from "./CommunityLinkHub.svelte";
  import Hero from "$components/hero.svelte"
</script>


<Hero 
    introTitle={"De La Salle University\nCollege of Computer Studies\nID123 Batch Student Government"}
    welcomeTitle={"Welcome to\nCATCH2T27"}
    eventTitle="Hero Title" 
    eventDescription ="In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design."
    eventImgSrc="https://placehold.co/150"
/>
<!--  -->

<div id="community-link-hub" class="p-5">
  <CommunityLinkHub></CommunityLinkHub>
</div>

<Announcement
  title="CATCH2T27"
  bodyText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
  img="/images/CATCH2T27_small.png"
  buttonLink="https://www.youtube.com/watch?v=xvFZjo5PgG0"
/>

<style>
  #community-link-hub {
    background: url("images/stripeBackground.png") left top repeat;
    background-size: 50px;
  }
  
</style>
