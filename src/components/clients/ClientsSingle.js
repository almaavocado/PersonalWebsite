import { motion } from 'framer-motion';
import { FiLink } from 'react-icons/fi';

const ClientsSingle = ({ title, category, image, description, link, websiteLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
      className="mb-6 sm:mb-0"
    >
      <div className="rounded-2xl shadow-lg shadow-cyan-900/5 cursor-pointer h-full bg-white dark:bg-ternary-dark flex flex-col border border-gray-100 dark:border-gray-800 overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
        <div>
          <img
            src={image}
            className="w-full h-48 sm:h-56 object-cover"
            alt="Single Project"
          />
        </div>
        <div className="flex flex-col justify-between p-4 sm:p-5 flex-grow space-y-3">
          <div className="text-left space-y-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-cyan-900 dark:bg-gray-900/80 dark:text-cyan-100">
              {category}
            </span>
            <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white leading-tight">
              {title}
            </p>
          </div>
          <div className="flex-grow">
            <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {description}
            </span>
          </div>
          <div className="flex justify-start">
            {websiteLink && (
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-600 text-cyan-800 dark:text-cyan-200 rounded-full hover:bg-cyan-600 hover:text-white transition"
              >
                <FiLink className="h-5 w-5" />
                <span className="whitespace-nowrap font-semibold text-sm">Website</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientsSingle;
