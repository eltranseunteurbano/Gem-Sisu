import React from 'react';
import './Carro.scss';

const Carro = () => {
    return(
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
                        <img src={process.env.PUBLIC_URL + '/img/productos/pikachu.png'} alt="Imagen producto"/>
                        <p> Nombre Producto</p>
                    </div>
                    <input className="Carro__content__items__item__cantidad" type="number" placeholder="0" min={0}/>
                    <p className="Carro__content__items__item__precio">$ 20000</p>
                    <p className="Carro__content__items__item__eliminar">X</p>
                </div>

                <div className="Carro__content__items__item">
                    <div className="Carro__content__items__item__nombre">
                        <img src={process.env.PUBLIC_URL + '/img/productos/pikachu.png'} alt="Imagen producto"/>
                        <p> Nombre Producto</p>
                    </div>
                    <input className="Carro__content__items__item__cantidad" type="number" placeholder="0" min={0}/>
                    <p className="Carro__content__items__item__precio">$ 20000</p>
                    <p className="Carro__content__items__item__eliminar">X</p>
                </div>

                <div className="Carro__content__items__item">
                    <div className="Carro__content__items__item__nombre">
                        <img src={process.env.PUBLIC_URL + '/img/productos/pikachu.png'} alt="Imagen producto"/>
                        <p> Nombre Producto</p>
                    </div>
                    <input className="Carro__content__items__item__cantidad" type="number" placeholder="0" min={0}/>
                    <p className="Carro__content__items__item__precio">$ 20000</p>
                    <p className="Carro__content__items__item__eliminar">X</p>
                </div>

                <div className="Carro__content__items__item">
                    <div className="Carro__content__items__item__nombre">
                        <img src={process.env.PUBLIC_URL + '/img/productos/pikachu.png'} alt="Imagen producto"/>
                        <p> Nombre Producto</p>
                    </div>
                    <input className="Carro__content__items__item__cantidad" type="number" placeholder="0" min={0}/>
                    <p className="Carro__content__items__item__precio">$ 20000</p>
                    <p className="Carro__content__items__item__eliminar">X</p>
                </div>
            </article>
        </section>

        </section>
    )
}

export default Carro;