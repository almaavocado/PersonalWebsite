import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ClientsSingle from './ClientsSingle';
import ClientsContext from '../../context/ClientContext';
import ClientsFilter from './ClientsFilter';

const ClientsGrid = () => {
	const {
		clients,
		searchClient,
		setSearchClient,
		searchClientsByTitle,
		selectClient,
		setSelectClient,
		selectClientsByCategory,
	} = useContext(ClientsContext);

	return (
		<section className="py-8 sm:py-10">
			<div className="bg-white/80 dark:bg-ternary-dark/70 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm px-4 sm:px-6 py-5">
				<div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-2 sm:gap-3">
						<span className="hidden sm:flex bg-white dark:bg-gray-900 p-2.5 rounded-xl shadow-sm border border-gray-200/70 dark:border-gray-800">
							<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
						</span>
						<div className="flex-1">
							<input
								onChange={(e) => {
									setSearchClient(e.target.value);
								}}
								className="w-full font-general-medium px-3 sm:px-4 py-3 border border-gray-200 dark:border-secondary-dark rounded-xl text-sm sm:text-base bg-white dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
								id="name"
								name="name"
								type="search"
								placeholder="Search clients"
								aria-label="Name"
							/>
						</div>
					</div>

					<ClientsFilter setSelectClient={setSelectClient} />
				</div>
			</div>

			<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:mt-8 gap-5 sm:gap-6">
				{selectClient
					? selectClientsByCategory.map((client) => (
							<ClientsSingle
								title={client.title}
								category={client.category}
								image={client.img}
								description={client.description}
								websiteLink={client.websiteLink}
								key={client.id}
							/>
					  ))
					: searchClient
					? searchClientsByTitle.map((client) => (
							<ClientsSingle
								title={client.title}
								category={client.category}
								image={client.img}
								description={client.description}
								websiteLink={client.websiteLink}
								key={client.id}
							/>
					  ))
					: clients.map((client) => (
							<ClientsSingle
								title={client.title}
								category={client.category}
								image={client.img}
								description={client.description}
								websiteLink={client.websiteLink}
								key={client.id}
							/>
					  ))}
			</div>
		</section>
	);
};

export default ClientsGrid;
