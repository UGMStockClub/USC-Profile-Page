<script>
	import { Button } from 'flowbite-svelte';
	// after:content-[''] after:block after:w-full after:h-[2px] after:bg-white after:mt-1
</script>

<div class="mx-[3rem] bg-red-100 rounded-4xl overflow-hidden relative">

	<img src="/images/inv.webp" alt="inv club" class="z-0 w-full"/>

	<div class="absolute inset-0 flex items-center justify-center translate-y-[-30%]">
		<p class="font-bold text-white text-7xl text-center">Investment Club</p>
	</div>

	<div class="absolute bottom-[3rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[1rem] text-center">
		<p class="text-white text-lg font-medium">Learn everything you need to know about Stock</p>

		<div class="flex items-center gap-[1.5rem]">
			<a href="/#" class="text-white text-sm font-semibold relative 
			after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-white hover:text-slate-300 hover:after:bg-slate-300">Learn more</a>
			<Button class="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white">Register now</Button>
		</div>

	</div>
</div>
