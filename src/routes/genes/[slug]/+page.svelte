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
  import { onMount } from 'svelte';
  let datapoints2 = [];
  onMount(() => {
  fetch('https://vda-lab.github.io/assets/genes.json')
    .then(res => res.json())
    .then(data2 => datapoints2 = data2)
  })
  
  export let data
  // let data_for_slug = datapoints.filter((d) => { return d.gene_name == data.slug})[0];
  
  function isName(gene) {
    return gene.gene_name == data.slug;
  }

  let d_f_s = datapoints2.filter(isName)[0];

</script>

<h1>{data.slug}</h1>
{datapoints2[0]}

<ul>
  {#each datapoints2 as d, i}
  <li>{d}</li>
  {/each}
</ul>