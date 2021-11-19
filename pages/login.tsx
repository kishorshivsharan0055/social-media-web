import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoundedButton from "../components/Buttons/Rounded";
import Input from "../components/Input";
import firebase from "../utils/firebaseClient";

const Login: React.FC<any> = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, loading, error] = useAuthState(firebase.auth());

	const router = useRouter();

	const uiConfig = {
		signInSuccessUrl: "/",
		signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
	};

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<ToastContainer />
			<div className="h-screen flex md:overflow-hidden px-8 md:px-0 items-start md:items-center">
				<Link href="/">
					<a>
						<img
							src="/close.svg"
							alt="Close"
							className="cursor-pointer absolute w-3 h-3 top-0 right-0 mr-12 opacity-50"
							style={{
								marginTop: "2.35rem",
							}}
						/>
					</a>
				</Link>
				<motion.div
					className="flex flex-col md:flex-row  items-center my-24 md:my-0 w-full justify-center"
					initial={{
						opacity: 0,
						y: 64,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.5,
					}}
					exit={{
						opacity: 0,
						y: 0,
					}}
				>
					<img
						src="/undraw_login.svg"
						alt="Login"
						className="px-8 w-64 md:w-1/3"
					/>
					<div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4 md:space-y-8">
						<h1 className="text-3xl mt-4 md:mt-0 md:text-5xl font-semibold">
							Login
						</h1>
						{!loading && !user && (
							<StyledFirebaseAuth
								uiConfig={uiConfig}
								firebaseAuth={firebase.auth()}
							/>
						)}

						<p className="text-center text-md md:text-lg font-light">
							Old School ? We got you
						</p>
						<form
							onSubmit={(e) => {
								e.preventDefault();
							}}
							className="flex flex-col space-y-4"
						>
							<Input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								type="email"
								placeholder="Email"
								placeholderText="Email"
							/>
							<Input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
								type="password"
								placeholderText="Password"
							/>
							<Link href="/">
								<RoundedButton
									style={{
										width: "16rem",
										margin: "35px auto 0px",
									}}
									type="submit"
									onClick={() => firebase.auth().signOut()}
								>
									<span>Sign in with email</span>
								</RoundedButton>
							</Link>
						</form>
						<Link href="/signup">
							<a className="text-sm md:text-base">
								Don&apos;t have an account ? SignUp
							</a>
						</Link>

						<div className="text-sm text-black-600 font-light px-16 text-center">
							By signing in, you agree to our{" "}
							<Link href="/terms">
								<a>
									<u>terms of use</u>
								</a>
							</Link>{" "}
							&{" "}
							<Link href="/privacy">
								<a>
									<u>privacy policy</u>.
								</a>
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default Login;
