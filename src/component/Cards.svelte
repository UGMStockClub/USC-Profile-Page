<script>
	import { Card, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	let vCard = false;
</script>

<div class="flex flex-row min-h-screen justify-center items-center">
  <div class="space-y-4 float-left transition-transform duration-300 hover:-translate-y-2">
    <Card img="/images/download.jpg" reverse={vCard}>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Button>
        Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
      </Button>
    </Card>
  </div>

  <div class="space-y-4 float-left ml-[2rem] transition-transform duration-300 hover:-translate-y-2">
    <Card img="/images/download.jpg" reverse={vCard}>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Button>
        Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
      </Button>
    </Card>
  </div>

  <div class="space-y-4 float-left ml-[2rem] transition-transform duration-300 hover:-translate-y-2">
    <Card img="/images/download.jpg" reverse={vCard}>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Button>
        Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
      </Button>
    </Card>
  </div>
</div>
