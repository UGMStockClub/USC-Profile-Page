<script>
  import WhoAreWe from "$lib/components/WhoAreWe.svelte";  
  import TextCard from "$lib/components/TextCard.svelte";

  console.log("about page loaded!");
</script>

<div class="mx-[1rem] lg:mx-[3rem] flex flex-col gap-y-[4rem]">
  <WhoAreWe/>

  <div class="flex flex-col md:flex-row gap-[1.5rem]">
    <TextCard title="Our Vision" description={["UGM Stock Club sebagai wadah yang dinamis-progresif untuk belajar pasar modal bagi mahasiswa/i agar dapat memberikan impact bagi masyarakat luas dalam memahami dinamika pasar modal."]}/>
    <TextCard title="Our Mission" 
    description={[
       "Meningkatkan literasi pasar modal",
       "Membangun branding positif UGM Stock Club dengan kegiatan bermanfaat baik dalam lingkup internal dan eksternal",
       "Memberikan fasilitas pembelajaran pasar modal bagi mahasiswa UGM",
       "Mendorong partisipasi anggota dan mahasiswa UGM dalam kompetisi dan kegiatan pasar modal",
       "Membangun hubungan baik dalam lingkup internal dan eksternal"
       ]}
      />
  </div>
  
</div>