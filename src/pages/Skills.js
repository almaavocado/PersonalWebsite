/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { 
	SiAnaconda, 
	SiGithub, 
	SiOpenai,
	SiJetbrains, 
	SiReplit,
	SiVisualstudiocode,
	SiIntellijidea,
	SiGooglecolab,
	SiMysql,
	SiPostman,
	SiZapier,
	SiTailwindcss,
 } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
  DiGo,
  DiDocker,
  DiDatabase,
} from "react-icons/di";
import { FiFigma } from "react-icons/fi";

const socialLinks = [
	{
		id: 1,
		icon: <DiPython />,
		label: 'Python',
		url: "https://www.python.org/",
	},
	{
		id: 2,
		icon: <DiGo />,
		label: 'Go',
		url: "https://go.dev/",
	},
	{
		id: 3,
		icon: <DiJava />,
		label: 'Java',
		url: "https://www.java.com/en/",
	},
	{
		id: 4,
		icon: <DiJavascript1 />,
		label: 'JavaScript',
		url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	{
		id: 5,
		icon: <DiReact />,
		label: 'React',
		url: "https://reactjs.org/",
	},
	{
		id: 6,
		icon: <SiMysql/>,
		label: 'MySQL',
		url: "https://www.mysql.com/"
	},
	{
		id: 7,
		icon: <DiGit />,
		label: 'Git',
		url: "https://git-scm.com/",
	},
	{
		id: 1,
		icon: <SiTailwindcss />,
		label: 'Tailwind CSS',
		url: "https://tailwindcss.com/",
	},

];



const toolLinks = [
	{
		id: 1,
		icon: <SiVisualstudiocode />,
		label: 'VS Code',
		url: "https://code.visualstudio.com/",
	},
	{
		id: 2,
		icon: <SiIntellijidea />,
		label: 'IntelliJ IDEA',
		url: "https://www.jetbrains.com/idea/",
	},
	{
		id: 3,
		icon: <SiReplit />,
		label: 'Replit',
		url: "https://Replit.com/",
	},
	{
		id: 4,
		icon: <SiGooglecolab />,
		label: 'Google Colab',
		url: "https://colab.research.google.com/",
	},
	{
		id: 5,
		icon: <SiGithub />,
		label: 'GitHub',
		url: "https://www.github.com/",
	},
	{
		id: 6,
		icon: <SiAnaconda />,
		label: 'Anaconda',
		url: "https://www.anaconda.com/",
	},
	{
		id: 7,
		icon: <SiJetbrains />,
		label: 'JetBrains',
		url: "https://www.jetbrains.com/datagrip/",
	},
	{
		id: 8,
		icon: <FiFigma />,
		label: 'Figma',
		url: "https://www.figma.com/",
	},
	{
		id: 9,
		icon: <DiDocker />,
		label: 'Docker',
		url: "https://www.docker.com/",
	},
	{
		id: 10,
		icon: <SiPostman />,
		label: 'Postman',
		url: "https://www.postman.com/"
	},
	{
		id: 11,
		icon: <DiDatabase/>,
		label: 'SQL / DB Tools',
		url: "https://azure.microsoft.com/en-us/products/azure-sql/"
	},
	{
		id: 12,
		icon: <SiZapier/>,
		label: 'Zapier',
		url: "https://www.zapier.com/",
	},
	{
		id: 13,
		icon: <SiOpenai/>,
		label: 'GPT, Assistant Tools, and APIs',
		url: "https://www.openai.com/",
	},

];

const Skills = () => {
	return (
	  <div className="min-h-screen bg-white dark:bg-[#0b1220]">
		<div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 sm:py-14">
			<section className="text-center space-y-3">
				<p className="font-general-medium text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light">Professional Skillset</p>
				<p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">Languages, frameworks, and tools I use in my work.</p>
			</section>
	
			<div className="mt-8 sm:mt-10 flex flex-col items-center gap-6">
				<ul className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
					{socialLinks.map((link) => (
						<li key={link.id} className="w-full">
							<a
								href={link.url}
								target="__blank"
								rel="noreferrer"
								className="flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2.5 rounded-full bg-white text-cyan-900 dark:bg-gray-800 dark:text-cyan-100 shadow-sm border border-cyan-100/70 dark:border-gray-700 hover:-translate-y-0.5 transition duration-200 w-full"
							>
								<span className="text-2xl sm:text-3xl">{link.icon}</span>
								<span className="text-sm sm:text-base font-semibold">{link.label}</span>
							</a>
						</li>
					))}
				</ul>
			</div>
	  
			<section className="text-center space-y-3 mt-12 sm:mt-16">
				<p className="font-general-medium text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light">Tools I Use</p>
				<p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">Everyday platforms, editors, and services.</p>
			</section>
	  
			<div className="mt-8 sm:mt-10 flex flex-col items-center gap-6">
				<ul className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
					{toolLinks.map((link) => (
						<li key={link.id} className="w-full">
							<a
								href={link.url}
								target="__blank"
								rel="noreferrer"
								className="flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2.5 rounded-full bg-white text-cyan-900 dark:bg-gray-800 dark:text-cyan-100 shadow-sm border border-cyan-100/70 dark:border-gray-700 hover:-translate-y-0.5 transition duration-200 w-full"
							>
								<span className="text-2xl sm:text-3xl">{link.icon}</span>
								<span className="text-sm sm:text-base font-semibold">{link.label}</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	  </div>
	);
  };
  
  export default Skills;
