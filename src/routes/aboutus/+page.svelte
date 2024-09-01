<script>
  import Navbar from "$components/navbar.svelte";
    import Footer from "$components/footer.svelte";
</script>
<!--
    About Us
    For now, it should just contain general information of the organization.
-->

    <Navbar/>

    <div id="aboutus-component" class="flex flex-row bg-gray-300">

        <div id="whoweare" class="flex flex-auto flex-col">
            <p class="font-head font-bold self-center text-2xl pt-16">
                Who we are?
            </p>
            <img src="/images/aboutus/white-20.png" alt="catch2t27logo" class="self-center">
            
        </div>

        <div id="aboutus-details" class="flex flex-auto flex-col">
            
            
            
            <div id="aboutus" class="flex flex-auto pt-16">
                <p id="aboutus-body" class="font-body text-base">
                    Computer Batch 2027 (CATCH2T27) is the representative body of ID123 <br>undergraduate students 
                    of the College of Computer Studies.
                </p>
            </div>
            
            <div id="mission-component" class="flex flex-auto flex-row space-x-2 space-y-2">
                <div id="mission-image">
                    <img src="images/aboutus/mission.png" alt="missionimg" class="size-16">
                </div>
                <div id="mission-text">
                    <p id ="mission-head" class="font-subtitle font-bold text-lg">Mission:</p>
                    <p id="mission-body" class="font-body text-base">
                        To ignite curiosity, inspire innovation, and empower CCS 123 students <br>to excel in coding and computer education. Fostering
                        a passion for lifelong learning in the dynamic realm of technology
                    </p>
                </div>

            </div>
            
            <div id="vision-component" class="flex flex-auto flex-row space-x-2 space-y-2">
                <div id="vision-image">
                    <img src="images/aboutus/vision.png" alt="visionimg" class="size-16">
                </div>
                <div id="vision-text">

                    <p id ="vision-head" class="font-subtitle font-bold text-lg">Vision:</p>
                    <p id="vision-body" class="font-body text-base">
                        A batch that persistently innovates through curiosity and passion for computer education
                    </p>
                </div>

            </div>
        </div>
    </div>
        
        
        <Footer/>
