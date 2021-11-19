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

	const userData: userType[] = [
		{
			img: "https://images.unsplash.com/photo-1633538497312-930a41f435e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
			username: "jack_m12",
		},
		{
			img: "https://images.unsplash.com/photo-1633538497312-930a41f435e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
			username: "jack_m12",
		},
		{
			img: "https://images.unsplash.com/photo-1633538497312-930a41f435e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
			username: "jack_m12",
		},
		{
			img: "https://images.unsplash.com/photo-1633538497312-930a41f435e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
			username: "jack_m12",
		},
		{
			img: "https://images.unsplash.com/photo-1633538497312-930a41f435e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
			username: "jack_m12",
		},
		{
			img: "https://images.unsplash.com/photo-1633538497312-930a41f435e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
			username: "jack_m12",
		},
		{
			img: "https://images.unsplash.com/photo-1633538497312-930a41f435e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
			username: "jack_m12",
		},
		{
			img: "https://images.unsplash.com/photo-1633538497312-930a41f435e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
			username: "jack_m12",
		},
		{
			img: "https://images.unsplash.com/photo-1633538497312-930a41f435e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
			username: "jack_m12",
		},
		{
			img: "https://images.unsplash.com/photo-1633538497312-930a41f435e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
			username: "jack_m12",
		},
	];
	return (
		<div className="flex flex-row border-2 m-8 p-4 bg-white-900 rounded-10  overflow-x-scroll xl:w-180">
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
