<h1>Guus Spenkelink - UHasselt - 2056061</h1>

<!-- menu -->
<div>
<a href="/">Home</a>;
<a href="/interactions">Interactions</a>
</div>

<script>
  let datapoints = [];
  fetch('https://vda-lab.github.io/assets/genes.json')
    .then(res => res.json())
    .then(data => datapoints = data)
  const width = 600;
  const height = 600;
  const r = 250;
</script>

<svg viewBox='0 0 {width} {height}'>
    <circle cx={width / 2} cy={height / 2} r={r}/>
    <line x1=0 y1=0 x2={r} y2=0
    transform="translate({width/2},{height/2}) rotate(5)" />
    {#each datapoints as d, i}
      <line x1=0 y1=0 x2={r} y2=0
        transform="translate({width/2},{height/2}) 360*rotate({i})/datapoints.length" />
    {/each}
</svg>

<div>
<ul>
{#each datapoints as d}
  <li>{d.gene_id}</li>
{/each}
</ul>
</div>

<style>
  svg {
    border: 1px solid black;
    border-radius: 5px;
  }
  line {
              stroke: black;
              stroke-width: 3;
      }
  circle {
              stroke: black;
              stroke-width: 1;
              fill: white;
      }
</style>
