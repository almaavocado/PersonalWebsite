/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { SiAnaconda, SiFigma, SiGithub, SiGooglecloud, SiGooglemaps, SiJetbrains } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
  DiJira,
} from "react-icons/di";

import {
	SiReplit,
	SiVisualstudiocode,
	SiIntellijidea,
	SiGooglecolab,
  } from "react-icons/si";


const socialLinks = [
	{
		id: 1,
		icon: <DiPython />,
		url: "https://www.python.org/",
	},
	{
		id: 2,
		icon: <DiJava />,
		url: "https://www.java.com/en/",
	},
	{
		id: 3,
		icon: <DiJavascript1 />,
		url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	{
		id: 4,
		icon: <DiReact />,
		url: "https://reactjs.org/",
	},

	{
		id: 5,
		icon: <DiGit />,
		url: "https://git-scm.com/",
	},
	{
		id: 6,
		icon: <DiJira />,
		url: "https://www.atlassian.com/software/jira",
	},
	{
		id: 7,
		icon: <SiGooglecloud />,
		url: "https://cloud.google.com/gcp",
	},
	{
		id: 8,
		icon: <SiGooglemaps />,
		url: "https://developers.google.com/maps/documentation",
	},

];



const toolLinks = [
	{
		id: 1,
		icon: <SiVisualstudiocode />,
		url: "https://code.visualstudio.com/",
	},
	{
		id: 2,
		icon: <SiIntellijidea />,
		url: "https://www.jetbrains.com/idea/",
	},
	{
		id: 3,
		icon: <SiReplit />,
		url: "https://Replit.com/",
	},
	{
		id: 4,
		icon: <SiGooglecolab />,
		url: "https://colab.research.google.com/",
	},
	{
		id: 5,
		icon: <SiGithub />,
		url: "https://www.github.com/",
	},
	{
		id: 6,
		icon: <SiAnaconda />,
		url: "https://www.anaconda.com/",
	},
	{
		id: 7,
		icon: <SiJetbrains />,
		url: "https://www.jetbrains.com/datagrip/",
	},
	{
		id: 7,
		icon: <SiFigma />,
		url: "https://www.figma.com/",
	},

];

const Skills = () => {
	return (
		<div className="container mx-auto">
			<section className="py-5 sm:py-10 mt-5 sm:mt-10">
				<div className="text-center">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Professional Skillset
					</p>
				</div>	
			</section>
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						
					</p>
					<ul className="flex gap-4 lg:gap-8 grid grid-cols-4">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-green-800 dark:hover:text-green-800 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-7xl">
									{link.icon}
								</i>
								
							</a>
						))}
					</ul>			
				</div>


				<section className="py-5 sm:py-10 mt-5 sm:mt-10">
				<div className="text-center">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Tools I Use
					</p>
				</div>	
			</section>
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						
					</p>
					<ul className="flex gap-4 lg:gap-8 grid grid-cols-4">
						{toolLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-green-800 dark:hover:text-green-800 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
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

export default Skills;