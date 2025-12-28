import React from 'react';
import ClientsGrid from '../components/clients/ClientsGrid';
import { ClientsProvider } from '../context/ClientContext';

const Clients = () => {
  return (
    <ClientsProvider>
      <div className="container mx-auto">
        <ClientsGrid />
      </div>
    </ClientsProvider>
  );
};

export default Clients;
