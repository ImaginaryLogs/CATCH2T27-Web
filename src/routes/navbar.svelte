<!--Navigation bar for all the webpages-->

<script lang=ts>
  import { goto } from "$app/navigation";


    
    const redirectMenu = (menu: Number) => {
        switch(menu) {
            case 0: goto("/");
                break;
            case 1:  goto("/aboutus");
                break;
            case 2: goto("/archivespage");
                break;
            case 3: goto("/calendar");
                break;
            case 4: goto("/pertinentlinks");
                break;
        }
    }

</script>

<div id="nav-bar" class="flex flex-auto flex-row py-2">
    <div id="catchlogo" class="flex flex-auto justify-start">

    <button on:click|preventDefault={() => {
        redirectMenu(0);
    }}>
    <img src="/images/colored-20.png" alt="catch2t27img" class="size-16"/>
    </button>
    </div>

    <div id="data-component" class="flex flex-auto flex-row justify-end space-x-10">
        <button on:click|preventDefault={(e)=> {
            redirectMenu(4);
        }} id="pertinentlinks">
        <div id="pertinentlinks-component" class="flex flex-auto flex-col items-center">
            <p>News</p>
            <img src="/images/icon-newspaper0.svg" alt="infoimg" class="size-8"/>
        </div>


        </button>

        <button on:click|preventDefault={(e) => {
            redirectMenu(2);
        }}
        id="archivespage">
            <div id="archivespage-component" class="flex flex-auto flex-col items-center">
                <p>Archives</p>
                <img src="/images/icon-boxes0.svg" alt="archivesimg" class="size-8"
                />
            </div>

        </button>

        <button on:click|preventDefault={(e) => {
            redirectMenu(3);
        }}
        id="calendar">
        <div id="calendar-component" class="flex flex-col items-center">
            <p class="font">Calendar</p>
            <img src="/images/icon-calendar0.svg" alt="calendarimg" class="size-8"/>
        </div>
        </button>

        
        <button on:click|preventDefault={(e) => {
            redirectMenu(1);
        }}
        id="aboutus">
        <div id="aboutus-component" class="flex flex-col items-center">
            <p class="font-mono font-bold">About Us</p>
            <img src="/images/icon-info0.svg" alt="aboutusimg" class="size-8"/>

        </div>
        </button>
    </div>
</div>