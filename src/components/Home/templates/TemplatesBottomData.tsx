import { templatesBottomFakeData } from './templatesFakeData';

const TemplatesBottomData = () => {
	return (
		<div className='templates__bottom__data'>
			<div>
				{templatesBottomFakeData.map(({ img, name, templatesCount }) => (
					<span key={name}>
						<img src={img} alt='/' />
						<p>{name}</p>
						<span>{templatesCount} Templates</span>
					</span>
				))}
			</div>
			<p>SEE ALL PRODUCT TEMPLATES</p>
		</div>
	);
};

export default TemplatesBottomData;
