import MoreBtnTemplate from './MoreBtnTemplate';

const MoreBtn = ({ info }) => {
	const { next } = info;
	console.log(next);

	return <MoreBtnTemplate next={next} />;
};

export default MoreBtn;
