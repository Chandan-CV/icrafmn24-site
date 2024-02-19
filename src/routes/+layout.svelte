<script>
	import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import Navbar from "../components/Navbar.svelte";
  import MUJBG from "../lib/images/MUJBG.jpeg";
  </script>
  
  <body class="bg-orange-300 bg-blend-overlay overflow-x-hidden h-screen  bg-hero-pattern bg-cover bg-center">
    <Header/>
    <Navbar/>
    <div class="min-h-screen">
      <slot />
    </div>
    <div class="bottom-0xx  w-full">
      <Footer/>
    </div>
  </body>
