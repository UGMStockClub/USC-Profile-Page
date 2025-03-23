<script>
  export let title = "title", description = [""];

/*
<span class="text-[#1d5d78]">UGM</span> 
      <span class="text-[#1D5C78]">Stock</span> 
      <span class="bg-gradient-to-b from-[#1b4d62] to-[#88b050] text-transparent bg-clip-text">Club</span>
 */

</script>

<div class="bg-slate-100 rounded-4xl p-[1.2rem] lg:p-[2rem] w-full lg:w-1/2 text-justify shadow-lg">
  <h2 class="text-center text-4xl font-bold bg-gradient-to-b from-[#1b4d62] to-[#88b050] text-transparent bg-clip-text">{title}</h2>

  <div class="text-sm lg:text-lg">
    {#if description.length === 1}
      <p>{description[0]}</p>
    {:else}
      <ul class="list-disc list-outside ml-[0.2rem]">
        {#each description as item}
          <li>{item}</li>
        {/each}
      </ul>
    {/if}
  </div>

</div>