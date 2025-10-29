/** @format */

import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import React from "react";

const Page = async ({ params }: { params: { slug: string } }) => {
	const wixClient = wixClientServer();
	const products = await wixClient.products
		.queryProducts()
		.eq("slug", params.slug)
		.find();
	if (!products.items[0]) {
		return notFound();
	}

	const product = products.items[0];
	console.log("Product Details:", product);

	return (
		<div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 '>
			{/* img */}
			<div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
				<ProductImages images={product.media?.items} />
			</div>
			{/* txt */}
			<div className='w-full lg:w-1/2 flex flex-col gap-6'>
				<h1 className='text-4xl font-medium'>{product.name}</h1>
				<p className='text-gray-500'>{product.description}</p>
				<div className='h-[2px] bg-gray-100'></div>
				<div className='flex items-center gap-4'>
					{product.price?.discountedPrice === product.price?.price ? (
						<h2 className='font-medium text-2xl '>
							{product.price?.currency} {product.price?.price}
						</h2>
					) : (
						<>
							<h3 className='text-xl text-gray-500 line-through '>
								{product.price?.currency}
								{product.price?.price}
							</h3>
							<h2 className='font-medium text-2xl '>
								{product.price?.currency} {product.price?.discountedPrice}
							</h2>
						</>
					)}
				</div>
				<div className='h-[2px] bg-gray-100'></div>
				{product.variants && product.variants ? (
					<CustomizeProducts
						productId={product._id || ""}
						variants={product.variants}
						options={product.productOptions || []}
					/>
				) : (
					<Add
						productId={product._id || ""}
						variantId={"00000000-0000-0000-0000-000000000000"}
						stockNumber={0}
					/>
				)}

				{product.additionalInfoSections?.map((section, index) => (
					<div key={index} className='flex flex-col gap-4 mt-8'>
						<h1 className='text-2xl font-medium'>{section.title}</h1>
						<p className='text-gray-500'>{section.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Page;
