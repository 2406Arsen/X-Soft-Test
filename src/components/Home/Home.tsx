import HomeNavigation from './HomeNavigation';
import HomeProducts from './HomeProducts';
import HomeTop from './HomeTop';

const Home = () => {
	return (
		<div className='home'>
			<HomeTop />
			<span>
				<HomeNavigation />
				<HomeProducts />
			</span>
		</div>
	);
};

export default Home;
