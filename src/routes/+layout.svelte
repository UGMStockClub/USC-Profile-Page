<script lang="ts">
	import '../app.css';
	import MainNavbar from "../component/MainNavbar.svelte";
	import MainFooter from '../component/MainFooter.svelte';
	import UpperSection from '../component/UpperSection.svelte';
	import CompanyVisit from '../component/CompanyVisit.svelte';
	let { children } = $props();
</script>

<MainNavbar/>
{@render children()}
<UpperSection/>
<CompanyVisit/>
<MainFooter/>