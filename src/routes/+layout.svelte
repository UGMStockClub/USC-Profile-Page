<script lang="ts">
	import '../app.css';
	import MainNavbar from "../component/MainNavbar.svelte";
	import MainFooter from '../component/MainFooter.svelte';
	import UpperSection from '../component/UpperSection.svelte';
	import CompanyVisit from '../component/CompanyVisit.svelte';
    import Cards from '../component/Cards.svelte';
    import InvClub from '../component/InvClub.svelte';
	let { children } = $props();
</script>

{@render children()}
<MainNavbar/>
<UpperSection/>
<CompanyVisit/>
<Cards/>
<InvClub/>
<MainFooter/>
