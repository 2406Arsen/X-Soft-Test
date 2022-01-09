import { templatesTopFakeData } from './templatesFakeData';
import TemplatesTopItem from './TemplatesTopItem';

const TemplatesTop = () => {
	return (
		<div className='templates__top'>
			{templatesTopFakeData.map((text) => (
				<TemplatesTopItem text={text} key={text}/>
			))}
		</div>
	);
};

export default TemplatesTop;
