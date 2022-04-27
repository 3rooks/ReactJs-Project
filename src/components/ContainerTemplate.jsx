import CardItem from './CardItem';
import style from './ContainerTemplate.module.css';
import MoreBtn from './MoreBtn';

const ContainerTemplate = ({ dataState }) => {
	const { info, results } = dataState;
	return (
		<>
			<main className={style.containerGrid}>
				{results.map((i) => {
					return <CardItem items={i} key={i.id} />;
				})}
			</main>
			<MoreBtn info={info} />
		</>
	);
};

export default ContainerTemplate;
