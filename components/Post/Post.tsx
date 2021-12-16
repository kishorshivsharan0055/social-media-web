import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../../utils/firebaseClient";
interface PostProps {
	id: string;
	img: string;
	username: string;
	caption: string;
	isLiked: boolean;
	like_count: number;
	comments: Array<{ username: string; comment: string }>;
}

export const Post: React.FC<PostProps> = ({
	id,
	img,
	username,
	caption,
	isLiked,
	like_count,
	comments,
}) => {
	const [liked, setliked] = useState(isLiked);
	const [likedCnt, setlikedCnt] = useState(like_count);
	const [openComments, setopenComments] = useState(false);
	const [user, loading, error] = useAuthState(firebase.auth());
	const [txtComment, settxtComment] = useState("");

	const db = firebase.firestore();

	const toggleLike = async () => {
		setliked(!liked);
		if (!liked) setlikedCnt(likedCnt + 1);
		else setlikedCnt(likedCnt - 1);

		await db.collection("posts").doc(id).update({
			isLiked: !isLiked,
			like_count: likedCnt,
		});
	};

	const postComment = async () => {
		comments.push({
			username: user.displayName,
			comment: txtComment,
		});

		await db.collection("posts").doc(id).update({
			comments,
		});

		settxtComment("");
	};

	const router = useRouter();

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
					<img
						src={isLiked ? "liked.png" : "like.png"}
						className="w-6 h-6 cursor-pointer"
						onClick={toggleLike}
					/>
					<img
						src="/chat.png"
						onClick={() => setopenComments(!openComments)}
						className="w-6 h-6 cursor-pointer"
					/>
					<img src="share.png" className="w-6 h-6 cursor-pointer" />
				</div>

				<div className=" text-sm font-semibold ml-4">
					{likedCnt} likes
				</div>

				<div className="flex flex-row flex-nowrap m-3">
					<h3>{caption}</h3>
				</div>

				{openComments ? (
					<div className="flex flex-col m-3">
						<h1
							className="text-gray-500 cursor-pointer"
							onClick={() => setopenComments(!openComments)}
						>
							Show less
						</h1>
						{comments.map((item) => (
							<div className="flex flex-row space-x-8">
								<h2 className=" font-semibold">
									{item.username}
								</h2>
								<h2>{item.comment}</h2>
							</div>
						))}

						<form
							id="revue-form"
							name="revue-form"
							target="_blank"
							className="
                        p-2
                        mt-8
						w-full
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border2
                        bg-gray-50
                        rounded-xl
                        sm:flex
                      "
						>
							<div className="flex min-w-0 revue-form-group w-full">
								<label
									htmlFor="member_email"
									className="sr-only"
								>
									Post Your Comment
								</label>
								<input
									id="cta-email"
									type="text"
									onChange={(e) =>
										settxtComment(e.target.value)
									}
									value={txtComment}
									className="
                            block
                            w-full
                            px-5
                            py-3
                            text-base text-neutral-600
                            placeholder-gray-300
                            transition
                            duration-500
                            ease-in-out
                            transform
                            bg-transparent
                            border border-transparent
                            rounded-md
                            focus:outline-none
                            focus:border-transparent
                            focus:ring-2
                            focus:ring-white
                            focus:ring-offset-2
                            focus:ring-offset-gray-300
                          "
									placeholder="Post Your Comment"
								/>
							</div>
							<div className="sm:mt-0 sm:ml-3 revue-form-actions">
								<button
									type="button"
									value="Post"
									name="Post"
									onClick={postComment}
									id="member_submit"
									className="
                            block
                            w-full
                            px-5
                            py-3
                            text-base
                            font-medium
                            text-white
                            bg-blue-400
                            border border-transparent
                            rounded-lg
                            shadow
                            hover:bg-blue-500
                            focus:outline-none
                            focus:ring-2
                            focus:ring-white
                            focus:ring-offset-2
                            focus:ring-offset-gray-300
                            sm:px-10
                          "
								>
									{" "}
									Post{" "}
								</button>
							</div>
						</form>
					</div>
				) : (
					<div
						className="text-gray-500 m-3 cursor-pointer"
						onClick={() => setopenComments(!openComments)}
					>
						{" "}
						View all {comments?.length} comments{" "}
					</div>
				)}

				<h3 className="font-thin text-sm m-4">2 hours ago</h3>
			</div>
		</div>
	);
};
