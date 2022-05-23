<template>
   <div class="container">
      <Navbar />
      <div class="grid grid-cols-6 gap-8 px-6 lg:px-8 my-8">
         <div class="col-span-full lg:col-span-4">
            <h1 class="text-2xl md:text-3xl lg:text-4xl text-white capitalize font-semibold">One Piece - Episode 1018</h1>
            <div class="rounded-xl overflow-hidden aspect-video mt-5">
               <iframe
                  class="w-full h-full"
                  src="https://www.youtube.com/embed/JVD_1uJ6vwo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
               ></iframe>
            </div>

            <div class="grid grid-cols-6 gap-8 mt-8">
               <div class="col-span-2">
                  <img class="w-full h-[354px] rounded-xl overflow-hidden object-cover" src="@/assets/images/op_card.jpg" alt="" />
               </div>

               <div class="col-span-3">
                  <div class="grid gap-4">
                     <div class="flex flex-col">
                        <h2 class="text-xl text-white font-semibold">Type :</h2>
                        <p class="text-lg text-gray-400">TV</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-xl text-white font-semibold">Status :</h2>
                        <p class="text-lg text-gray-400 capitalize">ongoing</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-xl text-white font-semibold">Studios :</h2>
                        <p class="text-lg text-gray-400 capitalize">toei animation</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-xl text-white font-semibold">Duration :</h2>
                        <p class="text-lg text-gray-400 capitalize">24 min.</p>
                     </div>
                     <div class="flex flex-col">
                        <h2 class="text-xl text-white font-semibold">Genres :</h2>
                        <p class="text-lg text-gray-400 capitalize">Action, Adventure, Fantasy</p>
                     </div>
                  </div>
               </div>

               <div class="col-span-1">
                  <div class="py-1 px-4 text-lg bg-gray-900 border border-gray-600 text-white text-center rounded-xl">
                     <p class="text-center text-base tracking-wide -mb-1">score</p>
                     <span class="">8.64</span>
                  </div>
               </div>
            </div>

            <div class="flex flex-col mt-8">
               <h2 class="text-xl text-white font-semibold">Sypnopsis :</h2>
               <p class="text-lg text-gray-400 capitalize mt-1">
                  Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last
                  words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an
                  unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.
               </p>
            </div>
         </div>

         <div class="col-span-full lg:col-span-2">Populer Anime</div>
      </div>
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default { components: { Navbar } };
</script>

<style></style>
