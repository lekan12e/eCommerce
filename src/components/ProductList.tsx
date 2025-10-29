/** @format */

import Image from "next/image";
import div from "next/link";
import Button from "./Button";
import Link from "next/link";
import Product from "./Product";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
interface Products {
	id: number;
	name: string;
	image1Url: string;
	image2Url: string;
	description: string;
	price: number;
}

const ProductList = async ({
	categoryId,
	limit,
	searchParams,
}: {
	categoryId: string;
	limit?: number;
	searchParams?: any;
}) => {
	const wixClient = wixClientServer();
	const productQuery = wixClient.products
		.queryProducts()
		.startsWith("name", searchParams?.Search || "")
		.eq("collectionIds", categoryId || "af7eb253-058a-bc09-12e2-cfbab806d75b")
		.hasSome(
			"productType",
			searchParams?.type ? [searchParams.type] : ["physical", "digital"]
		)
		.gt("priceData.price", searchParams?.min || 0)
		.lt("priceData.price", searchParams?.max || 1000000)
		.limit(limit || 20);
	// .find();

	if (searchParams?.sort) {
		const [sortType, sortOrder] = searchParams.sort.split(" ");

		if (sortType === "asc") {
			productQuery.ascending(sortOrder).find();
		}
		if (sortType === "desc") {
			productQuery.descending(sortOrder).find();
		}
	}

	const res = await productQuery.find();

	const products: products.Product[] = res.items;
	console.log("search params in product list:", searchParams);

	return (
		<div className='flex gap-x-8 gap-y-16 mt-12 justify-between flex-wrap'>
			{products.map((product) => (
				<Product key={product._id} {...product} />
			))}
		</div>
	);
};

export default ProductList;
