<script>
	const width = 600;
	const height = 600;

  let datapoints_g = [];
  fetch('https://vda-lab.github.io/assets/genes.json')
    .then(res => res.json())
    .then(data => datapoints_g = data)

	let datapoints_int = [];
  fetch('https://vda-lab.github.io/assets/interactions.json')
    .then(res => res.json())
    .then(data => datapoints_int = data)
	
	let regulators = 0;
	let workhorses = 0;
	let managers = 0;

	function add_reg() {
    regulators += 1;
		return regulators
  }
	function add_wh() {
    workhorses += 1;
		return workhorses
  }
	function add_man() {
    managers += 1;
		return managers
  }

	const step = 300/151;

</script>

<h1>Guus Spenkelink - UHasselt - 2056061</h1>

<!-- menu -->
<div>
<a href="/">Home</a>; 
<a href="/genes">Genes</a>; 
<a href="/interactions">Interactions</a>
</div>

<svg viewBox='0 0 {width} {height}'>
	{#each datapoints_int as di}
    <!-- {#each datapoints_g as dg}
			console.log({dg.gene_id})
      {#if di.from_id === dg.gene_id}
        {#if dg.axes === "regulator"}
			    <circle cx={50+step*add_reg()} cy=0 r=2 fill='red'
				  transform="translate({width/2},{height/2}) rotate(-90)" />
          console.log('gevonden')
		    {/if}
      {/if}
    {/each} -->
	{/each}

</svg>
