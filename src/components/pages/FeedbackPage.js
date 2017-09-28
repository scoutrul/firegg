import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

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

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	formSubmit() {
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

						<form id="feedback" autoComplete="off" name="feedback">
							<div className="field">
								<input name="name" type="text" value={this.state.name} onChange={this.handleChange.bind(this)}/>
								<label htmlFor="name" className={ cn('slide_up_text',{'active': this.state.name }) }>
									<span>Full Name</span>
								</label>
							</div>
							<div className="field">
								<input name="email" type="email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
								<label htmlFor="email"  className={ cn('slide_up_text',{'active': this.state.email }) }>
									<span>E-mail address</span>
								</label>
							</div>
							<div className="field">
								<input name="phone" type="text" value={this.state.phone} onChange={this.handleChange.bind(this)}/>
								<label htmlFor="phone"  className={ cn('slide_up_text',{'active': this.state.phone }) }>
									<span>Phone number</span>
								</label>
							</div>
							<div className="field">
								<input name="street1" type="text" value={this.state.street1} onChange={this.handleChange.bind(this)}/>
								<label htmlFor="street1"  className={ cn('slide_up_text',{'active': this.state.street1 }) }>
									<span>Street Address</span>
								</label>
							</div>
							<div className="field">
								<input name="street2" type="email" value={this.state.street2} onChange={this.handleChange.bind(this)}/> 
								<label htmlFor="street2"  className={ cn('slide_up_text',{'active': this.state.street2 }) }>
									<span>Street Address2</span>
								</label>
							</div>
							<div className="thin">
								<div className="field">
									<input name="city" type="text" value={this.state.city} onChange={this.handleChange.bind(this)}/>
									<label htmlFor="city" className={ cn('slide_up_text',{'active': this.state.city }) }> 
										<span>City</span>
									</label>
								</div>
								<div className="field" style={{margin: "0 0.5rem"}}>
									<input name="state" type="text" value={this.state.state} onChange={this.handleChange.bind(this)}/>
									<label htmlFor="state" className={ cn('slide_up_text',{'active': this.state.state }) }> 
										<span>State</span>
									</label>
								</div>
								<div className="field">
									<input name="zip" type="text" value={this.state.zip} onChange={this.handleChange.bind(this)}/>
									<label htmlFor="zip" className={ cn('slide_up_text',{'active': this.state.zip }) }> 
										<span>ZIP Code</span>
									</label>
								</div>
							</div>
						</form>
						<button className="center red" onClick={this.formSubmit.bind(this)}>
							<div className="button_inner">
								<div className="arrows"></div>
								<div className="message">Get quotes</div>
							</div>
						</button>
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