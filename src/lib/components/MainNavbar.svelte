<script>
  // @ts-nocheck
  import { Navbar} from 'flowbite-svelte';

</script>

<Navbar class="bg-white text-black p-4 flex justify-center items-center">

  <div>
    <img src="/images/logo_usc_full_black.svg" alt="USC" class="w-16 h-auto"/>
  </div>

  <div class="flex justify-center items-center space-x-8">
    <a href="/" class="hover:ring-1 hover:font-bold hover:[text-shadow:_0px_5px_3px_grey] hover:text-[#143D60] hover:ring-black rounded-full p-2 transition font-Montserrat font-semibold">Home</a>
    <a href="/#" class="hover:ring-1 hover:font-bold hover:[text-shadow:_0px_5px_3px_grey] hover:text-[#143D60] hover:ring-black rounded-full p-2 transition font-Montserrat font-semibold">Event</a>
    <a href="/#" class="hover:ring-1 hover:font-bold hover:[text-shadow:_0px_5px_3px_grey] hover:text-[#143D60] hover:ring-black rounded-full p-2 transition font-Montserrat font-semibold">Learning</a>
    <a href="/#" class="hover:ring-1 hover:font-bold hover:[text-shadow:_0px_5px_3px_grey] hover:text-[#143D60] hover:ring-black rounded-full p-2 transition font-Montserrat font-semibold">Research</a>
    <a href="/#" class="hover:ring-1 hover:font-bold hover:[text-shadow:_0px_5px_3px_grey] hover:text-[#143D60] hover:ring-black rounded-full p-2 transition font-Montserrat font-semibold">Investment Club</a>
    <a href="/about" class="hover:ring-1 hover:font-bold hover:[text-shadow:_0px_5px_3px_grey] hover:text-[#143D60] hover:ring-black rounded-full p-2 transition font-Montserrat font-semibold">About</a>
  </div>

  <div>
    <span class="text-blue-800 font-bold">Halo</span>, Investor Cerdas!!
  </div>
</Navbar>