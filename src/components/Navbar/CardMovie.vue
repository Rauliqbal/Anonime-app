<template>
   <a :href="anime.url" class="flex gap-6">
      <img :src="anime.image_url" class="w-24 h-32 object-cover rounded-xl" :alt="anime.title + 'Cover'" />
      <h1 class="text-lg text-white">{{ anime.title }}</h1>
   </a>
</template>

<script>
export default {
   props: ["anime"],
};
</script>

<style></style>
