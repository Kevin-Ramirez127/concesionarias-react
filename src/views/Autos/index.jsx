// Libraries
import React from 'react';
import { useParams } from 'react-router-dom';
// Services
import { fetchData as sucursales } from '@services/api.services';
// Components
import AutosSucCard from '@components/ui/AutosSucCard';

function Marcas() {
	const { marca, dato } = useParams();

	const [carData, setCarData] = React.useState({ marca: '', autos: [] });

	React.useEffect(() => {
		const customRoute = `/autos/${marca ? `${marca}/` : ''}${dato ?? ''}`;
		sucursales(customRoute).then(({ data }) => setCarData(data));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [marca, dato]);
	return (
		<main className="w-full flex flex-col justify-center items-center text-center gap-y-5">
			<h2>Conoce todos nuestros autos {carData.marca}</h2>
			<p>
				Contamos con un total de <strong>{carData.autos.length}</strong>{' '}
				autos {carData.marca}
			</p>
			<div className="flex flex-row flex-wrap w-5/6 gap-7 justify-center items-center">
				{carData.autos.map((car, i) => (
					<AutosSucCard
						key={i}
						marca={car.marca}
						modelo={car.modelo}
						img={car.img}
						anio={car.anio}
						color={car.color}
					/>
				))}
			</div>
		</main>
	);
}

export default Marcas;
