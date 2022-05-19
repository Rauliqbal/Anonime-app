<template>
   <div class="inset-x-0 w-full z-20">
      <div class="py-4 lg:py-6 px-6 lg:px-0">
         <div class="flex items-center justify-between">
            <div class="relative z-30">
               <router-link to="/" class="text-3xl text-white font-bold tracking-wider"> Anonime </router-link>
            </div>

            <div class="flex items-center justify-end relative">
               <input type="checkbox" name="hamburger" id="hamburger" class="peer hidden" />
               <label for="hamburger" class="peer-checked:hamburger block relative z-30 p-6 -mr-6 cursor-pointer lg:hidden">
                  <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-gray-300 transition duration-300"></div>
                  <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-gray-300 transition duration-300"></div>
               </label>

               <div
                  class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-gray-900/80 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border-r border-r-gray-800 transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 z-20"
               >
                  <div className="flex flex-col h-full lg:items-center lg:flex-row ml-0 lg:ml-8">
                     <ul className="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                        <li>
                           <router-link to="/" class="text-gray-500 hover:text-gray-100 transition-all duration-200 ease-out">Home </router-link>
                        </li>
                        <li>
                           <router-link to="/list" class="text-gray-500 hover:text-gray-100 transition-all duration-200 ease-out"> List anime </router-link>
                        </li>
                        <li>
                           <router-link to="/genres" class="text-gray-500 hover:text-gray-100 transition-all duration-200 ease-out"> Genres </router-link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <div class="hidden ml-auto lg:flex lg:flex-col">
               <form @submit.prevent="HandleSearch">
                  <input class="py-2 px-6 rounded-full bg-gray-700 text-white outline-none border-none" type="search" placeholder="Search anime or movie" v-model="search_query" required />
               </form>

               <div class="absolute bg-gray-900 border border-gray-800 z-50 mt-12 rounded-xl w-[366px] overflow-hidden">
                  <div class="flex flex-col gap-4 py-5 px-6 overflow-y-auto max-h-[36rem]" v-if="animelist.length > 0">
                     <!-- card movie search -->
                     <CardMovie v-for="anime in animelist" :key="anime.mal_id" :anime="anime" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { ref } from "vue";
import CardMovie from "./Navbar/CardMovie.vue";

export default {
   setup() {
      const search_query = ref("");
      const animelist = ref([]);

      const HandleSearch = async () => {
         animelist.value = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search_query.value}`)
            .then((res) => res.json())
            .then((data) => data.results);

         // console.log(animelist.value);
         search_query.value = "";
      };

      return {
         search_query,
         animelist,
         HandleSearch,
      };
   },
   components: { CardMovie },
};
</script>

<style></style>
