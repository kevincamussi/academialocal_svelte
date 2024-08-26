// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Props {
			title: string;
			content: string;
			btn?: string; // Propriedade opcional
			href?: string; // Propriedade opcional
			img?: string; // Propriedade opcional
			icon?: string; // Propriedade opcional
			currentImage?: string; // Propriedade opcional
			currentIcon?: string; // Propriedade opcional
			updateImgAndIcon?: () => void; // Função opcional
		}
	}
}

export {};
