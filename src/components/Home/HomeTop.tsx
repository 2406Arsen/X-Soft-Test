import { ReactComponent as RightToLeftIcon } from '../../assets/Home/homeTop/rightToLeft.svg';

const HomeTop = () => {
	return (
		<div className='homeTop'>
			<h1>Business Cards For Every Occasion</h1>
			<p>THE LARGEST SELECTION ANYWHERE</p>
			<span>
				Over 100 Paper Types & Specialized Finishes Extreme Custom Cards Is Our Specialty
			</span>
			<div>
				<p>SHOP NOW</p>
				<RightToLeftIcon />
			</div>
		</div>
	);
};

export default HomeTop;
