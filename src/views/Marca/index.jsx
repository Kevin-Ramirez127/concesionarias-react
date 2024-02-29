// Libraries
import React from 'react';
// Services
import { fetchData as sucursales } from '@services/api.services';
// Components
import MarcasCard from '@ui/MarcasCard';

function Marca() {
	const [marcas, setMarcas] = React.useState([]);

	React.useEffect(() => {
		sucursales('/marca').then(({ data }) => setMarcas(data));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<main className="flex flex-col justify-center items-center gap-y-6">
			<h2>Conoce todas nuestras marcas</h2>
			<section className='flex flex-row flex-wrap justify-center items-center gap-6'>
				{marcas.map((mar) => (
					<MarcasCard
						key={mar.marca}
						marca={mar.marca}
						cover={mar.cover}
					/>
				))}
			</section>
		</main>
	);
}

export default Marca;
