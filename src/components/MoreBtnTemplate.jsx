import { useState, useEffect } from 'react';
import ContainerTemplate from './ContainerTemplate';

const useHttp = (url) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => setData(res))
			.then((res) => console.log(res))
			.catch((error) => console.log(error));
	}, [url]);

	return <ContainerTemplate dataState={data} />;
};

const MoreBtnTemplate = ({ next }) => {
	return <button onClick={useHttp(next)}>MORE...</button>;
};

export default MoreBtnTemplate;
