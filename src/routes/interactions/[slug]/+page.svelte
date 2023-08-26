
<!-- menu -->
<div>
<a href="/">Home</a>; 
<a href="/genes">Genes</a>; 
<a href="/interactions">Interactions</a>
</div>

<script>
  import { onMount } from 'svelte';
  let datapoints3 = [];
  onMount(() => {
  fetch('https://vda-lab.github.io/assets/interactions.json')
    .then(res => res.json())
    .then(data3 => datapoints3 = data3)
  })
  
  export let data

  //let data_for_slug = datapoints2.filter((d) => { return d.gene_name === "thrL"})[0];
</script>

<h1>{data.slug}</h1>

<ul>
  {#each datapoints3 as d, i}
    {#if i===data.slug}
      <li>ID: <b>{d.gene_id}</b></li>
      <li>Blattner number: <b>{d.gene_blattner}</b></li>
      <li>Start: <b>{d.gene_start}</b></li>
      <li>Stop: <b>{d.gene_stop}</b></li>
      <li>Strand: <b>{d.gene_strand}</b></li>
      <li>Product: <b>{d.gene_product}</b></li>
      <li>Confidence: <b>{d.gene_confidence}</b></li>
      <li>Evidence: 
        {#if d.gene_evidence}
          <ul>
          {#each d.gene_evidence.split(",") as e}
            <li><b>{e.slice(1,-1)}</b></li>
          {/each}
          </ul>
        {/if}
      </li>
      <li>RegulonDB link:<b></b></li>
    {/if}  
  {/each}
</ul>