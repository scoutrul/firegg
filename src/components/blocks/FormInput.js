import React from 'react'
import cn from 'classnames'

export default ({name, type, value, onChange, label}) =>{
	return (
		<div className="field">
			<input name={name} type={type} value={value} onChange={onChange}/>
			<label htmlFor={name} className={ cn('slide_up_text',{'active': value }) }>
				<span>{label}</span>
			</label>
		</div>)
}
