<script lang="ts">
    import type { PertinentLink } from "./interfaces.js";
    let links: PertinentLink[] = [{
        title:"This Is the Hyper link",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link:"https://www.youtube.com/watch?v=6iSARr6p-mU",
    },
    
    ];


</script>

{#each links as link}
    <li class ="flex flex-col items-center">
        <a class="font-subtitle text-lg" href="{link.link}">{link.title}</a>
        <p class="font-body text-sm text-dark-purple">{link.body}</p>
    </li>
{/each}