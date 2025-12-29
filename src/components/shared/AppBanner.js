import React from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
import developer from '../../images/banner.png';
import { motion } from 'framer-motion';

const AppBanner = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="bg-gradient-to-r from-cyan-50 via-white to-cyan-50 dark:from-gray-900 dark:via-ternary-dark dark:to-gray-900"
		>
			<div className="max-w-6xl mx-auto px-6">
				<div className="group flex flex-col sm:flex-row items-center sm:items-stretch gap-10 sm:gap-12 px-5 sm:px-10 py-12 sm:py-16">
					<div className="w-full sm:w-1/2 lg:w-2/5 text-left flex flex-col justify-center gap-4">
						<span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800 dark:text-cyan-200">
							Full-stack engineer • Mentor
						</span>
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: 0.9,
							delay: 0.1,
						}}
						className="font-general-semibold text-3xl lg:text-4xl xl:text-5xl text-left text-ternary-dark dark:text-primary-light tracking-tight"
					>
						Alma Alvarado
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: 0.9,
							delay: 0.2,
						}}
						className="text-base md:text-xl text-left leading-tight text-gray-700 dark:text-gray-200"
					>
					  A Full-Stack Developer & Design Enthusiast
					</motion.p>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: 0.9,
							delay: 0.3,
						}}
						className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2"
					>
						<a
							download="AlmaAlvarado_SWEResume.pdf"
							href='https://almaalvarado.s3.us-west-1.amazonaws.com/AlmaAlvarado-SoftwareEngineerResume+.pdf'
							className="flex justify-center items-center px-5 sm:px-6 py-3 sm:py-3.5 mt-2 text-sm sm:text-base font-semibold rounded-xl bg-cyan-700 text-white shadow-md shadow-cyan-900/20 hover:bg-cyan-800 transition duration-300"
							aria-label="Download Resume"
						>
							<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
							<span className="text-sm sm:text-lg duration-100">
								Download CV
							</span>
						</a>
						
					
				</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0, y: -180 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
						className="w-full sm:w-1/2 lg:w-3/5 text-right mt-6 sm:mt-0"
					>
						<img
							src={developer}
							alt="Developer"
							className="w-full shadow-cyan-900/10 transform transition duration-300 group-hover:-translate-y-1"
						/>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default AppBanner;
