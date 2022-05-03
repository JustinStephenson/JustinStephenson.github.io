import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import './App.css';

const email = 'justinstephenson@hotmail.com';

export const App = () => {
	return (
		<div className="container-fluid">
			<section className="about">
				<Header email={email} />
			</section>
			<section className="repos">
				<Projects />
			</section>
			<Footer email={email} />
		</div>
	);
};
