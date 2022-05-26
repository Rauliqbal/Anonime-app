<template>
   <div class="grid grid-cols-6 gap-y-6 gap-x-4 mt-5">
      <router-link to="/anime/captain-tsubasa" class="col-span-3 md:col-span-2 lg:col-span-3 flex flex-col rounded-xl items-center overflow-hidden group relative">
         <img class="object-cover w-full max-h-[254px] h-full" src="@/assets/images/captsu_card.webp" alt="" />
         <span class="bg-gradient-to-t from-black w-full h-full flex flex-col justify-end items-center absolute py-4 px-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <h1 class="anime_title_popular">Captain Tsubasa</h1>
            <p class="text-xs text-gray-400">Episode 20</p>
         </span>
      </router-link>

      <router-link to="/anime/boruto-next-generations" class="col-span-3 md:col-span-2 lg:col-span-3 flex flex-col rounded-xl items-center overflow-hidden group relative">
         <img class="object-cover w-full max-h-[254px] h-full" src="@/assets/images/borto_card.webp" alt="" />
         <span class="bg-gradient-to-t from-black w-full h-full flex flex-col justify-end items-center absolute py-4 px-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <h1 class="anime_title_popular">Boruto Naruto Next Generations</h1>
            <p class="text-xs text-gray-400">Episode 250</p>
         </span>
      </router-link>

      <router-link to="/anime/spy-x-family" class="col-span-3 md:col-span-2 lg:col-span-3 flex flex-col rounded-xl items-center overflow-hidden group relative">
         <img class="object-cover w-full max-h-[254px] h-full" src="@/assets/images/spy_card.webp" alt="" />
         <span class="bg-gradient-to-t from-black w-full h-full flex flex-col justify-end items-center absolute py-4 px-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <h1 class="anime_title_popular">Spy X Family</h1>
            <p class="text-xs text-gray-400">Episode 07</p>
         </span>
      </router-link>

      <router-link to="/anime/" class="col-span-3 md:col-span-2 lg:col-span-3 flex flex-col rounded-xl items-center overflow-hidden group relative">
         <img class="object-cover w-full max-h-[254px] h-full" src="@/assets/images/tomodachi_card.webp" alt="" />
         <span class="bg-gradient-to-t from-black w-full h-full flex flex-col justify-end items-center absolute py-4 px-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <h1 class="anime_title_popular">Tomodachi Game</h1>
            <p class="text-xs text-gray-400">Episode 07</p>
         </span>
      </router-link>

      <router-link to="/anime/" class="col-span-3 md:col-span-2 lg:col-span-3 flex flex-col rounded-xl items-center overflow-hidden group relative">
         <img class="object-cover w-full max-h-[254px] h-full" src="@/assets/images/myhero_card.webp" alt="" />
         <span class="bg-gradient-to-t from-black w-full h-full flex flex-col justify-end items-center absolute py-4 px-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <h1 class="anime_title_popular">My Hero Academia</h1>
            <p class="text-xs text-gray-400">Episode 25</p>
         </span>
      </router-link>

      <router-link to="/anime/" class="col-span-3 md:col-span-2 lg:col-span-3 flex flex-col rounded-xl items-center overflow-hidden group relative">
         <img class="object-cover w-full max-h-[254px] h-full" src="@/assets/images/tokrev_card.webp" alt="" />
         <span class="bg-gradient-to-t from-black w-full h-full flex flex-col justify-end items-center absolute py-4 px-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <h1 class="anime_title_popular">Tokyo Revengers</h1>
            <p class="text-xs text-gray-400">Episode 24</p>
         </span>
      </router-link>
   </div>
</template>

<script>
export default {};
</script>

<style></style>
