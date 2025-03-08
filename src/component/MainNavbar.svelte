<script>
  // @ts-nocheck
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

</script>

<Navbar class="bg-white text-black p-4 flex justify-center items-center">

  <div>
    <img src="/images/logo_usc_full_black.svg" alt="USC" class="w-16 h-auto"/>
  </div>

	<!-- <NavBrand href="/">
	  <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
	  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
	</NavBrand>
	<NavHamburger  /> -->

  <div class="flex justify-center items-center space-x-8">
    <a href="/" class="hover:ring-1 hover:ring-black rounded-full p-2 transition">Home</a>
    <a href="/#" class="hover:ring-1 hover:ring-black rounded-full p-2 transition">Event</a>
    <a href="/#" class="hover:ring-1 hover:ring-black rounded-full p-2 transition">Learning</a>
    <a href="/#" class="hover:ring-1 hover:ring-black rounded-full p-2 transition">Research</a>
    <a href="/#" class="hover:ring-1 hover:ring-black rounded-full p-2 transition">Investment Club</a>
    <a href="/#" class="hover:ring-1 hover:ring-black rounded-full p-2 transition">About</a>
  </div>

  <div>
    <span class="text-blue-800 font-bold">Halo</span>, Investor Cerdas!!
  </div>
</Navbar>