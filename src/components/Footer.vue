<template>
	<div class="px-6 py-8 border-t border-gray-400 grid grid-cols-2">
		<div class="col-span-full md:col-span-1">
			<h2 class="text-3xl text-white font-bold tracking-wider">
				Anonime
			</h2>
			<p class="text-white mt-4">
				Anonime is a free anime
				streaming website without ads.
			</p>
		</div>
		<div class="col-span-full  md:col-span-1 flex flex-row mt-8 md:mt-0 gap-8 md:gap-24">
			<div class="flex flex-col w-1/2">
				<h3 class="text-gray-500 text-xl">Pages</h3>
				<ul class="mt-2 flex gap-2 flex-col">
					<li>
						<router-link
							to="/"
							class="text-white hover:text-gray-100 transition-all duration-200 ease-out"
							>Home</router-link
						>
					</li>
					<li>
						<router-link
							to="/list"
							class="text-white hover:text-gray-100 transition-all duration-200 ease-out"
							>List Anime</router-link
						>
					</li>
				</ul>
			</div>

			<div class="flex flex-col w-1/2">
				<h3 class="text-gray-500 text-xl">Popular</h3>
				<ul class="mt-2 flex gap-2 flex-col">
					<li>
						<router-link
							to="/anime/captain-tsubasa"
							class="text-white hover:text-gray-100 transition-all duration-200 ease-out"
							>Home</router-link
						>
					</li>
					<li>
						<router-link
							to="/anime/boruto-next-generations"
							class="text-white hover:text-gray-100 transition-all duration-200 ease-out"
							>Boruto</router-link
						>
					</li>
					<li>
						<router-link
							to="/anime/spy-x-family"
							class="text-white hover:text-gray-100 transition-all duration-200 ease-out"
							>Spy X Family</router-link
						>
					</li>
					<li>
						<router-link
							to="/anime/tomodachi"
							class="text-white hover:text-gray-100 transition-all duration-200 ease-out"
							>Tomodachi</router-link
						>
					</li>
				</ul>
			</div>

			<div class="flex flex-col">
				<h3 class="text-gray-500 text-xl">Social</h3>
				<ul class="mt-2 flex gap-2 flex-col">
					<li>
						<router-link
							to="/"
							class="text-white hover:text-gray-100 transition-all duration-200 ease-out"
							>Facebook</router-link
						>
					</li>
					<li>
						<router-link
							to="/"
							class="text-white hover:text-gray-100 transition-all duration-200 ease-out"
							>Instagram</router-link
						>
					</li>
					<li>
						<router-link
							to="/"
							class="text-white hover:text-gray-100 transition-all duration-200 ease-out"
							>Twitter</router-link
						>
					</li>
					<li>
						<router-link
							to="/"
							class="text-white hover:text-gray-100 transition-all duration-200 ease-out"
							>Github</router-link
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Footer",
};
</script>

<style></style>