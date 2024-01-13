<script>
	import PreviousImage from '../lib/images/previousYear1.jpeg'
	import Gallery from './Gallery.svelte';
</script>

<div class="px-20 pb-20 w-full">
	<a class="text-2xl md:text-3xl lg:text-3xl font-semibold text-[#09275E] pb-5 flex flex-col text-center mb-20" href="https://conference.manipal.edu/ICRAFMN-2023/Default">ICRAFMN-2023 Highlights</a>

	<div class="flex flex-wrap -m-4 text-center w-full justify-evenly">
		<div class="flex items-center mb-20 flex-col">
			<h1 class="text-black font-InterTight font-bold text-6xl">70</h1>
			<h2 class="text-black font-InterTight text-xl">Speakers</h2>
		</div>
			<div class="flex items-center mb-20 flex-col">
				<h1 class="text-black font-InterTight font-bold text-6xl">666</h1>
				<h2 class="text-black font-InterTight text-xl">Registrations</h2>
			</div>
			<div class="flex items-center mb-20 flex-col">
				<h1 class="text-black font-InterTight font-bold text-6xl">610</h1>
				<h2 class="text-black font-InterTight text-xl">Abstracts</h2>
			</div>
			<div class="flex items-center mb-20 flex-col">
				<h1 class="text-black font-InterTight font-bold text-6xl">430</h1>
				<h2 class="text-black font-InterTight text-xl">Full-length Papers</h2>
			</div>
	</div>
<div class="w-full flex flex-col justify-center items-center">
<div class="text-2xl md:text-3xl lg:text-3xl font-semibold text-[#09275E] pb-5 flex flex-col text-center mb-20 mt-10">Glimpses of the Previous Conference</div>
<div>
	<Gallery/>
</div>
</div>
</div>
