import { motion } from 'framer-motion';
import { FiLink } from 'react-icons/fi';

const ClientsSingle = ({ title, category, image, description, link, websiteLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
      className="mb-8 sm:mb-0"
    >
      <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer h-full bg-secondary-light dark:bg-ternary-dark flex flex-col">
        <div>
          <img
            src={image}
            className="w-full h-56 sm:h-64 rounded-t-xl border-none object-cover"
            alt="Single Project"
          />
        </div>
        <div className="flex flex-col justify-between px-4 py-6 flex-grow">
          <div className="text-center mb-4">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <p className="text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {category}
            </p>
          </div>
          <div className="flex-grow mb-8">
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {description}
            </span>
          </div>
          <div className="flex justify-center">
            {websiteLink && (
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-general-medium flex items-center text-md border border-green-600 py-2.5 sm:py-3 shadow-lg rounded-lg bg-white-800 hover:bg-green-900 text-gray-800 py-2 px-4 inline-flex items-center focus:ring-1 focus:ring-green-900 hover:text-white duration-500 ml-4"
              >
                <FiLink className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 duration-100" />
                <span className="whitespace-nowrap">Website</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientsSingle;
