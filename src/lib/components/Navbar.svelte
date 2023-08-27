<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import 'iconify-icon';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const popupSkills: PopupSettings = {
		event: 'hover',
		target: 'popupSkills',
		placement: 'bottom'
	};
	const popupProjects: PopupSettings = {
		event: 'hover',
		target: 'popupProjects',
		placement: 'bottom'
	};
</script>

<div class="grid grid-cols-8 gap-4 flex h-12 bg-primary-500 items-center">
	<a href="/" class="col-span-3 justify-center flex space-x-1.5 flex items-center">
		<iconify-icon
			icon="streamline:programming-script-code-code-angle-programming-file-bracket"
			class="text-lg"
		/>
		<span class="collapse md:visible">Adam</span>
		<span class="collapse md:visible">CHILICKI</span>
	</a>
	<a
		href="/skills"
		class="btn variant-soft-primary flex h-full items-center space-x-2 [&>*]:pointer-events-none"
		use:popup={popupSkills}
	>
		<iconify-icon class="text-lg" icon="clarity:list-line" />
		<span class="collapse lg:visible">Skills</span>
	</a>
	<a
		href="/projects"
		class="btn variant-soft-primary flex h-full items-center space-x-2 [&>*]:pointer-events-none"
		use:popup={popupProjects}
	>
		<iconify-icon icon="mdi:dots-grid" class="text-lg" />
		<span class="collapse lg:visible">Projects</span>
	</a>

	<div class="col-span-3 flex justify-center">
		<LightSwitch />
	</div>
</div>

<div class="visible lg:collapse card p-4 variant-filled-primary" data-popup="popupSkills">
	<p>Skills</p>
</div>
<div class="visible lg:collapse card p-4 variant-filled-primary" data-popup="popupProjects">
	<p>Projects</p>
</div>
