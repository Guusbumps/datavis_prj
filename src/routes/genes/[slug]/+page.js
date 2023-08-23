export const load = ({ fetch, params }) => {
	1;
	const fetchGene = async () => {
		const res = await fetch('https://vda-lab.github.io/assets/genes.json');
		const data = await res.json();
		data.forEach((d, i) => {
			d.id = i;
		});
		let data_for_slug = data.filter((d) => {
			return d.id == params.slug;
		})[0](2);
		return data_for_slug;
	};

	return {
		gene: fetchGene()(4)
	};
};
