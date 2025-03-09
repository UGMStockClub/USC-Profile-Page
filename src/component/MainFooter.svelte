<script>
	// @ts-nocheck
	import { FacebookSolid, InstagramSolid, WhatsappSolid, LinkedinSolid, MessageCaptionOutline, PhoneOutline } from 'flowbite-svelte-icons';
</script>

<div class="flex flex-col min-h-screen w-full">
	<main class="flex-grow">
	</main>

	<footer class="bg-[#222831] text-white px-12 py-8 w-full">
	  <div class="grid grid-cols-3">
		<div class="flex flex-col items-center justify-self-start">
		  <div>
			<img src="/images/logo_usc_full_white.svg" alt="USC" class="w-32 h-auto"/>
		  </div>
		  <!-- Ikon Sosial Media -->
		  <div class="flex justify-center space-x-4 mt-2">
			<a href="/#" target="_blank" class="hover:text-gray-300">
			  <FacebookSolid class="w-6 h-6" />
			</a>
			<a href="/#" target="_blank" class="hover:text-gray-300">
			  <InstagramSolid class="w-6 h-6" />
			</a>
			<a href="/#" target="_blank" class="hover:text-gray-300">
			  <WhatsappSolid class="w-6 h-6" />
			</a>
			<a href="/#" target="_blank" class="hover:text-gray-300">
			  <LinkedinSolid class="w-6 h-6" />
			</a>
		  </div>
		</div>
		
		<div class="text-xl justify-self-end w-52">
		  <p class="text-center font-bold">Contact Info</p>
		  <div>
			<div class="flex items-center text-xs text-left space-x-2">
			  <MessageCaptionOutline class="w-6 h-6" />
			  <p>+62 123-456-789 Lorem Ipsum</p>
			</div>
			<div class="flex items-center text-xs text-left space-x-2">
			  <PhoneOutline class="w-6 h-6" />
			  <p>loremipsum@gmail.com</p>
			</div>
		  </div>
		</div>
		
		<div class="text-xl justify-self-end w-32">
		  <p class="text-center font-bold">Address</p>
		  <p class="text-xs text-left mt-4">Lorem ipsum dolor sit amet consectetur. Amet augue amet massa varius purus faucibus. Sagittis netus egestas eu eget justo euismod sit</p>
		</div>
	  </div>
      
      <!-- Separate div for copyright with centered text -->
      <div class="text-center mt-4">
        <p  class=" text-xs">Copyright {new Date().getFullYear()} &copy; UGM Stock Club</p>
      </div>
	</footer>
</div>

	