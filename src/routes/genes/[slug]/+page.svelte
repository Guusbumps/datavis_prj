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
    .then(data2 => datapoints = data2)

  export let data
  // let data_for_slug = datapoints.filter((d) => { return d.gene_name == data.slug})[0];
  

  function isName(gene) {
    return gene.gene_name == data.slug;
  }

  let d_f_s = datapoints.filter(isName)[0];

</script>

<h1>{data.slug}</h1>
{JSON.stringify(datapoints[0])}
<ul>
  {#each datapoints as d, i}
  <li>{d}</li>
  {/each}
</ul>