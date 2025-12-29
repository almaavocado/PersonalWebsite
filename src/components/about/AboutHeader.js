import React from 'react';
const AboutHeader = () => {
	return (
		<div className="bg-gradient-to-r from-cyan-50 via-white to-cyan-50 dark:from-gray-900 dark:via-ternary-dark dark:to-gray-900">
			<section className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
				<div className="space-y-3">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800 dark:text-cyan-200">
						Behind the work
					</p>
					<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ternary-dark dark:text-ternary-light">
						About Me
					</h1>
					<p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
						Engineer, mentor, and community builder focused on impactful products and inclusive tech spaces.
					</p>
				</div>
			</section>
		</div>
	);
};

export default AboutHeader;
