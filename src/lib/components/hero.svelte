<script lang="ts">
    export let introTitle: string;
    export let welcomeTitle: string;
    export let eventTitle: string = "";
    export let eventDescription: string = "Good Morning CCS ID123!\nWelcome to the CATCH2T27 Website - the place of every info you need. Take a look at what's happening down below!";
    export let eventImgSrc: string = "";

    $: eventTitleUpperCase = eventTitle.toUpperCase();
    $: hasImg = eventImgSrc !== "" && eventImgSrc !== undefined;
    $: hasEvent = eventTitle !== "" && eventTitle !== undefined && eventDescription !== "" && eventDescription !== undefined ;
    $: center_event = hasEvent ? 'justify-center' : '';
</script>


<div 
    class="flex flex-col gap-0 items-start justify-items-start self-stretch flex-shrink-0 relative overflow-hidden bg-dark-purple h-svh"
    id="bg-custom-grad"
>
    <div
        class="flex flex-col gap-0 items-start justify-center self-stretch flex-shrink-0 relative overflow-hidden bg-repeat animate-pan-down-right h-svh"
        id="bg-scrolling-stars"
    >
        <div class="p-20 flex flex-col gap-20 items-start justify-center self-stretch flex-shrink-0 relative overflow-hidden" >
            
            <div class="flex flex-row items-center flex-wrap self-stretch flex-1 min-w-720 relative {center_event}">
                
                <div class="p-10 items flex flex-col gap-10 items-start justify-items-start flex-shrink-0 relative">

                    <div class="text-white text-left text-2xl flex-col font-head font-normal relative flex justify-items-start">
                            {#each introTitle.split("\n") as line}
                            <p>{line}</p>
                            {/each}
                    </div>
                    
                    <div class="text-white text-6xl text-left font-bold flex flex-col">
                            {#each welcomeTitle.split("\n") as line}
                            <p>{line}</p>
                            {/each}
                    </div>
                </div>
            {#if hasEvent}
                <div class="flex flex-col p-5 justify-center bg-white min-h-80 max-w-xl rounded-xl">
                    <div class="justify-center text-center text-4xl font-bold">
                        {eventTitleUpperCase}
                    </div>
                    
                    <br>
                    
                    {#if hasImg}
                    <div class="flex-center flex justify-center pb-5">
                        <img 
                            src={eventImgSrc}
                            alt="{eventTitleUpperCase}img"
                        />
                    </div>
                    {/if}

                    <div class="flex flex-col gap-4">
                        {#each eventDescription.split("\n") as line}
                        <p>{line}</p>
                        {/each}
                    </div>
                </div>
            {/if}
            </div>
        </div>
    </div>
</div>

<style>
    #bg-scrolling-stars {
        background: url("$lib/assets/images/hero0.png");
        background-size: 10%;
    }

    #bg-custom-grad{
        background: rgb(32,13,50);
        background: linear-gradient(180deg, rgba(32,13,50,1) 18%, rgba(66,9,74,1) 86%);
    }
    
</style>
