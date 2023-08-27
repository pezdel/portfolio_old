<script lang="ts">
	import 'iconify';
	import type { Skills } from '$lib/types';

	export const skills: Skills[] = [
		{ name: 'Typescript', icon: 'vscode-icons:file-type-typescript-official' },
		{ name: 'Sveltekit', icon: 'devicon:svelte' },
		{ name: 'Html', icon: 'vscode-icons:file-type-html' },
		{ name: 'TailwindCss', icon: 'devicon:tailwindcss' },
		{ name: 'React', icon: 'skill-icons:react-dark' },
		{ name: 'Golang', icon: 'skill-icons:golang' },
		{ name: 'Python', icon: 'logos:python' },
		{ name: 'Cli', icon: 'mdi:powershell' },
		{ name: 'Postgres', icon: 'logos:postgresql' },
		{ name: 'Supabase (Auth)', icon: 'skill-icons:supabase-dark' },
		{ name: 'Stripe (Payments)', icon: 'fa-brands:stripe' },
		{ name: 'Docker', icon: 'logos:docker-icon' }
	];
</script>

<div class="flex flex-col flex-1 items-center justify-center py-5">
	<div class="py-3 flex flex-col items-center">
		<div class="text-5xl">What I Use.</div>
		<div class="font-thin">
			Items are in no specific order. Some smaller technologies have been left off.
		</div>
	</div>
	<div class="flex flex-wrap max-w-4xl justify-center items-center gap-5">
		{#each skills as item}
			<div
				title={item.name}
				class="card card-hover shadow-sm hover:shadow-md shadow-surface-500 hover:shadow-surface-500 dark:shadow-surface-300 hover:shadow-surface-300 h-48 w-48 flex flex-col items-center space-y-3 justify-center"
			>
				<iconify-icon class="text-8xl" icon={item.icon} />
				<span>{item.name}</span>
			</div>
		{/each}
	</div>
</div>
