import React from 'react';

import MVFCLogo from '../images/mvfc.png';
import WicImage from '../images/wic.png';
import SPYLogo from '../images/spy.png';
import GoogleLogo from '../images/googlelogo.png';
import GraceHopper from '../images/grace.png';
import Clippers from '../images/ClippersCH.png';


export const activitiesList = [
	{
		id: 1,
		title: 'STEM Program Founder / Creator @ Mar Vista Family Center',
		info: 'Created a program & curriculum to expose low income underrepresented students and families to STEM related careers.',
		link: 'https://marvistafc.org/stem/',
		img: MVFCLogo,
		
	},
	{
		id: 2,
		title: 'LA Clippers Community Heroes Honoree',
		info: 'Recognized on court by the LA Clippers for community service and mentorship with Mar Vista Family Center.',
		link: 'https://marvistafc.org/celebrating-community-new-beginnings/',
		img: Clippers,
	},
	{
		id: 3,
		title: 'CSULB + Google exploreCSR Research',
		info: 'Tech for K-12 education and computational thinking research. Collaborated with faculty from UC Irvine, UCLA, UC San Diego, and CSULB on a $35k Google exploreCSR grant to design research workshops for women in CS.',
		link: 'https://www.csulb.edu/college-of-engineering/research-projects',
		img: GoogleLogo,
	},
	{
		id: 4,
		title: 'Grace Hoppen Conference Community Scholarship Recipient',
		info: 'Received a scholarship to attend GHC 2019 and 2020.',
		img: GraceHopper,

	},
	{
		id: 5,
		title: 'Young Professional Advisory Board Member @ Safe Place For Youth',
		info: 'Advocate and fundraise for at risk and homeless youth ages 18-25.',
		img: SPYLogo,
	},
    {
		id: 6,
		title: 'Women in Computing Club Founder',
		info: 'Club that creates a safe space for women in tech',
		img: WicImage,
	},
	
];

const activities = () => {
	return (
		<div className="container mx-auto">
			<section className="py-5 sm:py-10 mt-5 sm:mt-10">
				<div className="text-center">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Activities
					</p>
				</div>  
			</section>
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
            
					</p>
					<ul className="flex gap-4 lg:gap-8 grid grid-cols-4">
						{activitiesList.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-cyan-800 dark:hover:text-cyan-800 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-7xl">
									{link.icon}
								</i>
                
							</a>
						))}
					</ul>     
				</div>

			</div>
	);
};

export default activities;