<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	$: current = $page.route.id;
</script>

<header class="header">
	<div class="header__wrapper wrap">
		<a href={base}> <img src={logo} alt="Logo da academia" /> </a>
		<nav>
			<ul>
				<li>
					<a href={base} class:active={current === '/'}>Home</a>
				</li>
				<li>
					<a href="{base}/sobre" class:active={current === '/sobre'}>Sobre</a>
				</li>
				<li>
					<a
						href="{base}/modalidades"
						class:active={current === '/modalidades' || current === '/modalidades/[slug]'}
						>Modalidades</a
					>
				</li>
				<li>
					<a href="#contato" class="btn header__btn">Contato</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style lang="scss">
	@use '../styles/colors.scss' as *;

	.header__wrapper {
		display: flex;
		align-items: center;
		min-height: 120px;

		.header__btn {
			border-color: colors('feature');

			&:hover {
				border-color: colors('white');
				color: colors('black');
			}
		}

		.logo {
			max-width: 277px;
		}

		nav {
			margin-left: auto;
		}

		ul {
			display: flex;
			align-items: center;
			gap: 24px;
		}

		a {
			color: colors('white');
			text-underline-offset: 2px;

			&:not(.btn):hover {
				text-decoration: underline;
			}

			&.active,
			&.active:hover {
				text-decoration: underline;
				text-decoration-color: colors('feature');
			}
		}
	}

	@media (max-width: 768px) {
		.header__wrapper {
			flex-direction: column;
			justify-content: center;

			nav {
				margin-left: unset;
			}
		}
	}
</style>
