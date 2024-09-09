<!--
    Calendar
    It contains details for all of the events from both the official DLSU calendar and the Important Student-led events.
-->
<script lang="ts">
    export let special_events;

    interface calendarEvent {
        order: number;
        date: Date;
        events: {}
    }

    const getLastDay = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }

    const createDateObjFromInt = (day: number) => {
        return new Date(dateToday.getFullYear(), dateToday.getMonth(), day+1);
    }
    
    const getWeekOrderFromDate = (date: Date) => {
        return Math.floor((date.getDate() - 1 + firstDayOfMonth.getDay()) / 7);
    }

    const getSkippedDayFromSetDate = (setDate: Date, skipDate: number) => {
        let date = new Date(setDate)
        date.setDate(setDate.getDate() + skipDate);
        return date;
    }

    const createEventList = (date: Date) => {
        return {
            "order" : date.getDay(),
            "date" :  date,
            "events": {}
        } as calendarEvent
    }
    

    const dateToday: Date = new Date();
    //dateToday.setMonth(7)
    const firstDayOfMonth = new Date(dateToday.getFullYear(), dateToday.getMonth(), 1);
    const lastDayOfMonth = getLastDay(dateToday);    

    const previousDaysFromFistDay = (prevDays: number) => {
        return getSkippedDayFromSetDate(firstDayOfMonth, -prevDays);
    }

    const nextDaysFromLastDay = (nextDays: number) => {
        return getSkippedDayFromSetDate(lastDayOfMonth, nextDays);
    }

    let monthPage: Array<Array<calendarEvent>> = Array.from(Array(6), ()=>Array(0));

    let datesInCurrentMonth = [...Array(getLastDay(dateToday).getDate()).keys()]
        .map(n => n + 1)
        .map(createDateObjFromInt)
        .map(createEventList)

    datesInCurrentMonth.forEach((el, i)=>{
        monthPage[getWeekOrderFromDate(el.date)].push(el);
    })

    
    const hasMissingFirstDays: boolean = monthPage[0].length < 7;
    if (hasMissingFirstDays) {
        for (let i = 0; i < firstDayOfMonth.getDay(); i++){
            monthPage[0].push(createEventList(previousDaysFromFistDay(i + 1)))
        }
    }

    const lastDayWeekIndex = monthPage.findIndex((week)=>
        week.some(event => event.date.getTime() === lastDayOfMonth.getTime())
    ) 
    const hasMissingLastDays: boolean = monthPage[lastDayWeekIndex].length < 7;
    
    if (hasMissingLastDays) {
        for (let i = 0; i < 6 - lastDayOfMonth.getDay(); i++){
            let e = nextDaysFromLastDay(i + 1);
            monthPage[lastDayWeekIndex].push(createEventList(e))
        }
    }


    console.log(monthPage);
</script>

{#each monthPage as weekPage}
    {#each weekPage as dayPage}
        <p>{dayPage.date.toDateString()}</p>
    {/each}
    <br />
{/each}

<p></p>