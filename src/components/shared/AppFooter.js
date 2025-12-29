import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/almaavocado',
	},
	{
		id: 2,
		icon: <FiLinkedin />,
		url: 'https://linkedin.com/in/almaalvarado11/',
	},
];

const AppFooter = () => {
	return (
		<footer className="mt-16 sm:mt-20 bg-gradient-to-r from-cyan-50 via-white to-cyan-50 dark:from-gray-900 dark:via-ternary-dark dark:to-gray-900 border-t border-gray-100/80 dark:border-gray-800/80">
			<div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-14">
				<div className="font-general-regular flex flex-col justify-center items-center gap-5 sm:gap-6 text-center">
					<p className="text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
						Let&apos;s connect
					</p>
					<ul className="flex gap-4 sm:gap-5">
						{socialLinks.map((link) => (
							<li key={link.id}>
								<a
									href={link.url}
									target="__blank"
									rel="noreferrer"
									className="inline-flex items-center justify-center h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-cyan-800 dark:hover:text-cyan-300 shadow-sm hover:-translate-y-0.5 transition duration-200"
								>
									<i className="text-xl sm:text-2xl md:text-2xl">
										{link.icon}
									</i>
								</a>
							</li>
						))}
					</ul>

					<div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
						<AppFooterCopyright />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default AppFooter;
