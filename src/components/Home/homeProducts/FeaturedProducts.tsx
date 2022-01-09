import { featuredProductsFakeData } from './featuredProductsFakeData';
import FeaturedProductsItem from './FeaturedProductsItem';

const FeaturedProducts = () => {
	return (
		<div className='feuturedProducts'>
			{featuredProductsFakeData.map(({ img, name, priceUSD }) => (
				<FeaturedProductsItem img={img} name={name} priceUSD={priceUSD} key={name} />
			))}
		</div>
	);
};

export default FeaturedProducts;
