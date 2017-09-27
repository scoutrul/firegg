import React from 'react'
import appearModule from '../../js/appearModule'
import {Hamburger} from "./"
import {MobileMenu} from "./"

const Wrapper = (props) => (
	<section style={style}>
		<Hamburger/>
		<MobileMenu MenuItems={props.MenuItems}/>
		{props.children}
	</section>
)


export default Wrapper

const style = {
	display: "grid"
}