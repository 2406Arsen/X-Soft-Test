import { Suspense } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
	return (
		<div className='App'>
			<Suspense fallback='Loading ...'>
				<Header />
				<Home />
				<Footer />
			</Suspense>
		</div>
	);
}

export default App;
