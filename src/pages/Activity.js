import React, { useState } from 'react';

import MVFCLogo from '../images/mvfc.png';
import WicImage from '../images/wic.png';
import SPYLogo from '../images/spy.png';
import GoogleLogo from '../images/googlelogo.png';
import GraceHopper from '../images/grace.png';
import Latinx from '../images/lsls.png';
import ClippersCH from '../images/ClippersCH.png';


const ActivitiesList = [
  {
    id: 1,
    title: 'Board Member & STEM Program Founder',
    info: 'Created a program & curriculum to expose low-income underrepresented students and families to STEM-related careers.',
    img: MVFCLogo,
    link: 'https://marvistafc.org/stem/',
  },
  {
    id: 2,
    title: 'LA Clippers Community Heroes Honoree',
    info: 'Recognized on court by the LA Clippers for community service and mentorship with Mar Vista Family Center.',
    details: [
      'Honored January 15, 2025 as part of the Clippers Community Heroes program celebrating local leaders in service, sport, mentorship, and education.',
      'Acknowledged for dedication to MVFC families and youth programs.',
      'Spotlighted during a Clippers game, inspiring the community with visible recognition of ongoing impact.'
    ],
    link: 'https://marvistafc.org/celebrating-community-new-beginnings/',
    img: ClippersCH,
  },
  {
    id: 3,
    title: 'CSULB + Google exploreCSR Research',
    info: 'Tech for K-12 education and computational thinking research.',
    details: [
      'Collaborated with faculty from UC Irvine, UCLA, UC San Diego, and CSULB on a $35k Google exploreCSR grant to design research workshops for women in CS.',
      'Worked within the CONECTAR network using Design-Based Implementation Research to evolve computational thinking curriculum for multilingual, low-income K-12 students.',
      'Hands-on with mixed-methods studies: iterating curriculum, evaluating data collection instruments, and analyzing student computing artifacts.'
    ],
    img: GoogleLogo,
  },
  {
    id: 4,
    title: 'Grace Hoppen Conference Community Scholarship Recipient',
    info: 'Received a scholarship to attend GHC 2019 and 2020.',
    img: GraceHopper,
    link: 'https://ghc.anitab.org/', 
  },
  {
    id: 5,
    title: 'Young Professional Advisory Board Member @ Safe Place For Youth',
    info: 'Advocate and fundraise for at-risk and homeless youth ages 18-25.',
    img: SPYLogo,
	link: 'https://www.safeplaceforyouth.org/',
  },
  {
    id: 6,
    title: 'Women in Computing Club Founder',
    info: 'Club that creates a safe space for women in tech.',
    img: WicImage,
  },
  {
    id: 7,
    title: 'Google\'s 6th Annual Latinx Student Leadership Summit Participant',
    info: 'Only 130 students from over 870 applicants were selected by Google to participate in Google\'s 6th Annual Latinx Student Leadership Summit (LSLS).',
    img: Latinx,
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6948724984135516160/',
  },

];

const Activities = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1220]">
      <div className="bg-gradient-to-r from-cyan-50 via-white to-cyan-50 dark:from-gray-900 dark:via-ternary-dark dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800 dark:text-cyan-200">
              Community & Leadership
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Activities
            </h1>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
              Mentorship, community work, and leadership moments that shaped my career and give back to others.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 pb-12">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ActivitiesList.map((activity) => (
            <div key={activity.id} className="group h-full rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-ternary-dark shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-200 overflow-hidden">
              <div className="relative bg-gradient-to-br from-cyan-50 via-white to-cyan-100 dark:from-gray-900 dark:via-ternary-dark dark:to-gray-900 flex items-center justify-center p-5 h-36 sm:h-40 border-b border-gray-100 dark:border-gray-800">
                <img
                  src={activity.img}
                  alt={activity.title}
                  className="object-contain max-h-20 sm:max-h-24"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                  {activity.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {activity.info}
                </p>
                {expandedId === activity.id && activity.details && (
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {activity.details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex items-center flex-wrap gap-3 pt-1">
                  {activity.details && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(activity.id)}
                      className="text-sm font-semibold text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-100"
                    >
                      {expandedId === activity.id ? 'Hide details' : 'Learn more →'}
                    </button>
                  )}
                  {activity.link && (
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-100"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit site →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
