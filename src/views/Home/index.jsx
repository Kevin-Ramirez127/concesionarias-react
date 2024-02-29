// Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { SUCURSALES } from '@actions/routes';
// Services
import { fetchData as sucursales } from '@services/api.services';
// Components
import SucursalCard from '@ui/SucursalCard';

function Home() {
	const [sucData, setSucData] = React.useState([]);

	React.useEffect(() => {
		sucursales().then(({ data }) => setSucData(data));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="flex flex-col gap-y-11 justify-center items-center">
			<section className="w-full flex flex-col text-center">
				<h1>Hola, bienvenido a Campus sucursales</h1>
				<p>
					Puedes elegir entre una de nuestras sucursales para
					encontrar tu auto ideal
				</p>
			</section>
			<section>
				<Link to={SUCURSALES}>
					<h3>Ver todas nuestras sucursales</h3>
				</Link>
			</section>
			<section className="w-1/2 flex flex-row justify-center gap-3 flex-wrap">
				{sucData.map(({ name, cover }) => (
					<Link
					key={name}
					to={SUCURSALES + '/' + name}
					>
						<SucursalCard
							name={name}
							cover={cover}
						/>
					</Link>
				))}
			</section>
		</div>
	);
}

export default Home;
