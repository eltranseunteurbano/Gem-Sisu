import React from 'react';
import './Menu.scss';

import { Link } from 'react-router-dom'

import * as Routes from '../../constants/Routes'

const Menu = ( props ) => {
    return(
        <section className={props.showMenu ? "Menu Menu-mostrar appearMenu" : "Menu"}>
            <div className="Menu__user">
                <div className="Menu__user__icon"></div>
                <p className="Menu__user__text">Nombre Persona</p>
            </div>
            <div className="Menu__items">
                <Link to={Routes.HOME} className="Menu__items__item">Home</Link>
                <Link to={Routes.ABOUT} className="Menu__items__item">About</Link>
                <Link to={Routes.STORE} className="Menu__items__item">Store</Link>
                <Link to={Routes.CONTACT} className="Menu__items__item">Contact</Link>
            </div>
        </section>
    )
}

export default Menu;