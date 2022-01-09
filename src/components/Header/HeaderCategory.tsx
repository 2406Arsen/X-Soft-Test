const HeaderCategory = () => {
	const headerCategoriesData = [
		'All Products',
		'Business Basics',
		'Marketing Essentials',
		'Packaging & Retail',
		'Promotional & Events',
		'Signs, Banners & Displays',
		'Stickers & Labels',
		'Real Estate Product',
		'Trade Show Products',
	];
	return (
		<div className='headerCategory'>
			{headerCategoriesData.map((category) => (
				<span key={category}>{category}</span>
			))}
		</div>
	);
};

export default HeaderCategory;
