import Slider from 'react-slick';

import { SlickArrowLeft, SlickArrowRight } from '../../utils/SliderArrowsFunction';


import { mostPupularFakeData } from './mostPopularFakeData';
import MostPopularSlideItem from './MostPopularSlideItem';

const MostPopular = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: <SlickArrowLeft />,
		nextArrow: <SlickArrowRight />,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className='mostPopular'>
			<p>Most Popular Products</p>
			<Slider {...settings}>
				{mostPupularFakeData.map(({ img, name, priceUSD }) => (
					<MostPopularSlideItem img={img} name={name} priceUSD={priceUSD} key={name} />
				))}
			</Slider>
		</div>
	);
};

export default MostPopular;
