import React from 'react';

import MVFCLogo from '../images/MVFCLogo.png';
import WicImage from '../images/wic.png';
import SPYLogo from '../images/SPY_Logo.png';
import GoogleLogo from '../images/googlelogo.png';
import GraceHopper from '../images/grace.png';
import Latinx from '../images/latinx.jpeg';


const activitiesList = [
	{
		id: 1,
		title: 'STEM Program Founder @ Mar Vista Family Center',
		info: 'Created a program & curriculum to expose low income underrepresented students and families to STEM related careers.',
		img: MVFCLogo,
		
	},
	{
		id: 2,
		title: 'CSULB Google Research',
		info: 'Tech for K-12 Education',
		img: GoogleLogo,
	},
	{
		id: 3,
		title: 'Grace Hoppen Conference Community Scholarship Recipient',
		info: 'Received a scholarship to attend GHC 2019 and 2020.',
		img: GraceHopper,

	},
	{
		id: 4,
		title: 'Young Professional Advisory Board Member @ Safe Place For Youth',
		info: 'Advocate and fundraise for at risk and homeless youth ages 18-25.',
		img: SPYLogo,
	},
    {
		id: 5,
		title: 'Women in Computing Club Founder',
		info: 'Club that creates a safe space for women in tech.',
		img: WicImage,
	},
    {
		id: 6,
		title: 'Googles 6th Annual Latinx Student Leadership Summit Participant',
		info: 'Only 130 students from over 870 applicants were selected by Google to participate in Googles 6th Annual Latinx Student Leadership Summit (LSLS).',
		img: Latinx,
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


            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {activitiesList.map((activity) => (
            <div key={activity.id} className="group relative">
              <div className="w-full min-h-80 bg-white-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none outline-1">
                <img
                  src={activity.img}
                  alt={activity.img}
                  className="w-full h-full object-fill object-scale-down  lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="font-medium text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {activity.title}
            
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{activity.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


            
		</div>

        

        

		
		
	);
};

export default activities;