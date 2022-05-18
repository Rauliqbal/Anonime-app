<template>
   <div class="container">
      <Navbar />
      <div class="px-6 lg:px-8 mt-8">
         <h2 class="text-3xl text-white font-semibold">Explore</h2>
         <p class="text-gray-500 text-lg">What are you gonna watch today ?</p>
         <Carousel class="mt-5" />
      </div>
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Carousel from "@/components/carousel.vue";
// @ is an alias to /src

export default {
   name: "HomeView",
   components: { Navbar, Carousel },
};
</script>
