<script lang="ts">
	import IconPlus from './assets/IconPlus.svelte';

	export let question: string;
	export let answer: string;
</script>

<h1>Info <IconPlus /></h1>

<div class="info">
	<div class="question">
		<h3>{question}</h3>
		<IconPlus />
	</div>
	<div class="answer">
		<p>{answer}</p>
	</div>
</div>

<style lang="scss">
	@use '../styles/colors.scss' as *;

	.info {
		.question {
			display: flex;
			align-items: center;
			border: 1px solid colors('subtle');
			padding: 16px;

			:global(svg) {
				margin-left: auto;
			}
		}

		.answer {
			padding: 0 16px;
			margin-top: 16px;
			border-left: 1px solid colors('feature');
		}
	}
</style>
