<script>
	import { Button } from 'flowbite-svelte';
</script>

<div class="mx-[3rem] bg-red-100 rounded-4xl overflow-hidden relative 
			after:content-[''] after:absolute after:inset-0 
			after:transition after:duration-300  group">
	<img src="/images/inv.png" alt="inv club" class="z-0 w-full"/>
	<div class="absolute inset-0 flex flex-col items-center justify-center translate-y-[-30%]">
		<p class="font-bold text-white text-7xl text-center">Investment Club</p>
	</div>
	<div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-center">
		<p class="text-white text-lg font-medium">Learn everything you need to know about Stock</p>
		<div class="flex items-center gap-6">
			<a href="#" class="text-white text-sm font-semibold relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-white after:mt-1">Learn more</a>
			<Button class="bg-white text-black px-6 py-2 rounded-full font-semibold">Register now</Button>
		</div>
	</div>
</div>
