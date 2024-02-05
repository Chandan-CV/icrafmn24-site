<script lang="ts">
	import conferenceAddresses, { planerySpeakers } from './speakerdata';
</script>

<div class="text-center">
	<div class=" flex flex-col items-center pt-10 px-10">
		<h1 class="font-InterTight text-3xl font-semibold text-orange-950 pb-3 animate-pulse">
			The list of Speakers who have given consent to be part of ICRAFMN-2024
		</h1>
	</div>

	<div class="m-10 full">
		<h1 class="font-InterTight text-2xl font-bold text-orange-950 pb-3">Planery Address</h1>
		<div class="flex flex-row w-full justify-evenly flex-wrap">
			{#each planerySpeakers as speaker}
				<div class="flex flex-col items-center pt-5 px-10">
					<h1 class="font-InterTight text-2xl font-bold text-orange-800 pb-1">
						{speaker.name}
					</h1>
					<h1 class="font-InterTight text-xl font-light text-black pb-3">
						{speaker.affiliation}
					</h1>
				</div>
			{/each}
		</div>
	</div>
	<div class="flex flex-row justify-evenly text-center flex-wrap mt-10">
		{#each conferenceAddresses.categories.reverse() as category}
			<div class="m-10 sm:w-1/3">
				<h1 class="font-InterTight text-2xl font-bold text-orange-950 pb-3">
					{category.category}
				</h1>
				{#each category.speakers as speaker}
					<div class="flex flex-col items-center pt-5 px-10">
						<h1 class="font-InterTight text-2xl font-bold text-orange-800 pb-1">
							{speaker.name}
						</h1>
						<h1 class="font-InterTight text-xl font-light text-black pb-3">
							{speaker.affiliation}
						</h1>
					</div>
				{/each}
			</div>
		{/each}
	</div>
	<div class=" flex flex-col items-center pt-10 px-10">
		<h1 class="font-InterTight text-3xl font-semibold text-orange-950 pb-3 animate-pulse">
			The list will be updated as and when the speakers give their consent to be a part of
			ICRAFMN-2024.
		</h1>
	</div>
</div>
