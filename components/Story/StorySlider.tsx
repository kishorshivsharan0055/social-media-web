import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../utils/firebaseClient";
import { ContactUsDialog } from "../ContactUs/ContactUsDialog";

interface StorySliderProps {}

export const StorySlider: React.FC<StorySliderProps> = ({}) => {
	const [stories, storiesLoading, storiesError] = useCollection(
		firebase.firestore().collection("stories"),
		{}
	);

	const [open, setOpen] = useState(false);

	const [imgS, setImgS] = useState("");
	const [srcS, setSrcS] = useState("");
	const [nameS, setNameS] = useState("");

	return (
		<div className="flex flex-row border-2 p-4 bg-white-900 rounded-10 overflow-x-scroll">
			{stories?.docs?.map((item, index) => (
				<div
					className="justify-center items-center space-x-6 cursor-pointer"
					key={index}
					onClick={() => {
						setImgS(item.get("img"));
						setSrcS(item.get("src"));
						setNameS(item.get("username"));
						setOpen(true);
					}}
				>
					<img
						src={item.get("img")}
						className="rounded-full border-4 w-14 h-14 ml-4"
					/>
					<h3 className="text-10">{item.get("username")}</h3>
				</div>
			))}

			<ContactUsDialog
				open={open}
				setOpen={setOpen}
				img={imgS}
				src={srcS}
				name={nameS}
			/>
		</div>
	);
};

// xl:w-160 md:ml-2 md:mr-2 sm:ml-2 sm:mr-4 ml-4 mr-4
