<script lang="ts">
	import imgMusculacao from '$lib/assets/musculacao.jpg';
	import iconMuscle from '$lib/assets/icon-muscle.png';
	import imgExercicio from '$lib/assets/exercicios.jpg';
	import iconWeight from '$lib/assets/icon-weight.png';

	export let title: string;
	export let content: string;
	export let btn: string;
	export let href: string;

	export let img: string;
	export let currentImage = imgMusculacao;
	export let icon: string;
	export let currentIcon = iconMuscle;

	export const updateImgAndIcon = () => {
		switch (img) {
			case 'exercicio':
				currentImage = imgExercicio;
				break;
			default:
				currentImage = imgMusculacao;
				break;
		}

		switch (icon) {
			case 'weight':
				currentIcon = iconWeight;
				break;
			default:
				currentIcon = iconMuscle;
		}
	};

	$: updateImgAndIcon();
</script>

<section class="intro" style="background-image: url({currentImage});">
	<div class="intro__wrapper wrap">
		<h1>
			{@html title}
			<img src={currentIcon} alt="Muscle Icon" />
		</h1>
		<p>
			{content}
		</p>

		{#if href && btn}
			<a {href} class="btn">{btn}</a>
		{/if}
	</div>
</section>

<style lang="scss">
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
			background-color: rgb(0, 0, 0, 0.55);
		}

		.intro__wrapper {
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
