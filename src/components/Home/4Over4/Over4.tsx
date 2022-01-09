import { over4FakeData } from './over4fakeData';
import Over4Item from './Over4Item';

const Over4 = () => {
	return (
		<div className='over4'>
			<p>4OVER4: The Easy Way to Do Your Printing Online</p>
			<div>
				{over4FakeData.map(({ img, name }) => (
					<Over4Item name={name} img={img} key={name} />
				))}
				<span>Show All New!</span>
			</div>
		</div>
	);
};

export default Over4;
