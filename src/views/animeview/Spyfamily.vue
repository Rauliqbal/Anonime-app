<template>
   <div class="container">
      <Navbar />
      <div class="grid grid-cols-7 gap-8 px-6 lg:px-8 my-8">
         <div class="col-span-full lg:col-span-5">
            <h1 class="text-xl md:text-3xl lg:text-4xl text-white capitalize font-semibold">Spy X Family - Episode 07</h1>
            <div class="rounded-xl overflow-hidden aspect-video mt-5">
               <iframe
                  class="w-full h-full"
                  src="https://www.youtube.com/embed/JP6vBnazpWI"
                  title="Captain tsubasa trailer"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
               ></iframe>
            </div>

            <div class="grid grid-cols-6 gap-4 md:gap-8 mt-8">
               <div class="col-span-3 lg:col-span-2">
                  <img class="w-full h-[260px] lg:h-[354px] rounded-xl overflow-hidden object-cover" src="@/assets/images/spy_card.webp" alt="" />
               </div>

               <div class="col-span-3 lg:col-span-3">
                  <div class="grid gap-4">
                     <div class="flex flex-col">
                        <h2 class="text-base lg:text-xl text-white font-semibold">Type :</h2>
                        <p class="text-xs lg:text-lg text-gray-400">TV</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-base lg:text-xl text-white font-semibold">Status :</h2>
                        <p class="text-xs lg:text-lg text-gray-400 capitalize">ongoing</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-base lg:text-xl text-white font-semibold">Studios :</h2>
                        <p class="text-xs lg:text-lg text-gray-400 capitalize">Wit Studio, CloverWorks</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-base lg:text-xl text-white font-semibold">Duration :</h2>
                        <p class="text-xs lg:text-lg text-gray-400 capitalize">24 min.</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-base lg:text-xl text-white font-semibold">Genres :</h2>
                        <p class="text-xs lg:text-lg text-gray-400 capitalize">Action, Comedy</p>
                     </div>
                  </div>
               </div>

               <div class="hidden md:block col-span-1">
                  <div class="py-1 px-4 text-lg bg-gray-900 border border-gray-600 text-white text-center rounded-xl">
                     <p class="text-center text-base tracking-wide -mb-1">score</p>
                     <span>9.06</span>
                  </div>
               </div>
            </div>

            <div class="flex flex-col mt-8">
               <h2 class="text-base lg:text-xl text-white font-semibold">Sypnopsis :</h2>
               <p class="text-sm lg:text-lg text-gray-400 capitalize mt-1 leading-relaxed">
                  Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master
                  of disguise "Twilight" fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war.
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
