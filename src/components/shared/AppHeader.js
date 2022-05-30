import React from 'react';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../images/mentorlogo.svg';
import EmailMeModal from '../EmailMeModal';
import { motion } from 'framer-motion';

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	function showEmailMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link to="/">
						
								<img
									src={logo}
									className="w-36"
									alt="Logo"
								/>
							
						</Link>
					</div>

				

					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<Link
						to="/about"
						className=" flex-1 flex justify-center mr-auto text-primary-dark dark:text-ternary-light hover:text-green-800  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="About Me"
					>
						About Me
					</Link>
					
					<Link
						to="/projects"
						className=" flex-1 flex justify-center mr-aut text-primary-dark dark:text-ternary-light hover:text-green-800 dark:hover:text-green-800  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>

					<Link
						to="/skills"
						className=" flex-1 flex justify-center mr-aut text-primary-dark dark:text-ternary-light hover:text-green-800 dark:hover:text-green-800  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Skills
					</Link>
				
				</div>

				{/* Header links large screen */}
				<div className="flex-1 flex justify-center mr-auto font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-items-center shadow-lg sm:shadow-none">
					
					<Link
						to="/about"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-green-800 dark:hover:text-green-800   sm:mx-4 mb-2 sm:py-2"
						aria-label="About Me"
					>
						About Me
					</Link>
					
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-green-800 dark:hover:text-green-800   sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>

					<Link
						to="/skills"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-green-800 dark:hover:text-green-800   sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Skills
					</Link>
					
					
				</div>

				
			</div>
			{/* Email me modal */}
			<div>
				{showModal ? (
					<EmailMeModal
						onClose={showEmailMeModal}
						onRequest={showEmailMeModal}
					/>
				) : null}
				{showModal ? showEmailMeModal : null}
			</div>
		</motion.nav>
	);
};

export default AppHeader;
