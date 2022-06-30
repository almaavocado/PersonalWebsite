import React from 'react';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';

import AboutMe from '../pages/AboutMe';
import { ProjectsProvider } from '../context/ProjectsContext';
import Skills from '../pages/Skills';
import Activity from '../pages/Activity';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>
			<AboutMe></AboutMe>
		
			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>
			<Skills></Skills>
			<Activity></Activity>
			
		</div>
	);
};

export default Home;
