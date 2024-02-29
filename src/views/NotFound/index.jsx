import ASSETS from '../../assets';

function NotFound() {
	return (
		<main className="flex flex-col justify-center items-center text-center">
			<h1>404</h1>
			<h2>Esta página no fue encontrada</h2>
			<img
				src={ASSETS['not-found']}
				alt="404 cover"
			/>
		</main>
	);
}

export default NotFound;
