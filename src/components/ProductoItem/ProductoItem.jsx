import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import * as Routes from '../../constants/Routes';

const ProductoItem = ( props ) => {

    return(
        <Link to={Routes.STORE + '/' + props.item.id} className="Store__contenido__item appear" key={props.item.id}>
            <div className="Store__contenido__item__img">
                <img src={process.env.PUBLIC_URL + props.item.img} alt={"Imagen " + props.item.nombre}/>
            </div>

            <div className="Store__contenido__item__info">
                <h1 className="Store__contenido__item__info__titulo">{props.item.nombre}</h1>
                
                <div className="Store__contenido__item__info__add">
                    <p className="Store__contenido__item__info__add__precio">$ {props.item.precio}</p>
                    <div className="Store__contenido__item__info__add__likes">
                        <FontAwesomeIcon icon={faHeart} className="Store__contenido__item__info__add__likes__icon"/>
                        <p>{props.item.likes}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductoItem;

