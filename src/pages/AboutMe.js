import React from 'react';
import AboutMeBio from '../components/about/AboutMeBio';
import { AboutMeProvider } from '../context/AboutMeContext';
import AboutHeader from '../components/about/AboutHeader';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<><AboutHeader></AboutHeader><AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
			</motion.div>
		</AboutMeProvider></>
	);
};

export default About;
