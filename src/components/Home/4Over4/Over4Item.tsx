import { FC } from 'react';

import { Over4ItemProps } from '../model';

const Over4Item: FC<Over4ItemProps> = ({ img, name }) => {
	return (
		<div>
			<img src={img} alt={name} />
			<p>{name}</p>
		</div>
	);
};

export default Over4Item;
