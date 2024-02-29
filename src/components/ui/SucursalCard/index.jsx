// Libraries
import PropTypes from 'prop-types';
// Style
import './styles.css';

function SucursalCard({ name, cover }) {
	return (
		<div className='suc-card flex justify-center cursor-pointer select-none rounded-xl'>
			<picture className='relative text-center text-white'>
				<img
					width={180}
					src={cover}
					alt=""
					className='h-24 rounded-xl'
				/>
				<p className='absolute top-2 left-1/2 -translate-x-1/2 text-xl whitespace-nowrap'>{name}</p>
				<p className='more-info absolute left-1/2 -translate-x-1/2 text-neutral-200 text-sm opacity-0 transition-opacity'>Ver más</p>
			</picture>
		</div>
	);
}

export default SucursalCard;

SucursalCard.propTypes = {
	name: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired,
};
