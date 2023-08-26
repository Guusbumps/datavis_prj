<script>
	import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

	export let data = [];

	const width = 600;
	const height = 600;

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
				y = height/2-(50+index*step)
			}
			else if (axes == "workhorse") {
				let x1 = (50+index*step)
				let y1 = 0
				x = x1*Math.cos(5*Math.PI/6)-y1*Math.sin(5*Math.PI/6)+width/2
				y = x1*Math.sin(5*Math.PI/6)+y1*Math.cos(5*Math.PI/6)+height/2
			}
			else if (axes == "manager") {
				let x1 = (50+index*step)
				let y1 = 0
				x = x1*Math.cos(Math.PI/6)-y1*Math.sin(Math.PI/6)+width/2
				y = x1*Math.sin(Math.PI/6)+y1*Math.cos(Math.PI/6)+height/2
			}
			return {x: x, y: y}
		}
	}

	// function get_xy_contr(x1,y1,x2,y2) {
	// 	let xc = undefined;
	// 	let yc = undefined;
	// 	const r = 5
	// 	if (x2 > x1 && x1 == width/2) {
	// 		xc = (x1+x2)/2+r*Math.abs(y2-y1)/Math.sqrt((x2-x1)^2+(y2-y1)^2)
	// 		yc = (y1+y2)/2+r*Math.abs(x2-x1)/Math.sqrt((x2-x1)^2+(y2-y1)^2)
	// 	}
	// 	else if (x2 < x1 && x1 == width/2) {
	// 		xc = (x1+x2)/2+r*Math.abs(y2-y1)/Math.sqrt((x2-x1)^2+(y2-y1)^2)
	// 		yc = (y1+y2)/2-r*Math.abs(x2-x1)/Math.sqrt((x2-x1)^2+(y2-y1)^2)
	// 	}
	// 	else {
	// 		xc = (x1+x2)/2-r*Math.abs(y2-y1)/Math.sqrt((x2-x1)^2+(y2-y1)^2)
	// 		yc = (y1+y2)/2+r*Math.abs(x2-x1)/Math.sqrt((x2-x1)^2+(y2-y1)^2)
	// 	}
	// 	return {xc: (x1+x2)/2, yc: (y1+y2)/2}
	// }

	function get_xy_contr(x1,y1,x2,y2) {
		let xc = undefined;
		let yc = undefined;
		// let dxy = undefined;;
		const r = 150;
		let dz = Math.sqrt(r^2-((x2-x1)^2+(y2-y1)^2)/4)
		let dxy = Math.sqrt(r^2-((x2-x1)^2+(y2-y1)^2)/4)
		if (x2 > x1 && Math.abs(x1-width/2)<1) {
			xc = (x1+x2)/2+dxy
			yc = (y1+y2)/2-dxy
		}
		else if (x2 < x1 && Math.abs(x1-width/2)<1) {
			xc = (x1+x2)/2-dxy
			yc = (y1+y2)/2-dxy
		}
		else {
			xc = (x1+x2)/2
			yc = (y1+y2)/2+dz
		}
		return {xc: xc, yc: yc}
	}

	function handleClick(i) {
    sluglink = i
    goto("/interactions/" + sluglink)
  }

	const step = 300/201;

</script>

<h1>Guus Spenkelink - UHasselt - 2056061</h1>

<!-- menu -->
<div>
<a href="/">Home</a>; 
<a href="/genes">Genes</a>; 
<a href="/interactions">Interactions</a>
</div>

<svg viewBox='0 0 {width} {height}'>

	{#each datapoints_int as d2}
		{#if get_axes(d2.from_ngn) !== get_axes(d2.to_ngn)}
			{#if get_xy(d2.from_ngn)}
				{#if get_xy(d2.to_ngn)}
					<path d="M {get_xy(d2.from_ngn).x},{get_xy(d2.from_ngn).y} 
					
					Q {get_xy_contr(get_xy(d2.from_ngn).x, get_xy(d2.from_ngn).y,
					get_xy(d2.to_ngn).x,get_xy(d2.to_ngn).y).xc},
					{get_xy_contr(get_xy(d2.from_ngn).x, get_xy(d2.from_ngn).y,
					get_xy(d2.to_ngn).x,get_xy(d2.to_ngn).y).yc} 
					
					{get_xy(d2.to_ngn).x},{get_xy(d2.to_ngn).y}" />
				{/if}
			{/if}
		{/if}
	{/each}

	{#each datapoints as d}
		{#if d.axes === "regulator"}
			<circle cx={50+step*add_reg()} cy=0 r=2 fill='red'
				transform="translate({width/2},{height/2}) rotate(-90)"
			/>
		{/if}
		{#if d.axes === "manager"}
			<circle cx={50+step*add_man()} cy=0 r=2 fill='yellow'
				transform="translate({width/2},{height/2}) rotate(30)"
			/>
		{/if}
		{#if d.axes === "workhorse"}
			<circle cx={50+step*add_wh()} cy=0 r=2 fill='green'
				transform="translate({width/2},{height/2}) rotate(150)"
			/>
		{/if}
	{/each}
</svg>


<style>
  svg {
    border: 1px solid black;
    border-radius: 5px;
  }
  line {
              stroke: black;
              stroke-width: 1;
              opacity: 0.3;
      }
  line:hover {
              stroke: red;
              stroke-width: 5;
              opacity: 0.8;
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