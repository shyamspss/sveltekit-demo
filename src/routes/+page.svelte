<script lang="ts">
	import Counter from "./Counter.svelte";
	// import welcome from "$lib/images/svelte-welcome.webp";
	// import welcomeFallback from "$lib/images/svelte-welcome.png";
	import { browser } from "$app/environment";

	let customDomain = "";

	if (browser) {
		customDomain = window.location.hostname;
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="text-2xl font-bold">Welcome to {customDomain}</h1>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
