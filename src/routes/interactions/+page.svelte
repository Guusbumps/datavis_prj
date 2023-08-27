<script>
	import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

	export let data = [];

	const width = 600;
	const height = 600;

	const min_r = 50;
	const step = 300/201;

  let datapoints = [];
	let datapoints_int = [];
	datapoints = data.genes;
	datapoints_int = data.interactions;
		
	let regulators = 0;
	let workhorses = 0;
	let managers = 0;

	function add_reg() {
    regulators += 1;
		return regulators
  }
	function add_wh() {
    workhorses += 1;
		return workhorses
  }
	function add_man() {
    managers += 1;
		return managers
  }
	
	function get_index_per_axes(ngn) {
		let data_f = datapoints.filter((d) => { return d.ngn == ngn})
		if (data_f.length > 0) {
			let axes = data_f[0].axes
			let data_axes = datapoints.filter((d) => { return d.axes == axes})
			return data_axes.findIndex( d => d.ngn === ngn );
		}
	}

	function get_axes(ngn) {
		let data_f = datapoints.filter((d) => { return d.ngn == ngn})
		if (data_f.length > 0) {
			return data_f[0].axes}
		else {
			return ''
		}}

	function get_xy(ngn) {
		let x = 0
		let y = 0
		let data_f = datapoints.filter((d) => { return d.ngn == ngn})
		if (data_f.length > 0) {
			let axes = data_f[0].axes
			let data_axes = datapoints.filter((d) => { return d.axes == axes})
			let index = data_axes.findIndex( d => d.ngn === ngn );
			if (axes == "regulator") {
				x = width/2
				y = height/2-(min_r+index*step)
			}
			else if (axes == "workhorse") {
				let x1 = (min_r+index*step)
				let y1 = 0
				x = x1*Math.cos(5*Math.PI/6)-y1*Math.sin(5*Math.PI/6)+width/2
				y = x1*Math.sin(5*Math.PI/6)+y1*Math.cos(5*Math.PI/6)+height/2
			}
			else if (axes == "manager") {
				let x1 = (min_r+index*step)
				let y1 = 0
				x = x1*Math.cos(Math.PI/6)-y1*Math.sin(Math.PI/6)+width/2
				y = x1*Math.sin(Math.PI/6)+y1*Math.cos(Math.PI/6)+height/2
			}
			return {x: x, y: y}
		}
	}

	function get_xy_contr(interaction_type) {
		let xc = undefined;
		let yc = undefined;
		const r = 150

		if (interaction_type == 'ur') {
			xc = width/2 + Math.cos(Math.PI/6)*r;
			yc = height/2 - Math.sin(Math.PI/6)*r;
		}
		else if (interaction_type == 'ul') {
			xc = width/2 - Math.cos(Math.PI/6)*r;
			yc = height/2 - Math.sin(Math.PI/6)*r;
		}
		else {
			xc = width/2
			yc = height/2 + r;
		}
		return {xc: xc, yc: yc}
	}

	function get_interaction_type(from_axes, to_axes) {
		if (from_axes == "regulator" && to_axes == "manager") {
			return 'ur'
		}
		else if (from_axes == "manager" && to_axes == "workhorse") {
			return 'l'
		}
		else {
			return 'ul'
		}
	}

	function handleClick(i) {
    goto("/interactions/" + i)
  }

</script>

<h1>Guus Spenkelink - UHasselt - 2056061</h1>

<!-- menu -->
<div>
<a href="/">Home</a>; 
<a href="/genes">Genes overview</a>; 
<a href="/interactions">Interactions overview</a>
</div>

<svg viewBox='0 0 {width} {height}'>

	{#each datapoints_int as d2, i (i)}
		{#if get_axes(d2.from_ngn) !== get_axes(d2.to_ngn)}
			{#if get_xy(d2.from_ngn)}
				{#if get_xy(d2.to_ngn)}
					<path d="M {get_xy(d2.from_ngn).x},{get_xy(d2.from_ngn).y} 
					Q {get_xy_contr(
						get_interaction_type(get_axes(d2.from_ngn), get_axes(d2.to_ngn))).xc},
					{get_xy_contr(
					get_interaction_type(get_axes(d2.from_ngn), get_axes(d2.to_ngn))).yc} 
					{get_xy(d2.to_ngn).x},{get_xy(d2.to_ngn).y}" 
					on:click={handleClick(i)}/>
				{/if}
			{/if}
		{/if}
	{/each}

	{#each datapoints as d}
		{#if d.axes === "regulator"}
			<circle cx={min_r+step*add_reg()} cy=0 r=2 fill='red'
				transform="translate({width/2},{height/2}) rotate(-90)"
			/>
		{/if}
		{#if d.axes === "manager"}
			<circle cx={min_r+step*add_man()} cy=0 r=2 fill='yellow'
				transform="translate({width/2},{height/2}) rotate(30)"
			/>
		{/if}
		{#if d.axes === "workhorse"}
			<circle cx={min_r+step*add_wh()} cy=0 r=2 fill='green'
				transform="translate({width/2},{height/2}) rotate(150)"
			/>
		{/if}
	{/each}
</svg>


<style>
  svg {
    border: 1px solid black;
    border-radius: 5px;
    max-width: 600px;
    max-height: 600px;
  }
	path {
							fill: none;
              stroke: black;
              stroke-width: 1;
              opacity: 0.3;
      }
  path:hover {
              fill: none;
							stroke: red;
              stroke-width: 5;
              opacity: 0.8;
  }
</style>