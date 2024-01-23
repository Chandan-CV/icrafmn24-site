<script>
	import PreviousImage from '../lib/images/previousYear1.jpeg'
	import Gallery from './Gallery.svelte';
</script>

<div class="px-20 pb-20 w-full">
	<a class="text-2xl md:text-3xl lg:text-3xl font-semibold text-orange-950 pb-5 flex flex-col text-center mb-20" href="https://conference.manipal.edu/ICRAFMN-2024/Default">ICRAFMN-2023 Highlights</a>

	<div class="flex flex-wrap text-center w-full justify-evenly">
		<div class="flex items-center mb-20 flex-col m-5">
			<h1 class="text-orange-950 font-InterTight font-bold text-6xl">70</h1>
			<h2 class="text-orange-800 font-semibold font-InterTight text-xl">Speakers</h2>
		</div>
			<div class="flex items-center mb-20 flex-col m-5">
				<h1 class="text-orange-950 font-InterTight font-bold text-6xl">666</h1>
				<h2 class="text-orange-800 font-semibold font-InterTight text-xl">Registrations</h2>
			</div>
			<div class="flex items-center mb-20 flex-col m-5">
				<h1 class="text-orange-950 font-InterTight font-bold text-6xl">610</h1>
				<h2 class="text-orange-800 font-semibold font-InterTight text-xl">Abstracts</h2>
			</div>
			<div class="flex items-center mb-20 flex-col m-5">
				<h1 class="text-orange-950 font-InterTight font-bold text-6xl">430</h1>
				<h2 class="text-orange-800 font-semibold font-InterTight text-xl">Full-length Papers</h2>
			</div>
	</div>
	<div class="w-full flex flex-col justify-center items-center py-10">
		<div class="text-2xl md:text-3xl lg:text-3xl font-semibold text-orange-950 pb-5 flex flex-col text-center mt-10 mb-5">Previous Publications</div>
		<div class="flex gap-5 flex-wrap  text-center justify-center">
			<a href="https://pubs.aip.org/pof/collection/15930/Recent-Advances-in-Fluid-Mechanics-and" target="_blank" class="bg-orange-950 p-5 text-white rounded-full shadow shadow-orange-600 font-semibold hover:bg-white hover:text-orange-600 transition-colors ease-in-out">Physics of Fluids</a>
			<a href="https://pubs.aip.org/jap/collection/15930/Recent-Advances-in-Fluid-Mechanics-and" target="_blank" class="bg-orange-950 p-5 text-white rounded-full shadow shadow-orange-600 font-semibold hover:bg-white hover:text-orange-600 transition-colors ease-in-out">Journal of Applied Physics</a>
		</div>
		</div>
<div class="w-full flex flex-col justify-center items-center">
<div class="text-2xl md:text-3xl lg:text-3xl font-semibold text-orange-950 pb-5 flex flex-col text-center mb-20 mt-10">Glimpses of the Previous Conference</div>
<div>
	<Gallery/>
</div>
</div>
</div>
