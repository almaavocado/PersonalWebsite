import React from 'react';
import AppBanner from '../components/shared/AppBanner';
import { clientsData } from '../data/clients';
import { aboutMeData } from '../data/aboutMeData';
import { activitiesList } from '../data/activities';
import FeaturedCard from '../components/reusable/FeaturedCard';



const Home = () => {
	const featured = clientsData.slice(1, 4);
	const aboutTeaser = aboutMeData.slice(0, 2).map((a) => a.bio).join(' ');
  
	const quickStats = [
		{ label: 'Tech focus', value: 'Full-Stack Web Development & Data' },
		{ label: 'What drives me', value: 'Impactful products & mentoring' },
	];

	return (
		<div className="min-h-screen bg-white dark:bg-[#0b1220]">
			<AppBanner />

			<div className="max-w-6xl mx-auto px-5 sm:px-6 pb-10">
				{/* About teaser */}
				<section className="py-8 sm:py-10 mt-6">
					<div className="grid gap-5 sm:gap-6 md:grid-cols-[1.3fr_0.9fr] bg-white/80 dark:bg-ternary-dark/60 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-lg shadow-cyan-900/5 backdrop-blur">
						<div className="p-5 sm:p-8 space-y-4">
							<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">About</h2>
							<p className="text-gray-700 dark:text-gray-300 leading-relaxed">{aboutTeaser}</p>
							<a href="/about" className="group inline-flex items-center text-sm font-semibold text-cyan-700 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100">
								Read more
								<span className="ml-2 transition-all duration-200 group-hover:translate-x-0.5">→</span>
							</a>
						</div>
						<div className="p-5 sm:p-8 bg-gradient-to-br from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl md:rounded-l-none md:rounded-r-2xl flex flex-col gap-4 justify-center">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">Snapshot</h3>
							<div className="grid gap-3 sm:grid-cols-2">
								{quickStats.map((item) => (
									<div key={item.label} className="p-3 rounded-xl border border-cyan-100 dark:border-gray-700 bg-white/70 dark:bg-ternary-dark">
										<p className="text-xs uppercase tracking-wide text-cyan-700 dark:text-cyan-300">{item.label}</p>
										<p className="text-base font-semibold text-gray-900 dark:text-white mt-1">{item.value}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Featured projects */}
				<section className="py-8 sm:py-10 border-t border-gray-200/70 dark:border-gray-800/60">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-6 gap-3">
						<h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">Featured Work</h2>
						<a href="/clients" className="text-sm font-semibold text-cyan-700 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100">View all</a>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
						{featured.map((p) => (
							<FeaturedCard key={p.id} title={p.title} category={p.category} img={p.img} description={p.description} link={p.link} websiteLink={p.websiteLink} />
						))}
					</div>
				</section>

				{/* Skills snapshot */}
				<section className="py-8 sm:py-10 border-t border-gray-200/70 dark:border-gray-800/60">
					<div className="bg-gradient-to-r from-cyan-50 via-white to-cyan-50 dark:from-gray-900 dark:via-ternary-dark dark:to-gray-900 rounded-2xl border border-cyan-100/70 dark:border-gray-800 px-5 sm:px-8 py-6 sm:py-8">
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">Skills Snapshot</h3>
						<div className="flex flex-wrap gap-3">
							{['Python', 'Javascript', 'React', 'Tailwind CSS', 'AWS'].map((s) => (
								<span key={s} className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-900 dark:bg-gray-800 dark:text-cyan-100 text-sm font-semibold shadow-sm">
									{s}
								</span>
							))}
						</div>
						<a href="/skills" className="inline-block mt-4 text-sm font-semibold text-cyan-700 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100">See full skills →</a>
					</div>
				</section>

				{/* Activity highlights */}
				<section className="py-8 sm:py-10 border-t border-gray-200/70 dark:border-gray-800/60">
					<h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-5 sm:mb-6 tracking-tight">Highlights</h3>
					<div className="space-y-4">
						{activitiesList.slice(0, 3).map((a, idx) => (
							<div key={idx} className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-ternary-dark border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition">
								{a.img && <img src={a.img} alt={a.title} className="h-12 w-12 rounded-xl object-contain bg-gray-50 dark:bg-gray-800 p-2" />}
								<div className="flex-1">
									<p className="font-semibold text-gray-900 dark:text-white">{a.title || a.name || 'Activity'}</p>
									<p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{a.info || a.description}</p>
									{a.link && (
										<a
											href={a.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center text-sm font-semibold text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-100 mt-2"
										>
											Learn More →
										</a>
									)}
								</div>
							</div>
						))}
					</div>
				</section>

				
			</div>
		</div>
	);
};

export default Home;
