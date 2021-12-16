import "@rmwc/circular-progress/circular-progress.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { Post } from "../components/Post/Post";
import { StorySlider } from "../components/Story/StorySlider";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../utils/firebaseClient";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Home = (): JSX.Element => {
	const [user, loading, error] = useAuthState(firebase.auth());

	const [posts, postsLoading, postsError] = useCollection(
		firebase.firestore().collection("posts").orderBy("timestamp", "desc"),
		{}
	);

	const router = useRouter();

	useEffect(() => {
		if (!loading && !user) router.replace("/login");
	}, [user, loading]);

	return (
		<div>
			<Head>
				<title>Social Media</title>
			</Head>

			<main>
				<div>
					<Navbar />
				</div>

				<div className="flex flex-col mt-10 justify-center items-center xl:ml-60 xl:mr-60 md:ml-2 md:mr-2 sm:ml-2 sm:mr-4 mr-2 ml-2">
					<StorySlider />

					{posts?.docs?.map((item) => (
						<Post
							id={item.id}
							key={item.id}
							img={item.get("img")}
							username={item.get("username")}
							caption={item.get("caption")}
							isLiked={item.get("isLiked")}
							like_count={item.get("like_count")}
							comments={item.get("comments")}
						/>
					))}
				</div>
			</main>

			<style jsx>{``}</style>
		</div>
	);
};

export default Home;
