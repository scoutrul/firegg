import React from 'react'
import { Link } from 'react-router-dom'

export const ProductsListHome = (props) =>{
	let collection = props.list.map((item, i) => (
			<li key={item.title.split(' ').join('_')}>
				<span>
					<Link to={`/product/home/${item.title.split(' ').join('_')}`}>{item.title}</Link>
				</span>
			</li>
		))
	return collection
}

export const ProductsListOffice = (props) =>{
	let collection = props.list.map((item, i) => (
			<li key={item.title.split(' ').join('_')}>
				<span>
					<Link to={`/product/office/${item.title.split(' ').join('_')}`}>{item.title}</Link>
				</span>
			</li>
		))
	return collection
}
	
