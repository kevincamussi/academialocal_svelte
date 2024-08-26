<script lang="ts">
	const year = new Date().getFullYear();
</script>

<div class="credits">
	<div class="credits__wrapper wrap">
		<span>&copy; Academia Local, {year}</span>
	</div>
</div>

<style lang="scss">
	@use '../styles/colors.scss' as *;

	.credits {
		margin-top: 60px;

		&__wrapper {
			&::before {
				content: '';
				display: block;
				width: 100%;
				height: 1px;
				background-color: colors('subtle');
			}

			span {
				display: inline-block;
				font-size: calc(14 / 16 * 1rem);
				padding: 24px 0;
			}
		}
	}
</style>
