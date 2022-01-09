import { templatesTopFakeData } from './templatesFakeData';
import TemplatesTopItem from './TemplatesTopItem';

const TemplatesTop = () => {
	return (
		<div className='templates__top'>
			<div>
				{templatesTopFakeData.map((text) => (
					<TemplatesTopItem text={text} key={text} />
				))}
			</div>
		</div>
	);
};

export default TemplatesTop;
