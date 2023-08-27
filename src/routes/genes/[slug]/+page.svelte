<h1>Guus Spenkelink - UHasselt - 2056061</h1>

<!-- menu -->
<div>
<a href="/">Home</a>; 
<a href="/genes">Genes overview</a>; 
<a href="/interactions">Interactions overview</a>
</div>

<script>
  export let data;
  let datapoints2 = [];
	datapoints2 = data.genes;
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