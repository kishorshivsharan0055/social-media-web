import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../utils/firebaseClient";

interface StorySliderProps {}

type userType = {
	img: string;
	username: string;
};

export const StorySlider: React.FC<StorySliderProps> = ({}) => {
	const [stories, storiesLoading, storiesError] = useCollection(
		firebase.firestore().collection("stories"),
		{}
	);

	return (
		<div className="flex flex-row border-2 p-4 bg-white-900 rounded-10 overflow-x-scroll xl:w-180 md:ml-2 md:mr-2 sm:ml-2 sm:mr-4">
			{stories?.docs?.map((item, index) => (
				<div
					className="justify-center items-center space-x-6"
					key={index}
				>
					<img
						src={item.get("img")}
						className="rounded-full border-4 w-14 h-14 ml-4"
					/>
					<h3 className="text-10">{item.get("username")}</h3>
				</div>
			))}
		</div>
	);
};
