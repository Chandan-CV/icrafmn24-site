<div class="flex items-center flex-col px-8 gap-3 py-10">
    <h1 class="font-InterTight text-3xl pb-10 font-semibold text-[#09275E]">International Advisory Committee</h1>
    {#each committee as member}
        <div class="flex flex-col text-center bg-blue-200 px-3 py-3 w-3/4">
            <h1 class="text-xl font-InterTight font-semibold">{member.name}</h1>
            <h2 class="text-lg font-InterTight">{member.university}</h2>
        </div>
    {/each}
</div>

<script>
    let committee = [
      { name: "Prof K. Vajravelu", university: "University of Central Florida, USA" },
      { name: "Dr. Jane Doe", university: "City University" },
      { name: "Dr. John Smith", university: "Tech Institute" },
      { name: "Prof. Emily Johnson", university: "Global University" },
      { name: "Dr. Michael Brown", university: "State College" },
      { name: "Prof. Samantha Miller", university: "Innovative University" },
      { name: "Dr. Robert Davis", university: "Science University" },
      { name: "Prof. Ashley Wilson", university: "Digital Institute" },
      { name: "Dr. Daniel White", university: "Metropolitan University" },
      { name: "Prof. Olivia Robinson", university: "Tech College" },
      { name: "Dr. Matthew Turner", university: "Future Tech University" }
    ];
  </script>