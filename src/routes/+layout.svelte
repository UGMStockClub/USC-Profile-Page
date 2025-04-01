<script lang="ts">
    // Global layout with responsive classes using Tailwind CSS
    import '../app.css';
    import { MainNavbar, MainFooter } from '$lib';
</script>

<div class="flex flex-col gap-y-8 md:gap-y-12 min-h-screen">
    <MainNavbar />
    <slot />
    <main class="flex-1 p-4 md:p-8"></main>
    <MainFooter />
</div>
