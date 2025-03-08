<script lang="ts">
	import '../app.css';
	import MainNavbar from "../component/MainNavbar.svelte";
	import MainFooter from '../component/MainFooter.svelte';
	let { children } = $props();
</script>

<MainNavbar/>
{@render children()}
<MainFooter/>