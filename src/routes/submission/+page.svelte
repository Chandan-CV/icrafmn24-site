<script>
	import conferenceTopics from './scopedata';
</script>

<div class="flex items-center flex-col px-8">
	<h1 class="font-InterTight text-3xl font-semibold text-orange-950">Scope of Conference</h1>
	<div class="flex flex-row flex-wrap mb-10">
		{#each conferenceTopics.categories as topic}
			<div class="p-5 flex flex-col bg-white m-5 rounded-xl bg-opacity-70 shadow-2xl">
				<ul class="text-2xl font-normal text-center mb-5">{topic.name}</ul>
				{#each topic.subcategories as subtopic}
					<li>{subtopic.name}</li>
				{/each}
			</div>
		{/each}
	</div>
	<h1 class="font-InterTight text-3xl font-semibold text-orange-950">
		Paper and Abstract Submission
	</h1>
	<div class="flex flex-col py-10 items-center gap-5 text-center">
		<p class="text-lg text-justify">
			Participants wishing to present a paper at the conference should electronically submit a
			concise abstract consisting not more than 500 words. All the abstracts/ full length papers
			must be written in English language. Once the abstract is accepted, the participant will be
			asked to complete their Full-Length Manuscript Submission if they intend to publish it in the
			indexed publications, which are subject to peer review. A message will be issued to the
			participant based on the reviewer's suggestion.
		</p>
		<a
			href="https://drive.google.com/file/d/1Ta_A6qMOcrpc-h_JMfbcM1_CfQQE4KQ6/view?usp=sharing"
			target="_blank"
			class="underline text-xl font-InterTight font-bold">Click Here for Abstract Format</a
		>
		<a
			href="https://forms.gle/TB2Ky28GaFSoDhVeA"
			target="_blank"
			class="underline text-xl font-InterTight font-bold">Click Here for Abstract Submission</a
		>
		<h1 class="font-InterTight text-3xl font-semibold text-orange-950">Paper Format</h1>
		<p class="text-lg text-justify">
			The manuscript should be submitted in MS Word in 12-point Times New Roman font and one and a
			half line spacing with a single column only. The paper should contain title, author(s) name,
			affiliation, address, abstract (limited to 300 words), Introduction, Formulation, Methodology
			(Theory or Experiment), Results, Conclusions, and References. Regarding citation, author [xx]
			format should be used for citations and references: P. T. Brady, M. Hermann, and J. M. Lopez,
			"Confined Thermo-capillary Motion of a Three-Dimensional Deformable Drop, Physics of Fluids,
			23, 1 12, (2018). Tables and figures must be imported into the text while preparing the
			manuscript. In the case of multiple authors, all the authors will be given a participation
			certificate only if they individually register and attend the Congress. Otherwise, only the
			presenting author will be given the certificate.
		</p>
		<a
			href="https://forms.gle/wtHM1TxFtB3WVX5S9"
			target="_blank"
			class="underline text-xl font-InterTight font-bold">Click Here for Full Paper Submission</a
		>
		<p class="text-lg text-center font-bold text-red-600 bg-red-200 p-3 rounded-xl">
			Please note that, in case of multiple authors in a paper, all the authors will be given a
			certificate only if they individually register and attend the conference. Otherwise, only the
			presenting author will be given the certificate.
		</p>
	</div>
</div>
