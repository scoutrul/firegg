import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import {FormInput} from '../blocks'

class FeedbackPage extends Component{

	constructor(){
		super();
		this.state = {
			name: "",
			email:"",
			phone: "",
			street1: "",
			street2: "",
			city: "",
			state: "",
			zip: "",
			formSent: false
		}
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}

	formSubmit = () => {
		this.setState({formSent: true})
		window.scrollTo(0, 0);
	}

	render(){
		return (
			<section className="content feedback">
				<div className="container">
					<div className={ cn('feedback_form', {'active': !this.state.formSent })}>
						<div className="title slide_up_text">
							<div>
								<span>Fill your info &</span>
							</div>
							<div>
								<span>get free quote now</span>
							</div>
						</div>

						<form id="feedback" autoComplete="off" name="feedback" method="get">
							<FormInput name="name" type="text" value={this.state.name} onChange={this.handleChange} label="Full Name"/>
							<FormInput name="email" type="email" value={this.state.email} onChange={this.handleChange} label="E-mail address"/>
							<FormInput name="phone" type="text" value={this.state.phone} onChange={this.handleChange} label="Phone number"/>
							<FormInput name="street1" type="text" value={this.state.street1} onChange={this.handleChange} label="Street Address"/>
							<FormInput name="street2" type="text" value={this.state.street2} onChange={this.handleChange} label="Street Address2"/>


							<div className="thin">
								<FormInput name="city" type="text" value={this.state.city} onChange={this.handleChange} label="City"/>
								<FormInput name="state" type="text" value={this.state.state} onChange={this.handleChange} label="State"/>
								<FormInput name="zup" type="text" value={this.state.zup} onChange={this.handleChange} label="Zip Code"/>

							</div>
							<button className="center red" onClick={this.formSubmit}>
								<div className="button_inner">
									<div className="arrows"></div>
									<div className="message">Get quotes</div>
								</div>
							</button>
						</form>
					</div>

					<div className={ cn('feedback_send',{'active': this.state.formSent }) }>
						<div className="title slide_up_text">
							<div>
								<span>Quote has been sent!</span>
								<span className="title2">Check your inbox for mote information.</span>
							</div>
						</div>

						<button className="center red">
							<Link className="button_inner" to="/products">
								<div className="arrows"></div>
								<div className="message">View Products</div>
							</Link>
						</button>
					</div>
				</div>
			</section>
		)
	}
	
}

export default FeedbackPage