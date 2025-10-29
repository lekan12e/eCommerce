/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "plus.unsplash.com",
				pathname: "/**", // Allows all paths under this domain
			},
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
			{
				protocol: "https",
				hostname: "static.wixstatic.com",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
