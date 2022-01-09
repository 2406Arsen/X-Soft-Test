import { ReactComponent as PrevArrow } from '../../../assets/Home/HomeProducts/newProducts/toLeft.svg';
import { ReactComponent as NextArrow } from '../../../assets/Home/HomeProducts/newProducts/toRight.svg';

import { featuredProductsFakeData } from './featuredProductsFakeData';
import FeaturedProductsItem from './FeaturedProductsItem';

const FeaturedProducts = () => {
	return (
		<div className='feuturedProducts'>
			<span>
				<p>Featured Products</p>
				<div>
					<PrevArrow />
					<NextArrow />
				</div>
			</span>
			<div>
				{featuredProductsFakeData.map(({ img, name, priceUSD }, i) => {
					return window.innerWidth <= 768 && i > 2 ? null : (
						<FeaturedProductsItem
							img={img}
							name={name}
							priceUSD={priceUSD}
							key={name}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default FeaturedProducts;
