<script lang="ts">
	import SearchForm from '$lib/components/SearchForm.svelte';
	import geoLocation from '$lib/stores/geoLocation';

	const getStore = () => {
		console.log($geoLocation);
	};
</script>

<button on:click={getStore}>getStore</button>
<SearchForm />
