<script lang="ts">
	// @ts-nocheck
	import { FacebookSolid, InstagramSolid, LinkedinSolid, MessageCaptionOutline, PhoneOutline, YoutubeSolid, TwitterSolid } from 'flowbite-svelte-icons';

	// Data for the footer links (organized into columns)
	const footerLinks = [
		{
			title: 'About',
			links: [
				{ name: 'Vision & Mission', href: '/vision-mission' }, // Example link
				{ name: 'Our Team', href: '/team' },
				{ name: 'History', href: '/history' },
			],
		},
		{
			title: 'Resources',
			links: [
				{ name: 'Event Calendar', href: '/events' },
				{ name: 'Investment Guides', href: '/guides' }, // Example link
				{ name: 'News & Updates', href: '/news' },
			],
		},
		{
			title: 'Contact',
			links: [
				{ name: 'Contact Form', href: '/contact' },
				{ name: 'FAQ', href: '/faq' },
			],
		},
	];

	let currentYear = new Date().getFullYear();
</script>

<footer class="bg-slate-800 text-white py-16 px-8 lg:px-16">
	<div class="container mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-5 gap-12">
			<!-- Column 1: Logo and Socials -->
			<div class="md:col-span-2">
				<img src="/images/logo_usc_full_white.svg" alt="USC Logo" class="w-48 h-auto mb-8" />
				<div class="flex space-x-4 mb-4">
					<a href="YOUR_FACEBOOK_LINK" target="_blank" rel="noopener noreferrer" class="hover:text-blue-300">
						<FacebookSolid class="w-6 h-6" />
					</a>
					<a href="YOUR_INSTAGRAM_LINK" target="_blank" rel="noopener noreferrer" class="hover:text-pink-300">
						<InstagramSolid class="w-6 h-6" />
					</a>
					<a href="YOUR_LINKEDIN_LINK" target="_blank" rel="noopener noreferrer" class="hover:text-blue-500">
						<LinkedinSolid class="w-6 h-6" />
					</a>
					<a href="YOUR_YOUTUBE_LINK" target="_blank" rel="noopener noreferrer" class="hover:text-red-400">
                        <YoutubeSolid class="w-6 h-6" />
                    </a>
                    <a href="YOUR_TWITTER_LINK" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400">
                        <TwitterSolid class="w-6 h-6" />
                    </a>
				</div>
				<div>
					<div class="flex items-center text-sm space-x-2 mb-2">
						<MessageCaptionOutline class="w-5 h-5" />
						<span>+62 123-456-789 Lorem Ipsum</span>
					</div>
					<div class="flex items-center text-sm space-x-2">
						<PhoneOutline class="w-5 h-5" />
						<span>loremipsum@gmail.com</span>
					</div>
				</div>
			</div>

			<!-- Columns 2-4: Link Groups -->
			{#each footerLinks as section}
				<div>
					<h3 class="text-lg font-semibold mb-4">{section.title}</h3>
					<ul>
						{#each section.links as link}
							<li>
								<a href={link.href} class="hover:underline hover:text-blue-300 text-sm">{link.name}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- Large "USC" Text -->
		<div class="mt-16">
            <p class="text-8xl font-extrabold tracking-wider text-center" style="font-family: 'Arial Black', sans-serif;">USC</p> <!-- Adjust font and styling -->
		</div>

		<!-- Copyright -->
		<div class="text-center mt-8 text-sm">
			Copyright © {currentYear} UGM Stock Club. All rights reserved.
		</div>
	</div>
</footer>