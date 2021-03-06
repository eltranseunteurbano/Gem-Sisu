import React from 'react';
import './Carro.scss';
import NavBar from '../../components/NavBar/NavBar';

const Carro = () => {
    return (
        <>
            <NavBar />
            <section className="Carro">

                <article className="Carro__titulo">
                    <h1> Shopping Cart </h1></article>

                <section className="Carro__content">
                    <article className="Carro__content__title">
                        <div className="Carro__content__title__nombre"> Product </div>
                        <div className="Carro__content__title__cantidad">Quantity</div>
                        <div className="Carro__content__title__Precio">Price</div>
                        <div className="Carro__content__title__X">  </div>
                    </article>

                    <article className="Carro__content__items">
                        <div className="Carro__content__items__item">
                            <div className="Carro__content__items__item__nombre">
                                <img src={process.env.PUBLIC_URL + '/img/productos/2.jpg'} alt="Imagen producto" className="Carro__content__items__item__img" />
                                <p> Boina Inglesa Negra</p>
                            </div>
                            <input className="Carro__content__items__item__cantidad" type="number" placeholder="0" min={0} />
                            <p className="Carro__content__items__item__precio">$ 20000</p>
                            <p className="Carro__content__items__item__eliminar">X</p>
                        </div>

                        <div className="Carro__content__items__item">
                            <div className="Carro__content__items__item__nombre">
                                <img src={process.env.PUBLIC_URL + '/img/productos/1.jpg'} alt="Imagen producto" className="Carro__content__items__item__img" />
                                <p> Gafas Retro Vintage</p>
                            </div>
                            <input className="Carro__content__items__item__cantidad" type="number" placeholder="0" min={0} />
                            <p className="Carro__content__items__item__precio">$ 20000</p>
                            <p className="Carro__content__items__item__eliminar">X</p>
                        </div>

                        <div className="Carro__content__items__item">
                            <div className="Carro__content__items__item__nombre">
                                <img src={process.env.PUBLIC_URL + '/img/productos/4.jpg'} alt="Imagen producto" className="Carro__content__items__item__img" />
                                <p> Aretes Geométricos </p>
                            </div>
                            <input className="Carro__content__items__item__cantidad" type="number" placeholder="0" min={0} />
                            <p className="Carro__content__items__item__precio">$ 20000</p>
                            <p className="Carro__content__items__item__eliminar">X</p>
                        </div>

             
                    </article>
                </section>

            </section>
        </>
    )
}

export default Carro;