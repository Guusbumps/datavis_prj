<!-- <script>
  export let data;
</script>

<ul>
  {#each data as d}
  <li>{d.gene_name}</li>
  {/each}
</ul> -->
<!-- menu -->
<div>
<a href="/">Home</a>; 
<a href="/genes">Genes</a>; 
<a href="/interactions">Interactions</a>
</div>

<script>
  let datapoints = [];
  fetch('https://vda-lab.github.io/assets/genes.json')
    .then(res => res.json())
    .then(data => datapoints = data)

  export let data;
  let data_for_slug = datapoints.filter((d) => { return d.gene_name == params.slug})[0]
</script>

<h1>{data.slug}</h1>
