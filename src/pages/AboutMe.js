import React from 'react';
import AboutMeBio from '../components/about/AboutMeBio';
import { AboutMeProvider } from '../context/AboutMeContext';
import AboutHeader from '../components/about/AboutHeader';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<div className="min-h-screen bg-white dark:bg-[#0b1220]">
			<AboutHeader />
			<AboutMeProvider>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 0.2 }}
					exit={{ opacity: 0 }}
					className="max-w-6xl mx-auto px-5 sm:px-6 pb-12"
				>
					<AboutMeBio />
				</motion.div>
			</AboutMeProvider>
		</div>
	);
};

export default About;
