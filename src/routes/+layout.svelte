<script lang="ts">

	// only use this file to give permanent components to every page, including pages under this directory

	import '../app.css';
	import MainNavbar from "../component/MainNavbar.svelte";
	import MainFooter from '../component/MainFooter.svelte';

	// let { children } = $props();
	// {@render children()}
</script>

<div class="flex flex-col gap-y-[8rem] min-h-screen">
	<MainNavbar/>
	<slot />
	<main class="flex-1"></main>
	<MainFooter/>
</div>
