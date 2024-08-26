import { writable } from 'svelte/store';

import musculacao from '$lib/assets/musculacao.jpg';
import crossfit from '$lib/assets/crossfit.jpg';
import alongamento from '$lib/assets/alongamento.jpg';
import exercicios from '$lib/assets/exercicios.jpg';
import natacao from '$lib/assets/natacao.jpg';

export const modalidades = writable<Modalidade[]>([
	{ name: 'Musculação', slug: 'musculacao', img: musculacao },
	{ name: 'Crossfit', slug: 'crossfit', img: crossfit },
	{ name: 'Alongamento', slug: 'alongamento', img: alongamento },
	{ name: 'Exercícios em grupo', slug: 'exercicios-em-grupo', img: exercicios },
	{ name: 'Natação', slug: 'natacao', img: natacao }
]);
