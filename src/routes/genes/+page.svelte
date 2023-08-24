<h1>Guus Spenkelink - UHasselt - 2056061</h1>

<!-- menu -->
<div>
<a href="/">Home</a>; 
<a href="/genes">Genes</a>; 
<a href="/interactions">Interactions</a>
</div>

<script>
  import { goto } from '$app/navigation';

  let datapoints = [];
  fetch('https://vda-lab.github.io/assets/genes.json')
    .then(res => res.json())
    .then(data => datapoints = data)
    
  const width = 600;
  const height = 600;
  const r = 250;
  let selected_datapoint = '';
  let clicked = 0;
  let sluglink = '';
  function handleClick(d) {
    sluglink = d.gene_name
    goto("/genes/" + sluglink)
  }
</script>

<svg viewBox='0 0 {width} {height}'>
    <circle cx={width / 2} cy={height / 2} r={r}/>

    {#each datapoints as d, i}
      {#if d.gene_strand === "forward"}
        <line x1={r-10} y1=0 x2={r} y2=0
          transform="translate({width/2},{height/2}) rotate({360*i/datapoints.length})"
          on:mouseover={function() {selected_datapoint = d.gene_name}}
          on:mouseout={function() {selected_datapoint = ""}} 
          on:click={handleClick(d)}
 />
      {:else if d.gene_strand === "reverse"}
        <line x1={r} y1=0 x2={r+10} y2=0
          transform="translate({width/2},{height/2}) rotate({360*i/datapoints.length})" 
          on:mouseover={function() {selected_datapoint = d.gene_name}}
          on:mouseout={function() {selected_datapoint = ""}}
          on:click={handleClick(d)} />
      {/if}
    {/each}
    <text x={width/2} y={height/2} font-size=20>
      {selected_datapoint}
    </text>
</svg>

<style>
  svg {
    border: 1px solid black;
    border-radius: 5px;
  }
  line {
              stroke: black;
              stroke-width: 0.33;
              opacity: 0.5;
      }
  circle {
              stroke: black;
              stroke-width: 1;
              fill: white;
      }
</style>
