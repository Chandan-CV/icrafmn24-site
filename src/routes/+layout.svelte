<script>
	import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import Navbar from "../components/Navbar.svelte";
  </script>
  
  <body class="from-[#ffffff] to-[#9ec0ff] bg-gradient-to-b justify-between flex flex-col min-h-screen">
    <div>
      <Header/>
      <Navbar/>
    <slot />
    </div>
    <div>
      <Footer/>
    </div>
  </body>