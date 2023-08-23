<script>
  export let data;
</script>

<ul>
  {#each data as d}
  <li>{d.gene_name}</li>
  {/each}
</ul>
