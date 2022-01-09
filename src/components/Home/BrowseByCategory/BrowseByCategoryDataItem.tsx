import { FC, useState } from 'react';

import ToRightIcon from '../../../assets/Home/HomeProducts/browseByCategory/ToRightIcon';
import { BrowseByCategoryDataItemProps } from '../model';

import BrowseByCategorySubData from './BrowseByCategorySubData';

const BrowseByCategoryDataItem: FC<BrowseByCategoryDataItemProps> = ({
	id,
	setCurrentId,
	icon,
	name,
	currentId,
}) => {
	const [isVisible, setVisible] = useState(false);
	const [isClicked, setClicked] = useState(false);

	return (
		<div
			className={isVisible ? 'browseByCategoryDataItem--active' : 'browseByCategoryDataItem'}
			id={`${id}`}
			onClick={(e) => {
				setClicked(!isClicked);
				setCurrentId(+e.currentTarget.id);
				console.log(e.currentTarget);
			}}
			onMouseLeave={() => setVisible(false)}
			onMouseMove={() => setVisible(true)}>
			<div>
				<img src={icon} alt={name} />
				<p>{name}</p>
				{isVisible ? <ToRightIcon /> : null}
			</div>
			{window.innerWidth <= 768 && isClicked && id === currentId ? (
				<BrowseByCategorySubData currentId={currentId} />
			) : null}
		</div>
	);
};

export default BrowseByCategoryDataItem;
