import style from './CardItem.module.css';
import { Link } from 'react-router-dom';

const CardItem = ({ items }) => {
	const { image, name, id } = items;

	return (
		<Link to={'/characters/' + id} className={style.cardLink}>
			<div className={style.itemsGrid}>
				<img src={image} alt={name} />
				<h2>{name}</h2>
			</div>
		</Link>
	);
};

export default CardItem;
