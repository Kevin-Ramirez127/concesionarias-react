// Libraries
import axios from 'axios';

export async function fetchData(path = '/') {
	const API = import.meta.env.VITE_API;
	const route = API + path;
	return axios.get(route);
}