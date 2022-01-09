export type FeaturedProductsItemProps = {
	img: string;
	name: string;
	priceUSD: number;
};

export type NewProductsSlideItemProps = {
	img: string;
	name: string;
	priceUSD: number;
};

export type TestimonialsSlideItemProps = {
	name: string;
	position: string;
	description: string;
	img: string;
	review: number;
};

export type TopRatedSlideItemProps = {
	name: string;
	priceUSD: number;
	rating: number;
	reviewsCount: number;
	description: string;
	img: string;
};

export type MostPopularSlideItemProps = {
	img: string;
	name: string;
	priceUSD: number;
};

export type Over4ItemProps = {
	name: string;
	img: string;
};

export type BrowseByCategoryDataProps = {
	setCurrentId: React.Dispatch<React.SetStateAction<number>>;
	currentId: number;
};

export type BrowseByCategoryDataItemProps = {
	id: number;
	setCurrentId: React.Dispatch<React.SetStateAction<number>>;
	currentId: number;

	icon: string;
	name: string;
};

export type BrowseByCategorySubDataProps = {
	currentId: number;
};

export type WhyItemProps = {
	title: string;
	img: string;
	description: string;
	description2: string;
};
export type TemplatesTopItemProps = {
	text: string;
};

export type TemplatesNavItemProps = {
	text: string;
	onClick: React.MouseEventHandler<HTMLSpanElement> | undefined;
	active: boolean;
};

export type SocialMediaItemProps = {
	text: string;
	pointCount: number;
	color: string;
};
