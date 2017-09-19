import React from 'react'
import { Link } from 'react-router-dom'

const HeaderMenu = (props) => {
    const menuItems = props.MenuItems.map((menu,i)=>(
                  <li key={i}>
                    <span>
                      <Link to={menu.url}>{menu.name}</Link>
                    </span>
                  </li>
                  )
                );
    return (
      <section className="header">
        <div className="container">
          <div className="column serv">
            <div className="logo">
              <Link to="/">
                <img src="images/icon_logo.svg" alt="LOGOTYPE"/>
              </Link>
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
              <Link className="inner" to="feedback">
                <img src="images/icon_cart.svg" alt="Cart" />
                <span>Free Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }


export default HeaderMenu;