<script lang="ts">
	import img from '$lib/assets/crossfit.jpg';

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer__wrapper wrap">
		<div class="footer__img">
			<img src={img} alt="Imagem do footer" />
		</div>
		<div class="footer__info">
			<h2>Venha fazer seu <br /> primeiro treino grátis</h2>
			<p>Entre em contato via WhatsApp ou e-mail e fale com um treinador especialista da equipe.</p>
			<div class="footer__btns">
				<a href="https://whatsa.me/5599999999999" class="btn">WhatsApp</a>
				<a href="mailto:teste@teste.com.br" class="btn">E-mail</a>
			</div>
		</div>
	</div>
	<div class="credits">
		<div class="credits__wrapper wrap">
			<span>&copy; Academia Local, {year}</span>
		</div>
	</div>
</footer>

<style lang="scss">
	@use '../styles/colors.scss' as *;

	.footer {
		margin-top: 90px;

		span {
			display: inline-block;
			font-size: calc(14 / 16 * 1rem);
			padding: 24px 0;
		}

		.footer__wrapper {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 20px;
			align-items: center;

			p {
				margin-top: 16px;
				max-width: 360px;
			}

			h2 {
				font-size: calc(36 / 16 * 1rem);
			}

			.footer__btns {
				margin-top: 24px;
				display: flex;
				gap: 8px;
			}

			.footer__img {
				position: relative;

				&::after {
					content: '';
					position: absolute;
					inset: 0;
					background-color: colors('overlay');
				}

				img {
					max-width: 100%;
					border-radius: 16px;
				}
			}
		}

		.credits {
			margin-top: 60px;

			.credits__wrapper {
				&::before {
					content: '';
					display: block;
					width: 100%;
					height: 1px;
					background-color: colors('subtle');
				}
			}
		}
	}
</style>
