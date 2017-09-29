import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { ContactsContent } from '../blocks'

const mapStateToProps = state => {
	return { 
		headquarters: state.contactsReducer.headquarters,
		socialItems: state.contactsReducer.social,
		forces: state.contactsReducer.forces,
		title1: state.contactsReducer.title1,
		title2: state.contactsReducer.title2,
	}
}

class ContactsPage extends Component{
	constructor(props){
		super(props)
		this.state = {
			activeTab: this.props.headquarters[0]
		}
	}

	tabActive(i) {
		this.setState({activeTab: this.props.headquarters[i]})
	}


	render(){
		//set initial tab active
		(this.props.history.location.pathname === '/contacts') && (this.props.history.location.pathname = `/contacts/${this.props.headquarters[0].name}`)

		const {headquarters, socialItems, forces, title1, title2} = this.props

		const Social = () => 
			<div className="social">
				 <h4 className="slogan slide_up_text">
					 <span>{title1}</span>
					 <span>{title2}</span>
				 </h4>
				 <ul className="links slide_up_text">
				 { 
					 socialItems.map((item, i) => 
						 <li key={item.name}>
							 <span>
								 <a href={item.link} target="_blank">{item.name}</a>
							 </span>
						 </li>
					 )
				 }
				 </ul>
			</div>  

		const Forces = () => 
			<ul className="forces">
			{ 
				forces.map((item, i) => 
					<li key={item.name}>
						<span>
							<div className="force-name">{item.name}</div> 
							<div className="force-address">{item.address}</div> 
							<div className="force-tel">{item.tel}</div> 
							<div className="force-fax">{item.fax}</div> 
						</span>
					</li>
				)
			}
			</ul>
		
		const HeadquartersTab = () => 
			<ul className="office-tab slide_up_text">
			{
				headquarters.map((item, i) => 
					<li key={item.name}>
						<span>
							<NavLink onClick={this.tabActive.bind(this, i)} to={`/contacts/${item.name.split(' ').join('_')}`} activeClassName='office-tab--active'>{item.name}</NavLink>
						</span>
					</li>
				)
			}
			</ul>

		const {name, address, googleMap, email, contacts} = this.state.activeTab

		return (
			<section className="content contact">
				<div className="container">
					<HeadquartersTab/>
					<ContactsContent name={name} address={address} googleMap={googleMap} email={email} contacts={contacts}/>
					<Social/> 
					<Forces/>
				</div>
			</section>
			
		)
	}
	
}

export default withRouter(connect(mapStateToProps, )(ContactsPage));