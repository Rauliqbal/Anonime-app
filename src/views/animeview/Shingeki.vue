<template>
   <div class="container">
      <Navbar />
      <div class="grid grid-cols-7 gap-8 px-6 lg:px-8 my-8">
         <div class="col-span-full lg:col-span-5">
            <h1 class="text-xl md:text-3xl lg:text-4xl text-white capitalize font-semibold">Shingeki No Kyojin s4 - Episode 28</h1>
            <div class="rounded-xl overflow-hidden aspect-video mt-5">
               <iframe
                  class="w-full h-full"
                  src="https://www.youtube.com/embed/M_OauHnAFc8"
                  title="Shingeki No Kyojin s4 trailer"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
               ></iframe>
            </div>

            <div class="grid grid-cols-6 gap-4 md:gap-8 mt-8">
               <div class="col-span-3 lg:col-span-2">
                  <img class="w-full h-[260px] md:h-[354px] lg:h-[410px] rounded-xl overflow-hidden object-cover" src="@/assets/images/aot_card.webp" alt="Shingeki no kyoujin poster" />
               </div>

               <div class="col-span-3 lg:col-span-3">
                  <div class="grid gap-4">
                     <div class="flex flex-col">
                        <h2 class="text-base lg:text-xl text-white font-semibold">Type :</h2>
                        <p class="text-xs lg:text-lg text-gray-400">TV</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-base lg:text-xl text-white font-semibold">Status :</h2>
                        <p class="text-xs lg:text-lg text-gray-400 capitalize">Finished airing</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-base lg:text-xl text-white font-semibold">Studios :</h2>
                        <p class="text-xs lg:text-lg text-gray-400 capitalize">MAPPA</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-base lg:text-xl text-white font-semibold">Duration :</h2>
                        <p class="text-xs lg:text-lg text-gray-400 capitalize">23 min.</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-base lg:text-xl text-white font-semibold">Genres :</h2>
                        <p class="text-xs lg:text-lg text-gray-400 capitalize">Action, Drama</p>
                     </div>
                  </div>
               </div>

               <div class="hidden md:block col-span-1">
                  <div class="py-1 px-4 text-lg bg-gray-900 border border-gray-600 text-white text-center rounded-xl">
                     <p class="text-center text-base tracking-wide -mb-1">score</p>
                     <span>8.86</span>
                  </div>
               </div>
            </div>

            <div class="flex flex-col mt-8">
               <h2 class="text-base lg:text-xl text-white font-semibold">Sypnopsis :</h2>
               <p class="text-sm lg:text-lg text-gray-400 capitalize mt-1 leading-relaxed">
                  Turning against his former allies and enemies alike, Eren Yeager sets a disastrous plan in motion. Under the guidance of the Beast Titan, Zeke, Eren takes extreme measures to end the ancient conflict between Marley and
                  Eldia—but his true intentions remain a mystery. Delving deep into his family's past, Eren fights to control his own destiny.
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
