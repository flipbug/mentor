<script>
	import Avatar from '$lib/components/Avatar.svelte';
	import Button from '$lib/components/Button.svelte';
	import '../app.css';
</script>

<header>
	<nav class="container mx-auto flex justify-between py-5">
		<div class="text-3xl font-bold font-display"><a href="/">mentor</a></div>
		<div class="flex gap-10">
			<a href="/iterations/new">
			<Button>Create Iteration</Button>
			</a>
			<!-- <div class="h-5 w-5 rounded-full text-sm fon">
				<Avatar />
			</div> -->
		</div>
	</nav>
</header>


<main class="container mx-auto mt-10">
	<slot />
</main>
