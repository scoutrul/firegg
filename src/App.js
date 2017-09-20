import React, { Component } from 'react'
import Helmet from 'react-helmet'

import {HeaderMenu, MobileMenu, Hamburger, Locations, Footer, MainContainer} from './components/'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			data: {
				locations: {
					languages: ["English", "Spanish"],
					regions: {
						en:["Jamaica", "Barbados", "Grenadine"],
						sp:["St.Lucia", "St.Vincent"]
					}
				},
				english: {
					headerMenu: [
						{
							name: "About", 
							url: "/about"
						},
						{
							name: "Products", 
							url: "/products"
						},
						{
							name: "Help", 
							url: "/help"
						},
						{
							name: "Contacts", 
							url: "/contacts"
						}
					],
					index: {
						title11: "Peace of mind.",
						title12: "Constant security.",
						title13: "Take Control.",
						title1link: "View products",
						title21: "We work hard",
						title22: "To bring you",
						title23: "The real quality",
						title2link: "Our story",
					},
					about: {
						header: "About header",
						text: "Text about us"
					},
					products: {
						home: [
							{
								title: "Remote Arm & Disarm",
								imgUrl: "http://www.some.url"
							},
							{
								title: "Access Control",
								imgUrl: "http://www.some.url"
							},
							{
								title: "Vehicle Tracking",
								imgUrl: "http://www.some.url"
							},
							{
								title: "Burglary Momitoring",
								imgUrl: "http://www.some.url"
							},
						],
						office: [
							{
								title: "RFID",
								imgUrl: "http://www.some.url"
							},
							{
								title: "Fire & Smoke Monitoring",
								imgUrl: "http://www.some.url"
							},
							{
								title: "Cash management",
								imgUrl: "http://www.some.url"
							},
							{
								title: "Close Protection",
								imgUrl: "http://www.some.url"
							},
						],
					},
					help: [
						{
							question: "How to make an order?",
							answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque, rerum inventore enim aliquid molestias?"
						},
						{
							question: "How to robber the bank?",
							answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque, rerum inventore enim aliquid molestias?"
						},
						{
							question: "How to spy my wife?",
							answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque, rerum inventore enim aliquid molestias?"
						},
						{
							question: "How to dont care?",
							answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque, rerum inventore enim aliquid molestias?"
						}
					],
					contacts: {
						title1: "Work with us",
						title2: "or just follow",
						social: [
								{
									name: "YouTube",
									link: "https://www.youtube.com/user/GuardsmanGroup/"
								},
								{
									name: "Facebook",
									link: "https://www.facebook.com/GuardsmanGroup"
								},
								{
									name: "Twitter",
									link: "https://twitter.com/guardsmangroup"
								},
								{
									name: "Google Plus",
									link: "http://gplus.to/guardsmangroup"
								}
							],
						childs: [
								{
									name: "Guardsman Alarms",
									address: "6 Carvalho Drive, Kingston 10",
									tel: "(876) 929-6847, (876) 929-3299, (876) 926-1938",
									fax: "(876) 968-3038"
								},
								{
									name: "Guardsman Armoured",
									address: "1-7 South Camp Road, Kingston, CSO",
									tel: "(876) 928-9005 – 7, (876) 928-4947-9",
									fax: "(876) 928-2063 – Operations, (876) 928-9003 – Administration"
								},
								{
									name: "Guardsman Limited",
									address: "2-6 Emmaville Crescent, Kingston CSO, Jamaica W.I.",
									tel: "(876) 928-2246, (876) 928-5285, (876) 928-2641",
									fax: "(876) 928-5936"
								},
								{
									name: "Marksman",
									address: "14-16 Balmoral Ave, Kingston 10, Jamaica W.I.",
									tel: "(876) 926-3600, (876) 926-0440, (876) 929-2228",
									fax: "(876) 929-6138"
								}
							],
						headquarters: [
							{
								name: "Kingston",
								address: "107 Old Hope Road Kingston 6 Jamaica W.I. Jamaica",
								email: "info@guardsmangroup.com",
								contacts: ["(876) 978-5760","(876) 927-6613","FAX (876) 927-7539"]
							},
							{
								name: "Montego Bay",
								address: "Lot 1219 Ironshore, Industrial Estate Montego Bay Ironshore Jamaica",
								email: "info@guardsmangroup.com",
								contacts: ["(876) 953-3400","(876) 953-2944","(876) 953-9709","(876) 953-3385"]
							},
							{
								name: "May Pen",
								address: "55a Manchester Avenue, Industrial Estate May Pen Clarendon Jamaica",
								email: "info@guardsmangroup.com",
								contacts: ["(876)986-2765", "(876)902-6762"]
							},
							{
								name: "Negril",
								address: "Monte Vista Nompriel Road Sheffield Jamaica",
								email: "info@guardsmangroup.com",
								contacts: ["(876) 957-9183","(876) 957-3924","(876) 957-9027"]
							},
							{
								name: "Mandeville",
								address: "84 Manchester Road Jamaica",
								email: "info@guardsmangroup.com",
								contacts: ["(876) 962-2369","(876) 962-0682"]
							}
						]
					}
				}
			} 
		}; // <- set up react state
	}
	render() {
		const ENG = this.state.data.english;
		return (
			<div id="app">
				<Helmet title="Guardsman Limited®" />
				<HeaderMenu MenuItems={ENG.headerMenu}/>
				<MobileMenu MenuItems={ENG.headerMenu}/>
				<MainContainer/>
				<Footer MenuItems={ENG.headerMenu} SocialItems={ENG.contacts.social}/>
				<Hamburger/>
				<Locations languages={this.state.data.locations.languages} regionsEn={this.state.data.locations.regions.en} regionsSp={this.state.data.locations.regions.sp}/>
			</div>
		)
	}
}

export default App;