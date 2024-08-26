<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';

	import IconPlus from './assets/IconPlus.svelte';

	export let question: string;
	export let answer: string;

	export let active: boolean = false;

	const handleActive = (): void => {
		active = !active;
	};
</script>

<div
	class="info"
	role="button"
	on:click={handleActive}
	on:keydown={handleActive}
	tabindex="0"
	use:autoAnimate
>
	<div class="question" class:active>
		<h3>{question}</h3>
		<IconPlus />
	</div>
	{#if active}
		<div class="answer">
			<p>{answer}</p>
		</div>
	{/if}
</div>

<style lang="scss">
	@use '../styles/colors.scss' as *;

	.info {
		cursor: pointer;

		.question {
			display: flex;
			align-items: center;
			border: 1px solid colors('subtle');
			padding: 16px;
			height: 80px;

			:global(svg) {
				margin-left: auto;
				flex-shrink: 0;
				transition: 250ms;
			}

			&.active {
				border-color: colors('white');
				transition: 125ms;

				:global(svg) {
					transform: rotate(45deg);
					transition: 125ms;
				}
			}
		}

		.answer {
			padding: 0 16px;
			margin: 16px 0;
			border-left: 1px solid colors('feature');
		}
	}
</style>
