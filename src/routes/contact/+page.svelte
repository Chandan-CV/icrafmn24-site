<div class="flex items-center flex-col px-8">
    <h1 class="font-InterTight text-3xl font-semibold text-[#09275E]">Contact</h1>
    <div class="grid grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-4 text-center items-center gap-5 py-10">
        {#each contacts as {name, department, college, title, email, phone}}
            <div class="bg-blue-200 px-5 py-5 rounded-xl items-center flex flex-col shadow-2xl">
                <h1 class="text-black font-InterTight text-xl lg:text-2xl font-bold">{name}</h1>
                <h1 class="text-stone-700 lg:text-lg font-InterTight">{department}</h1>
                <h1 class="text-stone-700 lg:text-lg font-InterTight">{college}</h1>
                <h1 class="text-stone-700 lg:text-xl font-InterTight font-semibold text-lg py-2">{title}</h1>
                <a href={`mailto:${email}`}><h1 class="text-blue-600 font-InterTight lg:text-lg">{email}</h1></a>
                <a href={`tel:${phone}`}><h1 class="text-stone-700 underline file:font-InterTight lg:text-lg">{phone}</h1></a>

            </div>
        {/each}
    </div>
</div>

<script>
    const contacts = [
        {
            name : "Dr. Rajshekhar Chaudhary",
            department : "Dept. of Mathematics",
            college : "MIT Bengaluru",
            title : "Convener, ICRAFMN-24",
            email : "icrafmn2023@manipal.edu",
            phone : "+918123158384"
        },
        {
            name : "Dr. Rajshekhar Chaudhary",
            department : "Dept. of Mathematics",
            college : "MIT Bengaluru",
            title : "Convener, ICRAFMN-24",
            email : "icrafmn2023@manipal.edu",
            phone : "+918123158384"
        },
        {
            name : "Dr. Rajshekhar Chaudhary",
            department : "Dept. of Mathematics",
            college : "MIT Bengaluru",
            title : "Convener, ICRAFMN-24",
            email : "icrafmn2023@manipal.edu",
            phone : "+918123158384"
        },
        {
            name : "Dr. Rajshekhar Chaudhary",
            department : "Dept. of Mathematics",
            college : "MIT Bengaluru",
            title : "Convener, ICRAFMN-24",
            email : "icrafmn2023@manipal.edu",
            phone : "+918123158384"
        },
        {
            name : "Dr. Rajshekhar Chaudhary",
            department : "Dept. of Mathematics",
            college : "MIT Bengaluru",
            title : "Convener, ICRAFMN-24",
            email : "icrafmn2023@manipal.edu",
            phone : "+918123158384"
        },
        {
            name : "Dr. Rajshekhar Chaudhary",
            department : "Dept. of Mathematics",
            college : "MIT Bengaluru",
            title : "Convener, ICRAFMN-24",
            email : "icrafmn2023@manipal.edu",
            phone : "+918123158384"
        },
        {
            name : "Dr. Rajshekhar Chaudhary",
            department : "Dept. of Mathematics",
            college : "MIT Bengaluru",
            title : "Convener, ICRAFMN-24",
            email : "icrafmn2023@manipal.edu",
            phone : "+918123158384"
        },

    ]
</script>