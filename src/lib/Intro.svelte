<script>
	import imgMusculacao from '$lib/assets/musculacao.jpg';
	import iconMuscle from '$lib/assets/icon-muscle.png';

	export let title;
	export let content;
	export let btn;
	export let href;

	export let img;
	if (img === 'musculacao') img = imgMusculacao;

	export let icon;
	if (icon === 'muscle') icon = iconMuscle;
</script>

<section class="intro" style="background-image: url({img});">
	<div class="intro__wrapper wrap">
		<h1>
			{@html title}
			<img src={icon} alt="Muscle Icon" />
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
