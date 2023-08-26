<script>
	const width = 600;
	const height = 600;

  let datapoints = [];
  fetch('https://vda-lab.github.io/assets/genes.json')
    .then(res => res.json())
    .then(data => datapoints = data)

	let regulators = 0;
	let workhorses = 0;
	let managers = 0;

</script>

<h1>Guus Spenkelink - UHasselt - 2056061</h1>

<!-- menu -->
<div>
<a href="/">Home</a>; 
<a href="/genes">Genes</a>; 
<a href="/interactions">Interactions</a>
</div>

<svg viewBox='0 0 {width} {height}'>
	{#each datapoints as d, i}
		{#if d.axes === "regulator"}
			<circle cx={50+i/100} cy=0 r=2 fill='red'
				transform="translate({width/2},{height/2}) rotate(-90)"
			/>
		{/if}
		{#if d.axes === "manager"}
			<circle cx={50+i/100} cy=0 r=2 fill='yellow'
				transform="translate({width/2},{height/2}) rotate(30)"
			/>
		{/if}
		{#if d.axes === "workhorse"}
			<circle cx={50+i/100} cy=0 r=2 fill='green'
				transform="translate({width/2},{height/2}) rotate(150)"
			/>
		{/if}
	{/each}
</svg>
