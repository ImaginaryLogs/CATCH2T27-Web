<script>
	import { page } from '$app/stores';
</script>


<div class=" bg-dark-purple flex flex-col gap-0 justify-items-start items-start self-stretch min-h-lvh">
	<div 
		class="flex flex-col gap-0 items-start justify-center self-stretch flex-shrink-0 relative overflow-hidden bg-repeat animate-pan-down-right  min-h-lvh"
		id="bg-scrolling-stars"
	>
		<div class="justify-center relative flex flex-col gap-0 self-stretch p-20" >
			<div class=" bg-white justify-center p-5 min-h-96 min-w-96 rounded-md">
				<h1 class="text-4xl">Status: {$page.status}</h1>
				<hr />
				<br />
				<h2 class="text-2xl">Accessed: </h2>
				<p>{$page.url}</p>
				<br />
				<h2 class="text-2xl">Message: </h2>
				<p>{$page.error?.message}.</p>
			</div>
		</div>
	</div>
</div>

<style>
    #bg-scrolling-stars {
        background: url("$lib/assets/images/hero0.png");
        background-size: 10%;
	}
</style>
