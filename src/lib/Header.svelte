<script lang="ts">
	import logo from '$lib/assets/logo.png';
</script>

<header class="header">
	<div class="header__wrapper wrap">
		<a href="/"> <img src={logo} alt="Logo da academia" class="logo" /> </a>
		<nav>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/sobre">Sobre</a>
				</li>
				<li>
					<a href="/modalidades">Modalidades</a>
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
		}
	}
</style>
