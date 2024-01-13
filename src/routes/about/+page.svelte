<div class="flex items-center flex-col px-8">
    <h1 class="font-InterTight text-3xl font-semibold text-[#ffffff]">About Us</h1>
    <div class="py-10 flex flex-col gap-10">
        {#each colleges as college}
        <div class="flex flex-col gap-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 text-white bg-blue-950 px-3 py-3 rounded-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>                                
            <h1 class="text-white font-InterTight font-semibold text-2xl">{college.name}</h1>
            <p class="text-white text-center font-InterTight text-lg">{college.description}</p>
        </div>
        {/each}
    </div>
</div>

<script>
    const colleges = [
        {
            name : "MIT Bengaluru",
            description : "Over the years, MAHE has transformed itself into a centre of excellence that offers knowledge to about 33000+ students from 67+ nations, ably supported by 2500 faculty and almost 10000 support and service staff. MAHE is accredited with NAAC A++ Grading in the 3rd cycle and is ranked 7th among private universities as per the latest NIRF ranking. Consisting of sister campuses in Jaipur, Mangalore, Bangalore, Jamshedpur and Sikkim along with off-campuses in Dubai, Malaysia, Nepal and Antigua, MAHE offers various courses that cater to a wide variety of students. There are 375+ academic programs across 31+ disciplines including medicine, engineering, dentistry, nursing, allied health sciences, architecture, management, communication, humanities and many more. The Garden City of India, Bengaluru, is now home to a new engineering institution – “MIT Bengaluru” – the latest constituent unit of Manipal Academy of Higher Education (MAHE). MAHE is proud to open its doors in the bustling cosmopolitan IT hub of Bengaluru by establishing its new engineering campus: MIT Bengaluru. It is offering five B Tech programs starting from 2021, with approval from the All-India Council of Technical Education (AICTE), MHRD, Government of India. The five approved programs are Computer Science and Engineering, Information Technology, Electronics and Communication, Computer Science and Engineering – Artificial Intelligence, and Computer Science and Engineering – Cyber Security, MAHE is recognized as a deemed-to-be university since 1993 and has been accorded the status of Institute of Eminence (IoE) by MHRD, Government of India. Admission to MIT Bengaluru is based on a computer-based online entrance test, MET, conducted by the MAHE.",
        },
        {
            name : "NIT Uttarakhand",
            description : "Established in 2009 under the Act of Parliament by the Ministry of Education (Shiksha Mantralaya), NITUK is the Technical Education Hub in the Green and Clean lap of the Himalayas, precisely located in the Land of the Gods (known as Dev Bhoomi), the state of Uttarakhand. With a peaceful and serene atmosphere that environs the institute, the students are motivated to achieve academic and technical excellence in the streams of their choice. It is noteworthy that NITUK is located on the banks of Alaknanda River in Srinagar (Garhwal), about 100 KM ahead of Haridwar and Rishikesh, two of the holiest pilgrimages in Sanatan Dharma and also known as the gateways to the “Chhota Char Dham”. The impeccable geographical location boosts leaning and training as Haridwar, Rishikesh, and the mountains beyond have been the choice of Rishis and Munis since time immemorial and are the originators of rich old spiritual and intellectual establishment of glorious India [Capital of ancient Indian wisdom and university (known as Gurukuls)]. The Institute admits students to B. Tech. in Civil Engineering, Computer Science and Engineering, Electronics and Communication Engineering, Electrical and Electronics Engineering, and Mechanical Engineering through JEE Mains (formerly known as AIEEE) and to M. Tech. in all Engineering programmes through GATE, both the examinations conducted all over India by NTA. The Institute also offers Ph. D. in the streams of Engineering, Sciences, and Humanities. The peaceful, green and clean environment endows natural advantage to the institution and is greatly reflected in its excellent teaching- learning ambience, young and dedicated faculty, and significant contribution to research work and commitment to the community"
        }
    ]
</script>