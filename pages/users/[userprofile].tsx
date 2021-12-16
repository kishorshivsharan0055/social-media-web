import { useRouter } from "next/router";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";

interface profileProps {}

export const profile: React.FC<profileProps> = ({}) => {
	const router = useRouter();
	const [username, setusername] = useState(router.query.product);

	return (
		<div>
			<Navbar />
			<section>
				<div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
					<div className="grid grid-cols-1 ">
						<div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
							<img
								alt="img"
								className="flex-shrink-0 object-cover object-center w-16 h-16 mx-auto -mt-8 rounded-full shadow-xl aboslute"
								src={
									"https://images.unsplash.com/photo-1633538497312-930a41f435e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"
								}
							/>
							<div className="p-6 lg:text-center">
								<span className="mb-8 text-xs font-semibold tracking-widest text-blue-400 uppercase ">
									{" "}
									Info
								</span>
								<h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl ">
									{" "}
									{"mrudula_123"}
								</h4>
								<p className="mt-3 text-base leading-relaxed text-gray-300">
									{" "}
								</p>
								<p></p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default profile;
