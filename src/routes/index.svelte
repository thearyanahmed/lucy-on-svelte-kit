<script context="module">
	export const prerender = true;

	console.log("() => lucent",LucentClient,LucentQueryBuilder)
	let config = {
        channel : "abc189e9-41f9-4bd9-bc4c-3fbb4bebe88b",
        access_key : "a618418d-3830-4ad0-98af-32f434b1eded",
        secret_key : "dOBbDreAZD4vBIjeK30WHXNlcXEYNOX0TcHqMMpkOU9tu1uF",
        locale : "en-GB",
      }
      
      let lucy = new LucentClient(config)
  
      let builder = new LucentQueryBuilder('articles')

	  console.log(builder.getQueryString(), builder.getQuery())
      
      lucy.get('documents', builder.getQuery() )
        .then(res => {
          console.log('res',res)
        })
        .catch(err => {
          console.log('err',err)
        })
</script>

<script>
	import Counter from '$lib/Counter.svelte';

	import { LucentClient, LucentQueryBuilder } from 'lucentcms-node'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<h3>hello world</h3>
	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
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
