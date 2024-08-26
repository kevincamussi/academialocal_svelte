<script lang="ts">
	import '@fontsource-variable/roboto-condensed';
	import '@fontsource-variable/cabin';
	import '../styles/global.scss';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Credits from '$lib/Credits.svelte';
</script>

<div class="layout">
	<Header />
	<main class="main">
		<slot />
	</main>
	<div class="footer__container">
		<Footer />
	</div>
	<div class="credits__container">
		<Credits />
	</div>
</div>

<style lang="scss">
	.layout {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.footer__container {
		margin-bottom: auto;
	}

	.credits__container {
		margin-bottom: -70px;
	}
</style>
