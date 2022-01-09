import HeaderCategory from './HeaderCategory';
import HeaderSearch from './HeaderSearch';
import HeaderTop from './HeaderTop';

const Header = () => {
	return (
		<div className='header'>
			<HeaderTop />
			<HeaderSearch />
			<HeaderCategory />
		</div>
	);
};

export default Header;
