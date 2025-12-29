const FeaturedCard = ({ title, category, img, description, link, websiteLink }) => (
	<div className="group rounded-2xl shadow-lg shadow-cyan-900/5 bg-white dark:bg-ternary-dark border border-gray-100 dark:border-gray-800 overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
		<div className="relative">
			<img src={img} alt={title} className="w-full h-44 object-cover" />
		</div>
		<div className="p-4 sm:p-5 space-y-3">
			<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-cyan-800 dark:bg-gray-900/80 dark:text-cyan-100">
              {category}
            </span>
			<h4 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">{title}</h4>
			<p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{description}</p>
			<div className="pt-1 flex items-center gap-3">
				{link && (
					<a href={link} className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-cyan-600 text-cyan-800 dark:text-cyan-200 rounded-full hover:bg-cyan-600 hover:text-white transition">
						Code
					</a>
				)}
				{websiteLink && (
					<a href={websiteLink} className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-cyan-600 text-cyan-800 dark:text-cyan-200 rounded-full hover:bg-cyan-600 hover:text-white transition">
						Website
					</a>
				)}
			</div>
		</div>
	</div>
);
export default FeaturedCard;
