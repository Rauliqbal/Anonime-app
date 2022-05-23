<template>
   <swiper
      class="mySwiper container rounded-xl overflow-hidden h-52 md:h-96 lg:h-[430px]"
      :centeredSlides="true"
      :autoplay="{
         delay: 2500,
         disableOnInteraction: false,
      }"
      :spaceBetween="32"
      :loop="true"
      :modules="modules"
   >
      <swiper-slide>
         <a href="" class="h-20 md:h-[25vw] cursor-pointer group">
            <img class="rounded-xl object-cover w-full h-full group-hover:scale-105 transition-all duration-400 ease-out" src="../assets/images/anime_carousel.webp" alt="" />
            <span class="bg-gradient-to-r from-black/90 rounded-xl w-full h-full absolute bottom-0"></span>
            <div class="absolute bottom-0 p-4 md:p-8 w-full lg:w-1/2 z-10">
               <h1 class="text-lg md:text-3xl lg:text-4xl font-bold text-gray-200 tracking-wide">Weathering With You</h1>
               <p class="text-gray-300 text-base mt-6 hidden lg:block">
                  Japanese animated romantic fantasy. It depicts a high school boy who runs away from his rural home to Tokyo and befriends an orphan girl who has the ability to control the weather.
               </p>
            </div>
         </a>
      </swiper-slide>
      <swiper-slide>
         <a href="/anime/one-piece" class="h-20 md:h-[25vw] cursor-pointer group">
            <img class="rounded-xl object-cover w-full h-full group-hover:scale-105 transition-all duration-400 ease-out" src="../assets/images/op_carousel.webp" alt="" />
            <span class="bg-gradient-to-r from-black/90 rounded-xl w-full h-full absolute bottom-0"></span>
            <div class="absolute bottom-0 p-4 md:p-8 w-full lg:w-1/2 z-10">
               <h1 class="text-lg md:text-3xl lg:text-4xl font-bold text-gray-200 tracking-wide">One Piece</h1>
               <p class="text-gray-300 text-base mt-6 hidden lg:block">
                  With his pirate crew,Luffy explores the Grand Line in search of the deceased King of the Pirates Gol D Roger's ultimate treasure known as the "One Piece" in order to become the next King of the Pirates.
               </p>
            </div>
         </a>
      </swiper-slide>

      <swiper-slide>
         <a href="" class="h-20 md:h-[25vw] cursor-pointer group">
            <img class="rounded-xl object-cover w-full h-full group-hover:scale-105 transition-all duration-400 ease-out" src="../assets/images/bnh_carousel.webp" alt="" />
            <span class="bg-gradient-to-r from-black/90 rounded-xl w-full h-full absolute bottom-0"></span>
            <div class="absolute bottom-0 p-4 md:p-8 w-full lg:w-1/2 z-10">
               <h1 class="text-lg md:text-3xl lg:text-4xl font-bold text-gray-200 tracking-wide">My Hero Academia</h1>
               <p class="text-gray-300 text-base mt-6 hidden lg:block">The story follows Izuku Midoriya, a boy born without superpowers in a world where they have become commonplace, but who still dreams of becoming a superhero himself.</p>
            </div>
         </a>
      </swiper-slide>
   </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper";

export default {
   components: {
      Swiper,
      SwiperSlide,
   },
   setup() {
      return {
         modules: [Autoplay],
      };
   },
};
</script>
