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

  let data_for_slug = datapoints2.filter((d) => { return d.gene_name === "thrL"})[0];

  function isName(gene) {
    console.log("hallo");
    return gene.gene_name === data.slug;
  }

  let d_f_s = datapoints2.filter(isName)[0];
</script>

<h1>{data.slug}</h1>

<ul>
  {#each datapoints2 as d}
    {#if d.gene_name===data.slug}
      <li>ID: <b>{d.gene_id}</b></li>
      <li>Blattner number: <b>{d.gene_blattner}</b></li>
      <li>Start: <b>{d.gene_start}</b></li>
      <li>Stop: <b>{d.gene_stop}</b></li>
      <li>Strand: <b>{d.gene_strand}</b></li>
      <li>Product: <b>{d.gene_product}</b></li>
      <li>Confidence: <b>{d.gene_confidence}</b></li>
      <li>Evidence: <b>{d.gene_evidence}</b></li>
      <li>RegulonDB link:<b></b></li>
    {/if}  
  {/each}
</ul>