<script lang="ts">
	import { browser } from '$app/environment';
	import { SlideItem } from '$lib/components';
	import { skills, options } from '$lib/utils';
	import { Splide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/core';
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

		<div class="flex justify-center">
			{#if browser}
				<Splide aria-label="My Favorite Images" {options}>
					{#each skills as slide}
						<SlideItem {slide} />
					{/each}
				</Splide>
			{/if}
		</div>
	</section>
</div>
