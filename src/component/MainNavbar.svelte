<script>
  // @ts-nocheck
  
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

</script>

  

<Navbar class="bg-blue-950">
	<NavBrand href="/">
	  <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
	  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
	</NavBrand>
	<NavHamburger  />
	<NavUl >
	  <NavLi href="/">Home</NavLi>
	  <NavLi href="#">Event</NavLi>
	  <NavLi href="#">Learning</NavLi>
	  <NavLi href="#">Research</NavLi>
	  <NavLi href="#">Investment Club</NavLi>
		<NavLi href="#">About</NavLi>
	</NavUl>
  </Navbar>