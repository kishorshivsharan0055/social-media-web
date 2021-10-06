import React from "react";
import Link from "next/link";

const Footer: React.FC<any> = () => (
	<>
		<div className="footer-bg px-12 md:px-32 lg:px-72 py-8 sticky b-0">
			<div className="flex flex-col md:flex-row">
				<div className="mb-8 md:mb-0 md:flex-grow">
					<Link href="/">
						<a
							className="font-medium md:font-semibold text-xl text-white-500"
							style={{ color: "white" }}
						>
							Social Media
						</a>
					</Link>
				</div>

				<div className="flex justify-between md:justify-start md:space-x-16">
					<div className="flex flex-col space-y-2">
						<h1 className="font-medium text-lg">Social Media</h1>
						<Link href="/aboutus">
							<a>About Us</a>
						</Link>
						<Link href="/terms">
							<a>Terms of use</a>
						</Link>
						<Link href="/privacy">
							<a>Privacy Policy</a>
						</Link>
					</div>
				</div>
			</div>
			<div className="divider bg-white-300 mt-8 mb-6 h-px w-full" />
			<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center">
				<h2 className="text-sm text-white-800 md:flex-grow">
					© Social Media {new Date().getFullYear()}
				</h2>
				<div className="flex space-x-4 items-center ">
					<p className="opacity-75 font-light text-sm">
						Get Social :{" "}
					</p>
					<a href="https://www.instagram.com">
						<img
							src="/instagram.svg"
							alt="Instagram"
							width={18}
							height={18}
							className="duration-300 w-5 opacity-75 hover:opacity-100"
						/>
					</a>
				</div>
			</div>
		</div>
		<style jsx>
			{`
				.footer-bg {
					background-color: #16161d;
					color: white;
				}
			`}
		</style>
	</>
);

export default Footer;
