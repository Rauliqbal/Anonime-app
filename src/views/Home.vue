<template>
   <div class="container">
      <Navbar />
      <div class="px-6 lg:px-8 mt-8">
         <h2 class="text-3xl text-white font-semibold">Explore</h2>
         <p class="text-gray-500 text-base md:text-lg">What are you gonna watch today ?</p>
         <Search class="mt-5 lg:hidden" />
         <Carousel class="mt-5" />
         <h2 class="text-3xl text-white font-semibold mt-8">New Realease</h2>
         <LatestMovie class="mt-5" />
      </div>
      <Footer class="mt-8"/>
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Carousel from "@/components/carousel.vue";
import LatestMovie from "@/components/LatestMovie.vue";
import Search from "@/components/Navbar/Search.vue";
import Footer from "@/components/Footer.vue";
// @ is an alias to /src

export default {
   name: "HomeView",
   components: { Navbar, Carousel, LatestMovie, Search, Footer },
};
</script>
