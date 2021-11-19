import React from "react";
interface PostProps {
	img: string;
	username: string;
}

export const Post: React.FC<PostProps> = ({ img, username }) => {
	return (
		<div className="xl:w-180">
			<div className="container rounded-10 border-2 m-8">
				<div className="flex flex-row align-middle items-center space-x-3 p-2 ">
					<img
						src="https://images.unsplash.com/photo-1633538497312-930a41f435e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"
						className="w-14 h-14 rounded-full border-4"
					/>
					<h3>{username}</h3>
				</div>

				<img src={img} className="xl:h-128" />

				<div className="flex flex-row space-x-5 p-4">
					<img src="/heart.png" className="w-6 h-6" />
					<img src="/chat.png" className="w-6 h-6" />
					<img src="share.png" className="w-6 h-6" />
				</div>

				<div className=" text-sm font-semibold ml-4">87 likes</div>

				<div className="flex flex-row flex-nowrap m-3">
					<h3>
						Starters 16 will be here on 20th October, 8 PM IST
						onwards. So Div 3 coders, make sure to participate and
						show off your #coding skills.(link in bio)
					</h3>
				</div>

				<h3 className="font-thin text-sm m-4">2 hours ago</h3>
			</div>
		</div>
	);
};
