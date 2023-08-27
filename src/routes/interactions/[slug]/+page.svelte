<h1>Guus Spenkelink - UHasselt - 2056061</h1>

<!-- menu -->
<div>
<a href="/">Home</a>; 
<a href="/genes">Genes overview</a>; 
<a href="/interactions">Interactions overview</a>
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

</script>

<h2>Interaction details</h2>

<h3>From</h3>
  <ul>
   <li>{(datapoints3[data.slug])}</li>
  </ul>

<h3>To</h3>

<!-- <ul>
  {#each datapoints3 as d, i (i)}
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
</ul> -->