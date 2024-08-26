import { writable } from 'svelte/store';
import muscucalao from '$lib/assets/musculacao.jpg';
import crossfit from '$lib/assets/crossfit.jpg';

export const modalidades = writable<Modalidade[]>([
	{ name: 'Musculação', slug: 'musculacao', img: muscucalao },
	{ name: 'Crossfit', slug: 'crossfit', img: crossfit }
]);
