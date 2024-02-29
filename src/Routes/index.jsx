// Libraries
import { useRoutes } from 'react-router-dom';
// Routes
import * as routesPath from '@actions/routes';
// Views
import Home from '@views/Home';
import Sucursales from '@views/Sucursales';
import Sucursal from '@views/Sucursal';
import Autos from '@views/Autos';
import Marca from '@views/Marca';
import NotFound from '@views/NotFound';

function Routes() {
	const { HOME, SUCURSALES, AUTOS, MARCAS } = routesPath;

	const routes = useRoutes([
		{ path: HOME, element: <Home /> },

		{ path: SUCURSALES, element: <Sucursales /> },
		{ path: SUCURSALES + '/:sucursal', element: <Sucursal /> },

		{ path: AUTOS, element: <Autos /> },
		{ path: AUTOS + '/:marca', element: <Autos /> },
		{ path: AUTOS + '/:marca/:dato', element: <Autos /> },

		{ path: MARCAS, element: <Marca /> },
		{ path: '*', element: <NotFound /> },
	]);

	return routes;
}

export default Routes;
