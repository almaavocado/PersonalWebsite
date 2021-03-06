import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import About from './pages/AboutMe';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectSingle from './pages/ProjectSingle';
import Skills from './pages/Skills';
import Activity from './pages/Activity';
import { AnimatePresence } from 'framer-motion';
import UseScrollToTop from './hooks/useScrollToTop';


function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="projects" element={<Projects />} />
						<Route
							path="projects/single-project"
							element={<ProjectSingle />}
						/>
						<Route path="skills" element={<Skills />} />
						<Route path="activities" element={<Activity />} />

					</Routes>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;

