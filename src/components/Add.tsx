/** @format */

"use client";
import React from "react";

const Add = ({
	productId,
	variantId,
	stockNumber,
}: {
	productId: string;
	variantId: string;
	stockNumber: number;
}) => {
	const [quantity, setQuantity] = React.useState(1);
	const maxQuantity = stockNumber;
	return (
		<div className='flex flex-col gap-4'>
			<h4 className='font-medium'>Choose a Quantity</h4>
			<div className='flex justify-between'>
				<div className='flex items-center gap-4'>
					<div className='bg-gray-100 py-2 px-4 flex rounded-3xl items-center justify-between w-32'>
						<button
							onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
							className='cursor-pointer text-xl'>
							-
						</button>
						<span>{quantity}</span>
						<button
							onClick={() =>
								setQuantity((prev) => Math.min(prev + 1, maxQuantity))
							}
							className='cursor-pointer text-xl'>
							+
						</button>
					</div>
					<div className='text-sm'>
						Only <span className='text-orange-500'>{stockNumber} items</span>{" "}
						left!
						<br /> {"Don't"} miss it
					</div>
				</div>
				<button className='w-36 text-sm rounded-3xl ring-1 ring-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0'>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default Add;
