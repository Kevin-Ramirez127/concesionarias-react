// Libraries
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Actions
import * as routesPath from '@actions/routes';
// Styles
import './styles.css';

function AutosSucCard({ marca, modelo, img, color, anio }) {
	return (
		<div
			key={modelo}
			className="autos-suc-card w-60 car-cards flex flex-col justify-center items-center border border-neutral-300 rounded-lg overflow-hidden hover:bg-neutral-100 transition-shadow"
		>
			<img
				src={img}
				width={240}
				className="h-32"
			/>
			<div className="w-full flex flex-row gap-x-6 justify-evenly items-center text-center">
				<div className="flex flex-col flex-wrap justify-center items-center text-center">
					<Link to={`../${routesPath.AUTOS}/${marca}`}>
						<p>{marca}</p>
					</Link>
					<p>{modelo}</p>
				</div>
				{(color || anio) && (
					<div className="my-2 pl-2 flex flex-col flex-wrap justify-center items-center text-center border-l border-l-neutral-400">
						<Link to={`../${routesPath.AUTOS}/${marca}/${color}`}>{color}</Link>
						<Link to={`../${routesPath.AUTOS}/${marca}/${anio}`}>{anio}</Link>
					</div>
				)}
			</div>
		</div>
	);
}

AutosSucCard.propTypes = {
	marca: PropTypes.string.isRequired,
	modelo: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	anio: PropTypes.number,
	color: PropTypes.string,
};

AutosSucCard.defaultProps = {
	anio: null,
	color: null,
};

export default AutosSucCard;
