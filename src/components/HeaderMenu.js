import React, { Component } from 'react'

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {MenuItems} = this.props;
    const menuItems = MenuItems.map((menu,i)=>(
                  <li key={i}>
                    <span>
                      <a href={menu.url}>{menu.name}</a>
                    </span>
                  </li>
                  )
                );
    return (
      <section className="header">
        <div className="container">
          <div className="column serv">
            <div className="logo">
              <a href="index.html">
                <img src="images/icon_logo.svg" alt="LOGOTYPE"/>
              </a>
            </div>
            <div className="location location_toggle ">
              <img src="images/icon_marker.svg" alt="Location"/>
              <span>Jamaica</span>
            </div>
          </div>
          <div className="column menu">
            <ul className="top_menu slide_up_text">
              {menuItems}
            </ul>
          </div>
          <div className="column feedback">
            <div className="feedback_container">
              <a className="inner" href="feedback.html">
                <img src="images/icon_cart.svg" alt="Cart" />
                <span>Free Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HeaderMenu;