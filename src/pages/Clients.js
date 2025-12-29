import React from 'react';
import ClientsGrid from '../components/clients/ClientsGrid';
import { ClientsProvider } from '../context/ClientContext';

const Clients = () => {
  return (
    <ClientsProvider>
      <div className="min-h-screen bg-white dark:bg-[#0b1220]">
        <div className="bg-gradient-to-r from-cyan-50 via-white to-cyan-50 dark:from-gray-900 dark:via-ternary-dark dark:to-gray-900">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800 dark:text-cyan-200">
                Client Work
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Clients portfolio
              </h1>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
                Showcasing a selection of projects delivered for diverse clients, highlighting tailored solutions and successful collaborations.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-5 sm:px-6 pb-12">
          <ClientsGrid />
        </div>
      </div>
    </ClientsProvider>
  );
};

export default Clients;
