import React from 'react';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-alma.svg';
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

	function closeMenu() {
		if (showMenu) setShowMenu(false);
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
			className="w-full sticky top-0 z-30 bg-white/85 dark:bg-[#0b1220]/85 backdrop-blur-sm border-b border-gray-100/80 dark:border-gray-800/80"
		>
			<div className="z-10 max-w-6xl mx-auto px-4 sm:px-6 block sm:flex sm:justify-between sm:items-center py-3 sm:py-4">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-2 sm:px-0">
					<div>
						<Link to="/">
						
								<img
									src={logo}
									className="w-32 sm:w-36"
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
							? 'flex flex-col sm:ml-4 mt-3 sm:mt-0 sm:flex px-3 sm:px-0 pb-3 sm:pb-0 gap-1 sm:gap-0 divide-y divide-gray-200 dark:divide-gray-800 sm:divide-y-0 rounded-2xl bg-white dark:bg-ternary-dark shadow-lg border border-gray-100 dark:border-gray-800 sm:shadow-none sm:border-0 sm:bg-transparent'
							: 'hidden'
					}
				>
						<Link
						to="/about"
						className="flex-1 flex justify-start text-left text-primary-dark dark:text-ternary-light hover:text-cyan-800 dark:hover:text-cyan-300 sm:mx-3 px-2 py-3 sm:px-0 sm:py-2 text-sm sm:text-base rounded-xl sm:rounded-none"
						onClick={closeMenu}
						aria-label="About Me"
					>
						About Me
					</Link>

					<Link
						to="/clients"
						className="flex-1 flex justify-start text-left text-primary-dark dark:text-ternary-light hover:text-cyan-800 dark:hover:text-cyan-300 sm:mx-3 px-2 py-3 sm:px-0 sm:py-2 text-sm sm:text-base rounded-xl sm:rounded-none"
						onClick={closeMenu}
						aria-label="Clients"
					>
						Clients
					</Link>
					
					
					<Link
						to="/projects"
						className="flex-1 flex justify-start text-left text-primary-dark dark:text-ternary-light hover:text-cyan-800 dark:hover:text-cyan-300 sm:mx-3 px-2 py-3 sm:px-0 sm:py-2 text-sm sm:text-base rounded-xl sm:rounded-none"
						onClick={closeMenu}
						aria-label="Projects"
					>
						Projects
					</Link>

					<Link
						to="/skills"
						className="flex-1 flex justify-start text-left text-primary-dark dark:text-ternary-light hover:text-cyan-800 dark:hover:text-cyan-300 sm:mx-3 px-2 py-3 sm:px-0 sm:py-2 text-sm sm:text-base rounded-xl sm:rounded-none"
						onClick={closeMenu}
						aria-label="Projects"
					>
						Skills
					</Link>

					<Link
						to="/activities"
						className="flex-1 flex justify-start text-left text-primary-dark dark:text-ternary-light hover:text-cyan-800 dark:hover:text-cyan-300 sm:mx-3 px-2 py-3 sm:px-0 sm:py-2 text-sm sm:text-base rounded-xl sm:rounded-none"
						onClick={closeMenu}
						aria-label="Activities"
					>
						Activities
					</Link>
				
				</div>

				{/* Header links large screen */}
				<div className="flex-1 flex justify-center font-general-medium hidden sm:ml-4 sm:mt-0 sm:flex p-0 gap-1 sm:gap-2">
					
					<Link
						to="/about"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-cyan-800 dark:hover:text-cyan-300 sm:px-3 py-2"
						aria-label="About Me"
					>
						About Me
					</Link>

					<Link
						to="/clients"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-cyan-800 dark:hover:text-cyan-300 sm:px-3 py-2"
						aria-label="Clients"
					>
						Clients
					</Link>
					
					
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-cyan-800 dark:hover:text-cyan-300 sm:px-3 py-2"
						aria-label="Projects"
					>
						Projects
					</Link>

					<Link
						to="/skills"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-cyan-800 dark:hover:text-cyan-300 sm:px-3 py-2"
						aria-label="Projects"
					>
						Skills
					</Link>
					
					<Link
						to="/activities"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-cyan-800 dark:hover:text-cyan-300 sm:px-3 py-2"
						aria-label="Activities"
					>
						Activities
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
