import React from 'react';
import './Store.scss';

import ProductoItem from '../../components/ProductoItem/ProductoItem';
import NavBar from '../../components/NavBar/NavBar';

const Store = () => {
    const [menu, setMenu] = React.useState(0);

    const necklaces = [
        {
            "id": 1,
            "nombre": "Producto 1",
            "img": "/img/productos/4.jpg",
            "precio": 200000,
            "likes": 15
        }, {
            "id": 2,
            "nombre": "Producto 2",
            "img": "/img/productos/4.jpg",
            "precio": 200000,
            "likes": 15
        }, {
            "id": 3,
            "nombre": "Producto 3",
            "img": "/img/productos/4.jpg",
            "precio": 200000,
            "likes": 15
        }
    ];

    const bracelets = [
        {
            "id": 4,
            "nombre": "Producto 1",
            "img": "/img/productos/1.jpg",
            "precio": 200000,
            "likes": 15
        }, {
            "id": 5,
            "nombre": "Producto 2",
            "img": "/img/productos/1.jpg",
            "precio": 200000,
            "likes": 15
        }, {
            "id": 6,
            "nombre": "Producto 3",
            "img": "/img/productos/1.jpg",
            "precio": 200000,
            "likes": 15
        }
    ];

    const keychains = [
        {
            "id": 7,
            "nombre": "Producto 1",
            "img": "/img/productos/2.jpg",
            "precio": 200000,
            "likes": 15
        }, {
            "id": 8,
            "nombre": "Producto 2",
            "img": "/img/productos/2.jpg",
            "precio": 200000,
            "likes": 15
        }, {
            "id": 9,
            "nombre": "Producto 3",
            "img": "/img/productos/2.jpg",
            "precio": 200000,
            "likes": 15
        }
    ];

    const [productos, setProductos] = React.useState(necklaces);

    const changeData = (event) => {

        switch (event) {
            case 'neck':
                setProductos(necklaces);
                setMenu(0);
                break;

            case 'brace':
                setProductos(bracelets);
                setMenu(1);
                break;

            case 'key':
                setProductos(keychains);
                setMenu(2);
                break;

            default:
                break
        }
    }

    return (
        <>
            <NavBar />
            <section className="Store appear">
                <article className="Store__menu">
                    <div onClick={(event) => changeData('neck')} className={menu === 0 ? "Store__menu__item Store__menu__item-active" : "Store__menu__item"}>
                        <p>necklaces</p>
                    </div>

                    <div onClick={(event) => changeData('brace')} className={menu === 1 ? "Store__menu__item Store__menu__item-active" : "Store__menu__item"}>
                        <p>bracelets</p>
                    </div>

                    <div onClick={(event) => changeData('key')} className={menu === 2 ? "Store__menu__item Store__menu__item-active" : "Store__menu__item"}>
                        <p>keychains</p>
                    </div>
                </article>

                <article className="Store__titulo appear">
                    {
                        menu === 0 ?
                            <h1 className="appear">necklaces</h1>
                            : menu === 1 ?
                                <h1 className="appear">bracelets</h1>
                                : menu === 2 ?
                                    <h1 className="appear">keychains</h1>
                                    : ''

                    }
                </article>

                <article className="Store__contenido">
                    {
                        productos.map((item) => {
                            return (
                                <ProductoItem item={item} key={item.id} />
                            )
                        })
                    }
                </article>

            </section>
        </>
    )

}

export default Store;