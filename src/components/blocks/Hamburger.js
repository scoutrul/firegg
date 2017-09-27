import React, {Component} from 'react'
import appearModule from '../../js/appearModule'
import cn from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { HamburgerOnClick } from '../../js/actions/index'

const mapStateToProps = state => {
	return { HamburgerOn: state.uiReducer.HamburgerOn }
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ HamburgerOnClick }, dispatch);
}

class Hamburger extends Component {
	render(){
		return(
			<div id="hamburger" className={ cn('hamburger', { 'is-active': this.props.HamburgerOn }) }
			onClick={() => this.props.HamburgerOnClick(this.props.HamburgerOn)}>
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
				{this.props.children}
			</div>

		)
	}
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Hamburger));