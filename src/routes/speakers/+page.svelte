<script lang="ts">
	interface Speaker {
		name: string;
		university: string;
	}

	interface AddressCategory {
		category: string;
		speakers: Speaker[];
	}

	interface ConferenceAddresses {
		categories: AddressCategory[];
	}

	const conferenceAddresses: ConferenceAddresses = {
		categories: [
			{
				category: 'Keynote Address',
				speakers: [
					{
						name: 'Prof. Suman Chakraborty',
						university: 'Indian Institute of Technology, Kharagpur'
					},
					{
						name: 'Prof Anuj Mubayi',
						university: 'Illinois State University, USA'
					},
					{
						name: 'Prof. E. Y. K. Ng',
						university: 'Nanyang Technological University, Singapore'
					},
					{
						name: 'Prof. O. D. Makinde',
						university: 'Stellenbosch University, South Africa'
					},
					{
						name: 'Prof. Amit Agrawal',
						university: 'Indian Institute of Technology, Bombay'
					},
					{
						name: 'Prof. P V S N Murthy',
						university: 'Indian Institute of Technology, Kharagpur'
					},
					{
						name: 'Prof. Ratish Kumar B V',
						university: 'Indian Institute of Technology, Kanpur'
					},
					{
						name: 'Prof. Tanmay Basak',
						university: 'Indian Institute of Technology, Madras'
					},
					{
						name: 'Prof. Prasad Patnaik BSV',
						university: 'Indian Institute of Technology, Madras'
					},
					{
						name: 'Prof. Rama Bhargava',
						university: 'Indian Institute of Technology, Roorkee'
					},
					{
						name: 'Prof. P.G. Siddheswar',
						university: 'Christ University, Bengaluru'
					}
				]
			},
			{
				category: 'Invited Address',
				speakers: [
					{
						name: 'Dr. Hafiz Muhammad Ali',
						university: 'King Fahd University of Petroleum and Minerals, Dhahran, Saudi Arabia'
					},
					{
						name: 'Dr. Katta Ramesh',
						university: 'Sunway University, Malaysia'
					},
					{
						name: 'Dr. Rajesh K. Pandey',
						university: 'Indian Institute of Technology, Varanasi'
					},
					{
						name: 'Dr. R. Sivaraj',
						university: 'Dr. B. R. Ambedkar National Institute of Technology, Punjab'
					},
					{
						name: 'Dr. Kerehalli Vinayaka Prasad',
						university: 'VSK University, Ballari'
					},
					{
						name: 'Dr. Hanumesh Vaidya',
						university: 'VSK University, Ballari'
					}
				]
			}
		]
	};
</script>

<div class="text-center">
	<div class=" flex flex-col items-center pt-10 px-10">
		<h1 class="font-InterTight text-3xl font-semibold text-orange-950 pb-3 animate-pulse">
			The list of Speakers who have given consent to be part of ICRAFMN-2024
		</h1>
	</div>
	<div class="flex flex-row justify-evenly text-center flex-wrap mt-10">
		{#each conferenceAddresses.categories as category}
			<div class="m-10 sm:w-1/3">
				<h1 class="font-InterTight text-2xl font-bold text-orange-950 pb-3 ">
					{category.category}
				</h1>
				{#each category.speakers as speaker}
					<div class="flex flex-col items-center pt-5 px-10">
						<h1 class="font-InterTight text-2xl font-bold text-orange-800 pb-1 ">
							{speaker.name}
						</h1>
						<h1 class="font-InterTight text-xl font-light text-black pb-3 ">
							{speaker.university}
						</h1>
					</div>
				{/each}
			</div>
		{/each}
	</div>
	<div class=" flex flex-col items-center pt-10 px-10">
		<h1 class="font-InterTight text-3xl font-semibold text-orange-950 pb-3 animate-pulse">
			The list will be updated as and when the speakers give their consent to be a part of ICRAFMN-2024. 
		</h1>
	</div>
</div>
