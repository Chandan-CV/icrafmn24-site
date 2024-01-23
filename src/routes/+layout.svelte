<script>
	import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import Navbar from "../components/Navbar.svelte";
  </script>
  
<<<<<<< HEAD
  <body class="from-[#f2f284] to-[#ff6d4d] bg-gradient-to-b overflow-x-hidden h-screen">
=======
  <body class="from-[#ffd796] to-[#ffaa5f] bg-gradient-to-b overflow-x-hidden h-screen">
>>>>>>> 86d0e08cb3fc21f44f64b318305265f429b8d647
    <Header/>
    <Navbar/>
    <div class="min-h-screen">
      <slot />
    </div>
    <div class="bottom-0  w-full">
      <Footer/>
    </div>
  </body>
