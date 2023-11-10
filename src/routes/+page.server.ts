import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { API_URL_IP_GEO, PRIVATE_IP_GEO_KEY } from '$env/static/private';
import geoLocation from '$lib/stores/geoLocation';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	// Code not used, just for reference
	default: async ({ request }) => {
		const data = await request.formData();
		const ip = data.get('ip_address') as string;

		const response = await fetch(`${API_URL_IP_GEO}?apiKey=${PRIVATE_IP_GEO_KEY}&ipAddress=${ip}`);

		if (!response.ok) console.error(`Status: ${response.status}`, 'Could not fetch data');
		const responseJSON = await response.json();
		geoLocation.set(responseJSON);

		return responseJSON;
	}
};
