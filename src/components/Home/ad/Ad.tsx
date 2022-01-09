import aluminiumSignPanel from '../../../assets/Home/HomeProducts/ad/aluminiumSignPanel.png';
import { ReactComponent as ToRightArrow } from '../../../assets/Home/HomeProducts/ad/toRight.svg';

const Ad = () => {
	return (
		<div className='ad'>
			<img src={aluminiumSignPanel} alt=''  />
			<span>
				<span>FROM $25.00</span>
				<p>Aluminum Sign Panels</p>
				<div>
					<span>Shop now</span>
					<ToRightArrow />
				</div>
			</span>
		</div>
	);
};

export default Ad;
