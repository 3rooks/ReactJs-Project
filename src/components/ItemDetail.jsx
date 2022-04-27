import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailTemplate from './ItemDetailTemplate';

const ItemDetail = () => {
	const { id } = useParams();
	const URL = `https://rickandmortyapi.com/api/character/${id}`;

	const [res, setRes] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then((res) => setRes(res))
			.catch((error) => console.log(error))
			.finally(() => setLoading(true));
	});

	if (!loading) {
		return <h1>Loading...</h1>;
	} else {
		return <ItemDetailTemplate dataState={res} />;
	}
};

export default ItemDetail;
