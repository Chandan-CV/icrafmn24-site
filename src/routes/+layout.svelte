<script>
	import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import Navbar from "../components/Navbar.svelte";
  </script>
  
  <body class="from-[#9382ff] to-[#2974ff] bg-gradient-to-b min-h-screen justify-between flex flex-col">
    <div>
    <Header/>
    <Navbar/>
    </div>
    <slot />
    <div>
    <Footer/>
    </div>
  </body>
