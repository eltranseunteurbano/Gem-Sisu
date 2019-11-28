import React from 'react';
import './Producto.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../components/NavBar/NavBar';

const Producto = (props) => {

    var localStorage = window.localStorage;
    const [compras, setCompras] = React.useState([]);

    const agregar = (valor) => {
        compras.push(valor);
        localStorage.setItem('compras', JSON.stringify(compras));

        var arreglo = localStorage.getItem('compras');
        arreglo = JSON.parse(arreglo);
        console.log(arreglo.length);
    }

    const HandleClick = () => {
        props.history.push("/comments");
    }

    return (
        <>
            <NavBar />
            <section className="Producto appear">
                <article className="Producto__img appear">
                    <div className="Producto__img__imagen">
                        <img src={process.env.PUBLIC_URL + '/img/productos/4.jpg'} alt="Imagen producto" />
                    </div>
                </article>

                <article className="Producto__texto appear">
                    <h1 className="Producto__texto__titulo">Aretes Geométricos</h1>
                    <div className="Producto__texto__linea" />
                    <p className="Producto__texto__description">Juego de pendientes grandes estilo candonga con aros azul rey y un destello amarillo mostaza que lumina tu vida brillante, perfecta para el uso diario te hará encantador y elegante, hermoso y atractivo, le dan un aspecto encantador y ganan más cumplidos, perfectos para el uso diario.</p>

                    <div className="Producto__texto__users">
                        <div className="Producto__texto__comments">
                            <p className="Producto__texto__comment" onClick={HandleClick}>Comentarios</p>
                        </div>
                        <div className="Producto__texto__likes">
                            <FontAwesomeIcon icon={faHeart} className="Producto__texto__likes__icon" />
                            <p className="Producto__texto__likes__num">{10}</p>
                        </div>
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