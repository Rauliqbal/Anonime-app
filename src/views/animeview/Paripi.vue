<template>
   <div class="container">
      <Navbar />
      <div class="grid grid-cols-7 gap-8 px-6 lg:px-8 my-8">
         <div class="col-span-full lg:col-span-5">
            <h1 class="text-xl md:text-3xl lg:text-4xl text-white capitalize font-semibold">Paripi Koumei - Episode 12</h1>
            <div class="rounded-xl overflow-hidden aspect-video mt-5">
               <iframe
                  class="w-full h-full"
                  src="https://www.youtube.com/embed/FN4pZixlYPc"
                  title="Paripi trailer"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
               ></iframe>
            </div>

            <div class="grid grid-cols-6 gap-4 md:gap-8 mt-8">
               <div class="col-span-3 lg:col-span-2">
                  <img class="w-full h-[260px] md:h-[354px] lg:h-[410px] rounded-xl overflow-hidden object-cover" src="@/assets/images/paripi_card.webp" alt="Paripi poster" />
               </div>

               <div class="col-span-3 lg:col-span-3">
                  <div class="grid gap-4">
                     <div class="flex flex-col">
                        <h2 class="text-base lg:text-xl text-white font-semibold">Type :</h2>
                        <p class="text-xs lg:text-lg text-gray-400">TV</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-base lg:text-xl text-white font-semibold">Status :</h2>
                        <p class="text-xs lg:text-lg text-gray-400 capitalize">Ongoing</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-base lg:text-xl text-white font-semibold">Studios :</h2>
                        <p class="text-xs lg:text-lg text-gray-400 capitalize">P.A. Works</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-base lg:text-xl text-white font-semibold">Duration :</h2>
                        <p class="text-xs lg:text-lg text-gray-400 capitalize">23 min.</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-base lg:text-xl text-white font-semibold">Genres :</h2>
                        <p class="text-xs lg:text-lg text-gray-400 capitalize">Music</p>
                     </div>
                  </div>
               </div>

               <div class="hidden md:block col-span-1">
                  <div class="py-1 px-4 text-lg bg-gray-900 border border-gray-600 text-white text-center rounded-xl">
                     <p class="text-center text-base tracking-wide -mb-1">score</p>
                     <span>8.38</span>
                  </div>
               </div>
            </div>

            <div class="flex flex-col mt-8">
               <h2 class="text-base lg:text-xl text-white font-semibold">Sypnopsis :</h2>
               <p class="text-sm lg:text-lg text-gray-400 capitalize mt-1 leading-relaxed">
                  Zhuge Kongming earned a reputation as one of the greatest tacticians of the Three Kingdoms period of third-century China. Having led his army through countless grueling victories, Kongming falls gravely ill during the Battle of Wuzhang Plains. The weariness and regret stemming from the seemingly never-ending war catch up to him, and as he draws his final breath, Kongming wishes that if he were to reincarnate, he would be reborn in a more peaceful era.
               </p>
            </div>
         </div>

         <div class="col-span-full lg:col-span-2">
            <h1 class="text-xl md:text-3xl lg:text-4xl text-white capitalize font-semibold">Popular Anime</h1>
            <Popularmovie />
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Popularmovie from "@/components/Popularmovie.vue";

export default { components: { Navbar, Popularmovie } };
</script>

<style></style>
