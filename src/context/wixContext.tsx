/** @format */

"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookie from "js-cookie";
import React, { createContext } from "react";

const refreshToken = JSON.parse(Cookie.get("refreshToken") || "{}");

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

export type WixClient = typeof wixClient;

export const WixContext = createContext<WixClient>(wixClient);

export const WixProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<WixContext.Provider value={wixClient}>{children}</WixContext.Provider>
	);
};
