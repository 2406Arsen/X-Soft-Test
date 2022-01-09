import { useState } from 'react';

import HamburgerMenu from 'react-hamburger-menu';

import { ReactComponent as AccountIcon } from '../../assets/Header/accountIcon.svg';
import { ReactComponent as CartIcon } from '../../assets/Header/cartIcon.svg';
import { ReactComponent as DownArrowIcon } from '../../assets/Header/downIcon.svg';
import { ReactComponent as MobileCartIcon } from '../../assets/Header/mobile/cart.svg';
import { ReactComponent as MobileMenuIcon } from '../../assets/Header/mobile/menu.svg';
import { ReactComponent as MobileSearchIcon } from '../../assets/Header/mobile/mobileSearch.svg';
import { ReactComponent as AppName } from '../../assets/Header/pageName.svg';
import { ReactComponent as SearchIcon } from '../../assets/Header/searchIcon.svg';

const HeaderSearch = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className='headerSearch'>
			<div className='headerSearch__leftPart'>
				<div onClick={() => setOpen(!isOpen)}>
					<HamburgerMenu
						isOpen={isOpen}
						color='#fff'
						menuClicked={() => setOpen(!isOpen)}
						width={16}
						height={15}
					/>
				</div>
				<AppName />
			</div>
			<div className='headerSearch__inputPart'>
				<input type='text' placeholder='Search Products' />
				<span>
					<SearchIcon />
				</span>
			</div>
			<div className='headerSearch__accountPart'>
				<AccountIcon />
				<div>
					<p>Account</p>
					<span>
						<p>Sign In</p>
						<DownArrowIcon />
					</span>
				</div>
			</div>
			<div className='headerSearch__cartPart'>
				<CartIcon />
				<p>Cart</p>
				<span>0</span>
			</div>

			<div className='headerSearch__mobileIcons'>
				<MobileSearchIcon />
				<MobileCartIcon />
				<MobileMenuIcon />
			</div>
		</div>
	);
};

export default HeaderSearch;
