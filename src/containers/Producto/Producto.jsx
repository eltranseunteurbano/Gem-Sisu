import React from 'react';
import './Producto.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../components/NavBar/NavBar';

const Producto = () => {

    var localStorage = window.localStorage;
    const [compras, setCompras] = React.useState([]);

    const agregar = (valor) => {
        compras.push(valor);
        localStorage.setItem('compras', JSON.stringify(compras));

        var arreglo = localStorage.getItem('compras');
        arreglo = JSON.parse(arreglo);
        console.log(arreglo.length);
    }


    return (
        <>
            <NavBar />
            <section className="Producto appear">
                <article className="Producto__img appear">
                    <div className="Producto__img__imagen">
                        <img src={process.env.PUBLIC_URL + '/img/productos/pikachu.png'} alt="Imagen producto" />
                    </div>
                </article>

                <article className="Producto__texto appear">
                    <h1 className="Producto__texto__titulo">Nombre Proyecto</h1>
                    <div className="Producto__texto__linea" />
                    <p className="Producto__texto__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique reiciendis eius velit quos repellat eligendi, reprehenderit laudantium dolores doloribus possimus nulla tenetur id corrupti beatae rerum. Consectetur, distinctio fugit.</p>
                    <div className="Producto__texto__likes">
                        <FontAwesomeIcon icon={faHeart} className="Producto__texto__likes__icon" />
                        <p className="Producto__texto__likes__num">{10}</p>
                    </div>

                    <div className="Producto__texto__btn">
                        <button type="button" onClick={() => agregar({ aas: 'a', asda: 'v' })}> Agregar al carrito</button>
                    </div>
                </article>
            </section>
        </>
    )

}

export default Producto;