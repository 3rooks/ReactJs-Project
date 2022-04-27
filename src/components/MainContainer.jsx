import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ContainerTemplate from './ContainerTemplate';
import ItemDetail from './ItemDetail';

const MainContainer = () => {
	const URL = 'https://rickandmortyapi.com/api/character';

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
		return (
			<Routes>
				<Route path='/' element={<ContainerTemplate dataState={res} />} />
				<Route path='/home' element={<ContainerTemplate dataState={res} />} />
				<Route path='/characters/' element={<ContainerTemplate dataState={res} />} />
				<Route path='/characters/:id' element={<ItemDetail />} />
				<Route path='/locations/' element="" />
				<Route path='/episodes/' element='' />
			</Routes>
		);
	}
};

export default MainContainer;
