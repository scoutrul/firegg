import React from 'react'

export const ContactsContent = (props) => 
<div id="offices">
	<address className="vcard" key={props.name}>
	    <div className="adr">
	        <span className="street-address">{props.address}</span>
	    </div>
	    <iframe title={`${props.name} map`} src={props.googleMap} width="100%" height="200px" style={{border:0}} allowFullScreen></iframe>
	    <div className="info">
	        <a className="email" href={props.email}>{props.email}</a>
	    </div>
	    <div className="call">
	    {
	        props.contacts.map((item)=>
	            <a key={item} className="tel" href={`tel: ${item}`}>{item}</a>                          
	        )
	    }
	    </div>
	</address>
</div>

