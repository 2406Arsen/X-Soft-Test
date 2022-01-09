import Slider from 'react-slick';

import { SlickArrowLeft, SlickArrowRight } from '../../utils/SliderArrowsFunction';


import { topRatedFakeData } from './topRatedFakeData';
import TopRatedSlideItem from './TopRatedSlideItem';

const TopRated = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: <SlickArrowLeft />,
		nextArrow: <SlickArrowRight />,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className='topRated'>
			<p>Top Rated</p>
			<Slider {...settings}>
				{topRatedFakeData.map(
					({ description, img, name, priceUSD, rating, reviewsCount }) => (
						<TopRatedSlideItem
							description={description}
							img={img}
							name={name}
							priceUSD={priceUSD}
							rating={rating}
							reviewsCount={reviewsCount}
							key={name}
						/>
					),
				)}
			</Slider>
		</div>
	);
};

export default TopRated;
