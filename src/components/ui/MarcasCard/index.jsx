// Libraries
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Actions
import * as routesPath from '@actions/routes';
// Styles
import './styles.css';

function MarcasCard({ marca, cover }) {
	return (
		<Link
			to={`${routesPath.AUTOS}/${marca}`}
			className="marcas-card w-96 flex flex-row justify-between items-center pl-12 rounded-2xl overflow-hidden transition-shadow border border-slate-300"
		>
			<p className="text-lg">{marca}</p>
			<img
				src={cover}
				alt={marca}
				width={124}
				className='h-20'
			/>
		</Link>
	);
}

MarcasCard.propTypes = {
	marca: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired,
};

export default MarcasCard;
