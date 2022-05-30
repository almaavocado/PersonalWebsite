import React from 'react';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';

import AboutMe from '../pages/AboutMe';
import { ProjectsProvider } from '../context/ProjectsContext';
import Skills from '../pages/Skills';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>
			<AboutMe></AboutMe>
		
			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>
			<Skills></Skills>
		</div>
	);
};

export default Home;
