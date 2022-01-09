import { ReactComponent as GetCustomQuoteIcon } from '../../assets/Home/Navigation/getCustomQuoteIcon.svg';
import { ReactComponent as SeeAllProductsIcon } from '../../assets/Home/Navigation/seeAllProductsIcon.svg';
import { ReactComponent as StarIcon } from '../../assets/Home/Navigation/starIcon.svg';
import { ReactComponent as ToRightArrow } from '../../assets/Home/Navigation/toRightArrow.svg';

import  allProductsFakeData  from './allProductsData.json';



// import { allProductsFakeData } from './allProductsFakeData';

const HomeNavigation = () => {
	return (
		<div className='homeNavigation'>
			<div className='homeNavigation--title'>
				<StarIcon />
				<p>All Products</p>
			</div>
			<div className='homeNavigation__products'>
				{allProductsFakeData.map(({ commingSoon, name, neww, icon }) => (
					<div key={name}>
						<span>
							<p style={{ fontWeight: `${icon ? 'bold' : 'normal'}` }}>{name}</p>
							{icon ? <img src={icon} alt='' /> : null}
							{commingSoon ? <span>comming soon</span> : null}
							{neww ? <div>new</div> : null}
						</span>
						<ToRightArrow />
					</div>
				))}
			</div>
			<div className='homeNavigation__seeAllProducts'>
				<SeeAllProductsIcon />
				<p>See All Products</p>
			</div>
			<div className='homeNavigation__getCustomQuote'>
				<GetCustomQuoteIcon />
				<p>Get a custom Quote</p>
			</div>
		</div>
	);
};

export default HomeNavigation;
