import Over4 from './4Over4/Over4';
import Ad from './ad/Ad';
import BrowseByCategory from './BrowseByCategory/BrowseByCategory';
import FeaturedProducts from './homeProducts/FeaturedProducts';
import IdustryLeaders from './industryLeaders/IdustryLeaders';
import MostPopular from './mostPopular/MostPopular';
import NewProducts from './newProducts/NewProducts';
import SimplePack from './simplePack/SimplePack';
import SocialMedia from './SocialMedia/SocialMedia';
import Templates from './templates/Templates';
import Testimonials from './testimonials/Testimonials';
import TopRated from './topRated/TopRated';
import Why from './Why/Why';

const HomeProducts = () => {
	return (
		<div className='homeProducts'>
			<FeaturedProducts />
			<IdustryLeaders />
			<NewProducts />
			<Testimonials />
			<Ad />
			<TopRated />
			<MostPopular />
			<Over4 />
			<BrowseByCategory />
			<Why />
			<SimplePack />
			<Templates />
			<SocialMedia />
		</div>
	);
};

export default HomeProducts;
