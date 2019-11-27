import React from 'react';
import './Contacto.scss';
import NavBar from '../../components/NavBar/NavBar';

const Contacto = () => {
    return (
        <>
            <NavBar />
            <section className="Contacto appear">
                <article className="Contacto__top">
                    <img src={process.env.PUBLIC_URL + '/img/Andrés.svg'} alt="Andres Hurtado" />
                </article>
                <article className="Contacto__bottom">
                    <h2 className="Contacto__bottom__title">Equipo Colaborador</h2>
                    <div className="Contacto__bottom__items">
                        <div className="Contacto__bottom__items__item">
                            <div className="Contacto__bottom__items__item__img"></div>
                            <p className="Contacto__bottom__items__item__name">Valentina Alegría</p>
                        </div>
                        <div className="Contacto__bottom__items__item">
                            <div className="Contacto__bottom__items__item__img"></div>
                            <p className="Contacto__bottom__items__item__name">Alejandro Salazar</p>
                        </div>
                        <div className="Contacto__bottom__items__item">
                            <div className="Contacto__bottom__items__item__img"></div>
                            <p className="Contacto__bottom__items__item__name">Paula Peñaranda</p>
                        </div>
                        <div className="Contacto__bottom__items__item">
                            <div className="Contacto__bottom__items__item__img"></div>
                            <p className="Contacto__bottom__items__item__name">Jaime Burbano</p>
                        </div>
                        <div className="Contacto__bottom__items__item">
                            <div className="Contacto__bottom__items__item__img"></div>
                            <p className="Contacto__bottom__items__item__name">Johan Medina</p>
                        </div>
                        <div className="Contacto__bottom__items__item">
                            <div className="Contacto__bottom__items__item__img"></div>
                            <p className="Contacto__bottom__items__item__name">Ana Burbano</p>
                        </div>
                    </div>
                    <p className="Contacto__bottom__text">Estudiantes de Diseño de Medios Interactivos - Universidad Icesi</p>
                </article>
            </section>
        </>
    )
}

export default Contacto;