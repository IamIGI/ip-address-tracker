<script lang="ts">
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	import { onMount, onDestroy, setContext } from 'svelte';

	export let bounds: L.LatLngBoundsExpression | undefined = undefined;
	export let view: L.LatLngExpression | undefined = undefined;
	export let zoom: number | undefined = undefined;

	let map: L.Map | undefined;
	let mapElement: HTMLDivElement;

	onMount(() => {
		if (!bounds && (!view || !zoom)) {
			throw new Error('Must set either bound, or view and zoom');
		}

		map = L.map(mapElement);
		L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
			attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,&copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`
		}).addTo(map);
	});

	$: if (map) {
		if (bounds) {
			map.fitBounds(bounds);
		} else if (view && zoom) {
			map.setView(view, zoom);
		}
	}

	onDestroy(() => {
		map?.remove();
		map = undefined;
	});

	setContext('map', {
		getMap: () => map
	});
</script>

<h1>Map</h1>
<div id="map-wrapper" bind:this={mapElement}>
	{#if map}
		<slot />
	{/if}
</div>

<style lang="scss">
	#map-wrapper {
		height: 400px;
		width: 400px;
	}
</style>
