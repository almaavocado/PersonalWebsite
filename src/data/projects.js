import TripeaseImage from '../images/tripease.png';
import MentesSanas from '../images/mentes.png';
import TinyHomes from '../images/homes.png';
import Targets from '../images/vr.png';
import Voltus from '../images/voltus-img.png';
import Climate from '../images/climate.png';
import Teacher from '../images/teacher-img.png';


export const projectsData = [
	{
		id: 1,
		title: 'Mentes Sanas',
		category: 'Web Application',
		img: MentesSanas,
		description: 'An accessible, user-friendly website geared to help end the stigma behind mental health illnesses. It also provides low cost mental health resources for low income, LGBTQ+, and BIPOC communities.',
		link: 'https://github.com/almaavocado/MentesSanas',


		ProjectHeader: {
			title: 'Mentes Sanas',
			tags: 'Web Application',
		},
	},
	{
		id: 2,
		title: 'Teacher Personal Portfolio',
		category: 'Web Application',
		img: Teacher,
		description: 'An user-friendly website geared to help an educator stand out in the job search. Created with React, Javascript, and CSS.',
		link: 'http://github.com/almaavocado/teacher-profile',
		websiteLink: 'https://missmartinezteaches.com/',

		ProjectHeader: {
			title: 'Tripease',
			tags: 'Full Stack Web Application',
		},
		
	},
	{
		id: 3,
		title: 'Tiny Homes',
		category: 'Database',
		img: TinyHomes,
		description: 'Designed a database that keeps track of every aspect of the tiny homes project that many cities can use the efficient database to track progress.',
		link: 'https://github.com/almaavocado/TinyHomesDatabase',


		ProjectHeader: {
			title: 'Tiny Homes',
			tags: 'Database',
		},
		
	},
	{
		id: 4,
		title: 'Targets VR Video Game',
		category: 'Virtual Reality',
		img: Targets,
		description: 'A VR target shooting simulator with 3 levels.',
		link: 'https://github.com/almaavocado/TargetsVR',
		websiteLink: 'https://targets-vr.netlify.app/',

		
		ProjectHeader: {
			title: 'Targets VR Video Game',
			tags: 'Virtual Reality',
		},
		
	},
	{
		id: 5,
		title: 'Energy Usage - Voltus API',
		category: 'Backend Application',
		img: Voltus,
		description: ' I implemented a caching mechanism, error handling, configurable cache settings, filtering, and sorting options to optimize performance and enhance flexibility in retrieving and displaying site data.',
		link: 'https://github.com/almaavocado/EnergyUsage',
		websiteLink: 'https://energy-usage-voltusapi.netlify.app/',

		
		ProjectHeader: {
			title: 'Energy Usage - Voltus API',
			tags: 'Backend Application',
		},
	},
	{
		id: 6,
		title: 'Climate Change Analysis',
		category: 'Backend Application',
		img: Climate,
		description: 'I utilized Python and Pandas to analyze climate data from NOAA, visualizing temperature trends over time, and further explored the application of machine learning algorithms such as Random Forest Regression to predict future climate patterns.',
		link: 'https://github.com/almaavocado/AnalyzingClimateChange',

		ProjectHeader: {
			title: 'Climate Change Analysis',
			tags: 'Backend Application',
		},
	},
	{
		id: 7,
		title: 'Tripease',
		category: 'Full Stack Web Application',
		img: TripeaseImage,
		description: 'Tripease is an travel itinerary website that uses the Google API to query for destinations, lodgings, rentals, and more for you to create your dream vacation with ease.',
		link: 'http://github.com/almaavocado/TripeaseDescription',
		websiteLink: 'https://tripease.netlify.app/',

		ProjectHeader: {
			title: 'Tripease',
			tags: 'Full Stack Web Application',
		},
		
	},
];
