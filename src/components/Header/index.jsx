// Libraries
import { Link } from 'react-router-dom';
// Routes
import { HOME, SUCURSALES, MARCAS, AUTOS } from '@actions/routes';

function Header() {
	const routes = [
		{ label: 'Sucursales', path: SUCURSALES },
		{ label: 'Marcas', path: MARCAS },
		{ label: 'Autos', path: AUTOS },
	];

	return (
		<nav className="w-full py-4 flex flex-row bg-blue-700 items-center">
			<Link to={HOME}>
				<div className="flex flex-col justify-center text-center ml-6 cursor-pointer select-none text-white">
					<span className="text-2xl">Campus</span>
					<span className="text-sm">Concesionarias</span>
				</div>
			</Link>
			<ul className="w-screen flex flex-row gap-x-4 justify-center items-center">
				{routes.map((route) => (
					<li key={route.label}>
						<Link
							to={route.path}
							className="text-2xl text-white"
						>
							{route.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Header;
