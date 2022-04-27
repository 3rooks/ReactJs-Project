import { useState, useEffect } from 'react';
import HeaderTemplate from './HeaderTemplate';

const Header = () => {
	const URL = 'https://rickandmortyapi.com/api/';


	const [res, setRes] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then((res) => setRes(res))
			.catch((error) => console.log(error))
			.finally(() => setLoading(true));
	}, []);

	if (!loading) {
		return <h1>Loading...</h1>;
	} else {
		return <HeaderTemplate dataState={res} />;
	}
};

export default Header;
