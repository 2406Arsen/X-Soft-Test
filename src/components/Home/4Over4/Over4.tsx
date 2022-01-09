import Slider from 'react-slick';

import { SlickArrowLeft, SlickArrowRight } from '../../utils/SliderArrowsFunction';

import { over4FakeData } from './over4fakeData';
import Over4Item from './Over4Item';

const Over4 = () => {
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
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className='over4'>
			<p>4OVER4: The Easy Way to Do Your Printing Online</p>
			{window.innerWidth <= 768 ? (
				<div className='over4__slider'>
					<Slider {...settings}>
						{over4FakeData.map(({ img, name }) => (
							<div className='over4__slider--item' key={name}>
								<Over4Item name={name} img={img} />
							</div>
						))}
					</Slider>
				</div>
			) : (
				<div className='over4__bigWidth'>
					{over4FakeData.map(({ img, name }) => (
						<Over4Item name={name} img={img} key={name} />
					))}
					<span>Show All New!</span>
				</div>
			)}
		</div>
	);
};

export default Over4;
