<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import I6 from '../lib/images/WhatsApp Image 2024-01-13 at 12.31.30.jpeg';
    import I2 from '../lib/images/WhatsApp Image 2024-01-13 at 12.33.01.jpeg';
    import I3 from '../lib/images/NewImage.jpeg';
    import I4 from '../lib/images/WhatsApp Image 2024-01-13 at 12.33.58.jpeg';
    import I5 from '../lib/images/WhatsApp Image 2024-01-13 at 12.36.20.jpeg';
    import I1 from '../lib/images/WhatsApp Image 2024-01-13 at 12.39.13.jpeg';
    import '@splidejs/svelte-splide/css/skyblue';
    
    const Images = [I1,I2,I3,I4,I5,I6];
    
    </script>

<Splide aria-label="ICRAFMN 2023 Images" options={{autoplay:true, interval:2000, type:"loop"}}>
	{#each Images as image }
   <SplideSlide>
       <div class="flex w-full justify-center items-center ">
           <img src={image} alt="Icrafmn 2024" class=" sm:w-1/2 min-w-[50px] "/>
        </div>
    </SplideSlide>
    {/each}
</Splide>
