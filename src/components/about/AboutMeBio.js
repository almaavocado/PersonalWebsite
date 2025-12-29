import profileImage from '../../images/profile.png';
import React, { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="flex flex-col gap-6 sm:gap-8 mt-10 sm:mt-12 items-center">
			<div className="w-50 max-w-xl rounded-2xl overflow-hidden bg-white dark:bg-ternary-dark shadow-cyan-900/5 flex items-center justify-center">
				<img src={profileImage} className="w-full max-h-[3000px] sm:max-h-[300px] object-contain" alt="Alma Alvarado" />
			</div>

			<div className="w-full space-y-4 sm:space-y-5">
				<div className="rounded-2xl bg-white dark:bg-ternary-dark border border-gray-100 dark:border-gray-800 shadow-sm px-5 sm:px-6 py-5 sm:py-6">
					<div className="space-y-3">
						{aboutMe.map((bio) => (
							<p
								className="text-ternary-dark dark:text-ternary-light text-base sm:text-lg leading-relaxed"
								key={bio.id}
							>
								{bio.bio}
							</p>
						))}
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
					<div className="rounded-2xl border border-cyan-100 dark:border-gray-800 bg-cyan-50/60 dark:bg-gray-900/60 p-4">
						<p className="text-xs uppercase tracking-wide text-cyan-800 dark:text-cyan-200">Focus</p>
						<p className="mt-2 text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Full-stack engineering, API design, data-informed features.</p>
					</div>
					<div className="rounded-2xl border border-cyan-100 dark:border-gray-800 bg-cyan-50/60 dark:bg-gray-900/60 p-4">
						<p className="text-xs uppercase tracking-wide text-cyan-800 dark:text-cyan-200">Community</p>
						<p className="mt-2 text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Board roles, STEM mentorship, inclusive tech programs.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMeBio;
