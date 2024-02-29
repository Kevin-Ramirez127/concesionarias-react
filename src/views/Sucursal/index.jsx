// Libraries
import React from 'react';
import { useParams } from 'react-router-dom';
// Services
import { fetchData as sucursales } from '@services/api.services';
// Components
import AutosSucCard from '@ui/AutosSucCard';
// Styles
import './styles.css';

function Sucursal() {
	const { sucursal } = useParams();

	const [sucData, setSucData] = React.useState({
		direccion: '',
		telefono: '',
		sucursal: '',
		autos: [],
	});

	React.useEffect(() => {
		sucursales(`/sucursales/${sucursal}`).then(({ data }) =>
			setSucData(data)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main className="flex flex-col justify-center text-center items-center gap-y-5">
			<h2>Bienvenidos a la sucursal {sucData.sucursal}</h2>
			<section>
				<p>
					<strong>Encuéntranos en nuestra dirección:</strong>{' '}
					{sucData.direccion}
				</p>
				<p>
					<strong>Contáctanos a través de nuestro teléfono: </strong>{' '}
					{sucData.telefono}
				</p>
			</section>
			<section className="flex flex-col justify-center items-center gap-y-5">
				<h3>Encuentra tu auto ideal</h3>

				<article className="flex flex-row flex-wrap w-5/6 gap-7 justify-center items-center">
					{sucData.autos.map((auto) => (
						<AutosSucCard key={auto.modelo} modelo={auto.modelo} marca={auto.marca} img={auto.img} />
					))}
				</article>
			</section>
		</main>
	);
}

export default Sucursal;
