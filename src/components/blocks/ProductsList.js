import React from 'react'
import { Link } from 'react-router-dom'

export const ProductsListHome = ({list}) =>{
	return list.map((item, i) => (
		<li key={`${item.title} ${i}`}>
			<span>
				<Link to={`/product/home/${item.title.split(' ').join('_')}`}>{item.title}</Link>
			</span>
		</li>
	))
	
}

export const ProductsListOffice = ({list}) =>{
	return list.map((item, i) => (
		<li key={`${item.title} ${i}`}>
			<span>
				<Link to={`/product/office/${item.title.split(' ').join('_')}`}>{item.title}</Link>
			</span>
		</li>
	))
}
