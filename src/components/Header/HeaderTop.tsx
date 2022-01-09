import { ReactComponent as GoPremiumIcon } from '../../assets/Header/premiumIcon.svg';

import HeaderTopItem from './HeaderTopItem';

const HeaderTop = () => {
	return (
		<div className='headerTop'>
			<div>
				<HeaderTopItem text='Creative Corner' />
				<HeaderTopItem text='Content Hub' />
				<HeaderTopItem text='Get Free Samples' />
				<HeaderTopItem text='Custom Project' />
			</div>
			<div>
				<HeaderTopItem text='My Influence Rewards' textInfo='NEW' />
				<HeaderTopItem text='Marketing Cloud' textInfo='FREE' />
				<HeaderTopItem text='Blank Templates' />
				<HeaderTopItem text='Go Premium'>
					<GoPremiumIcon />
				</HeaderTopItem>
			</div>
		</div>
	);
};

export default HeaderTop;
