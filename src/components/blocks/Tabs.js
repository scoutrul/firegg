import React, { Component } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export default class Tabs extends Component {
	constructor(){
		super();
		this.state = {
			homeTab: true
		}
		this.toggle = this.toggle.bind(this);
	}

	toggle = () => {
		this.setState({ homeTab: !this.state.homeTab });
	};

	render() {
		const { firstBlock, secondBlock, firstTabName, secondTabName, firstList, secondList } = this.props;

		const TabBlock = ({ list, block }) => {
			const listBlock = list && (
				<ul className="product-list slide_up_text" id="homelist">
					{list.map((item, i) => (
						<li key={`${item.title} ${i}`}>
							<span>
								<Link to={`/product/${item.title.split(' ').join('_')}`}>{item.title}</Link>
							</span>
						</li>
					))}
				</ul>
			);
			return list ? listBlock : block;
		};

		const TabTitles = () => (
			<ul id="tabSwitcher">
				<li onClick={() => this.toggle} className={cn({ active: this.state.homeTab })}>
					{firstTabName}
				</li>
				<li onClick={() => this.toggle} className={cn({ active: !this.state.homeTab })}>
					{secondTabName}
				</li>
			</ul>
		);

		return (
			<div>
				<TabTitles />
				{
					this.state.homeTab ? (
						<TabBlock list={firstList || null} block={firstBlock || null} />
					) : (
						<TabBlock list={secondList || null} block={secondBlock || null} />
					)
			}
			</div>
		);
	}
}
