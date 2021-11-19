import { motion } from "framer-motion";
import { withUrqlClient } from "next-urql";
import Head from "next/head";
import Link from "next/link";
import router from "next/router";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoundedButton from "../components/Buttons/Rounded";
import Input from "../components/Input";
import firebase from "../utils/firebaseClient";
import { showToast } from "../utils/showToast";

declare global {
	interface Window {
		fetchValues: ({ success: boolean, data: Object }) => void;
	}
}

type FieldError = {
	field: string;
	message: string;
};
const Signup: React.FC<any> = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [fullName, setFullName] = useState("");
	const [error, setError] = useState<FieldError | null>(null);

	const db = firebase.firestore();

	const registerUser = async () => {
		if (fullName.length <= 2 || fullName.split(" ").length === 1) {
			setError({ field: "name", message: "Enter a valid name" });
			return false;
		}
		if (password.length < 4) {
			setError({
				field: "password",
				message: "Password should be of atleast 8 Characters",
			});

			return false;
		}
		if (password !== confirmPassword) {
			setError({
				field: "confirmPassword",
				message: "Passwords don't match",
			});

			return false;
		}

		if (email.length <= 4) {
			setError({ field: "email", message: "Enter a valid email" });
			return false;
		}
		setError(null);

		await db
			.collection("users")
			.doc()
			.set({
				name: fullName,
				email: email,
				password: confirmPassword,
			})
			.then(() => {
				showToast("Successfully Registered", "success");
				router.replace("/");
			})
			.catch((err) => {
				showToast("Failed to register", "error");
			});
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
				>
					<img
						src="/undraw_login.svg"
						alt="Signup"
						className="px-8 w-64 md:w-1/3"
					/>
					<div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4 md:space-y-8">
						<h1 className="text-3xl mt-4 md:mt-0 md:text-5xl font-semibold">
							Sign Up
						</h1>
						<RoundedButton onClick={() => {}}>
							<img src="/google.svg" alt="Google Logo" />
							<span>Sign up with Google</span>
						</RoundedButton>
						<p className="text-center text-lg font-light">Or</p>

						<form
							onSubmit={(e) => {
								e.preventDefault();
							}}
							className="flex flex-col space-y-4"
						>
							<Input
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
								required
								type="text"
								placeholder="Name"
								color="white"
								placeholderText="Full Name"
							/>
							{error && error.field === "name" && (
								<p className="text-sm text-red-700 font-light">
									{error.message}
								</p>
							)}
							<Input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								type="email"
								placeholder="Email"
								placeholderText="Email"
							/>
							{error && error.field === "email" && (
								<p className="text-sm text-red-700 font-light">
									{error.message}
								</p>
							)}
							<Input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
								type="password"
								placeholderText="Password"
							/>
							{error && error.field === "password" && (
								<p className="text-sm text-red-700 font-light">
									{error.message}
								</p>
							)}
							<Input
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
								placeholder="Confirm Password"
								type="password"
								placeholderText="Confirm Password"
							/>
							{error && error.field === "confirmPassword" && (
								<p className="text-sm text-red-700 font-light">
									{error.message}
								</p>
							)}

							<RoundedButton
								style={{
									width: "16rem",
									margin: "35px auto 0px",
								}}
								type="submit"
								onClick={registerUser}
							>
								<span>Sign Up</span>
							</RoundedButton>
						</form>
						<Link href="/login">
							<a className="text-sm md:text-base">
								Already have an account ?
							</a>
						</Link>

						<div className="text-sm text-black-600 font-light px-16 text-center">
							By signing up, you agree to our{" "}
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

export default Signup;
