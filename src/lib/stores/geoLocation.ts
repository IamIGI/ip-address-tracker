import { writable } from 'svelte/store';

type GeoLocation = {
	ip: string;
	location: {
		country: string;
		region: string;
		city: string;
		lat: number;
		lng: number;
		postalCode: string;
		timezone: string;
		geonameId: number;
	};
	as: {
		asn: number;
		name: string;
		route: string;
		domain: string;
		type: string;
	};
	isp: string;
};

const geoLocation = writable<GeoLocation | null>(null);

export default geoLocation;
