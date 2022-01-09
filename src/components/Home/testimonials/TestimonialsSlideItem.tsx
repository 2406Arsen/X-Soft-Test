import { FC } from 'react';

import { ReactComponent as StarIcon } from '../../../assets/Home/HomeProducts/testimonials/star.svg';
import { TestimonialsSlideItemProps } from '../model';

const TestimonialsSlideItem: FC<TestimonialsSlideItemProps> = ({
	description,
	img,
	name,
	position,
	review,
}) => {
	return (
		<div className='testimonials__slideItem'>
			<div className='testimonials__slideItem__container'>
				<div className='testimonials__slideItem__container__upperPart'>
					<img src={img} alt={img} />
					<span>
						<p>{description}</p>
						{[...new Array(review)].map((_, index) => (
							<StarIcon key={index} />
						))}
					</span>
				</div>
				<div className='testimonials__slideItem__container__secondPart'>
					<p>{name}</p>
					<span>{position}</span>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsSlideItem;
