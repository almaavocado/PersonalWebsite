import React from 'react';

function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-sm sm:text-base text-ternary-dark dark:text-ternary-light flex items-center gap-1">
				<span>&copy; {new Date().getFullYear()}</span>
				<a
					href="https://github.com/almaavocado"
					target="__blank"
					rel="noreferrer"
					className="text-cyan-700 dark:text-cyan-300 font-semibold hover:underline hover:text-cyan-900 dark:hover:text-cyan-100 transition"
				>
					Alma Alvarado
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
