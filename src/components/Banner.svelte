<script>
	// @ts-nocheck
	// import downarrow from "../../assets/down-arrow.svg"
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	const endTime = 1720603800000; // change this to july 12
	let dLeft = '-',
		hLeft = '-',
		mLeft = '-',
		sLeft = '-';
	onMount(() => {
		window.scrollTo(0, 0);
	});

	if (browser) {
		setInterval(() => {
			let Ctime = new Date().getTime();

			//Get Days, Hours, Minutes, Seconds
			dLeft = Math.floor((endTime - Ctime) / 86400000);
			hLeft = Math.floor((endTime - Ctime - dLeft * 86400000) / 3600000);
			mLeft = Math.floor((endTime - Ctime - dLeft * 86400000 - hLeft * 3600000) / 60000);
			sLeft = Math.floor(
				(endTime - Ctime - dLeft * 86400000 - hLeft * 3600000 - mLeft * 60000) / 1000
			);

			//Single digits are padded with a 0 to the left (XX:9 -> XX:09)
			hLeft = hLeft < 10 ? `0${hLeft}` : hLeft;
			mLeft = mLeft < 10 ? `0${mLeft}` : mLeft;
			sLeft = sLeft < 10 ? `0${sLeft}` : sLeft;
		}, 1000);

		// document.addEventListener("scroll", (event) => {
		//     document.getElementById('downarrow').className = " opacity-0 mb-20 transition-all duration-700"
		// });

		document.addEventListener('resize', (event) => {
			document.getElementById('starcontain').className =
				document.getElementById('starcontain').className + ' hidden';
			document.getElementById('starcontain').className = document
				.getElementById('starcontain')
				.className.replaceAll('hidden', '');
		});
	}
	
</script>



<div id="banner-inner-contain" class="">
	<div class=" w-full bg-opacity-0 flex justify-center items-center">
		<div id="banner-img-container " class="">
			<div class="align-middle flex flex-col ">
				<div
					class=" flex flex-col items-center text-center text-3xl font-semibold font-mono bg-clip-text text-transparent bg-gradient-to-r  from-[#0048ff] to-[#001b5e] "
				>
					{dLeft} Days :{hLeft} Hours :{mLeft} Minutes :{sLeft} Seconds
					<!-- <p class="text-blue-900 text-3xl">Manipal Institute of Technology, BENGALURU</p> -->
                    <!-- <div class=" text-2xl font-InterTight font-normal pt-5 text-[#09275E] pb-4">July 12 - 14</div> -->
				
				</div>
			</div>
		</div>
	
	</div>
</div>
