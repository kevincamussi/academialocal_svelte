<script lang="ts">
	import '@fontsource-variable/roboto-condensed';
	import '@fontsource-variable/cabin';
	import '../styles/global.scss';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<slot />

<Footer />
