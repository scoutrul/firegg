import React, { Component } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export default class Tabs extends Component {
	state = {
		homeTab: true
	};

	toggle = (condition) => {
		this.setState({ homeTab: condition });
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
				<li
					onClick={() => this.toggle(true) }
					className={cn({ active: this.state.homeTab })}
				>
					{firstTabName}
				</li>
				<li
					onClick={() => this.toggle(false) }
					className={cn({ active: !this.state.homeTab })}
				>
					{secondTabName}
				</li>
			</ul>
		);

		return (
			<div>
				<TabTitles />
				{this.state.homeTab ? (
					<TabBlock list={firstList} block={firstBlock} />
				) : (
					<TabBlock list={secondList} block={secondBlock} />
				)}
			</div>
		);
	}
}
