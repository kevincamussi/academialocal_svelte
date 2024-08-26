<script lang="ts">
	import { fly } from 'svelte/transition';

	import imgMusculacao from '$lib/assets/musculacao.jpg';
	import imgExercicio from '$lib/assets/exercicios.jpg';
	import imgAlongamento from '$lib/assets/alongamento.jpg';
	import iconMuscle from '$lib/assets/icon-muscle.png';
	import iconWeight from '$lib/assets/icon-weight.png';

	export let title: string;
	export let content: string;
	export let btn: string | undefined = undefined;
	export let href: string | undefined = undefined;
	export let img: 'exercicio' | 'alongamento' | 'musculacao' = 'musculacao';
	export let icon: 'weight' | 'muscle' = 'muscle';

	let currentImage = '';
	let currentIcon = '';

	const changeImgAndIcon = () => {
		switch (img) {
			case 'alongamento':
				currentImage = imgAlongamento;
				break;
			case 'exercicio':
				currentImage = imgExercicio;
				break;
			case 'musculacao':
				currentImage = imgMusculacao;
				break;
		}

		switch (icon) {
			case 'muscle':
				currentIcon = iconMuscle;
				break;
			case 'weight':
				currentIcon = iconWeight;
				break;
		}
	};

	$: changeImgAndIcon();
</script>

<section class="intro" style="background-image: url({currentImage});">
	<div class="intro__wrapper wrap">
		<h1 in:fly={{ y: -12, duration: 125, delay: 125 }}>
			{@html title}
			<img src={currentIcon} alt="Icon" />
		</h1>
		<p in:fly={{ y: -12, duration: 125, delay: 250 }}>{content}</p>

		{#if href && btn}
			<a {href} class="btn" in:fly={{ y: -12, duration: 125, delay: 375 }}>{btn}</a>
		{/if}
	</div>
</section>

<style lang="scss">
	@use '../styles/colors.scss' as *;

	.intro {
		min-height: 360px;
		background-size: cover;
		background-position: center;
		display: grid;
		align-content: center;
		justify-content: start;
		position: relative;

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			background-color: colors('overlay');
		}

		&__wrapper {
			z-index: 1;
		}

		.btn {
			margin-top: 24px;
		}

		p {
			font-size: calc(18 / 16 * 1rem);
			margin-top: 20px;
		}

		img {
			display: inline;
			max-width: 36px;
		}
	}
</style>
