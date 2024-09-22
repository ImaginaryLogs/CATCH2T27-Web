<script lang="ts">


    export let date: Date; 
    export let isCurrentMonth: boolean;
    export let events: String[];
    export let isToday: boolean;
    $: dayWithinMonth = isCurrentMonth ? "outline bg-gray-200" : "bg-gray-500";
    $: dayToday = isToday ? "bg-light-purple" : "";
  </script>

<div class= " {dayWithinMonth} {dayToday} outline-1 outline-gray-100 justify-center p-1 min-h-40 min-w-40  ">

    <div class="flex flex-col font-subhead">
      <div class="text-3xl">
        {date.getDate()}
      </div>
      <div class="flex-row flex max-w-56">
        <ul>
          {#each events as event}
            <li class="text-wrap text-left text">
              {event}
            </li>
          {/each}
        </ul>
      </div>
    </div>
    

</div>