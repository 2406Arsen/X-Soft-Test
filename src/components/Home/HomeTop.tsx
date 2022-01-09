import homeTopBackground from '../../assets/Home/homeTop/homeTopBackground.png';
import { ReactComponent as PlayIcon } from '../../assets/Home/homeTop/play.svg';
import { ReactComponent as RightToLeftIcon } from '../../assets/Home/homeTop/rightToLeft.svg';
const HomeTop = () => {
	
	return (
		<div className='homeTop'>
			<img src={homeTopBackground} alt='' />
			<div>
				<h6>Let Them Know You Are Back In Business.</h6>
				<h1>
					{window.innerWidth <= 768
						? 'Let Them Know You Are Back In Business.'
						: 'Business Cards For Every Occasion'}
				</h1>
				<p>
					{window.innerWidth <= 768
						? 'CLICK AND BUY. FREE PRE-DESIGNED TEMPLATES'
						: 'THE LARGEST SELECTION ANYWHERE'}
				</p>
				<span>
					Over 100 Paper Types & Specialized Finishes Extreme Custom Cards Is Our
					Specialty
				</span>
				<div>
					<p>SHOP NOW</p>
					{window.innerWidth <= 768 ? <PlayIcon /> : <RightToLeftIcon />}
				</div>
			</div>
		</div>
	);
};

export default HomeTop;
