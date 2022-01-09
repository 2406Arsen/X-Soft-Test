import Slider from 'react-slick';

import { SlickArrowLeft, SlickArrowRight } from '../../utils/SliderArrowsFunction';


import { newProductsFakeData } from './newProductsFakeData';
import NewProductsSlideItem from './NewProductsSlideItem';

const NewProducts = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: <SlickArrowLeft />,
		nextArrow: <SlickArrowRight />,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1070,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className='newProducts'>
			<p>New Products</p>
			<Slider {...settings}>
				{newProductsFakeData.map(({ img, name, priceUSD }) => (
					<NewProductsSlideItem img={img} name={name} priceUSD={priceUSD} key={name} />
				))}
			</Slider>
		</div>
	);
};

export default NewProducts;
