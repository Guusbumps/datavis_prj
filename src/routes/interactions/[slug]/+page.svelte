<h1>Guus Spenkelink - UHasselt - 2056061</h1>

<!-- menu -->
<div>
<a href="/">Home</a>; 
<a href="/genes">Genes overview</a>; 
<a href="/interactions">Interactions overview</a>
</div>

<script>
  export let data
</script>

<h2>Interaction details</h2>

<h3>From</h3>
<a href={"/genes/" + data.interactions[data.slug].from_gene_name}> Details </a>
  <ul>
   <li>id:<b>{data.interactions[data.slug].from_id}</b></li>
   <li>name:<b>{data.interactions[data.slug].from_name}</b></li>
   <li>gene name:<b>{data.interactions[data.slug].from_gene_name}</b></li>
  </ul>

<h3>To</h3>
<a href={"/genes/" + data.interactions[data.slug].to_name}> Details </a>
  <ul>
   <li>id:<b>{data.interactions[data.slug].to_id}</b></li>
   <li>name:<b>{data.interactions[data.slug].to_name}</b></li>
   <li>gene name:<b>{data.interactions[data.slug].to_gene_name}</b></li>
  </ul>

<h3>Interaction</h3>
  <ul>
   <li>function:<b>{data.interactions[data.slug].function}</b></li>
   <li>confidence:<b>{data.interactions[data.slug].confidence}</b></li>
  </ul>
