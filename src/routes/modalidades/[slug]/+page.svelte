<script lang="ts">
	// import { page } from '$app/stores';
	import { modalidades } from '$lib/stores';
	import IntroSingle from '$lib/IntroSingle.svelte';
	import Card from '$lib/Card.svelte';

	// let modalidade = $page.params.slug;
	export let data;
</script>

{#if data}
	<IntroSingle {data} />
{/if}

<div class="related">
	<div class="related__wrapper wrap">
		<h3>Outras modalidades:</h3>

		<div class="list">
			{#each $modalidades as info}
				<Card {info} />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.related {
		margin-top: 40px;

		.list {
			display: flex;
			flex-wrap: wrap;
			gap: 20px;
			justify-content: center;
			margin-top: 16px;
		}
	}
</style>
