<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script>
	import { getArticles } from "$lib/articles.js";

	export let articles;
	
	articles = []

	getArticles()
		.then(res => {
			console.log('x',res)
			articles = res.data
		})
		.catch(err => {
			console.log('y',err)
		})

</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<!-- TODO lose the @next! -->
	<pre>npm init svelte@next</pre>

	{#each articles as article (article.id)}
		<div>
			<span style="font-size:12px;">{article.id}</span>
			<h3 style="font-weight: 200;">Title: {article.content.title}</h3>
			<p>Excerpt: {article.content.excerpt}</p>
		</div>
	{/each}

	<p>
		The <a href="/todos">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
