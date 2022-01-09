import { whyFakeData } from './whyFakeData';
import WhyItem from './WhyItem';

const Why = () => {
	return (
		<div className='why'>
			<p>Why 4OVER4?</p>
			<div>
				{whyFakeData.map(({ description, description2, img, title }) => (
					<WhyItem
						key={img}
						description={description}
						description2={description2}
						img={img}
						title={title}
					/>
				))}
			</div>
		</div>
	);
};

export default Why;
