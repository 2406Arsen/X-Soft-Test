import TemplatesBottomData from './TemplatesBottomData';
import TemplatesBottomNav from './TemplatesBottomNav';

const TemplateBottom = () => {
	return (
		<div className='templates__bottom'>
			<TemplatesBottomNav />
			<TemplatesBottomData />
		</div>
	);
};

export default TemplateBottom;
