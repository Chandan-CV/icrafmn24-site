<div class="flex items-center flex-col px-8 text-justify">
    <h1 class="font-InterTight text-3xl font-semibold text-orange-950">Awards</h1>
    <div class="flex flex-col items-center  gap-5 py-10">
        {#each awards as award}
            <div class="flex flex-col gap-4 items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 text-white bg-orange-900 px-3 py-3 rounded-full">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                  </svg>                  
                <h1 class="text-black font-InterTight font-semibold text-2xl">{award.name}</h1>
                <p class="text-stone-800 font-InterTight text-lg">{award.description}</p>
            </div>
        {/each}
    </div>
</div>

<script>
    const awards = [
        {
            name : "Best Paper Award",
            description : "Papers selected as Best Session Papers will be nominated for Best Paper Award. The Organizing Committee will select the Best Paper for each theme based on the paper quality and feedback received from the session chairs on the quality of the presentation. Winners will receive a certificate and monetary award. Winners will be recognized during the valedictory function."
        },
        {
            name : "Young Researcher Award",
            description : "Four awards will be presented during the valedictory ceremony to researchers under the age of 35 who demonstrate excellent scientific work. The researcher should complete the work with maximum three authors. If an author wishes to be considered for the \"Young Researcher Award\", they should indicate at the top of the Abstract by writing \"PAPER FOR THE YOUNG RESEARCHER AWARD.\" The author of the winning paper must personally present the work during the conference's award session. The award session will be conducted only if a sufficient number of papers are submitted to support the award nomination. Apart from the medal, recipients will get complimentary registration to the subsequent conference."
        }

    ]
</script>