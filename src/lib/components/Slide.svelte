<script lang="ts">
	import { SplideSlide } from '@splidejs/svelte-splide';

	export let slide: { name: string; icon: string };
</script>

<SplideSlide>
	<div class="flex flex-col items-center">
		<iconify-icon class="text-7xl" icon={slide.icon} />
		<span class="font-thin">{slide.name}</span>
	</div>
</SplideSlide>

