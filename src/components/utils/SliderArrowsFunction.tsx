import { ReactComponent as PrevArrow } from '../../assets/Home/HomeProducts/newProducts/toLeft.svg';
import { ReactComponent as NextArrow } from '../../assets/Home/HomeProducts/newProducts/toRight.svg';

export const SlickArrowLeft = ({ children, currentSlide, slideCount, ...props }: any) => (
	<span
		{...props}
		className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')}
		aria-hidden='true'
		aria-disabled={currentSlide === 0 ? true : false}>
		{children ? children : <PrevArrow />}
	</span>
);

export const SlickArrowRight = ({ children, currentSlide, slideCount, ...props }: any) => (
	<span
		{...props}
		className={
			'slick-next slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
		}
		aria-hidden='true'
		aria-disabled={currentSlide === slideCount - 1 ? true : false}>
		{children ? children : <NextArrow />}
	</span>
);
