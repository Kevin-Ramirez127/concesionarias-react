// Libraries
import PropTypes from 'prop-types';
// Components
import Header from '@components/Header';
import Footer from '@components/Footer';

function Layout({ children }) {
	return (
		<>
			<Header />
				<main className="p-8 min-h-screen">{children}</main>
			<Footer />
		</>
	);
}

export default Layout;

Layout.propTypes = {
	children: PropTypes.node,
}