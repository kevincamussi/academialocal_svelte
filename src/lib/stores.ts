import { writable } from 'svelte/store';

import musculacao from '$lib/assets/musculacao.jpg';
import crossfit from '$lib/assets/crossfit.jpg';
import alongamento from '$lib/assets/alongamento.jpg';
import exercicios from '$lib/assets/exercicios.jpg';
import natacao from '$lib/assets/natacao.jpg';

export const listaModalidades: Modalidade[] = [
	{
		name: 'Musculação',
		slug: 'musculacao',
		img: musculacao,
		content: 'Treinos de musculação individual ou em grupo'
	},
	{
		name: 'Crossfit',
		slug: 'crossfit',
		img: crossfit,
		content: 'Treinos de crossfit individual ou em grupo'
	},
	{
		name: 'Alongamento',
		slug: 'alongamento',
		img: alongamento,
		content: 'Treinos de alongamento individual ou em grupo'
	},
	{
		name: 'Exercícios em grupo',
		slug: 'exercicios-em-grupo',
		img: exercicios,
		content: 'Exercícios individuais ou em grupo'
	},
	{
		name: 'Natação',
		slug: 'natacao',
		img: natacao,
		content: 'Natação individual ou em grupo'
	}
];

export const modalidades = writable(listaModalidades);
