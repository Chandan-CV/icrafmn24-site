<script>
	import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import Navbar from "../components/Navbar.svelte";
  </script>
  
  <body class="from-[#ffd796] to-[#ffaa5f] bg-gradient-to-b overflow-x-hidden h-screen">
    <Header/>
    <Navbar/>
    <div class="min-h-screen">
      <slot />
    </div>
    <div class="bottom-0  w-full">
      <Footer/>
    </div>
  </body>
