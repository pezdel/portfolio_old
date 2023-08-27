<script lang="ts">
	//import { SlideItem } from '$lib/components';
	import { skills, options } from '$lib/utils';
	//import { Splide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/core';
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	onMount(() => {
		register();
	});
</script>

<div class="flex flex-1 items-center self-center self-stretch px-10 py-2">
	<section class="flex flex-1 flex-col gap-5 lg:items-center">
		<div class="flex text-4xl md:text-6xl w-full max-w-4xl justify-start">Adam Chilicki</div>
		<div class="flex w-full text-2xl md:text-3xl font-thin max-w-4xl">
			Self-taught Full Stack Developer with a growing project portfolio and versatile skills in both
			frontend and backend development.
		</div>
		<div class="flex max-w-4xl w-full">
			<a href="https://github.com/pezdel">
				<iconify-icon class="text-4xl" icon="carbon:logo-github" />
			</a>
		</div>

		<!-- <div class="flex justify-center"> -->
		<!-- 	<Splide aria-label="My Favorite Images" {options}> -->
		<!-- 		{#each skills as slide} -->
		<!-- 			<SlideItem {slide} /> -->
		<!-- 		{/each} -->
		<!-- 	</Splide> -->

		<!-- </div> -->

		<div class="flex justify-center h-24 w-24">
			<swiper-container
				class="mySwiper"
				autoplay-delay="2000"
				autoplay-disable-on-interaction="false"
			>
				{#each skills as slide}
					<swiper-slide>
						<div class="flex flex-col items-center">
							<iconify-icon class="text-7xl" icon={slide.icon} />
							<span class="font-thin">{slide.name}</span>
						</div>
					</swiper-slide>
				{/each}
			</swiper-container>
		</div>
	</section>
</div>

<style>
	swiper-container {
		width: 100%;
		height: 100%;
	}

	swiper-slide {
		text-align: center;
		font-size: 18px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
