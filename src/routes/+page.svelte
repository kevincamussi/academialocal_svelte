<script>
	import '../styles/colors.scss';
</script>

<div>
	teste
	<h2>tete</h2>
</div>

<style lang="scss">
	@use '../styles/colors' as *;

	h2 {
		color: colors('red');
	}
</style>
