import React, { useContext } from 'react';
import ClientsContext from '../../context/ClientContext';

const ClientsGallery = () => {
	const {
		clients,
		searchClientsByTitle,
		selectClientsByCategory,
	} = useContext(ClientsContext);

	const itemsToShow =
		(searchClientsByTitle && searchClientsByTitle.length > 0 && searchClientsByTitle) ||
		(selectClientsByCategory && selectClientsByCategory.length > 0 && selectClientsByCategory) ||
		clients;

	return (
		<div className="overflow-hidden w-full grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{itemsToShow.map((client) => (
				<div className="overflow-hidden mb-10 sm:mb-0" key={client.id}>
					<img
						src={client.img}
						className="w-full h-full object-cover rounded-xl cursor-pointer shadow-lg sm:shadow-none"
						alt={client.title}
					/>
				</div>
			))}
		</div>
	);
};

export default ClientsGallery;

