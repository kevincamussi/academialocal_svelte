<script lang="ts">
	export let data;
</script>

<div class="intro">
	<div class="intro__wrapper wrap">
		<div class="intro__info">
			<h1>{data.name}</h1>
			<p>{data.content}</p>
		</div>
		<div class="intro__img">
			<img src={data.img} alt={data.name} />
		</div>
	</div>
</div>

<style lang="scss">
	@use '../styles/colors.scss' as *;

	.intro {
		&__wrapper {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 20px;
			height: 360px;
			align-items: center;
		}

		&__img {
			max-width: 100%;
			margin-right: -20px;
			position: relative;

			&::before {
				content: '';
				display: block;
				position: absolute;
				inset: 0;
				background: colors('overlay');
				border-radius: 0 0 0 8px;
			}

			img {
				width: 100%;
				max-height: 360px;
				height: 100%;
				object-fit: cover;
				border-radius: 0 0 0 8px;
				display: block;
			}
		}

		p {
			font-size: calc(18 / 16 * 1rem);
			margin-top: 8px;
		}
	}
</style>
