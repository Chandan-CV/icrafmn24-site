<script>
	import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import Navbar from "../components/Navbar.svelte";
  </script>
  
  <body class="from-[#ffffff] to-[#9ec0ff] bg-gradient-to-b ">
    <Header/>
    <Navbar/>
    <slot />
    <Footer/>
  </body>