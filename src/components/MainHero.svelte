<script>
	import FlowerShit from '../lib/images/FlowerShit.png';
	import CircularImage from '../lib/images/circularImage.jpeg';
	import { fly } from 'svelte/transition';
	import Banner from './Banner.svelte';
	import Countdown from './Countdown.svelte';
	let isSpinning = true; // Add a variable to control the spinning animation

	// Function to toggle the spinning animation
	function toggleSpinning() {
		isSpinning = !isSpinning;
	}
</script>

<div class="pt-20 overflow-hidden">
	<div class="flex flex-col justify-center items-center text-center">
		<div class="w-3/4"></div>
		<p
			class="font-InterTight text-3xl md:text-6xl lg:text-6xl sm:text-xl font-semibold text-[#09275E]"
		>
			ICRAFMN-24
		</p>
		<p class="font-InterTight text-xl sm:text-3xl font-semibold text-[#5D5D5D] p-5">
			2<sup>nd</sup> International Conference on Recent Advances in Fluid Mechanics and Nanoelectronics
		</p>
		<div class=" text-2xl font-InterTight font-normal pt-5 text-[#09275E] pb-4">July 12 - 14</div>
		<p class="font-InterTight text-lg md:text-xl lg:text-xl font-semibold text-[#042BF8]">
			Oranised by Manipal University Jaipur <br /> in association with <br /> Manipal Institute of
			Technology Bengaluru <br /> & <br />NIT Uttarakhand
		</p>
	</div>
	<!-- <div class=" text-2xl font-InterTight font-normal pt-5 text-[#09275E] pb-4">July 12 - 14</div> -->
	<div class="mt-20 w-full flex flex-col justify-center items-center">
		<Countdown/>
	</div>
	<div class="flex flex-row sm:pl-20 p-5">
		<div class="flex flex-col justify-center">
			<p class=" text-2xl md:text-3xl lg:text-3xl font-semibold text-[#09275E] pb-3 flex flex-col">
				About
			</p>
			<div class="flex overflow-x-hidden max-w-full overflow-hidden">
				<p class=" text-lg sm:text-xl text-[#272727] text-justify" style="line-height: 1.9;">
					A three-day 2<sup>nd</sup> International Conference on Recent Advances in Fluid Mechanics and
					Nanoelectronics (ICRAFMN – 2024) is being hosted by Manipal University Jaipur in association
					with Manipal Institute of Technology (MIT) Bengaluru and NIT Uttarakhand from 10th-12th July
					2024 at MIT Bengaluru. The conference aims to provide an excellent venue for multidisciplinary
					academicians, engineers, scientists, researchers, and industry professionals to present their
					fluid mechanics and nanoelectronics research findings. The conference covers varied topics,
					such as experimental, analytical, and computational aspects of fluid mechanics and nanoelectronics
					in various engineering fields. Keynote/invited lectures will be delivered by eminent industry
					and academic experts worldwide for over three days with parallel technical sessions. The best
					paper presentation for each session will be recognized with the Best Session Paper, and the
					best research paper for each stream will be awarded the Best Paper Award. Based on the manuscript's
					suitability, as recommended by the reviewers, selected papers will be published in Scopus-indexed
					journals.
				</p>
			</div>
		</div>
		<img
			src={FlowerShit}
			alt=""
			class="object-cover w-[600px] h-[600px] right-[-7%] relative hidden sm:flex animate-spin-slow"
		/>
	</div>
</div>
