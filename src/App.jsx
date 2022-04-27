import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Header />;
			<MainContainer />
		</BrowserRouter>
	);
};
export default App;
