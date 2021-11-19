import React from "react";
import Navbar from "../components/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../utils/firebaseClient";
import { useRouter } from "next/router";

interface profileProps {}

export const profile: React.FC<profileProps> = ({}) => {
	const [user, loading, error] = useAuthState(firebase.auth());
	const router = useRouter();

	return (
		<div>
			<Navbar />
			<section>
				<div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
					<div className="grid grid-cols-1 ">
						<div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
							<img
								alt="team"
								className="flex-shrink-0 object-cover object-center w-16 h-16 mx-auto -mt-8 rounded-full shadow-xl aboslute"
								src={firebase.auth()?.currentUser?.photoURL}
							/>
							<div className="p-6 lg:text-center">
								<span className="mb-8 text-xs font-semibold tracking-widest text-blue-400 uppercase ">
									{" "}
									Info
								</span>
								<h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl ">
									{" "}
									{firebase.auth()?.currentUser?.displayName}
								</h4>
								<p className="mt-3 text-base leading-relaxed text-gray-300">
									{" "}
								</p>
								<p></p>
								<div
									className="mt-6 cursor-pointer"
									onClick={() => {
										firebase.auth().signOut();
										router.replace("/");
									}}
								>
									<a className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-400 rounded-xl hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
										Logout{" "}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default profile;
