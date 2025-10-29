/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Category from "./Categoty";
import { wixClientServer } from "@/lib/wixClientServer";
import { collections } from "@wix/stores";

const CategoryList = async () => {
	const wixClient = wixClientServer();
	const res = await wixClient.collections.queryCollections().find();

	const categories: collections.Collection[] = res.items;
	return (
		<div className='px-4 overflow-x-scroll scrollbar-hide'>
			<div className='flex gap-4 md:gap-8'>
				{categories.map((category) => (
					<Category
						key={category._id}
						name={category.name || "Unnamed Category"}
						imageUrl={category.media?.mainMedia?.image?.url || "cat.png"}
						slug={category.slug || ""}
					/>
				))}
			</div>
		</div>
	);
};

export default CategoryList;
