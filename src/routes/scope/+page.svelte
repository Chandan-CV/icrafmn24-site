<script>
    const scope = [
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 text-white bg-blue-900 px-3 py-3 rounded-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
            </svg>`,
            field: "Mathematics",
            topics: ["Mathematical Modelling", "Boundary Layer Flow", "Fractional Calculus", "Analytical/Semi-analytical methods", "Numerical Methods"]
        },
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 text-white bg-blue-900 px-3 py-3 rounded-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>`,
            field: "Mechanical",
            topics: [
                "Computational Fluid Dynamics",
                "Experimental Fluid Dynamics",
                "Heat Transfer",
                "Biomaterials & Biomechanics",
                "Viscous flow",
                "Multiphase flows",
                "Microfluidics",
                "Nanofluids",
                "Oceanography",
                "Renewable Energy",
                "Energy Storage Systems"
            ]
        },
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 text-white bg-blue-900 px-3 py-3 rounded-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>`,
            field: "Aeronautical",
            topics: [
                "Aerodynamics",
                "Propulsion System",
                "Compressible Flow",
                "Atmospheric Sciences",
                "Geophysical Environmental Fluid Dynamics"
            ]
        },
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 text-white bg-blue-900 px-3 py-3 rounded-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>`,
            field: "Electronics",
            topics: [
                "Nanomaterials/Nanostructures",
                "Nanodevices",
                "Nanoelectronics",
                "Nanosensors",
                "Nanoenergy",
                "Nanophotonics",
                "Nanomagnetism and Spintronics",
                "Bionanoelectronics",
                "Quantum Nanotechnology",
                "Nano wearable devices",
                "Lab on a chip device development",
                "Biomimetic Nanoelectronics",
                "Nano acousto-electronics",
                "MEMS/NEMS",
                "Artificial Intelligence/Machine Learning"
            ]
        }
    ];
</script>

<div class="flex items-center flex-col px-8">
    <h1 class="font-InterTight text-3xl font-semibold text-[#09275E]">Scope of Conference</h1>
    <div class="flex flex-col lg:flex-row lg:items-start gap-5 py-10 items-center">
        {#each scope as subject}
            <div class="flex flex-col items-center">
                {@html subject.svg}
                <h1 class="text-black font-InterTight pt-4 text-2xl text-center font-semibold">{subject.field}</h1>
                {#each subject.topics as topic}
                    <p class="text-lg text-center">{topic}</p>
                {/each}
            </div>
        {/each}
    </div>
</div>
