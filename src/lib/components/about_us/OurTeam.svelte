<script>
  import OurTeamPhoto from "./OurTeamPhoto.svelte";

  const members = [
    {img_src: "/images/dapit.webp", name:"Gawr Gura", description: "ICPC 2025 World Final Absolute Winner, Competitive Programmer, & Gawr Gura Fans"}
    ,
    {img_src: "/images/download.webp", name:"Sapran", description: "Cutest V-tuber in the world with largest number of subscriber in Youtube"}
    ,
    {img_src: "/images/dzikran.webp", name:"Dzikran", description: "Cutest V-tuber in the world with largest number of subscriber in Youtube"}
    ,
    {img_src: "/images/gura.png", name:"Gawr Gura", description: "Cutest V-tuber in the world with largest number of subscriber in Youtube"}
    ,
    {img_src: "/images/gura.png", name:"Gawr Gura", description: "Cutest V-tuber in the world with largest number of subscriber in Youtube"}
    ,
    {img_src: "/images/gura.png", name:"Gawr Gura", description: "Cutest V-tuber in the world with largest number of subscriber in Youtube"}
    ,
    {img_src: "/images/gura.png", name:"Gawr Gura", description: "Cutest V-tuber in the world with largest number of subscriber in Youtube"}
  ]
  const MAX_MEMBER_SIZE = 50;
  let hoveredIndex = MAX_MEMBER_SIZE;
</script>

<div>
  <h2 class=" text-center font-semibold text-3xl">Our Member</h2>

  <div class="inline-grid grid-flow-col-dense">
    {#each members as person, index}
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div class="" 
        on:mouseenter={() => hoveredIndex = index}
        on:mouseleave={() => hoveredIndex = MAX_MEMBER_SIZE}
      >
        <OurTeamPhoto img_src={person.img_src} props={`size-20 ${hoveredIndex != MAX_MEMBER_SIZE && hoveredIndex !== index ? "opacity-30" : "opacity-100"}`} />
      </div>

      {#if hoveredIndex === index}
        <div class="bg-slate-300 p-[0.5rem] ">
          <h3 class="font-bold text-2xl text-[#143D60]">{person.name}</h3>
          <p class="text-sm">{person.description}</p>
        </div>
      {/if}
    {/each}
  </div>

</div>
