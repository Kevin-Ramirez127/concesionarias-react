// Libraries
import React from 'react';
// Services
import { fetchData as sucursales } from '@services/api.services';
// Styles
import './styles.css';
import { Link } from 'react-router-dom';

function Sucursales() {
	const [sucData, setSucData] = React.useState([]);

	React.useEffect(() => {
		sucursales('/sucursales').then(({ data }) => setSucData(data));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main className="flex flex-col justify-center text-center items-center gap-y-5">
			<h1>Aquí puedes ver todas nuestras sucursales</h1>
			<section className="w-3/5">
				<table className="w-full shadow-lg">
					<thead>
						<tr>
							<th>Sucursal</th>
							<th>Dirección</th>
							<th>Teléfono</th>
							<th className="hidden sm:block">Autos</th>
						</tr>
					</thead>
					<tbody>
						{sucData.map((suc) => (
							<tr key={suc.sucursal}>
								<td>
									<Link
										to={suc.sucursal}
										className="text-blue-800"
									>
										{suc.sucursal}
									</Link>
								</td>
								<td>{suc.direccion}</td>
								<td>{suc.telefono}</td>
								<td className="hidden sm:flex flex-wrap gap-3 place-content-center">
									{suc.autos.map((auto) => (
										<img
											className="rounded-md"
											key={auto}
											src={auto}
											width={48}
										/>
									))}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</main>
	);
}

export default Sucursales;
