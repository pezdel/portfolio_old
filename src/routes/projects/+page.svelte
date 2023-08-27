<script lang="ts">
	import 'iconify-icon';
	import { ProjectCard } from '$lib/components';
	import { pezdelInfo, pomoInfo, portfolioInfo } from '$lib/utils';
</script>

<div
	class="flex flex-col flex-1 justify-center items-center self-center self-stretch px-2 md:px-10 py-10"
>
	<div class="py-5 flex flex-col items-center">
		<div class="text-5xl">What I've Made.</div>
		<div class="font-thin">Pezdel.com being the most complex.</div>
	</div>
	<section class="flex flex-wrap gap-7 items-center flex-col lg:flex-row md:justify-center">
		<ProjectCard info={pezdelInfo} />
		<ProjectCard info={pomoInfo} />
		<ProjectCard info={portfolioInfo} />
	</section>
</div>
