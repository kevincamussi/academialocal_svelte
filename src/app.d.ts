// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Props {
			title: string;
			content: string;
			btn?: string;
			href?: string;
			img?: string;
			icon?: string;
			currentImage?: string;
			currentIcon?: string;
			updateImgAndIcon?: () => void;
		}
	}
}

export {};
