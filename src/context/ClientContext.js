import { useState, createContext } from 'react';
import { clientsData } from '../data/clients';

const ClientsContext = createContext();

export const ClientsProvider = (props) => {
  const [clients, setClients] = useState(clientsData);
  const [searchClient, setSearchClient] = useState('');
  const [selectClient, setSelectClient] = useState('');

  const searchClientsByTitle = clients.filter((item) => {
    return searchClient === ''
      ? item
      : item.title.toLowerCase().includes(searchClient.toLowerCase())
      ? item
      : null;
  });

  const selectClientsByCategory = clients.filter((item) => {
    if (selectClient === '') return item;
    return item.category.toLowerCase().includes(selectClient.toLowerCase());
  });

  return (
    <ClientsContext.Provider
      value={{
        clients,
        setClients,
        searchClient,
        setSearchClient,
        searchClientsByTitle,
        selectClient,
        setSelectClient,
        selectClientsByCategory,
      }}
    >
      {props.children}
    </ClientsContext.Provider>
  );
};

export default ClientsContext;
