import { GeckoClient } from "./../clients/GeckoClient.js";

declare const process: {
	env: Record<string, string | undefined>;
};

(async () => {
	const client = new GeckoClient({
		baseURL: "https://pro-api.coingecko.com/api/v3/",
		extraHTTPOptions: {
			headers: {
				"x-cg-pro-api-key": process.env.COINGECKO_API_KEY as string,
			},
		},
	});

	const historicalData = await client.coins.history({
		coin_id: "bitcoin",
		date: new Date("2017-12-30T00:00:00Z"),
		localization: false, // Optional, defaults to true
	});

	console.log(historicalData);
})();

