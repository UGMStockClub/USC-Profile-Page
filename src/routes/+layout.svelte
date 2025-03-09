<script lang="ts">
	import '../app.css';
	import MainNavbar from "../component/MainNavbar.svelte";
	import MainFooter from '../component/MainFooter.svelte';
	import ContentSection from '../component/UpperSection.svelte';
	let { children } = $props();
</script>

<MainNavbar/>
{@render children()}
<ContentSection/>
<MainFooter/>