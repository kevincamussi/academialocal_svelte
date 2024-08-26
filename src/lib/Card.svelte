<script lang="ts">
	export let info: Modalidade;
</script>

<a href="/modalidades/{info.slug}" class="card">
	<img src={info.img} alt={info.name} />
	<h2>{info.name}</h2>
</a>

<style lang="scss">
	@use '../styles/colors.scss' as *;

	.card {
		border: 1px solid colors('subtle');
		padding: 4px;
		display: flex;
		flex-basis: calc(50% - 10px);
		align-items: center;
		border-radius: 4px;
		color: colors('white');
		transition: 250ms;

		&:hover {
			border-color: colors('white');
			transition: 125ms;
		}

		img {
			object-fit: cover;
			width: 120px;
			height: 120px;
			border-radius: 4px;
		}

		h2 {
			padding: 8px 16px;
		}
	}

	@media (max-width: 768px) {
		.card {
			flex-basis: 100%;
		}
	}
</style>
