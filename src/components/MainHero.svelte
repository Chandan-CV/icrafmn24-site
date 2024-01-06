<script>
    import FlowerShit from "../lib/images/FlowerShit.png"
    import { fly } from 'svelte/transition';
    let isSpinning = true; // Add a variable to control the spinning animation

    // Function to toggle the spinning animation
    function toggleSpinning() {
        isSpinning = !isSpinning;
    }
</script>
<div class="pl-20 pt-20">
    <div class="w-3/4">
        <p class="font-InterTight text-5xl md:text-6xl lg:text-6xl font-semibold text-[#09275E]">ICRAFMN-24</p>
        <p class="font-InterTight text-xl md:text-2xl lg:text-2xl font-light  text-[#5D5D5D]">International Conference on Recent Advances in Fluid Mechanics and Nanoelectronics</p>
        <p class="font-InterTight text-lg md:text-xl lg:text-xl font-semibold  text-[#042BF8]">Organised by Manipal Institute of Technology, Bangalore</p>
    </div>
    <div class=" text-2xl font-InterTight font-normal pt-5 text-[#09275E] pb-4">
        July 12 - 14
    </div>
    <div class="flex flex-col ">
        <p class=" text-2xl md:text-3xl lg:text-3xl font-semibold text-[#09275E] pb-3 flex flex-col">About</p>
        <div class="flex">
            <p class="text-lg md:text-xl lg:text-xl text-[#505050] w-8/12">
                A three-day International Conference on Recent Advances in Fluid Mechanics and Nanoelectronics
                (ICRAFMN – 2023)is being hosted by Manipal Institute of Technology (MIT) Bengaluru in
                association with NIT Uttarakhand from 12th-14th July 2023 at MIT Bengaluru. The conference
                aims to provide an excellent venue for multidisciplinary academicians, engineers, scientists,
                researchers, and industry professionals to present their research findings in the area of
                fluid mechanics and nanoelectronics.
            </p>
            <img
            src={FlowerShit}
            alt=""
            class="object-cover w-1/3 h-96 object-left"
            transition:fly="{{ y: isSpinning ? 0 : 100, duration: 2000 }}"
            >
        </div>
	</div>
</div>