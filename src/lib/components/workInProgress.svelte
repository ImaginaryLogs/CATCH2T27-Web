<script>
    const body_text = "This site is currently under construction. \nServices will go back soon, so stay tuned for updates!";
    const warning_size = 150;
    const svg_style = "fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
</script>

<div class=" bg-yellow-700 flex flex-col gap-0 justify-items-start items-start self-stretch min-h-lvh">
	<div 
		class="flex flex-col gap-0 items-start justify-center self-stretch flex-shrink-0 relative bg-repeat animate-pan-down-right  min-h-lvh"
		id="bg-scrolling-stars"
	>
		<div class="justify-center relative flex flex-col gap-5 self-stretch p-10" >
			<div class=" bg-white justify-center self-center gap-5 flex flex-row-reverse p-5 min-h-96 min-w-96 rounded-xl">
				<div class = "justify-center flex flex-col">
                    <h1 class="md:text-4xl font-bold text-xl text-wrap">Coming soon! We are building to CATCH UP!</h1>
                    <br />
                    <pre class="md:text-3xl text-base text-wrap">{body_text}</pre>
                </div>
                
                <div class="justify-center flex flex-col">
                    <svg 
                        width={warning_size} 
                        height={warning_size}
                        viewBox="0 0 512 512">
                        <path 
                            d="M85.57,446.25H426.43a32,32,0,0,0,28.17-47.17L284.18,82.58c-12.09-22.44-44.27-22.44-56.36,0L57.4,399.08A32,32,0,0,0,85.57,446.25Z" 
                            style={svg_style}
                        />
                        <path 
                            d="M250.26,195.39l5.74,122,5.73-121.95a5.74,5.74,0,0,0-5.79-6h0A5.74,5.74,0,0,0,250.26,195.39Z" 
                            style={svg_style}
                        />
                        <path d="M256,397.25a20,20,0,1,1,20-20A20,20,0,0,1,256,397.25Z"/>
                    </svg>
                </div>
			</div>

		</div>
	</div>
</div>

<style>
    #bg-scrolling-stars {
        background: url("$lib/assets/images/stripeBG.png");
        background-size: 20%;
	}
</style>