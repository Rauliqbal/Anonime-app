<template>
   <div>
      <form @submit.prevent="HandleSearch">
         <input class="py-2 px-6 rounded-full bg-gray-700 text-white outline-none border-none w-full lg:w-auto" type="text" placeholder="Search anime or movie" v-model="search_query" required />
      </form>

      <div class="absolute bg-gray-900 z-10 mt-4 rounded-xl w-[90%] md:w-[78%] lg:w-[366px] overflow-hidden">
         <div class="flex flex-col gap-4 py-5 px-6 overflow-y-auto max-h-[28rem] lg:max-h-[36rem]" v-if="animelist.length > 0">
            <!-- card movie search -->
            <CardMovie v-for="anime in animelist" :key="anime.mal_id" :anime="anime" />
         </div>
      </div>
   </div>
</template>

<script>
import { ref } from "vue";
import CardMovie from "./CardMovie.vue";

export default {
   setup() {
      const search_query = ref("");
      const animelist = ref([]);

      const HandleSearch = async () => {
         animelist.value = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search_query.value}`)
            .then((res) => res.json())
            .then((data) => data.results);

         console.log(animelist.value);
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
