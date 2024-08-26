import { listaModalidades } from '$lib/stores';

export const load = ({ params }) => {
	const data = listaModalidades.find((e) => e.slug === params.slug);
	return data;
};
