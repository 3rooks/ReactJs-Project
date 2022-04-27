import style from './HeaderTemplate.module.css';
import { Link } from 'react-router-dom';

const HeaderTemplate = ({ dataState }) => {
	return (
		<header className={style.header}>
			<Link to='/home' className={style.linkTitle}>
				<h1 className={style.title}>Rick and Morty</h1>
			</Link>
			<nav className={style.nav}>
				<ul className={style.navList}>
					{Object.keys(dataState).map((e) => {
						return (
							<li className={style.navItem} key={e}>
								<Link className={style.navLink} to={e}>
									{e}
								</Link>
							</li>
						);
					})}
				</ul>
				{/* <form action=''>
					<input type='text' value='Search' id='qwerty' />
					<button type='submit'>Search</button>
				</form> */}
			</nav>
		</header>
	);
};

export default HeaderTemplate;
