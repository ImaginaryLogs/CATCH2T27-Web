<!--
    Calendar
    It contains details for all of the events from both the official DLSU calendar and the Important Student-led events.
-->
<script lang="ts">
    export let special_events: {};
    import DayDropdown from './DayDropdown.svelte';
    

    // Helper functions
    interface calendarPageEvent {
        order: number;
        date: Date;
        isCurrentMonth: boolean;
        events: String[];
    }

    interface calendarEvent {
        date: Date;
        events: String[];
    }

    const createEventList = (date: Date, isCurrentMonth: boolean = false) => {
        return {
            "order" : date.getDay(),
            "date" :  date,
            "isCurrentMonth": isCurrentMonth,
            "events": []
        } as calendarPageEvent
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


    const createEventCurrrentMonth = (date: Date) =>{
        return createEventList(date, true);
    }

    const dateToday: Date = new Date();

    const monthToday = dateToday.getMonth();

    const yearToday = dateToday.getFullYear();

    const firstDayOfMonth = new Date(yearToday, monthToday, 1);

    const lastDayOfMonth = getLastDay(dateToday);    

    const previousDaysFromFistDay = (prevDays: number) => {
        return getSkippedDayFromSetDate(firstDayOfMonth, -prevDays);
    }

    const nextDaysFromLastDay = (nextDays: number) => {
        return getSkippedDayFromSetDate(lastDayOfMonth, nextDays);
    }

    const fillMissingInFirstWeek = (monthPage: Array<Array<calendarPageEvent>>) => {
        if (hasMissingWeek(monthPage[0])) 
            for (let i = 0; i < firstDayOfMonth.getDay(); i++){
                monthPage[0].push(createEventList(previousDaysFromFistDay(i + 1)))
            }
    }

    const fillMissingInLastWeek = (monthPage: Array<Array<calendarPageEvent>>) => {
        const lastDayWeekIndex = monthPage
            .findIndex((week)=>
                week.some(event => event.date.getTime() === lastDayOfMonth.getTime())
            )
        
        if (hasMissingWeek(monthPage[lastDayWeekIndex])) {

            for (let i = 0; i < 6 - lastDayOfMonth.getDay(); i++){
                let e = nextDaysFromLastDay(i + 1);
                monthPage[lastDayWeekIndex].push(createEventList(e))
            }
        }
    }

    const hasMissingWeek = (arr: Array<calendarPageEvent>) => {
        return arr.length < 7;
    }
 
    let monthPage: Array<Array<calendarPageEvent>> = Array.from(Array(6), ()=>Array(0));

    let datesInCurrentMonth = [...Array(getLastDay(dateToday).getDate()).keys()]
        .map(createDateObjFromInt)
        .map(createEventCurrrentMonth)

    datesInCurrentMonth.forEach((el, i)=>{
        monthPage[getWeekOrderFromDate(el.date)].push(el);
    })

    
    fillMissingInFirstWeek(monthPage)
    
    fillMissingInLastWeek(monthPage);
    
    const exampleDate1: Date = new Date(); 
    exampleDate1.setDate(6);

    let events: Array<calendarEvent> = [
        {
            date: exampleDate1,
            events: [
                "Pasokan (Finally)"
            ]
        }, {
            date: dateToday,
            events: [
                "Calendar Page's Birthday"
            ] 
        }
    ]

    events.forEach((event)=>{
       monthPage.forEach(week => {
            week.forEach(
                day => {
                    if (day.date.toDateString() === event.date.toDateString())
                        day.events.push(...event.events);
                }
            )
       })
    })


    $: strDays = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ]

</script>

<div class="bg-dark-purple justify-center flex">
    <div class="p-5 rounded-md flex flex-col items-center gap-5 bg-white flex-shrink-0 m-5 relative">
        <h1 class="text-5xl text-center font-head">{dateToday.toLocaleString('default', {month: 'long'})}</h1>
        <h2 class="text-3xl text-center font-subhead">{yearToday}</h2>
        <div class="justify-center relative ">
            <div class="grid grid-cols-7 gap-1 p-5">
                {#each strDays as strDay}
                    <li class="list-none text-center m-0 p-0 text-3xl text-purple font-subhead">{strDay}</li>
                {/each}
    
                {#each monthPage as weekPage}
                    {#each weekPage as dayPage}
                        <DayDropdown
                            date = {dayPage.date}
                            isCurrentMonth = {dayPage.isCurrentMonth}
                            isToday = {dayPage.date.toDateString() === dateToday.toDateString()}
                            events = {dayPage.events}
                        />
                    {/each}
                {/each}
            </div>
        </div>
    </div>
</div>
<p></p>