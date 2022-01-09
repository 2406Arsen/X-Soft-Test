import { FC, useState } from 'react';

import ToRightIcon from '../../../assets/Home/HomeProducts/browseByCategory/ToRightIcon';
import { BrowseByCategoryDataItemProps } from '../model';


const BrowseByCategoryDataItem: FC<BrowseByCategoryDataItemProps> = ({
	id,
	setCurrentId,
	icon,
	name,
}) => {
	const [isVisible, setVisible] = useState(false);

	return (
		<div
			className={isVisible ? 'browseByCategoryDataItem--active' : 'browseByCategoryDataItem'}
			id={`${id}`}
			onClick={(e) => {
				setCurrentId(+e.currentTarget.id);
				console.log(e.currentTarget);
			}}
			onMouseLeave={() => setVisible(false)}
			onMouseMove={() => setVisible(true)}>
			<img src={icon} alt={name} />
			<p>{name}</p>
			{isVisible ? <ToRightIcon /> : null}
		</div>
	);
};

export default BrowseByCategoryDataItem;
