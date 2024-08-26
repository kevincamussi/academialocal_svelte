<script lang="ts">
	import { base } from '$app/paths';
	import Info from '$lib/Info.svelte';
	import Intro from '$lib/Intro.svelte';
</script>

<Intro
	img="exercicio"
	icon="weight"
	title="Conheça a academia que mais cresce na cidade!"
	btn="Modalidades"
	href="{base}/modalidades"
	content="Confira algumas das perguntas frequentes."
/>

<section class="faq">
	<div class="faq__wrapper wrap">
		<Info
			question="Quanto custa a mensalidade?"
			answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor suscipit delectus enim, sequi repudiandae odio, laudantium ullam, quae pariatur modi molestiae illo iste debitis! Asperiores ab modi quae nam."
		/>
		<Info
			question="Posso utilizar quantos dias no mês?"
			answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor suscipit delectus enim, sequi repudiandae odio, laudantium ullam, quae pariatur modi molestiae illo iste debitis! Asperiores ab modi quae nam."
		/>
		<Info
			question="Quantas modalidades estão disponíveis?"
			answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor suscipit delectus enim, sequi repudiandae odio, laudantium ullam, quae pariatur modi molestiae illo iste debitis! Asperiores ab modi quae nam."
		/>
	</div>
</section>

<style lang="scss">
	.faq {
		margin-top: 60px;

		&__wrapper {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 20px;
		}
	}

	@media (max-width: 768px) {
		.faq__wrapper {
			grid-template-columns: 1fr;
		}
	}
</style>
