<script lang="ts">
	import spuyImg from '$lib/static/spuy4.png';
	import pomoImg from '$lib/static/pomo.png';
	import 'iconify-icon';
</script>

<div class="flex flex-1 items-center self-center self-stretch px-2 md:px-10 py-10">
	<section class="flex flex-wrap flex-1 gap-7 items-center flex-col lg:flex-row md:justify-center">
		<div class="card w-80 md:w-96">
			<img src={spuyImg} alt="Pezdel.com" class="flex w-full" />
			<div class="space-y-4 p-4">
				<div class="flex justify-between items-center border-b-2">
					<div class="text-3xl">
						<a href="https://www.pezdel.com">Pezdel.com</a>
					</div>
					<a href="https://github.com/pezdel/pomo-clone">
						<iconify-icon class="text-2xl" icon="carbon:logo-github" />
					</a>
				</div>
				<div class="">
					Pezdel.com allows you to search timeseries data by patterns, rather than dates.
				</div>
				<div class="space-y-1 font-thin">
					<span>Key Technologies:</span>
					<div class="flex space-x-4 text-2xl">
						<iconify-icon title="SvelteKit" icon="devicon:svelte" />
						<iconify-icon title="Golang" icon="skill-icons:golang" />
						<iconify-icon title="Python" icon="logos:python" />
						<iconify-icon title="Supabase" icon="skill-icons:supabase-dark" />
						<iconify-icon title="Stripe" icon="logos:stripe" />
					</div>
				</div>
			</div>
		</div>
		<div class="card w-80 md:w-96">
			<img src={pomoImg} alt="pomo-clone.vercel.app" class="flex" />
			<div class="space-y-4 p-4">
				<div class="flex justify-between items-center border-b-2">
					<div class="text-3xl">
						<a href="https://pomo-clone.vercel.app/">Pomodoro.io clone</a>
					</div>
					<a href="https://github.com/pezdel/pomo-clone">
						<iconify-icon class="text-2xl" icon="carbon:logo-github" />
					</a>
				</div>

				<div class="">A clone of pomodoro.io while learning web development.</div>
				<div class="space-y-1 font-thin">
					<span>Key Technologies:</span>
					<div class="flex space-x-4 text-2xl">
						<iconify-icon title="React" icon="skill-icons:react-dark" />
						<iconify-icon title="TailwindCss" icon="devicon:tailwindcss" />
					</div>
				</div>
			</div>
		</div>
		<div class="card w-80 md:w-96">
			<img src={pomoImg} alt="portfolio" class="flex" />
			<div class="space-y-4 p-4">
				<div class="flex justify-between items-center border-b-2">
					<div class="text-3xl">
						<a href="/">Portfolio</a>
					</div>
					<a href="https://github.com/pezdel/portfolio">
						<iconify-icon class="text-2xl" icon="carbon:logo-github" />
					</a>
				</div>

				<div class="">This portfolio website</div>
				<div class="space-y-1 font-thin">
					<span>Key Technologies:</span>
					<div class="flex space-x-4 text-2xl">
						<iconify-icon title="SvelteKit" icon="devicon:svelte" />
						<iconify-icon title="TailwindCss" icon="devicon:tailwindcss" />
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
