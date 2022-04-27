import style from './ItemDetailTemplate.module.css';

const ItemDetailTemplate = ({ dataState }) => {
	const { created, gender, image, name, species, status, location, origin } =
		dataState;

	return (
		<section className={style.detailCard}>
			<img src={image} alt={name} />
			<p><b>Name:</b> {name}</p>
			<p><b>Species:</b> {species}</p>
			<p><b>Status:</b> {status}</p>
			<p><b>Created:</b> {created}</p>
			<p><b>Gender:</b> {gender}</p>
			<p><b>Location:</b> {location.name}</p>
			<p><b>Origin:</b> {origin.name}</p>
		</section>
	);
};

export default ItemDetailTemplate;
