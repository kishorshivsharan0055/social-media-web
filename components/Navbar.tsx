import React, { useState, useRef } from "react";
import useOnClickOutside from "../utils/useOnClickOutside";
import Link from "next/link";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { isServer } from "../utils/isServer";

const Navbar: React.FC<any> = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const navbar = useRef(null);
	useOnClickOutside(navbar, () => setNavbarOpen(false));
	const toggleNavbar = () => {
		setNavbarOpen(!navbarOpen);
	};
	return (
		<>
			<div
				ref={navbar}
				className={`fixed select-none z-40 w-full h-20 xl:h-24 flex flex-col justify-start xl:flex-row xl:items-center shadow-lg bg-white px-12 md:px-20 lg:px-32 overflow-hidden ${
					navbarOpen ? `nav-bar-open` : `nav-bar`
				}`}
			>
				<div className="my-2 flex items-center xl:flex-grow">
					<Link href="/">
						<a className="font-semibold text-2xl md:text-4xl flex-grow">
							Instagram
						</a>
					</Link>
					<div
						className={`my-6 h-8 xl:hidden nav-icon ${
							navbarOpen ? `nav-open` : ``
						}`}
						onClick={toggleNavbar}
					>
						<div />
					</div>
				</div>
				<div
					className={`xl:mt-0 ${
						navbarOpen ? `flex` : `hidden xl:flex`
					} space-y-3 xl:space-y-0 flex-col xl:flex-row xl:space-x-8`}
				>
					<Link href="/forbuyers">
						<a className="font-normal text-md md:text-lg">
							Account
						</a>
					</Link>
				</div>
			</div>
			<style jsx>{`
				.nav-icon {
					margin: 1em;
					width: 24px;
					color: black;
					cursor: pointer;
				}

				.nav-icon:after,
				.nav-icon:before,
				.nav-icon div {
					background-color: #000;
					content: "";
					display: block;
					height: 2px;
					margin: 6px 0 0px 0;
					transition: all 0.2s ease-in-out;
				}

				.nav-bar {
					transition: all 0.3s ease-in-out;
				}

				.nav-bar-open {
					transition: all 0.25s ease-in-out;
					height: 15rem;
				}

				.nav-open:before {
					transform: translateY(8px) rotate(135deg);
				}

				.nav-open:after {
					transform: translateY(-8px) rotate(-135deg);
				}

				.nav-open div {
					transform: scale(0);
				}
			`}</style>
		</>
	);
};

export default withUrqlClient(createUrqlClient)(Navbar);