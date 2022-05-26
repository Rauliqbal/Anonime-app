<template>
   <div>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-5">
         <!-- Card Movie -->
         <router-link to="/anime/one-piece" class="flex flex-col items-center group h-[374px] overflow-hidden">
            <div class="overflow-hidden rounded-xl grid relative">
               <img class="object-cover w-full h-[310px] group-hover:scale-105 transition-all duration-300" src="../assets/images/op_card.webp" alt="One piece image Cover" />
               <span class="bg-gradient-to-t from-black/80 w-full h-full flex justify-center items-end absolute p-2 text-gray-300"> Episode 1018 </span>
            </div>
            <h5 class="anime_title">One Piece</h5>
         </router-link>

         <!-- Card Movie -->
         <router-link to="/anime/boruto-next-generations" class="flex flex-col items-center group h-[374px] overflow-hidden">
            <div class="overflow-hidden rounded-xl grid relative">
               <img class="object-cover w-full h-[310px] group-hover:scale-105 transition-all duration-300" src="../assets/images/borto_card.webp" alt="Boruton aruto next generations image cover" />
               <span class="bg-gradient-to-t from-black/80 w-full h-full flex justify-center items-end absolute p-2 text-gray-300"> Episode 250 </span>
            </div>
            <h5 class="anime_title">Boruto Naruto Next Generations</h5>
         </router-link>

         <!-- Card Movie -->
         <router-link to="/anime/spy-x-family" class="flex flex-col items-center group h-[374px] overflow-hidden">
            <div class="overflow-hidden rounded-xl grid relative">
               <img class="object-cover w-full h-[310px] group-hover:scale-105 transition-all duration-300" src="../assets/images/spy_card.webp" alt="Spy x family cover image" />
               <span class="bg-gradient-to-t from-black/80 w-full h-full flex justify-center items-end absolute p-2 text-gray-300"> Episode 07 </span>
            </div>
            <h5 class="anime_title">Spy X Family</h5>
         </router-link>

         <!-- Card Movie -->
         <router-link to="/anime/shingeki-no-kyoujin-final-season" class="flex flex-col items-center group h-[374px] overflow-hidden">
            <div class="overflow-hidden rounded-xl grid relative">
               <img class="object-cover w-full h-[310px] group-hover:scale-105 transition-all duration-300" src="../assets/images/aot_card.webp" alt="shingeki no kyoujin cover image" />
               <span class="bg-gradient-to-t from-black/80 w-full h-full flex justify-center items-end absolute p-2 text-gray-300"> Episode 28 </span>
            </div>
            <h5 class="anime_title">Shingeki No Kyojin : the final season</h5>
         </router-link>

         <!-- Card Movie -->
         <router-link to="/anime/captain-tsubasa" class="flex flex-col items-center group h-[374px] overflow-hidden">
            <div class="overflow-hidden rounded-xl grid relative">
               <img class="object-cover w-full h-[310px] group-hover:scale-105 transition-all duration-300" src="../assets/images/captsu_card.webp" alt="shingeki no kyoujin cover image" />
               <span class="bg-gradient-to-t from-black/80 w-full h-full flex justify-center items-end absolute p-2 text-gray-300"> Episode 28 </span>
            </div>
            <h5 class="anime_title">captain tsubasa</h5>
         </router-link>

         <!-- Card Movie -->
         <router-link to="/anime/one-piece" class="flex flex-col items-center group h-[374px] overflow-hidden">
            <div class="overflow-hidden rounded-xl grid relative">
               <img class="object-cover w-full h-[310px] group-hover:scale-105 transition-all duration-300" src="../assets/images/aoashi_card.webp" alt="Aoashi cover image" />
               <span class="bg-gradient-to-t from-black/80 w-full h-full flex justify-center items-end absolute p-2 text-gray-300"> Episode 07 </span>
            </div>
            <h5 class="anime_title">Aoashi</h5>
         </router-link>

         <!-- Card Movie -->
         <router-link to="/anime/one-piece" class="flex flex-col items-center group h-[374px] overflow-hidden">
            <div class="overflow-hidden rounded-xl grid relative">
               <img class="object-cover w-full h-[310px] group-hover:scale-105 transition-all duration-300" src="../assets/images/tomodachi_card.webp" alt="Tomodachi cover image" />
               <span class="bg-gradient-to-t from-black/80 w-full h-full flex justify-center items-end absolute p-2 text-gray-300"> Episode 07 </span>
            </div>
            <h5 class="anime_title">Tomodachi Game</h5>
         </router-link>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style></style>
