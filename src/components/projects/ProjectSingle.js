/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from 'framer-motion';
import { FiLink } from 'react-icons/fi';

const ProjectSingle = ({ title, category, image, description, link }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			
			<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<img
							src={image}
							className="rounded-t-xl border-none"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>

						<p className="text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{category}
						</p>
						<br/>
						

						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{description}
						</span>

						
						<br/>
						<br/>
						
						<div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								ease: 'easeInOut',
								duration: 0.9,
								delay: 0.3,
							}}
							className="sm:block"
						>

							<button class="font-general-medium flex juustify-center items-center text-md border border-green-600  py-2.5 sm:py-3 shadow-lg rounded-lg bg-white-800 hover:bg-green-900 text-gray-800 font-bold py-2 px-4 inline-flex items-center focus:ring-1 focus:ring-green-900 hover:text-white duration-500">
							<FiLink class= "mr-2 sm:mr-3 h-5 w-5 sm:h-6 duration-100"></FiLink>
							<a
								href={link}
								aria-label="View Code"
							>
								View Code
								
								</a>
							</button>

							{/*
							<a
								href={link}
								className="font-general-medium flex justify-center items-center content-center sm:mb-0 text-lg border border-green-600 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-emerald-800 focus:ring-1 focus:ring-green-900 hover:bg-green-900 text-gray-500 hover:text-white duration-500"
								aria-label="View Code"
							>
								<FiLink className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 duration-100"></FiLink>
								<span className="text-sm sm:text-lg font-general-medium duration-100">
									View Code
								</span>
							</a>
						*/}
				</motion.div>
						
						</div>

				

						{/* 
						<p className="underline text-md text-green-600 hover:text-blue-600">
							<a href={link}>
								Check out my code!
							</a>
						</p>
						
						*/}
						
						
					</div>
				</div>
			
		</motion.div>
	);
};

export default ProjectSingle;
