/** @format */

import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { WixContext } from "@/context/wixContext";
import useWixClient from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import Link from "next/link";
import { Suspense, use, useContext, useEffect } from "react";

const HomePage = async () => {
	// const wixContext = useWixClient();

	// const getProducts = async () => {
	//
	// 	console.log(res.items);
	// };

	// useEffect(() => {
	// 	getProducts();
	// }, []);

	return (
		<div className=''>
			<Slider />
			<div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
				<h1 className='text-2xl'>Featured Products</h1>
				<Suspense fallback={<div>Loading...</div>}>
					<ProductList
						categoryId={"af7eb253-058a-bc09-12e2-cfbab806d75b"}
						limit={4}
					/>
				</Suspense>
			</div>
			<div className='mt-24'>
				<h1 className='text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-24'>
					Categories
				</h1>
				<Suspense fallback={<div>Loading...</div>}>
					<CategoryList />
				</Suspense>
			</div>
			<div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
				<h1 className='text-2xl'>New Products</h1>
				<ProductList
					categoryId={process.env.NEW_CATEGORY_ID as string}
					limit={4}
				/>
			</div>
			<div className='flex items-center justify-center'></div>
		</div>
	);
};

export default HomePage;
