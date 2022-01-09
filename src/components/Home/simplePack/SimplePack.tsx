import ToRightIcon from '../../../assets/Home/HomeProducts/browseByCategory/ToRightIcon';
import img from '../../../assets/Home/HomeProducts/SimplePack/img.png';

const SimplePack = () => {
	return (
		<div className='simplePack'>
			<img src={img} alt='' />
			<div>
				<div>
					<p>Get your Free Sample Pack!</p>
					<span>
						Our sample pack includes a wide range of paper types, finishes and custom
						printing options.
					</span>
					<div>
						<p>GET FREE SAMPLES</p>
						<ToRightIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SimplePack;
