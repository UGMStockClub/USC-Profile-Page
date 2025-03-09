<script>
  import { Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';

  export let title, description, img_dir;
// console.log(title)
</script>

<div class="mx-[3rem] bg-red-100 rounded-4xl overflow-hidden relative 
              after:content-[''] after:absolute after:inset-0 after:bg-black/50 
    after:transition after:duration-300 hover:after:bg-black/20 group">
  <img src={img_dir} alt={title} class="z-0"/>
  <div class="absolute inset-0  flex items-center gap-[2rem] group-hover:opacity-25">
    <p class="font-bold text-white text-right text-7xl  z-10 w-1/2">{title}</p>
    <p class=" text-white text-sm z-10 w-1/2 ">
      {description}
    </p>
  </div>

  <div class="absolute right-[2rem] bottom-[1.5rem] opacity-25 group-hover:opacity-100 duration-300
              pointer-events-auto z-20 cursor-pointer">
      <Button class="bg-[#88b050] hover:bg-[#1b4d62]">
        Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
      </Button>
  </div>
</div>
