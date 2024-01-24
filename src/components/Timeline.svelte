<script>
    // Timeline items data
    let timelineItems = [
      { title: 'Abstract Submission', date: 'April 15, 2024' },
      { title: 'Registration fee deadline', date: 'April 30, 2024' },
      { title: 'Final Paper Submission', date: 'May 15, 2024' },
      { title: 'Conference Begins', date: 'July 10, 2024' },
      { title: 'Conference concludes', date: 'July 12, 2024' },
    ];
  
    /**
	 * @param {number} numItems
	 */
    function calculateWidth(numItems) {
      return `${100 / numItems}%`;
    }
  </script>
  
  <div class="w-full flex flex-col p-20">
    <p class="text-2xl md:text-3xl lg:text-3xl font-semibold text-orange-950 pb-3 flex flex-col mb-10 text-center">Timeline</p>
  
    <ol class="flex flex-col sm:flex-row w-full justify-center">
      {#each timelineItems as { title, date }, index (index)}
        <li
          class=" mb-6 sm:mb-0 sm:flex-1"

        >
          <div class="flex items-center">
            <div
              class="z-10 flex items-center justify-center w-6 h-6 bg-orange-900 rounded-full ring-0 ring-orange-900 sm:ring-8 shrink-0"
            >
              <svg
                class="w-3 h-3 text-orange-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </div>
            {#if index !== timelineItems.length - 1}
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            {/if}
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class=" font-semibold text-gray-900">{title}</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-700">{date}</time>
          </div>
        </li>
      {/each}
    </ol>
  </div>
  
  