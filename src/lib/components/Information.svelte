<script lang="ts">
	import geoLocation from '$lib/stores/geoLocation';
</script>

<div class="wrapper">
	<div class="container">
		<h2>{'IP Address'.toUpperCase()}</h2>
		<p>{$geoLocation?.ip ?? '--'}</p>
	</div>
	<div class="container">
		<h2>{'Location'.toUpperCase()}</h2>
		<p>
			{$geoLocation?.location.city
				? `${$geoLocation?.location.city}, ${$geoLocation?.location.country} `
				: '--'}
		</p>
	</div>
	<div class="container">
		<h2>{'Timezone'.toUpperCase()}</h2>
		<p>{$geoLocation?.location.timezone ? `UTC ${$geoLocation?.location.timezone}` : '--'}</p>
	</div>
	<div class="container">
		<h2>{'ISP'.toUpperCase()}</h2>
		<p>{$geoLocation?.as.name ?? '--'}</p>
	</div>
</div>

<style lang="scss">
	.wrapper {
		position: absolute;
		top: 200px;
		z-index: 2;
		width: fit-content;
		background-color: white;
		border-radius: 15px;
		padding: 40px 0px 40px 25px;
		display: flex;
		flex-direction: row;
		gap: 10px;
		align-items: center;
		justify-content: center;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 205px;
		padding: 0 30px 0 15px;
		text-align: left;

		h2 {
			font-size: 13px;
			font-weight: 700;
			color: var(--color-dark-gray);
			margin: 0;
		}

		p {
			margin: 0;
			color: var(--color-very-dark-grey);
			font-size: 23px;
			font-weight: 700;
		}

		&:not(:last-child) {
			border-right: 1px solid var(--color-dark-gray);
		}
	}

	@media screen and (max-width: 970px) {
		.container {
			gap: 15px;
			width: 165px;
			padding: 0 20px 0 10px;

			h2 {
				font-size: 11px;
			}

			p {
				font-size: 17px;
			}
		}
	}

	@media screen and (max-width: 800px) {
		.wrapper {
			border-radius: 15px;
			padding: 25px 0px 25px 10px;
			top: 185px;
		}

		.container {
			gap: 10px;
			width: 125px;
			padding: 0 0 0 5px;

			h2 {
				font-size: 10px;
			}

			p {
				font-size: 14px;
			}
		}
	}

	@media screen and (max-width: 635px) {
		.wrapper {
			flex-direction: column;
			padding: 30px 10px 20px 10px;
			gap: 20px;
		}

		.container {
			width: 230px;
			padding: 0 10px 0 10px;
			gap: 5px;
			text-align: center;

			&:not(:last-child) {
				border-right: none;
			}

			h2 {
				font-size: 10px;
			}

			p {
				font-size: 17px;
			}
		}
	}
</style>
