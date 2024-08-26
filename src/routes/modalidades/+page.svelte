<script lang="ts">
	import Card from '$lib/Card.svelte';
	import Intro from '$lib/Intro.svelte';
	import { modalidades } from '$lib/stores';
</script>

<Intro
	title="Temos a modalidade certa para você"
	content="Descubra as diversas modalidades da nossa academia."
	icon="weight"
	img="alongamento"
/>

<section class="modalidades">
	<div class="modalidades__wrapper wrap">
		{#each $modalidades as modalidade}
			<Card info={modalidade} />
		{/each}
	</div>
</section>

<style lang="scss">
	.modalidades {
		margin-top: 60px;

		&__wrapper {
			display: flex;
			flex-wrap: wrap;
			gap: 20px;
			justify-content: center;
		}
	}
</style>
