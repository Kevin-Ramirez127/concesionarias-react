// Libraries
import { Link } from "react-router-dom";
// Routes
import { HOME } from '@actions/routes';

function Footer() {
	return (
		<footer className="w-full h-[25vh] flex justify-between bg-blue-600 p-6 text-white">
			<div className="flex flex-col">
				<h2>Elije tu vehículo ideal con nosotros</h2>
				<p>Encuéntranos en cualquiera de nuestras sucursales</p>
			</div>

			<div className="flex flex-col text-center ml-6 cursor-pointer select-none">
				<Link to={HOME} className="flex flex-col">
					<span className="text-2xl text-white">Campus</span>
					<span className="text-sm text-white">Concesionarias</span>
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
