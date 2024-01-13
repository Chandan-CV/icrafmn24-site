<script>
	import FlowerShit from '../lib/images/FlowerShit.png';
	import { fly } from 'svelte/transition';
	let isSpinning = true; // Add a variable to control the spinning animation

	// Function to toggle the spinning animation
	function toggleSpinning() {
		isSpinning = !isSpinning;
	}
</script>

<div class="pl-20 pt-20 overflow-hidden">
	<div class="w-3/4">
		<p
			class="font-InterTight text-3xl md:text-6xl lg:text-6xl sm:text-6xl font-semibold text-[#FFFFFF]"
		>
			ICRAFMN-24
		</p>
		<p class="font-InterTight text-xl md:text-2xl lg:text-2xl font-semibold text-stone-300">
			International Conference on Recent Advances in Fluid Mechanics and Nanoelectronics
		</p>
		<p class="font-InterTight text-xl md:text-xl lg:text-xl font-normal text-[#84daff]">
			Organised by Manipal Institute of Technology, Bangalore
		</p>
	</div>
	<div class=" text-2xl font-InterTight font-bold tracking-wider pt-5 text-[#ffffff] pb-4">July 12 - 14</div>
	<div class="flex flex-row ">
		<div class="flex flex-col justify-center md:mt-[-200px]">
			<p class=" text-2xl md:text-3xl lg:text-3xl font-semibold text-[#09275E] pb-3 flex flex-col">
				About
			</p>
			<div class="flex overflow-x-hidden max-w-full overflow-hidden ">
				<p class="text-lg md:text-xl lg:text-xl text-[#ffffff] text-balance">
					A three-day International Conference on Recent Advances in Fluid Mechanics and Nanoelectronics (ICRAFMN – 2023)is being hosted by Manipal Institute of Technology (MIT)
					Bengaluru in association with NIT Uttarakhand from 12th-14th July 2023 at MIT Bengaluru.
					The conference aims to provide an excellent venue for multidisciplinary academicians,
					engineers, scientists, researchers, and industry professionals to present their research
					findings in the area of fluid mechanics and nanoelectronics.
				</p>
			</div>
		</div>
        <img
            src={FlowerShit}
            alt=""
            class="object-cover w-[600px] h-[600px] right-[-15%] relative hidden sm:flex animate-spin-slow "
        />
	</div>
</div>
