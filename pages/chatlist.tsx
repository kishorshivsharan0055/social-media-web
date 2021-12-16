import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

interface ChatListProps {}

export const chatlist: React.FC<ChatListProps> = ({}) => {
	const chatListData = [
		{
			name: "jack_m12",
			lastChat: "hellooo",
		},
		{
			name: "jack",
			lastChat: "heyyyy",
		},
		{
			name: "jack",
			lastChat: "holaaa",
		},
	];
	return (
		<div className="flex flex-col justify-center w-full items-center align-baseline">
			<Navbar />
			<h1 className="text-xl mt-10">Messages</h1>

			<div className="justify-center border-2 m-10 xl:w-160 lg:w-160 w-96">
				{chatListData.map((item, index) => (
					<Link href="/message" key={index}>
						<div className="flex flex-row align-middle items-center space-x-3 p-2 hover:bg-white-200 cursor-pointer">
							<img
								src="https://images.unsplash.com/photo-1633538497312-930a41f435e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"
								className="w-14 h-14 rounded-full border-4"
							/>
							<div>
								<h3>{item.name}</h3>
								<h4 className="font-thin">{item.lastChat}</h4>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default chatlist;
