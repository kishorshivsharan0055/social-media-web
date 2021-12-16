import "@rmwc/circular-progress/circular-progress.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import firebase from "../utils/firebaseClient";
import Link from "next/link";

export const searchuser = (): JSX.Element => {
	let varr = "kii";
	const [isLoading, setloading] = useState(false);
	const [user, loading, error] = useAuthState(firebase.auth());
	const [searchTerm, setsearchTerm] = useState("");
	const [searchResult, setsearchResult] = useState<
		Array<{
			username: string;
			img: string;
		}>
	>([]);
	const [userData, setUserData] = useState<
		Array<{
			username: string;
			img: string;
		}>
	>([]);

	const router = useRouter();
	const [users, userLoading, userError] = useCollection(
		firebase.firestore().collection("users"),
		{}
	);

	useEffect(() => {
		if (users) {
			users.docs.map((item) => {
				userData.push({
					username: item.get("username"),
					img: item.get("img"),
				});
			});
		}
	}, [users, userLoading]);

	useEffect(() => {
		if (!loading && !user) router.replace("/login");
	}, [user, loading]);

	const search = async (text: string) => {
		if (text.length < 1) {
			setsearchResult([]);
			return;
		}

		setsearchResult(
			userData.filter((item) =>
				item?.username?.toLowerCase().includes(searchTerm.toLowerCase())
			)
		);

		searchResult.map((item) => {
			console.log(item.username, item.img);
		});
	};

	return (
		<div>
			<Head>
				<title>Search User</title>
			</Head>

			<main>
				<div>
					<Navbar />
				</div>

				<div className="flex flex-col mt-10 justify-center items-center text-left xl:ml-72 xl:mr-72 md:ml-2 md:mr-2 sm:ml-2 sm:mr-4 mr-2 ml-2">
					<div className="flex flex-row space-x-2 w-full p-2">
						<div className="flex-grow w-full">
							<Input
								placeholderText="Search"
								className="rounded-full"
								value={searchTerm}
								onChange={(e) => {
									setsearchTerm(e.target.value);
									search(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="text-left items-start justify-start">
						{searchTerm.length > 0 &&
							searchResult.map((item) => (
								<Link href={`/users/${item.username}`}>
									<h3 className="text-left m-4">
										{item.username}
									</h3>
								</Link>
							))}
					</div>
				</div>
			</main>

			<style jsx>{``}</style>
		</div>
	);
};

export default searchuser;
