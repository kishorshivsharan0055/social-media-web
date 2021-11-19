import React from "react";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

interface messageProps {}

type chatboxProps = {
	text: string;
	right: boolean;
};

const ChatBox: React.FC<chatboxProps> = ({ text, right }) => {
	return (
		<div className="m-3" style={{ alignItems: "flex-end" }}>
			<h3
				className={`border-2 rounded-10 p-1 ${
					right ? "text-right" : "text-left"
				}`}
			>
				hiee
			</h3>
		</div>
	);
};

export const message: React.FC<messageProps> = ({}) => {
	return (
		<div className="flex flex-col justify-center w-full items-center align-baseline">
			<Navbar />

			<div className="justify-center border-2 rounded-10 shadow-sm m-20 h-128">
				<div className="flex flex-row align-middle items-center space-x-3 p-2 hover:bg-white-200 cursor-pointer">
					<img
						src="https://images.unsplash.com/photo-1633538497312-930a41f435e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"
						className="w-14 h-14 rounded-full border-4"
					/>
					<div>
						<h3>jack</h3>
					</div>
				</div>
				<hr className="border-1 bg-black-200"></hr>
				<br></br>
				<div className="w-full flex flex-col">
					<ChatBox text="hiee" right={true} />
					<ChatBox text="hiee" right={false} />
				</div>

				<div className="flex flex-row space-x-2 w-full p-2">
					<div className="flex-grow w-full">
						<Input
							placeholderText="Send Message"
							className="rounded-full"
						/>
					</div>
					<img src="/send.png" className="w-8 h-8 self-center " />
				</div>
			</div>
		</div>
	);
};

export default message;
