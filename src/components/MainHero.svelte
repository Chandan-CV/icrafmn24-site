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

<div class="pt-10 overflow-hidden px-8">
	<div class="flex flex-col justify-center items-center text-center">
		<div class="w-3/4"></div>
		<p
			class="font-serif text-3xl md:text-6xl lg:text-6xl sm:text-xl font-semibold text-orange-950"
		>
			ICRAFMN-2024
		</p>
		<p class="font-InterTight text-xl sm:text-3xl font-semibold text-orange-700 p-5">
			2<sup>nd</sup> International Conference on Recent Advances in Fluid Mechanics and Nanoelectronics
		</p>
		<div class=" text-2xl font-InterTight font-normal pt-5 text-[#09275E] pb-4">July 10 - 12, 2024</div>
		<p class="font-InterTight text-lg md:text-xl lg:text-xl font-light text-orange-950">
			Organized by
		</p>
		<p class="font-InterTight text-lg md:text-xl lg:text-xl font-semibold text-orange-700">
			Manipal University Jaipur 
		</p>
		<p class="font-InterTight text-lg md:text-xl lg:text-xl font-light text-orange-950">
			In association with
		</p>

		<p class="font-InterTight text-lg md:text-xl lg:text-xl font-semibold text-orange-700">
			Manipal Institute of
			Technology Bengaluru <br /> & <br />National Institute of Technology Uttarakhand

		</p>

	</div>
	<!-- <div class=" text-2xl font-InterTight font-normal pt-5 text-[#09275E] pb-4">July 12 - 14</div> -->
	<div class="mt-20 w-full flex flex-col justify-center items-center">
		<Countdown/>
	</div>
	<div class="w-full flex justify-center items-center">

		<div class=" bg-orange-700 text-white p-5 rounded-2xl px-10 text-2xl font-semibold cursor-pointer mb-20 w-fit "> <a href="https://drive.google.com/file/d/1GhtzG5NwG4DtZkqSg7bBBgeFBwRIMJ8z/view?usp=drive_link">View Brochure</a></div>
	</div>
		<div class="flex flex-row p-5">
		<div class="flex flex-col justify-center">	
			<p class=" text-2xl md:text-3xl lg:text-3xl font-semibold text-[#09275E] pb-3 flex flex-col">
				About Conference
			</p>
			<div class="flex overflow-hidden">
				<p class=" text-lg sm:text-xl text-[#272727] text-justify" style="line-height: 1.9;">
					A three-day 2<sup>nd</sup> International Conference on Recent Advances in Fluid Mechanics and
					Nanoelectronics (ICRAFMN – 2024) is being hosted by Manipal University Jaipur in association
					with Manipal Institute of Technology Bengaluru and National Institute of Technology Uttarakhand from 10th-12th July
					2024 at Manipal University Jaipur. The conference aims to provide an excellent venue for multidisciplinary
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
	</div>
</div>
