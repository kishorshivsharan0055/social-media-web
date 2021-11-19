import "@rmwc/circular-progress/circular-progress.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { Post } from "../components/Post/Post";
import { StorySlider } from "../components/Story/StorySlider";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../utils/firebaseClient";

export const Home = (): JSX.Element => {
	const [posts, postsLoading, postsError] = useCollection(
		firebase.firestore().collection("posts"),
		{}
	);

	return (
		<div>
			<Head>
				<title>Social Media</title>
			</Head>

			<main>
				<div>
					<Navbar />
				</div>

				<div className="mt-10 justify-center items-center xl:ml-60 xl:mr-40 md:ml-2 md:mr-2 sm:ml-2 sm:mr-4">
					<StorySlider />

					{posts?.docs?.map((item) => (
						<Post
							img={item.get("img")}
							username={item.get("username")}
						/>
					))}
				</div>
			</main>

			<style jsx>{``}</style>
		</div>
	);
};

export default Home;
