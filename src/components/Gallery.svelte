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
    const newImages =[
        "https://firebasestorage.googleapis.com/v0/b/covid-19-tracker-9cad8.appspot.com/o/WhatsApp%20Image%202024-01-13%20at%2012.39.13.jpeg?alt=media&token=5faaf261-9411-4e47-aadd-a167d76d3b81",
        "https://firebasestorage.googleapis.com/v0/b/covid-19-tracker-9cad8.appspot.com/o/WhatsApp%20Image%202024-01-13%20at%2012.33.01.jpeg?alt=media&token=73bc5abf-d916-4085-804d-529e72ee7036",
        "https://firebasestorage.googleapis.com/v0/b/covid-19-tracker-9cad8.appspot.com/o/NewImage.jpeg?alt=media&token=42a3d355-ca46-4e33-a16e-17e8eafc9796",
        "https://firebasestorage.googleapis.com/v0/b/covid-19-tracker-9cad8.appspot.com/o/WhatsApp%20Image%202024-01-13%20at%2012.33.58.jpeg?alt=media&token=cd16dffa-7649-40c8-aa04-6842c555b8a4",
        "https://firebasestorage.googleapis.com/v0/b/covid-19-tracker-9cad8.appspot.com/o/WhatsApp%20Image%202024-01-13%20at%2012.36.20.jpeg?alt=media&token=03905d22-f6d3-45b8-9bb5-15733d243a61",
        "https://firebasestorage.googleapis.com/v0/b/covid-19-tracker-9cad8.appspot.com/o/WhatsApp%20Image%202024-01-13%20at%2012.31.30.jpeg?alt=media&token=cdb543c3-f7f7-4868-82cd-51ddc16a2f22"
]
    </script>

<Splide aria-label="ICRAFMN 2023 Images" options={{autoplay:true, interval:2000, type:"loop"}}>
	{#each newImages as image }
   <SplideSlide>
       <div class="flex w-full justify-center items-center ">
           <img src={image} alt="Icrafmn 2024" class=" sm:w-1/2 min-w-[50px]" loading="lazy" />
        </div>
    </SplideSlide>
    {/each}
</Splide>
