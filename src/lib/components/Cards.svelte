<script>
	import { Card, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	let vCard = false;
</script>

<div class="flex flex-row justify-center items-center gap-x-[3.5rem]">
  {#each ["/images/dzikran.png", "/images/download.jpg", "/images/dapit.jpg"] as imgSrc}
    <div class="transition-transform duration-300 hover:-translate-y-2">
      <Card reverse={vCard} class=" w-full min-h-[400px] flex flex-col">
        <img src={imgSrc} alt="Card Image" class="w-full h-48 object-cover rounded-t-lg" />
        <div class="p-4 flex flex-col flex-grow">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight flex-grow">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <Button class="mt-auto bg-biru hover:bg-ijo">
            Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
          </Button>
        </div>
      </Card>
    </div>
  {/each}
</div>
