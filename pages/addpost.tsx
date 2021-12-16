import firebase from "firebase";
import router from "next/router";
import React, { useState } from "react";
import RoundedButton from "../components/Buttons/Rounded";
import Navbar from "../components/Navbar";
import firebaseapp from "../utils/firebaseClient";
import { showToast } from "../utils/showToast";

interface addpostProps {}

const addpost: React.FC<addpostProps> = ({}) => {
	const allInputs = { imgUrl: "" };
	const [imageAsFile, setImageAsFile] = useState<any>();
	const [imageAsUrl, setImageAsUrl] = useState(allInputs);
	const [uploading, setuploading] = useState(false);
	const [caption, setcaption] = useState("");

	const handleImageAsFile = (e) => {
		const image = e.target.files[0];
		console.log(image);
		setImageAsFile(image);
	};

	const uploadtoFirebase = async () => {
		try {
			setuploading(true);
			const storage = firebase.storage(firebaseapp.apps[0]);
			const storageRef = storage.ref("posts");
			await storageRef.child(imageAsFile.name).put(imageAsFile);
			const imageUrl = await storageRef
				.child(imageAsFile.name)
				.getDownloadURL();

			const db = firebase.firestore();
			await db
				.collection("posts")
				.doc()
				.set({
					username: firebaseapp.auth().currentUser.displayName,
					img: imageUrl,
					caption: caption,
					timestamp: firebaseapp.firestore.Timestamp.now(),
				})
				.then(() => {
					showToast("Post uploaded", "success");
					router.replace("/");
				})
				.catch((err) => {
					showToast("Failed to upload post", "error");
				});
		} catch (err) {
			console.log(err);
		}
		setuploading(true);
	};

	return (
		<div>
			<Navbar />
			<section className="w-full bg-white dark:bg-wickeddark">
				<div className="relative items-center w-full px-5 py-12 mx-auto  md:px-12 lg:px-16 max-w-7xl lg:py-24">
					<div className="flex w-full mx-auto text-left">
						<div className="relative inline-flex items-center mx-auto align-middle">
							<div className="pb-12 text-center shadow-md p-10">
								<h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter  text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
									{" "}
									Add Post{" "}
								</h1>
								<form
									action=""
									method="post"
									id="revue-form"
									name="revue-form"
									target="_blank"
									className="p-2 mt-8 transition duration-500 ease-in-out transform  border2 bg-gray-50 md:mx-auto rounded-xl sm:max-w-lg sm:flex"
								>
									<input
										// allows you to reach into your file directory and upload image to the browser
										type="file"
										onChange={handleImageAsFile}
									/>
								</form>

								<div className="flex-1 min-w-0 revue-form-group bg-gray-50 mt-6">
									<label
										htmlFor="member_email"
										className="sr-only"
									>
										Caption
									</label>
									<input
										id="cta-email"
										type="email"
										onChange={(e) =>
											setcaption(e.target.value)
										}
										className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md  text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
										placeholder="Caption"
									/>
								</div>

								<div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
									<RoundedButton
										loading={uploading}
										className="block w-full px-5 py-3 text-base font-medium text-white bg-blue-400 border border-transparent rounded-lg shadow  hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10 mt-6"
										onClick={uploadtoFirebase}
									>
										Post
									</RoundedButton>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default addpost;
