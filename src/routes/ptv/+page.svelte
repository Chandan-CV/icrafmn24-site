<script>
    const places = [
    {
        name : "Amber Fort",
        description : "Amer Fort or Amber Fort is a fort located in Amer, Rajasthan, India. Amer is a town with an area of 4 square kilometres (1.5 sq mi) located 11 kilometres (6.8 mi) from Jaipur, the capital of Rajasthan. Located high on a hill, it is the principal tourist attraction in Jaipur.",
        image : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d3/a8/57/images-30-largejpg.jpg?w=1200&h=1200&s=1",
        link : "https://www.tourism.rajasthan.gov.in/amber-palace.html"
    },
    {
        name : "Jantar Mantar",
        description : "Jantar Mantar is a testament of the architectural brilliance and astronomical innovations of the Rajput era. Built by the Rajput king Sawai Jai Singh II - the founder of Jaipur city, the monument was completed in 1734. Maharaja Jai Singh II was a great scholar and had keen interest in astronomy.",
        image : "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/rsz_cover_jantar_mantar_jaipur.jpg",
        link : "https://www.delhitourism.gov.in/delhitourism/tourist_place/jantar_mantar.jsp"
    },
    {
        name : "Hawa Mahal",
        description : "The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.",
        image : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0d/e3/4b/img-20180921-184349-largejpg.jpg?w=1000&h=-1&s=1",
        link : "https://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/tourist-destinations/jal-mahal.html"
    },
    {
        name : "Jal Mahal",
        description : "Jal Mahal (meaning 'Water Palace') is a palace in the middle of the Man Sagar Lake in Jaipur city, the capital of the state of Rajasthan, India. The palace was originally constructed around 1699; the building and the lake around it were later renovated and enlarged in the early 18th century by Maharaja Jai Singh II of Amber.",
        image : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/c4/72/f6/jal-mahal-jaipur-tour.jpg?w=1200&h=-1&s=1",
        link : "https://www.hawa-mahal.com/"
    },
    {
        name : "Nahargarh Fort",
        description : "Nahargarh Fort stands on the edge of the Aravalli Hills, overlooking the city of Jaipur in the Indian state of Rajasthan. Along with Amer Fort and Jaigarh Fort, Nahargarh once formed a strong defence ring for the city. The fort was originally named Sudershangarh, but it became known as Nahargarh, which means 'abode of tigers'. ",
        image : "https://img.veenaworld.com/wp-content/uploads/2021/09/Rajasthan-scaled.jpg",
        link : "https://www.tourism.rajasthan.gov.in/nahargarh-fort.html"
    },
    ]
</script>

<div class="flex items-center flex-col px-8 gap-5 py-10">
    <h1 class="font-InterTight text-3xl font-semibold text-orange-950">Guide to Jaipur</h1>
    <div class="bg-white w-full px-8 py-8 rounded-xl flex items-center flex-col">
        <h1 class="text-xl font-semibold">How to Reach MUJ</h1>
        <iframe title="" class="w-full rounded-xl pt-5" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=%20Manipal%20University%20Jaipur+(Manipal%20University%20Jaipur)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
    <div class="bg-white w-full px-8 py-8 rounded-xl shadow-lg flex flex-col gap-y-3 items-start">
        <div class="flex"> 
        <h1 class="text-xl font-semibold">Jaipur Airport</h1>
        </div>
        <p>
            Jaipur International Airport (JAI) is the international airport serving Jaipur, the capital of Rajasthan. It is located in the southern suburb of Sanganer, which is located 25 km (15.5 mi) from Manipal University Jaipur.
        </p>
        <h1 class="text-xl font-semibold">Jaipur Train Station</h1>
        <p>
            Jaipur Junction (Code: JP) is a railway station in Jaipur, the largest city of the Indian state of Rajasthan. It serves the Capital City of Rajasthan. This station serves as the headquarters of the Jaipur Railway Division and the North Western Railway zone of the Indian Railways.
        </p>
    </div>
    <div class="bg-white w-full px-8 py-8 rounded-xl shadow-lg flex flex-col gap-y-3 items-start">
        <h1 class="text-xl font-semibold">Places to Visit</h1>
        <div class="flex flex-col gap-5 py-10 items-center">
        {#each places as place}
        <div class="ptv-img w-full rounded-xl h-96 relative overflow-hidden flex items-center justify-center text-white text-4xl lg:text-6xl font-bold font-InterTight" style="background-image: url('{place.image}'); background-position: center; background-size: cover;">
            <div class="dark-overlay"></div>
            <div class="absolute w-full h-full flex items-center justify-center">
                {place.name}
            </div>
        </div>
        <p class="text-lg  text-center">{place.description}</p>
        <button class="bg-orange-950 w-1/2 mb-10 text-white font-semibold p-3 rounded-lg hover:bg-orange-200 hover:text-orange-950 transition-colors">
            <a href={place.link} target="_blank">Learn More</a>
        </button>
        {/each}
    </div>
    </div>

</div>

<style>
    .ptv-img {
        position: relative;
    }

    .ptv-img .dark-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
        pointer-events: none; /* Allows clicking through the overlay to the content */
    }
</style>
