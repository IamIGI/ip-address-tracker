<script lang="ts">
	import { enhance } from '$app/forms';
	import geoLocation from '$lib/stores/geoLocation';
	import type { SubmitFunction } from '@sveltejs/kit';

	let searchInput = '';

	geoLocation.subscribe((geo) => {
		console.log(geo);
	});
	const handleSubmit = async () => {
		const baseURL = import.meta.env.VITE_API_URL_IP_GEO;
		const api_key = import.meta.env.VITE_IP_GEO_KEY;
		const response = await fetch(`${baseURL}?apiKey=${api_key}&ipAddress=${searchInput}`);
		if (!response.ok) console.error(`Status: ${response.status}`, 'Could not fetch data');
		const responseJSON = await response.json();
		geoLocation.set(responseJSON);

		console.log(responseJSON);
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" name="ip_address" bind:value={searchInput} />
	<button type="submit">Send </button>
</form>

<p>{$geoLocation?.location.country}</p>
