/** @format */

import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product: React.FC<Partial<products.Product>> = ({
	_id,
	name,
	slug,
	description,
	price,
	media,
}) => {
	return (
		<Link
			className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
			href={`/${slug || _id}`}>
			<div className='relative w-full h-80'>
				<Image
					src={media?.mainMedia?.image?.url || "/product.png"}
					alt={media?.mainMedia?.image?.altText || name || ""}
					fill
					sizes='25vw'
					className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500 '
				/>
				{media?.items?.[0]?.image?.url && (
					<Image
						src={media?.items?.[0]?.image?.url || "/product.png"}
						alt={media?.items?.[0]?.image?.altText || name || ""}
						fill
						sizes='25vw'
					/>
				)}
			</div>
			<div className='flex justify-between'>
				<span className='font-medium'>{name}</span>
				<span className='font-semibold'>
					{price?.currency} {price?.price}
				</span>
			</div>
			<div className='text-sm text-gray-500'>{description}</div>
			<button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white active:scale-[1.2] transition-all ease-linear duration-200 '>
				Add To Cart
			</button>
		</Link>
	);
};

export default Product;
