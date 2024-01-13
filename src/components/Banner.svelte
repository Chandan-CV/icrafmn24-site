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



<div id="banner-inner-contain" class=" ">
	<div class=" w-full bg-opacity-0 flex justify-center items-center z-[7]">
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

<style>
	.fadeThisOut {
		animation-name: fadeOut;
		animation-timing-function: ease-out;
		animation-duration: 1000ms;
		animation-iteration-count: 1;
		animation-fill-mode: forward;
		transition: all;
	}

	@keyframes fadeOut {
		0% {
			opacity: 100%;
		}

		105% {
			opacity: 0;
		}
	}

	.backgroundpan {
		background-size: 200%;
		animation: backgroundpanAnim 4000ms linear infinite;
	}

	@keyframes backgroundpanAnim {
		from {
			background-position: 0% center;
		}
		to {
			background-position: -200% center;
		}
	}

	.countFadeIn {
		animation-name: fadeInCount;
		animation-duration: 3000ms;
		animation-iteration-count: 1;
		animation-fill-mode: forward;
		animation-timing-function: ease-out;
	}

	@keyframes fadeInCount {
		0% {
			transform: translateY(-50px);
			opacity: 0;
		}

		50% {
			transform: translateY(-50px);
			opacity: 0;
		}

		100% {
			transform: translateY(0px);
			opacity: 100%;
		}
	}
</style>
