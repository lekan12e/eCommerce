/** @format */

import { collections } from "@wix/stores";
import { products } from "@wix/stores";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { cookies } from "next/headers";

export const wixClientServer = () => {
	let refreshToken;

	try {
		const cookiesStore = cookies();
		refreshToken = JSON.parse(cookiesStore.get("refreshToken")?.value || "{}");
	} catch (error) {
		console.error("Error parsing refresh token:", error);
	}

	const wixClient = createClient({
		modules: {
			products,
			collections,
		},
		auth: OAuthStrategy({
			clientId: process.env.NEXT_PUBLIC_CLIENT_ID || "",
			tokens: {
				refreshToken,
				accessToken: { value: "", expiresAt: 0 },
			},
		}),
	});

	return wixClient;
};
