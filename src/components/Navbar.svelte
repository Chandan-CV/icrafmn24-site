<script>
	var showMenu = false;
</script>

<header class=" body-font">
	<div
		class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center"
	>
		<nav
			class=" md:ml-auto md:mr-auto hidden lg:flex flex-wrap items-center justify-center font-InterTight text-lg"
		>
			<a class="mr-8 cursor-pointer hover:text-gray-900 hover:font-semibold" href="/">Home</a>
			<a class="mr-8 cursor-pointer hover:text-gray-900 hover:font-semibold" href="about">About</a>
			<a class="mr-8 cursor-pointer hover:text-gray-900 hover:font-semibold" href="speakers"
				>Speakers</a
			>
			<a class="mr-8 cursor-pointer hover:text-gray-900 hover:font-semibold" href="committees"
				>Committees</a
			>
			<a class="mr-8 cursor-pointer hover:text-gray-900 hover:font-semibold" href="submission"
				>Submission</a
			>
			<a class="mr-8 cursor-pointer hover:text-gray-900 hover:font-semibold" href="publications"
				>Publications</a
			>
			<a class="mr-8 cursor-pointer hover:text-gray-900 hover:font-semibold" href="registration"
				>Registration</a
			>
			<a class="mr-8 cursor-pointer hover:text-gray-900 hover:font-semibold" href="awards">Awards</a
			>
			<a class="mr-8 cursor-pointer hover:text-gray-900 hover:font-semibold" href="sponsors"
				>Sponsors</a
			>
			<a class="mr-8 cursor-pointer hover:text-gray-900 hover:font-semibold" href="contact"
				>Contact Us</a
			>
			<a class="mr-8 cursor-pointer hover:text-gray-900 hover:font-semibold" href="ptv"
				>Places to visit</a
			>
		</nav>
		<div
			class="lg:hidden flex gap-3 xl:hidden bg-blue-300/50 rounded-xl w-full transition-all ease-in-out text-blue-950 font-bold p-3 items-center justify-center"
		>
			{#if !showMenu}
				<button
					on:click={() => {
						showMenu = !showMenu;
					}}
					class="flex gap-3 items-center"
				>
					<h1 class="text-2xl">Menu</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			{:else}
				<div class="flex flex-col items-center justify-center gap-2 hover:text-blue-600">
					<button
						on:click={() => {
							showMenu = !showMenu;
						}}
						class="hover:text-red-600"
					>
						<h1>Close</h1>
					</button>
					<a
						class="hamburger w-full text-center rounded-xl p-1 font-semibold font-InterTight text-blue-900 px-5"
						on:click={() => {
							showMenu = false;
						}}
						href="/">Home</a
					>
					<a
						class="hamburger w-full text-center rounded-xl p-1 font-semibold font-InterTight text-blue-900 px-5"
						on:click={() => {
							showMenu = false;
						}}
						href="about">About</a
					>
					<a
						class="hamburger w-full text-center rounded-xl p-1 font-semibold font-InterTight text-blue-900 px-5"
						on:click={() => {
							showMenu = false;
						}}
						href="speakers">Speakers</a
					>
					<a
						class="hamburger w-full text-center rounded-xl p-1 font-semibold font-InterTight text-blue-900 px-5"
						on:click={() => {
							showMenu = false;
						}}
						href="committees">Committees</a
					>
					<a
						class="hamburger w-full text-center rounded-xl p-1 font-semibold font-InterTight text-blue-900 px-5"
						on:click={() => {
							showMenu = false;
						}}
						href="submission">Submission</a
					>
					<a
					class="hamburger w-full text-center rounded-xl p-1 font-semibold font-InterTight text-blue-900 px-5"
					on:click={() => {
						showMenu = false;
					}}
					href="publications">Publications</a
				>
					<a
						class="hamburger w-full text-center rounded-xl p-1 font-semibold font-InterTight text-blue-900 px-5"
						on:click={() => {
							showMenu = false;
						}}
						href="registration">Registration</a
					>
					<a
						class="hamburger w-full text-center rounded-xl p-1 font-semibold font-InterTight text-blue-900 px-5"
						on:click={() => {
							showMenu = false;
						}}
						href="awards">Awards</a
					>
					<a
						class="hamburger w-full text-center rounded-xl p-1 font-semibold font-InterTight text-blue-900 px-5"
						on:click={() => {
							showMenu = false;
						}}
						href="sponsors">Sponsors</a
					>
					<a
						class="hamburger w-full text-center rounded-xl p-1 font-semibold font-InterTight text-blue-900 px-5"
						on:click={() => {
							showMenu = false;
						}}
						href="contact">Contact Us</a
					>
					<a
						class="hamburger w-full text-center rounded-xl p-1 font-semibold font-InterTight text-blue-900 px-5"
						on:click={() => {
							showMenu = false;
						}}
						href="ptv">Places to visit</a
					>
				</div>
			{/if}
		</div>
		<!-- <button
			class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
			>Button
			<svg
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				class="w-4 h-4 ml-1"
				viewBox="0 0 24 24"
			>
				<path d="M5 12h14M12 5l7 7-7 7"></path>
			</svg>
		</button> -->
	</div>
</header>

<style>
	.hamburger {
		font-size: 30px;
	}
	.hamburger:hover {
		color: rgb(92, 92, 255);
		background-color: aliceblue;
	}
</style>
