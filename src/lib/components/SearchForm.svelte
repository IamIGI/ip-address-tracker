<script lang="ts">
	import geoLocation from '$lib/stores/geoLocation';
	import icon_arrow from '$assets/images/icon-arrow.svg';

	let searchInput = '';

	const handleSubmit = async () => {
		const baseURL = import.meta.env.VITE_API_URL_IP_GEO;
		const api_key = import.meta.env.VITE_IP_GEO_KEY;
		const response = await fetch(`${baseURL}?apiKey=${api_key}&ipAddress=${searchInput}`);
		if (!response.ok) console.error(`Status: ${response.status}`, 'Could not fetch data');
		const responseJSON = await response.json();
		geoLocation.set(responseJSON);
	};
</script>

<div class="wrapper">
	<h1>IP Address Tracker</h1>
	<form on:submit|preventDefault={handleSubmit}>
		<input
			type="text"
			name="ip_address"
			placeholder="Search for any IP address or domain"
			bind:value={searchInput}
		/>
		<button type="submit"><img src={icon_arrow} alt="icon" /> </button>
	</form>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		height: 280px;
		padding-top: 40px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 20px;
		background-image: url('$assets/images/pattern-bg-desktop.png');

		h1 {
			margin: 0px;
			color: white;
		}

		form {
			display: flex;
			width: 100%;
			justify-content: center;
			input {
				height: 50px;
				width: 460px;
				border-top-left-radius: 10px;
				border-bottom-left-radius: 10px;
				cursor: pointer;
				border: none;
				padding-left: 15px;
				font-size: var(--font-size-input);

				&:focus {
					border: none;
					outline: none;
				}
			}

			button {
				background-color: var(--color-very-dark-grey);
				color: white;
				border-top-right-radius: 10px;
				border-bottom-right-radius: 10px;
				padding: 0 20px;
				cursor: pointer;
				border: none;

				&:hover {
					background-color: var(--color-dark-gray);
				}
			}
		}
	}

	@media screen and (max-width: 800px) {
		.wrapper {
			height: 230px;
		}
	}

	@media screen and (max-width: 635px) {
		.wrapper {
			/* height: 350px; */
			/* background-image: url('$assets/images/pattern-bg-mobile.png'); */
			h1 {
				font-size: 25px;
			}
			form {
				input {
					width: 200px;
				}
			}
		}
	}

	@media screen and (max-width: 375px) {
		.wrapper {
			height: 300px;
			background-image: url('$assets/images/pattern-bg-mobile.png');
		}
	}
</style>
