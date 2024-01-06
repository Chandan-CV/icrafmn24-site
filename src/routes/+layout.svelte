<script>
	import "../app.css";
	import Header from "../components/Header.svelte";
	import Navbar from "../components/Navbar.svelte";
  </script>
  
  <body class="from-[#ffffff] to-[#5c8de9] bg-gradient-to-b ">
    <Header/>
    <Navbar/>
    <slot />
  </body>