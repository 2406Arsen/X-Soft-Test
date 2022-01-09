import Slider from 'react-slick';

import { SlickArrowLeft, SlickArrowRight } from '../../utils/SliderArrowsFunction';


import { testimonialsFakeData } from './testimonial.data';
import TestimonialsSlideItem from './TestimonialsSlideItem';

const Testimonials = () => {
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
		<div className='testimonials'>
			<p>
				Trusted By Fortune 500 Companies, Small Businesses, Non-Profits, and Start-Ups
				Across the US
			</p>
			<Slider {...settings}>
				{testimonialsFakeData.map(({ description, img, name, position, review }) => (
					<TestimonialsSlideItem
						description={description}
						img={img}
						name={name}
						position={position}
						review={review}
						key={name}
					/>
				))}
			</Slider>
		</div>
	);
};

export default Testimonials;
