import React from 'react';
import './Menu.scss';

import { useHistory } from 'react-router-dom'

import * as Routes from '../../constants/Routes'

const Menu = ( props ) => {

    let history = useHistory();

    const goPage = ( page ) => {
        props.setMenu(false);
        history.push(page);
    }

    return(
        <section className={props.showMenu ? "Menu Menu-mostrar appearMenu" : "Menu"}>
            <div className="Menu__user">
                <div className="Menu__user__icon"></div>
                <p className="Menu__user__text">Nombre Persona</p>
            </div>
            <div className="Menu__items">
                <button type="button" onClick={ ()=> goPage(Routes.HOME)} className="Menu__items__item">Home</button>
                <button type="button" onClick={ ()=> goPage(Routes.ABOUT)} className="Menu__items__item">About</button>
                <button type="button" onClick={ ()=> goPage(Routes.STORE)} className="Menu__items__item">Store</button>
                <button type="button" onClick={ ()=> goPage(Routes.CONTACT)} className="Menu__items__item">Contact</button>
            </div>
        </section>
    )
}

export default Menu;