import React from 'react';
import { MobileMenu, Hamburger, Locations } from './';

const Wrapper = (props) => (
	<section style={style}>
		<Hamburger />
		<MobileMenu MenuItems={props.MenuItems} />
		{props.children}
		<Locations />
	</section>
);

export default Wrapper;

const style = {
	display: 'grid'
};
