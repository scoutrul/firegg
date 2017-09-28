import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


import $ from 'jquery'
// CONTACT toggle tabs module
let address_Header = $('ul.office-tab li');
address_Header.each(function(i, el) {
    $('#offices address').hide();
    $('#offices address:nth-child(1)').show();
    address_Header.first()
    $('ul.office-tab li:nth-child(1)').addClass('office-tab--active');
    $(el).click(function() {
        $('.office-tab--active').removeClass('office-tab--active');
        $('#offices address').hide();
        $(`ul.office-tab li:nth-child(${i+1})`).addClass('office-tab--active');
        $(`#offices address:nth-child(${i+1})`).show();
    })
});

const mapStateToProps = state => {
    return { 
        headquarters: state.contactsReducer.headquarters,
        socialItems: state.contactsReducer.social,
        forces: state.contactsReducer.forces,
    }
}
// const mapDispatchToProps = (dispatch) => {
//     // return bindActionCreators({ HamburgerOnClick }, dispatch);
// }

class ContactsPage extends Component{
    constructor(props){
        super(props)
        this.state = {}

    }


    render(){
        const {headquarters, socialItems, forces} = this.props;
        const HeadquartersTab = () => 
            <ul className="office-tab slide_up_text">
            {
                headquarters.map((item, i) => 
                    <li key={item.name}>
                        <span>
                            <NavLink to={`/contacts/${item.name.split(' ').join('_')}`} activeStyle={{ textDecoration: 'underline #ff002e' }}>{item.name}</NavLink>
                        </span>
                    </li>
                )
            }
            </ul>

        const Social = () => 
            <div className="social">
                 <h4 className="slogan slide_up_text">
                     <span>Work with us</span>
                     <span>or just follow</span>
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
        

        const Offices = () => 
            <div id="offices">
                {
                    headquarters.map((item, i) => 
                        <address className="vcard" key={item.name}>
                            <div className="adr">
                                <span className="street-address">{item.address}</span>
                            </div>
                            <iframe title={`${item.name} map`} src={item.googleMap} width="100%" height="200px" style={{border:0}} allowFullScreen></iframe>
                            <div className="info">
                                <a className="email" href={item.email}>{item.email}</a>
                            </div>
                            <div className="call">
                            {
                                item.contacts.map((item)=>
                                    <a key={item} className="tel" href={`tel: ${item}`}>{item}</a>                          
                                )
                            }
                            </div>
                        </address>
                    )
                }
                
            </div>
    	return (
            <section className="content contact">
                <div className="container">
                    <HeadquartersTab/>
                    <Offices/>
                    <Social/> 
                    <Forces/>
                </div>
            </section>
    		
    	)
    }
	
}

export default withRouter(connect(mapStateToProps, )(ContactsPage));