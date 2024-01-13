<script>
	import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import Navbar from "../components/Navbar.svelte";
  </script>
  
  <body class="from-[#9382ff] to-[#2974ff] bg-gradient-to-b overflow-x-hidden h-screen">
    <Header/>
    <Navbar/>
    <slot />
    <Footer/>
  </body>
