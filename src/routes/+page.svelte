<script>
	import imgHome from '../assets/musculacao.jpg';
</script>

<section class="intro" style="background-image: url({imgHome});">
	<div class="intro__wrapper wrap">
		<h1>Você está pronto para o desafio?</h1>
		<p>
			A academia Local está pronta para te ajudar a chegar mais longe e alcançar sua melhor
			performance .
		</p>
		<a href="/sobre">Sobre</a>
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

		.intro__wrapper {
			z-index: 1;
		}

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			background-color: rgb(0, 0, 0, 0.55);
		}
	}
</style>
