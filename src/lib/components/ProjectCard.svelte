<script lang="ts">
	export let info: any;
</script>

<div
	class="card card-hover shadow-sm hover:shadow-md shadow-surface-500 hover:shadow-surface-500 dark:shadow-surface-300 hover:shadow-surface-300 w-80 md:w-96 h-96"
>
	<img src={info.img} alt="Pezdel.com" class="flex w-full rounded-t-3xl" />
	<div class="space-y-4 p-4">
		<div class="flex justify-between items-center border-b-2">
			<div class="text-3xl">
				<a href={info.link}>{info.name}</a>
			</div>
			{#if info.github}
				<a href={info.github}>
					<iconify-icon class="text-2xl" icon="carbon:logo-github" />
				</a>
			{/if}
		</div>
		<div class="h-11">
			{info.details}
		</div>
		<div class="space-y-1 font-thin">
			<span>Key Technologies:</span>
			<div class="flex space-x-4 text-2xl">
				{#each info.tech as item}
					<iconify-icon title={item.name} icon={item.icon} />
				{/each}
			</div>
		</div>
	</div>
</div>
